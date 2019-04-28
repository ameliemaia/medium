import { addLineNumbers } from '../math/Utils';
import { log, warn } from '../utils/Console';
import * as GL from './GL';

let gl: WebGL2RenderingContext | WebGLRenderingContext;

export default class Program {
  public program: WebGLProgram;
  public created: boolean;
  public uniformBlocks: object;
  public attributeLocations: object;
  public compiledVertexShader: string;
  public compiledFragmentShader: string;

  constructor() {
    gl = GL.get();
    this.program = gl.createProgram();
    this.created = false;

    // Uniform blocks
    this.uniformBlocks = {};

    // Cache all attribute locations
    this.attributeLocations = {};
  }

  public link(
    vertexShader: string,
    fragmentShader: string,
    transformFeedbackVaryings: string[]
  ) {
    this.compiledVertexShader = this.compile('vs', vertexShader);
    this.compiledFragmentShader = this.compile('fs', fragmentShader);

    // Don"t attach a broken shader
    // this will allow other objects to continue rendering
    if (!this.compiledVertexShader || !this.compiledFragmentShader) {
      return;
    }

    gl.attachShader(this.program, this.compiledVertexShader);
    gl.attachShader(this.program, this.compiledFragmentShader);

    if (
      transformFeedbackVaryings instanceof Array &&
      gl instanceof WebGL2RenderingContext
    ) {
      gl.transformFeedbackVaryings(
        this.program,
        transformFeedbackVaryings,
        gl.SEPARATE_ATTRIBS
      );
    }

    gl.linkProgram(this.program);
    gl.validateProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(this.program);
      warn('Failed to initialise shaders', info);
    }

    this.created = true;
  }

  public compile(type: string, source: string) {
    gl = GL.get();
    let shader;

    // console.log(source);

    switch (type) {
      case 'vs':
        shader = gl.createShader(gl.VERTEX_SHADER);
        break;
      default:
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      warn(`Failed to compile '${type}' shader:`);
      warn(gl.getShaderInfoLog(shader));
      warn(addLineNumbers(source));
      return false;
    }

    return shader;
  }

  public setAttributeLocation(attributeName: string) {
    if (!this.created) return;
    gl = GL.get();
    this.attributeLocations[attributeName] = gl.getAttribLocation(
      this.program,
      attributeName
    );
    gl.enableVertexAttribArray(this.attributeLocations[attributeName]);
  }

  public setAttributePointer(attributeName: string, itemSize: number) {
    gl = GL.get();
    gl.vertexAttribPointer(
      this.attributeLocations[attributeName],
      itemSize,
      gl.FLOAT,
      false,
      0,
      0
    );
  }

  public setAttributeInstancedPointer(attributeName: string, itemSize: number) {
    gl = GL.get();
    gl.vertexAttribPointer(
      this.attributeLocations[attributeName],
      itemSize,
      gl.FLOAT,
      false,
      0,
      0
    );
  }

  public setUniformLocation(uniforms: object, uniformName: string) {
    if (!this.created) return;
    gl = GL.get();
    uniforms[uniformName].location = gl.getUniformLocation(
      this.program,
      uniformName
    );
  }

  public setUniformBlockLocation(
    uniformName: string,
    uniformBuffer: WebGLBuffer,
    index: number
  ) {
    gl = GL.get();
    if (gl instanceof WebGL2RenderingContext) {
      this.uniformBlocks[uniformName] = gl.getUniformBlockIndex(
        this.program,
        uniformName
      );
      gl.uniformBlockBinding(
        this.program,
        this.uniformBlocks[uniformName],
        index
      );
      gl.bindBufferBase(gl.UNIFORM_BUFFER, index, uniformBuffer);
    }
  }

  public bind() {
    gl = GL.get();
    gl.useProgram(this.program);
  }

  public dispose() {
    gl = GL.get();
    let attributeLocation;

    // Cleanup attribute locations
    Object.keys(this.attributeLocations).forEach(attributeName => {
      attributeLocation = this.attributeLocations[attributeName];
      gl.disableVertexAttribArray(attributeLocation);
    });

    gl.detachShader(this.program, this.compiledVertexShader);
    gl.detachShader(this.program, this.compiledFragmentShader);
    gl.deleteProgram(this.program);
  }
}
