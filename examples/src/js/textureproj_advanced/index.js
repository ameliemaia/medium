import { mat4 /* vec3 */ } from 'gl-matrix';
import {
  GL,
  Renderer,
  Scene,
  PerspectiveCamera,
  OrbitControls,
  CameraHelper,
  Mesh,
  Material,
  Texture,
  AmbientLight,
  DirectionalLight,
  Lights,
  Color,
  OrthographicCamera,
  RenderTarget,
  LineGeometry,
  Constants,
  Vector2,
  Vector3,
  RayCaster,
  ShaderChunks
} from '../../../../src/index.ts';
import stats from '../stats';
import DRACOLoader from '../draco/DRACOLoader';

const { /* gui, */ guiController } = require('../gui')();

// Renderer
const renderer = new Renderer({
  ratio: window.innerWidth / window.innerHeight,
  prefferedContext: guiController.context
});
renderer.setDevicePixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.canvas);

// Scene
const scene = new Scene();
const sceneRtt = new Scene();

const ambientLight = new Lights([
  new AmbientLight({
    intensity: {
      type: 'f',
      value: 0.5
    },
    color: {
      type: '3f',
      value: new Color(0x404040).v
    }
  })
]);

const directionalLights = new Lights([
  new DirectionalLight({
    intensity: {
      type: 'f',
      value: 0.7
    },
    color: {
      type: '3f',
      value: new Color(0xffffff).v
    }
  })
]);

directionalLights.get()[0].position.set(1, 1, 1);

scene.ambientLight = ambientLight;
scene.directionalLights = directionalLights;

// Camera
const camera = new PerspectiveCamera({
  fov: 45,
  far: 500,
  ratio: window.innerWidth / window.innerHeight
});

camera.position.set(25, 10, 25);
camera.lookAt();

// Helpers
const controls = new OrbitControls(camera, renderer.canvas);
controls.smoothing = true;

controls.update();

const raycaster = new RayCaster();
const mouse = new Vector2();

// Line helper
const points = [...[0, 0, 0], ...[1, 1, 1]];
const bufferVertices = new Float32Array(points);

const line = new Mesh(
  new LineGeometry(bufferVertices),
  new Material({
    drawType: Constants.DRAW_LINES
  })
);
scene.add(line);

const renderTarget = new RenderTarget({
  width: 1024,
  height: 1024
  // pixelRatio: window.devicePixelRatio
});

const projectiveTexture0 = new Texture({
  src: 'assets/textures/paint/splatter-0.jpg'
});

const projectiveTexture1 = new Texture({
  src: 'assets/textures/paint/splatter-1.jpg'
});

const projectiveTexture2 = new Texture({
  src: 'assets/textures/paint/splatter-2.jpg'
});

const projectiveTextures = [
  projectiveTexture0,
  projectiveTexture1,
  projectiveTexture2
];

const compositedProjectiveTexture = new Texture();

// const debugStyle = {
//   position: 'absolute',
//   left: '0',
//   top: '0',
//   zIndex: '0',
//   pointerEvents: 'none',
//   border: '1px solid white',
//   transformOrigin: '0 0',
//   transform: 'scale(0.25)'
// };

const compositedCanvas = document.createElement('canvas');
compositedCanvas.width = renderTarget.width;
compositedCanvas.height = renderTarget.height;
// Object.assign(compositedCanvas.style, debugStyle);
// document.body.appendChild(compositedCanvas);
const compositedCanvasCtx = compositedCanvas.getContext('2d');

const fromRenderTargetCanvas = document.createElement('canvas');
// Object.assign(fromRenderTargetCanvas.style, debugStyle);
// document.body.appendChild(fromRenderTargetCanvas);

fromRenderTargetCanvas.width = renderTarget.width;
fromRenderTargetCanvas.height = renderTarget.height;
const fromRenderTargetCtx = fromRenderTargetCanvas.getContext('2d');

compositedProjectiveTexture.update(compositedCanvas);

const rttCamera = new OrthographicCamera();
rttCamera.position.set(0, 0, 2);
rttCamera.lookAt();
rttCamera.updateProjectionMatrix();
rttCamera.updateMatrixWorld();

const normalMap = new Texture({
  src: 'assets/models/draco/goethe-lifemask/normal-map.jpg'
});

const shaderProjection = new Material({
  uniforms: {
    uTextureProjectionMatrix: {
      type: 'Matrix4fv',
      value: mat4.create()
    },
    uProjectiveTexture: {
      type: 't',
      value: projectiveTextures[0].texture
    },
    uCameraProjection: {
      type: 'Matrix4fv',
      value: rttCamera.projectionMatrix
    },
    uCameraMatrix: {
      type: 'Matrix4fv',
      value: rttCamera.worldInverseMatrix
    },
    uDiffuse: {
      type: '3f',
      value: new Color(0xff0000).v
    }
  },
  hookVertexPre: `
    uniform mat4 uTextureProjectionMatrix;
    uniform mat4 uCameraMatrix;
    uniform mat4 uCameraProjection;
    out vec4 vShadowCoord;
    const mat4 biasMatrix = mat4( 0.5, 0.0, 0.0, 0.0,
                                  0.0, 0.5, 0.0, 0.0,
                                  0.0, 0.0, 0.5, 0.0,
                                  0.5, 0.5, 0.5, 1.0 );
`,
  hookVertexEnd: `
    vShadowCoord = (biasMatrix * uTextureProjectionMatrix * uModelMatrix) * vec4(aVertexPosition, 1.0);

    // Position vertex in uv space
    vec3 vPositionUvSpace = vec3(aUv * 2.0 - vec2(1.0), 1.0);
    gl_Position = uCameraProjection * uCameraMatrix * vec4(vPositionUvSpace, 1.0);
`,
  hookFragmentPre: `
    uniform sampler2D uProjectiveTexture;
    in vec4 vShadowCoord;
`,
  hookFragmentEnd: `
    vec4 shadowCoord = vShadowCoord / vShadowCoord.w;
    const float shadowBias = 0.00005;
    vec4 texel = textureProj(uProjectiveTexture, shadowCoord, shadowBias);
    outgoingColor.a = 1.0 - texel.r;
`
});

const shaderWithProjectionTexture = new Material({
  type: 'lambert',
  ambientLight,
  directionalLights,
  uniforms: {
    uProjectedTexture: {
      type: 't',
      value: compositedProjectiveTexture.texture
    },
    uNormalMap: {
      type: 't',
      value: normalMap.texture
    },
    uFogDensity: {
      type: 'f',
      value: 0.03
    }
  },
  hookVertexPre: `
    uniform float uFogDensity;
    out float vFogAmount;
    ${ShaderChunks.Fog.exp2}
  `,
  hookVertexEnd: `
    float fogDistance = length(gl_Position.xyz);
    vFogAmount = fogExp2(fogDistance, uFogDensity);
  `,
  hookFragmentPre: `
    in float vFogAmount;
    uniform sampler2D uProjectedTexture;
    uniform sampler2D uNormalMap;
`,
  hookFragmentMain: `
    normal = texture(uNormalMap, vUv).xyz;
`,
  hookFragmentEnd: `
    float alpha = texture(uProjectedTexture, vUv).a;
    vec3 fogColor = vec3(0.0);
    outgoingColor = vec4(mix(color * alpha, fogColor, vFogAmount), 1.0);
`
});

// const mesh = new Mesh(new BoxGeometry(1, 1, 1), shaderWithProjectionTexture);
const dracoLoader = new DRACOLoader(undefined, 'assets/third-party/draco');
let mesh;
dracoLoader.load(
  'assets/models/draco/goethe-lifemask/goeth-lifemask.drc',
  geometry => {
    mesh = new Mesh(geometry, shaderWithProjectionTexture);
    scene.add(mesh);
    sceneRtt.add(mesh);

    // mesh.position.set(2, 2, 2);
    // mesh.scale.set(0.5, 0.5, 0.5);

    shaderProjection.create(mesh.geometry);
  }
);

let projectionChanged = false;
const cameraPosition = new Vector3();
const lookAtTarget = new Vector3();

guiController.textureSize = 6;

// Texture Projection
const projectionCamera = new OrthographicCamera({
  near: 0.1,
  far: 50.0
});

const cameraHelper = new CameraHelper(projectionCamera);
scene.add(cameraHelper);

function updateProjection() {
  if (mesh === undefined) return;
  const textureProjectionMatrix = mat4.create();

  const cameraLeft = guiController.textureSize * -1;
  const cameraRight = guiController.textureSize * 1;
  const cameraBottom = guiController.textureSize * -1;
  const cameraTop = guiController.textureSize * 1;

  projectionCamera.left = cameraLeft;
  projectionCamera.right = cameraRight;
  projectionCamera.bottom = cameraBottom;
  projectionCamera.top = cameraTop;
  projectionCamera.updateProjectionMatrix();

  projectionCamera.position.copy(cameraPosition);
  projectionCamera.target.copy(lookAtTarget);
  projectionCamera.updateMatrixWorld();

  mat4.multiply(
    textureProjectionMatrix,
    projectionCamera.projectionMatrix,
    projectionCamera.worldInverseMatrix
  );

  shaderProjection.uniforms.uTextureProjectionMatrix.value.set(
    textureProjectionMatrix
  );
}
// gui.add(guiController, 'textureSize', 0.1, 10).onChange(updateProjection);

function onMouseClick() {
  projectionChanged = true;
}

let intersect;
function onMouseMove(event) {
  mouse.x = event.clientX / window.innerWidth * 2 - 1;
  mouse.y = -(event.pageY / window.innerHeight * 2 - 1);
  if (controls.isDragging) return;

  if (mesh) {
    raycaster.setFromCamera(mouse, scene, camera, mesh);
    intersect = raycaster.intersectObject(mesh);
  }

  if (intersect) {
    line.visible = true;
    cameraHelper.visible = true;
    const v0 = intersect.point.clone();
    const v1 = new Vector3(5, 5, 5).multiply(intersect.face.normal.clone());
    v1.add(intersect.point.clone());
    line.geometry.vertices[0].copy(v0);
    line.geometry.vertices[1].copy(v1);
    line.geometry.updateVertices();

    cameraPosition.copy(v1);
    lookAtTarget.copy(intersect.point);

    updateProjection();
  } else {
    line.visible = false;
    cameraHelper.visible = false;
  }
}

function resize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
resize();

window.addEventListener('resize', resize);
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onMouseClick);

function updateTexture() {
  const gl = GL.get();

  const width = renderTarget.width * renderTarget.pixelRatio;
  const height = renderTarget.height * renderTarget.pixelRatio;

  gl.bindFramebuffer(gl.FRAMEBUFFER, renderTarget.frameBuffer);
  const pixels = new Uint8Array(width * height * 4);
  gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  const imageData = fromRenderTargetCtx.createImageData(
    fromRenderTargetCanvas.width * renderTarget.pixelRatio,
    fromRenderTargetCanvas.height * renderTarget.pixelRatio
  );
  imageData.data.set(pixels);
  fromRenderTargetCtx.putImageData(imageData, 0, 0);

  compositedCanvasCtx.save();
  compositedCanvasCtx.scale(1, -1);
  compositedCanvasCtx.drawImage(
    fromRenderTargetCanvas,
    0,
    -fromRenderTargetCanvas.height
  );
  compositedCanvasCtx.restore();

  compositedProjectiveTexture.update(compositedCanvas);
}

function update() {
  requestAnimationFrame(update);

  stats.begin();

  camera.updateMatrixWorld();

  cameraHelper.update();
  controls.update();

  // Only render when projection changes
  if (projectionChanged && mesh) {
    // Set random paint texture
    shaderProjection.uniforms.uProjectiveTexture.value =
      projectiveTextures[
        Math.floor(Math.random() * projectiveTextures.length)
      ].texture;

    mesh.material = shaderProjection;
    // Render scene
    renderTarget.render(sceneRtt, camera);

    // Swap shader back
    mesh.material = shaderWithProjectionTexture;
    projectionChanged = false;

    updateTexture();
  }

  renderer.render(scene, camera);

  stats.end();
}
update();
