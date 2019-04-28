(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ixviii.medium", [], factory);
	else if(typeof exports === 'object')
		exports["ixviii.medium"] = factory();
	else
		root["ixviii.medium"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["get"] = get;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webgl2", function() { return webgl2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBuffer", function() { return createBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUniformBuffer", function() { return createUniformBuffer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Constants__ = __webpack_require__(3);

let gl;
let contextType;
let webgl2;
/*
    Set the gl instance
    This is set from the renderer
*/
function set(_gl, _contextType) {
    gl = _gl;
    contextType = _contextType;
    webgl2 = contextType === __WEBPACK_IMPORTED_MODULE_0__Constants__["WEBGL2_CONTEXT"];
}
/*
    Get the gl instance
*/
function get() {
    return gl;
}
/**
    * createBuffer
    * @return {Buffer}
    */
function createBuffer(type, data, isDynamic = false) {
    const buffer = gl.createBuffer();
    const usage = isDynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
    const ArrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
    gl.bindBuffer(type, buffer);
    // https://github.com/nkemnitz/webgl2-ts/blob/master/WebGL2/webgl2-context.d.ts#L276
    if (gl instanceof WebGL2RenderingContext) {
        gl.bufferData(type, new ArrayView(data), usage, 0);
    } else {
        gl.bufferData(type, new ArrayView(data), usage);
    }
    gl.bindBuffer(type, null);
    return buffer;
}
/**
    * createUniformBuffer
    * @return {Buffer}
    */
function createUniformBuffer(data) {
    const buffer = gl.createBuffer();
    if (gl instanceof WebGL2RenderingContext) {
        gl.bindBuffer(gl.UNIFORM_BUFFER, buffer);
        gl.bufferData(gl.UNIFORM_BUFFER, new Float32Array(data), gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.UNIFORM_BUFFER, null);
        return buffer;
    } else {
        return false;
    }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gl_matrix_common_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gl_matrix_mat2_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gl_matrix_mat2d_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gl_matrix_quat2_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec2_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec3_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gl_matrix_vec4_js__ = __webpack_require__(33);
/* unused harmony reexport glMatrix */
/* unused harmony reexport mat2 */
/* unused harmony reexport mat2d */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__gl_matrix_mat3_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__gl_matrix_mat4_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__gl_matrix_quat_js__; });
/* unused harmony reexport quat2 */
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__gl_matrix_vec2_js__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__gl_matrix_vec3_js__; });
/* unused harmony reexport vec4 */














/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);

class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.v = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.set(x, y, z);
        return this;
    }
    set x(value) {
        this.v[0] = value;
    }
    get x() {
        return this.v[0];
    }
    set y(value) {
        this.v[1] = value;
    }
    get y() {
        return this.v[1];
    }
    set z(value) {
        this.v[2] = value;
    }
    get z() {
        return this.v[2];
    }
    set(x, y, z) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].set(this.v, x, y, z);
        return this;
    }
    clone() {
        return new Vector3(this.v[0], this.v[1], this.v[2]);
    }
    copy(vector3) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(this.v, vector3.v);
        return this;
    }
    add(vector3) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].add(this.v, this.v, vector3.v);
        return this;
    }
    subtract(vector3) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].subtract(this.v, this.v, vector3.v);
        return this;
    }
    subtractVectors(vector0, vector1) {
        const out = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].subtract(out, vector0.v, vector1.v);
        return out;
    }
    scale(value) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].scale(this.v, this.v, value);
        return this;
    }
    distance(vector3) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].distance(this.v, vector3.v);
    }
    length() {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].length(this.v);
    }
    negate() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].negate(this.v, this.v);
        return this;
    }
    normalize() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(this.v, this.v);
        return this;
    }
    dot(vector3) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(this.v, vector3.v);
    }
    cross(vector3) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(this.v, this.v, vector3.v);
        return this;
    }
    crossVectors(vector0, vector1) {
        const out = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(out, vector0.v, vector1.v);
        return out;
    }
    lerp(vector3, value) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].lerp(this.v, this.v, vector3.v, value);
        return this;
    }
    equals(vector3) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].equals(this.v, vector3.v);
    }
    multiply(vector3) {
        this.v[0] *= vector3.v[0];
        this.v[1] *= vector3.v[1];
        this.v[2] *= vector3.v[2];
        return this;
    }
    fromArray(values) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(this.v, values);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector3;

Vector3.up = new Vector3(0, 1, 0);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Contexts
const WEBGL_CONTEXT = 'webgl';
/* harmony export (immutable) */ __webpack_exports__["WEBGL_CONTEXT"] = WEBGL_CONTEXT;

const WEBGL2_CONTEXT = 'webgl2';
/* harmony export (immutable) */ __webpack_exports__["WEBGL2_CONTEXT"] = WEBGL2_CONTEXT;

// Default ratio
const RENDERER_DEFAULT_CONTEXT = WEBGL2_CONTEXT;
/* harmony export (immutable) */ __webpack_exports__["RENDERER_DEFAULT_CONTEXT"] = RENDERER_DEFAULT_CONTEXT;

const RENDERER_DEFAULT_WIDTH = 1280;
/* harmony export (immutable) */ __webpack_exports__["RENDERER_DEFAULT_WIDTH"] = RENDERER_DEFAULT_WIDTH;

const RENDERER_DEFAULT_HEIGHT = 720;
/* harmony export (immutable) */ __webpack_exports__["RENDERER_DEFAULT_HEIGHT"] = RENDERER_DEFAULT_HEIGHT;

const RENDERER_DEFAULT_RATIO = RENDERER_DEFAULT_WIDTH / RENDERER_DEFAULT_HEIGHT;
/* harmony export (immutable) */ __webpack_exports__["RENDERER_DEFAULT_RATIO"] = RENDERER_DEFAULT_RATIO;

// Precision
const PRECISION = 'highp';
/* harmony export (immutable) */ __webpack_exports__["PRECISION"] = PRECISION;

// Culling
const CULL_NONE = -1;
/* harmony export (immutable) */ __webpack_exports__["CULL_NONE"] = CULL_NONE;

const CULL_BACK = 0x0405;
/* harmony export (immutable) */ __webpack_exports__["CULL_BACK"] = CULL_BACK;

const CULL_FRONT = 0x0404;
/* harmony export (immutable) */ __webpack_exports__["CULL_FRONT"] = CULL_FRONT;

const CULL_FRONT_AND_BACK = 0x0408;
/* harmony export (immutable) */ __webpack_exports__["CULL_FRONT_AND_BACK"] = CULL_FRONT_AND_BACK;

// Draw style
const DRAW_POINTS = 0;
/* harmony export (immutable) */ __webpack_exports__["DRAW_POINTS"] = DRAW_POINTS;

const DRAW_LINES = 1;
/* harmony export (immutable) */ __webpack_exports__["DRAW_LINES"] = DRAW_LINES;

const DRAW_LINE_LOOP = 2;
/* harmony export (immutable) */ __webpack_exports__["DRAW_LINE_LOOP"] = DRAW_LINE_LOOP;

const DRAW_LINE_STRIP = 3;
/* harmony export (immutable) */ __webpack_exports__["DRAW_LINE_STRIP"] = DRAW_LINE_STRIP;

const DRAW_TRIANGLES = 4;
/* harmony export (immutable) */ __webpack_exports__["DRAW_TRIANGLES"] = DRAW_TRIANGLES;

// Uniform buffer location indices
const UNIFORM_PROJECTION_VIEW_LOCATION = 0;
/* harmony export (immutable) */ __webpack_exports__["UNIFORM_PROJECTION_VIEW_LOCATION"] = UNIFORM_PROJECTION_VIEW_LOCATION;

const UNIFORM_AMBIENT_LIGHT_LOCATION = 1;
/* harmony export (immutable) */ __webpack_exports__["UNIFORM_AMBIENT_LIGHT_LOCATION"] = UNIFORM_AMBIENT_LIGHT_LOCATION;

const UNIFORM_DIRECTIONAL_LIGHTS_LOCATION = 2;
/* harmony export (immutable) */ __webpack_exports__["UNIFORM_DIRECTIONAL_LIGHTS_LOCATION"] = UNIFORM_DIRECTIONAL_LIGHTS_LOCATION;

const UNIFORM_POINT_LIGHTS_LOCATION = 3;
/* harmony export (immutable) */ __webpack_exports__["UNIFORM_POINT_LIGHTS_LOCATION"] = UNIFORM_POINT_LIGHTS_LOCATION;

// Material types
const MATERIAL_BASIC = 'basic';
/* harmony export (immutable) */ __webpack_exports__["MATERIAL_BASIC"] = MATERIAL_BASIC;

const MATERIAL_LAMBERT = 'lambert';
/* harmony export (immutable) */ __webpack_exports__["MATERIAL_LAMBERT"] = MATERIAL_LAMBERT;

const MATERIAL_PHONG = 'phong';
/* harmony export (immutable) */ __webpack_exports__["MATERIAL_PHONG"] = MATERIAL_PHONG;

const LIGHT_AMBIENT = 'ambient';
/* harmony export (immutable) */ __webpack_exports__["LIGHT_AMBIENT"] = LIGHT_AMBIENT;

const LIGHT_DIRECTIONAL = 'directional';
/* harmony export (immutable) */ __webpack_exports__["LIGHT_DIRECTIONAL"] = LIGHT_DIRECTIONAL;

const LIGHT_POINT = 'point';
/* harmony export (immutable) */ __webpack_exports__["LIGHT_POINT"] = LIGHT_POINT;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Es300
/* harmony default export */ __webpack_exports__["a"] = ('#version 300 es');

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capabilities", function() { return capabilities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extensions", function() { return extensions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Console__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GL__ = __webpack_require__(0);



/*
    * https://github.com/mrdoob/three.js/blob/dev/src/renderers/webgl/WebGLCapabilities.js
    */
function getMaxPrecision(gl, precision) {
    if (precision === 'highp') {
        if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0) {
            return 'highp';
        }
        precision = 'mediump';
    }
    if (precision === 'mediump') {
        if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 && gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0) {
            return 'mediump';
        }
    }
    return 'lowp';
}
function Capabilities(gl) {
    let precision = __WEBPACK_IMPORTED_MODULE_1__Constants__["PRECISION"];
    const maxPrecision = getMaxPrecision(gl, precision);
    if (maxPrecision !== precision) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_Console__["b" /* warn */])('Capabilities:', precision, 'not supported, using', maxPrecision, 'instead.');
        precision = maxPrecision;
    }
    const maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    const maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    const maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
    const maxAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
    const maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
    const maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
    const maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);
    return {
        maxAttributes,
        maxCubemapSize,
        maxFragmentUniforms,
        maxPrecision,
        maxTextures,
        maxTextureSize,
        maxVertexTextures,
        maxVertexUniforms,
        maxVaryings,
        precision
    };
}
function Extensions(gl) {
    const vertexArrayObject = __WEBPACK_IMPORTED_MODULE_2__GL__["webgl2"] || gl.getExtension('OES_vertex_array_object') || false;
    const angleInstancedArrays = gl.getExtension('ANGLE_instanced_arrays') || false;
    const textureFloat = gl.getExtension('OES_texture_float') || false;
    return {
        angleInstancedArrays,
        textureFloat,
        vertexArrayObject
    };
}
let capabilities = {};
let extensions = {};
/*
    Set the capabilities once
*/
function set(gl) {
    capabilities = Capabilities(gl);
    extensions = Extensions(gl);
}
/*
    Get capabilities
*/


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARRAY_TYPE; });
/* unused harmony export setMatrixArrayType */
/* unused harmony export toRadian */
/* unused harmony export equals */
/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
const EPSILON = 0.000001;
/* harmony export (immutable) */ __webpack_exports__["b"] = EPSILON;

let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
const RANDOM = Math.random;
/* harmony export (immutable) */ __webpack_exports__["c"] = RANDOM;


/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector2__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Array__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__BufferAttribute__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Face__ = __webpack_require__(72);






let gl;
class Geometry {
    constructor(vertices, indices, // Uint16Array | Uint32Array, (typings are wrong for createBuffer)
    normals, uvs, colors) {
        gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
        this.bufferVertices = vertices;
        this.bufferIndices = indices;
        this.bufferNormals = normals;
        this.bufferUvs = uvs;
        this.bufferColors = colors;
        this.attributes = {};
        this.attributesInstanced = {};
        // Vertex positions
        if (this.bufferVertices) {
            this.addAttribute('aVertexPosition', gl.ARRAY_BUFFER, this.bufferVertices, 3);
            this.generateVertices();
        }
        // Vertex indices
        if (this.bufferIndices) {
            this.addAttribute('aIndex', gl.ELEMENT_ARRAY_BUFFER, this.bufferIndices, 1, false);
            this.generateFaces();
        }
        // Vertex normals
        if (this.bufferNormals) {
            this.addAttribute('aVertexNormal', gl.ARRAY_BUFFER, this.bufferNormals, 3);
        }
        // uvs
        if (this.bufferUvs) {
            this.addAttribute('aUv', gl.ARRAY_BUFFER, this.bufferUvs, 2);
            this.generateUvs();
        }
        // Vertex colors
        if (this.bufferColors) {
            this.addAttribute('aVertexColor', gl.ARRAY_BUFFER, this.bufferColors, 3);
        }
    }
    addAttribute(name, type, data, count, shaderAttribute) {
        this.attributes[name] = new __WEBPACK_IMPORTED_MODULE_4__BufferAttribute__["a" /* default */](type, data, count, shaderAttribute);
    }
    addInstancedBufferAttribute(name, value, count) {
        this.attributesInstanced[name] = new __WEBPACK_IMPORTED_MODULE_4__BufferAttribute__["a" /* default */](gl.ARRAY_BUFFER, value, count);
    }
    generateVertices() {
        this.vertices = [];
        for (let i = 0; i < this.bufferVertices.length; i += 3) {
            const a = this.bufferVertices[i];
            const b = this.bufferVertices[i + 1];
            const c = this.bufferVertices[i + 2];
            const vertex = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */](a, b, c);
            this.vertices.push(vertex);
        }
    }
    generateFaces() {
        this.faces = [];
        for (let i = 0; i < this.bufferIndices.length; i += 3) {
            const ia = this.bufferIndices[i];
            const ib = this.bufferIndices[i + 1];
            const ic = this.bufferIndices[i + 2];
            const a = this.vertices[ia];
            const b = this.vertices[ib];
            const c = this.vertices[ic];
            const face = new __WEBPACK_IMPORTED_MODULE_5__Face__["a" /* default */](ia, ib, ic, a, b, c);
            this.faces.push(face);
        }
    }
    generateUvs() {
        this.uvs = [];
        for (let i = 0; i < this.bufferUvs.length; i += 2) {
            const a = this.bufferUvs[i];
            const b = this.bufferUvs[i + 1];
            const uv = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* default */](a, b);
            this.uvs.push(uv);
        }
    }
    updateVertices() {
        gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
        this.vertices.forEach((vertex, i) => {
            this.bufferVertices.set(vertex.v, i * vertex.v.length);
        });
        this.attributes.aVertexPosition.update(this.bufferVertices);
    }
    updateNormals() {
        const normals = [];
        this.faces.forEach(face => {
            face.updateFaceNormal();
            normals[face.indices[0]] = face.normal.v;
            normals[face.indices[1]] = face.normal.v;
            normals[face.indices[2]] = face.normal.v;
        });
        this.bufferNormals.set(Object(__WEBPACK_IMPORTED_MODULE_3__utils_Array__["flatten"])(normals));
        this.attributes.aVertexNormal.update(this.bufferNormals);
    }
    dispose() {
        gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
        // Dispose attributes and buffers
        Object.keys(this.attributes).forEach(attributeName => {
            this.attributes[attributeName].dispose(gl);
            delete this.attributes[attributeName];
        });
        Object.keys(this.attributesInstanced).forEach(attributeName => {
            this.attributesInstanced[attributeName].dispose(gl);
            delete this.attributesInstanced[attributeName];
        });
        delete this.attributes;
        delete this.attributesInstanced;
        this.bufferVertices = null;
        this.bufferIndices = null;
        this.bufferNormals = null;
        this.bufferUvs = null;
        this.bufferColors = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Geometry;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["degToRad"] = degToRad;
/* harmony export (immutable) */ __webpack_exports__["radToDeg"] = radToDeg;
/* harmony export (immutable) */ __webpack_exports__["clamp"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["barycoordFromPoint"] = barycoordFromPoint;
/* harmony export (immutable) */ __webpack_exports__["randomSpherePoint"] = randomSpherePoint;
/* harmony export (immutable) */ __webpack_exports__["from3DTo2D"] = from3DTo2D;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["isPowerOf2"] = isPowerOf2;
/* harmony export (immutable) */ __webpack_exports__["nearestPowerOf2"] = nearestPowerOf2;
/* harmony export (immutable) */ __webpack_exports__["addLineNumbers"] = addLineNumbers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector2__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector3__ = __webpack_require__(2);



function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}
function radToDeg(radians) {
    return radians * (180 / Math.PI);
}
function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
}
function lerp(min, max, alpha) {
    return min + (max - min) * alpha;
}
function barycoordFromPoint(point, a, b, c) {
    const v0 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
    const v1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
    const v2 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(v0, c, a);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(v1, b, a);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(v2, point, a);
    const dot00 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(v0, v0);
    const dot01 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(v0, v1);
    const dot02 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(v0, v2);
    const dot11 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(v1, v1);
    const dot12 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(v1, v2);
    const denom = dot00 * dot11 - dot01 * dot01;
    const result = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */]();
    // collinear or singular triangle
    if (denom === 0) {
        // arbitrary location outside of triangle?
        // not sure if this is the best idea, maybe should be returning undefined
        return result.set(-2, -1, -1);
    }
    const invDenom = 1 / denom;
    const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
    // barycentric coordinates must always sum to 1
    return result.set(1 - u - v, v, u);
}
/*
http://stackoverflow.com/questions/5531827/random-point-on-a-given-sphere
    */
function randomSpherePoint(x0, y0, z0, radius) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const x = x0 + radius * Math.sin(phi) * Math.cos(theta);
    const y = y0 + radius * Math.sin(phi) * Math.sin(theta);
    const z = z0 + radius * Math.cos(phi);
    return [x, y, z];
}
// https://github.com/hughsk/from-3d-to-2d/blob/master/index.js
function from3DTo2D(position, pVMatrix) {
    const ix = position.x;
    const iy = position.y;
    const iz = position.z;
    const ox = pVMatrix[0] * ix + pVMatrix[4] * iy + pVMatrix[8] * iz + pVMatrix[12];
    const oy = pVMatrix[1] * ix + pVMatrix[5] * iy + pVMatrix[9] * iz + pVMatrix[13];
    const ow = pVMatrix[3] * ix + pVMatrix[7] * iy + pVMatrix[11] * iz + pVMatrix[15];
    const screenPosition = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* default */]();
    screenPosition.x = (ox / ow + 1) / 2;
    screenPosition.y = 1 - (oy / ow + 1) / 2;
    return screenPosition;
}
// https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js#L324
function lookAt(eye, target, up) {
    const quatOut = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].create();
    const x = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
    const y = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
    const z = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(z, eye, target);
    if (__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].squaredLength(z) === 0) {
        // eye and target are in the same position
        z[2] = 1;
    }
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(z, z);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(x, up, z);
    if (__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].squaredLength(x) === 0) {
        // eye and target are in the same vertical
        z[2] += 0.0001;
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(x, up, z);
    }
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(x, x);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(y, z, x);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].setAxes(quatOut, z, x, y);
    __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].invert(quatOut, quatOut);
    return quatOut;
}
// https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
function isPowerOf2(value) {
    return (value & value - 1) === 0;
}
// https://bocoup.com/blog/find-the-closest-power-of-2-with-javascript
function nearestPowerOf2(size) {
    return Math.pow(2, Math.round(Math.log(size) / Math.log(2)));
}
function addLineNumbers(text) {
    let result = '';
    text.split('\n').forEach((line, index) => {
        result += `${index < 10 ? `0${index}` : index}| ${line}\n`;
    });
    return result;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Sphere__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Object3D__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Vao__ = __webpack_require__(35);





let gl;
class Mesh extends __WEBPACK_IMPORTED_MODULE_3__Object3D__["a" /* default */] {
    constructor(geometry, material) {
        super();
        this.geometry = geometry;
        this.material = material;
        this.vao = new __WEBPACK_IMPORTED_MODULE_4__Vao__["a" /* default */]();
        this.visible = true;
        this.instanceCount = 0;
        // Allow meshes to share shaders and programs
        if (!this.material.program.created) {
            this.material.create(this.geometry);
        }
        this.isInstanced = false;
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        // Setup vao
        this.vao.bind();
        this.bindAttributes();
        this.bindAttributesInstanced();
        this.bindIndexBuffer();
        this.vao.unbind();
    }
    setInstanceCount(value) {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        this.instanceCount = value;
        this.isInstanced = true;
    }
    bindAttributes() {
        // Attributes
        Object.keys(this.geometry.attributes).forEach(attributeName => {
            if (attributeName !== 'aIndex') {
                // enableVertexAttribArray
                this.material.program.setAttributeLocation(attributeName);
                // Bind buffer
                this.geometry.attributes[attributeName].bind();
                // vertexAttribPointer
                this.material.program.setAttributePointer(attributeName, this.geometry.attributes[attributeName].itemSize);
            }
        });
    }
    bindAttributesInstanced() {
        // Instanced Attributes
        Object.keys(this.geometry.attributesInstanced).forEach(attributeName => {
            if (attributeName !== 'aIndex') {
                // enableVertexAttribArray
                this.material.program.setAttributeLocation(attributeName);
                // Bind buffer
                this.geometry.attributesInstanced[attributeName].bind();
                // vertexAttribPointer
                this.material.program.setAttributeInstancedPointer(attributeName, this.geometry.attributesInstanced[attributeName].itemSize);
                if (gl instanceof WebGL2RenderingContext) {
                    gl.vertexAttribDivisor(this.material.program.attributeLocations[attributeName], 1);
                } else {
                    __WEBPACK_IMPORTED_MODULE_1__Capabilities__["extensions"].angleInstancedArrays.vertexAttribDivisorANGLE(this.material.program.attributeLocations[attributeName], 1);
                }
            }
        });
    }
    bindIndexBuffer() {
        // Bind index buffer
        if (this.geometry.bufferIndices) {
            this.geometry.attributes.aIndex.bind();
        }
    }
    draw(camera) {
        if (!this.visible) return;
        if (!this.material.program.created) return;
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        // Update modelMatrix
        this.updateMatrix(camera);
        this.material.program.bind();
        // Culling enable
        if (this.material.culling !== -1) {
            gl.enable(gl.CULL_FACE);
            gl.cullFace(this.material.culling);
        }
        this.material.setUniforms(camera.projectionMatrix, this.modelViewMatrix, this.modelMatrix, camera);
        if (__WEBPACK_IMPORTED_MODULE_1__Capabilities__["extensions"].vertexArrayObject) {
            this.vao.bind();
        } else {
            this.bindAttributes();
            this.bindAttributesInstanced();
            this.bindIndexBuffer();
        }
        if (this.geometry.attributes.aIndex) {
            gl.drawElements(this.material.drawType, this.geometry.attributes.aIndex.numItems, gl.UNSIGNED_SHORT, 0);
        } else {
            gl.drawArrays(this.material.drawType, 0, this.geometry.attributes.aVertexPosition.numItems);
        }
        if (__WEBPACK_IMPORTED_MODULE_1__Capabilities__["extensions"].vertexArrayObject) {
            this.vao.unbind();
        }
        // Culling disable
        if (this.material.culling !== -1) {
            gl.disable(gl.CULL_FACE);
        }
    }
    drawInstance(camera) {
        if (!this.visible) return;
        if (!this.material.program.created) return;
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        // Update modelMatrix
        this.updateMatrix(camera);
        this.material.program.bind();
        this.material.setUniforms(camera.projectionMatrix, this.modelViewMatrix, this.modelMatrix, camera);
        // Culling enable
        if (this.material.culling !== -1) {
            gl.enable(gl.CULL_FACE);
            gl.cullFace(this.material.culling);
        }
        // Blending enable
        if (this.material.blending) {
            gl.enable(gl.BLEND);
            gl.blendFunc(this.material.blendFunc[0], this.material.blendFunc[1]);
        }
        if (__WEBPACK_IMPORTED_MODULE_1__Capabilities__["extensions"].vertexArrayObject) {
            this.vao.bind();
        } else {
            this.bindAttributes();
            this.bindAttributesInstanced();
            this.bindIndexBuffer();
        }
        if (gl instanceof WebGL2RenderingContext) {
            gl.drawElementsInstanced(this.material.drawType, this.geometry.attributes.aIndex.numItems, gl.UNSIGNED_SHORT, 0, this.instanceCount);
        } else {
            __WEBPACK_IMPORTED_MODULE_1__Capabilities__["extensions"].angleInstancedArrays.drawElementsInstancedANGLE(this.material.drawType, this.geometry.attributes.aIndex.numItems, gl.UNSIGNED_SHORT, 0, this.instanceCount);
        }
        if (__WEBPACK_IMPORTED_MODULE_1__Capabilities__["extensions"].vertexArrayObject) {
            this.vao.unbind();
        }
        // Culling disable
        if (this.material.culling !== -1) {
            gl.disable(gl.CULL_FACE);
        }
        // Disable blending
        if (this.material.blending) {
            gl.disable(gl.BLEND);
        }
    }
    computeBoundingSphere() {
        this.boundingSphere = new __WEBPACK_IMPORTED_MODULE_0__math_Sphere__["a" /* default */]();
        let maxDistance = 0;
        let distance;
        this.geometry.vertices.forEach(vertex => {
            distance = vertex.distance(this.boundingSphere.center);
            if (distance > maxDistance) {
                maxDistance = distance;
            }
        });
        this.boundingSphere.radius = maxDistance;
    }
    dispose() {
        this.material.dispose();
        this.geometry.dispose();
        this.vao.dispose();
        this.geometry = null;
        this.material = null;
        super.dispose();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Mesh;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Color__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shaders_Basic_glsl__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shaders_Lambert_glsl__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_Phong_glsl__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shaders_Vertex_glsl__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ShaderParser__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Program__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__UniformBuffers__ = __webpack_require__(16);












let gl;
const normalMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat3 */].create();
const inversedModelViewMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
class Material {
    constructor(options = {}) {
        const vertexShader = __WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"] ? __WEBPACK_IMPORTED_MODULE_5__shaders_Vertex_glsl__["b" /* vertexShaderEs300 */] : __WEBPACK_IMPORTED_MODULE_5__shaders_Vertex_glsl__["a" /* vertexShaderEs100 */];
        let fragmentShader;
        switch (options.type || '') {
            case __WEBPACK_IMPORTED_MODULE_8__Constants__["MATERIAL_LAMBERT"]:
                {
                    fragmentShader = __WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"] ? __WEBPACK_IMPORTED_MODULE_3__shaders_Lambert_glsl__["b" /* lambertFragmentShaderEs300 */] : __WEBPACK_IMPORTED_MODULE_3__shaders_Lambert_glsl__["a" /* lambertFragmentShaderEs100 */];
                    break;
                }
            case __WEBPACK_IMPORTED_MODULE_8__Constants__["MATERIAL_PHONG"]:
                {
                    fragmentShader = __WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"] ? __WEBPACK_IMPORTED_MODULE_4__shaders_Phong_glsl__["b" /* phongFragmentShaderEs300 */] : __WEBPACK_IMPORTED_MODULE_4__shaders_Phong_glsl__["a" /* phongFragmentShaderEs100 */];
                    break;
                }
            default:
                {
                    fragmentShader = __WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"] ? __WEBPACK_IMPORTED_MODULE_2__shaders_Basic_glsl__["b" /* basicFragmentShaderEs300 */] : __WEBPACK_IMPORTED_MODULE_2__shaders_Basic_glsl__["a" /* basicFragmentShaderEs100 */];
                }
        }
        gl = __WEBPACK_IMPORTED_MODULE_9__GL__["get"]();
        this.name = '';
        this.type = __WEBPACK_IMPORTED_MODULE_8__Constants__["MATERIAL_BASIC"];
        this.uniforms = {};
        this.hookVertexPre = '';
        this.hookVertexMain = '';
        this.hookVertexEnd = '';
        this.hookFragmentPre = '';
        this.hookFragmentMain = '';
        this.hookFragmentEnd = '';
        this.vertexShader = vertexShader;
        this.fragmentShader = fragmentShader;
        this.drawType = __WEBPACK_IMPORTED_MODULE_8__Constants__["DRAW_TRIANGLES"];
        this.directionalLights = undefined;
        this.pointLights = undefined;
        this.culling = __WEBPACK_IMPORTED_MODULE_8__Constants__["CULL_NONE"];
        this.blending = false;
        this.blendFunc = [gl.SRC_ALPHA, gl.ONE];
        Object.assign(this, options);
        this.program = new __WEBPACK_IMPORTED_MODULE_10__Program__["a" /* default */]();
    }
    create(geometry, transformFeedbackVaryings) {
        gl = __WEBPACK_IMPORTED_MODULE_9__GL__["get"]();
        this.vertexShader = this._processShader(this.vertexShader, 'vertex', geometry);
        this.fragmentShader = this._processShader(this.fragmentShader, 'fragment', geometry);
        this.program.link(this.vertexShader, this.fragmentShader, transformFeedbackVaryings);
        // User defined uniforms
        this.customUniforms = this.uniforms || {};
        // Uniforms for ProjectionView uniform block
        if (__WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"]) {
            this.program.setUniformBlockLocation('ProjectionView', __WEBPACK_IMPORTED_MODULE_11__UniformBuffers__["default"].projectionView.buffer, __WEBPACK_IMPORTED_MODULE_8__Constants__["UNIFORM_PROJECTION_VIEW_LOCATION"]);
        }
        if (this.ambientLight) {
            if (__WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"]) {
                // Setup uniform block for point lights
                this.program.setUniformBlockLocation('AmbientLight', this.ambientLight.uniformBuffer.buffer, __WEBPACK_IMPORTED_MODULE_8__Constants__["UNIFORM_AMBIENT_LIGHT_LOCATION"]);
            } else {
                // Generate uniforms for point lights
                this.ambientLight.get().forEach((ambientLight, i) => {
                    Object.keys(ambientLight.uniforms).forEach(ambientLightUniform => {
                        const uniform = ambientLight.uniforms[ambientLightUniform];
                        this.customUniforms[`uAmbientLight.${ambientLightUniform}`] = uniform;
                    });
                });
            }
        }
        if (this.directionalLights) {
            if (__WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"]) {
                // Setup uniform block for directional lights
                this.program.setUniformBlockLocation('DirectionalLights', this.directionalLights.uniformBuffer.buffer, __WEBPACK_IMPORTED_MODULE_8__Constants__["UNIFORM_DIRECTIONAL_LIGHTS_LOCATION"]);
            } else {
                // Generate uniforms for directional lights
                this.directionalLights.get().forEach((directionalLight, i) => {
                    Object.keys(directionalLight.uniforms).forEach(directionalLightUniform => {
                        const uniform = directionalLight.uniforms[directionalLightUniform];
                        this.customUniforms[`uDirectionalLights[${i}].${directionalLightUniform}`] = uniform;
                    });
                });
            }
        }
        if (this.pointLights) {
            if (__WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"]) {
                // Setup uniform block for point lights
                this.program.setUniformBlockLocation('PointLights', this.pointLights.uniformBuffer.buffer, __WEBPACK_IMPORTED_MODULE_8__Constants__["UNIFORM_POINT_LIGHTS_LOCATION"]);
            } else {
                // Generate uniforms for point lights
                this.pointLights.get().forEach((pointLight, i) => {
                    Object.keys(pointLight.uniforms).forEach(pointLightUniform => {
                        const uniform = pointLight.uniforms[pointLightUniform];
                        this.customUniforms[`uPointLights[${i}].${pointLightUniform}`] = uniform;
                    });
                });
            }
        }
        // Generate texture indices
        const textureIndices = [gl.TEXTURE0, gl.TEXTURE1, gl.TEXTURE2, gl.TEXTURE3, gl.TEXTURE4, gl.TEXTURE5];
        Object.keys(this.uniforms).forEach((uniformName, i) => {
            switch (this.uniforms[uniformName].type) {
                case 't':
                case 'tc':
                case 't3d':
                    {
                        this.uniforms[uniformName].textureIndex = i;
                        this.uniforms[uniformName].activeTexture = textureIndices[i];
                        break;
                    }
                default:
            }
        });
        // Add Camera position uniform for point lights if it doesn"t exist
        if (this.uniforms.uCameraPosition === undefined && this.pointLights) {
            this.uniforms.uCameraPosition = {
                type: '3f',
                value: [0, 0, 0]
            };
        }
        // Only for webgl1
        const projectionViewUniforms = __WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"] ? {} : {
            uProjectionMatrix: {
                location: null,
                type: '4fv',
                value: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create()
            }
        };
        // Default uniforms
        this.uniforms = Object.assign({ uDiffuse: {
                location: null,
                type: '3f',
                value: new __WEBPACK_IMPORTED_MODULE_1__math_Color__["a" /* default */]().v
            }, uModelMatrix: {
                location: null,
                type: '4fv',
                value: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create()
            }, uModelViewMatrix: {
                location: null,
                type: '4fv',
                value: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create()
            }, uNormalMatrix: {
                location: null,
                type: '4fv',
                value: __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create()
            } }, this.customUniforms, projectionViewUniforms);
        Object.keys(this.uniforms).forEach(uniformName => {
            this.program.setUniformLocation(this.uniforms, uniformName);
        });
    }
    _processShader(shader, type, geometry) {
        gl = __WEBPACK_IMPORTED_MODULE_9__GL__["get"]();
        let defines = '';
        const precision = `precision ${__WEBPACK_IMPORTED_MODULE_7__Capabilities__["capabilities"].precision} float;`;
        function addDefine(define) {
            defines += `#define ${define} \n`;
        }
        if (geometry.bufferUvs) {
            addDefine('uv');
        }
        if (geometry.bufferColors) {
            addDefine('vertexColors');
        }
        if (geometry.bufferNormals) {
            addDefine('normals');
        }
        if (this.ambientLight) {
            addDefine('ambientLight');
        }
        if (this.directionalLights) {
            addDefine('directionalLights');
        }
        if (this.pointLights) {
            addDefine('pointLights');
        }
        shader = shader.replace(/#HOOK_PRECISION/g, precision);
        shader = shader.replace(/#HOOK_DEFINES/g, defines);
        shader = shader.replace(/#HOOK_VERTEX_PRE/g, this.hookVertexPre);
        shader = shader.replace(/#HOOK_VERTEX_MAIN/g, this.hookVertexMain);
        shader = shader.replace(/#HOOK_VERTEX_END/g, this.hookVertexEnd);
        shader = shader.replace(/#HOOK_FRAGMENT_PRE/g, this.hookFragmentPre);
        shader = shader.replace(/#HOOK_FRAGMENT_MAIN/g, this.hookFragmentMain);
        shader = shader.replace(/#HOOK_FRAGMENT_END/g, this.hookFragmentEnd);
        if (this.pointLights) {
            shader = shader.replace(/#HOOK_POINT_LIGHTS/g, String(this.pointLights.length));
        }
        if (this.directionalLights) {
            shader = shader.replace(/#HOOK_DIRECTIONAL_LIGHTS/g, String(this.directionalLights.length));
        }
        return Object(__WEBPACK_IMPORTED_MODULE_6__utils_ShaderParser__["a" /* default */])(shader, type);
    }
    setUniforms(projectionMatrix, modelViewMatrix, modelMatrix, camera) {
        gl = __WEBPACK_IMPORTED_MODULE_9__GL__["get"]();
        // Update the other uniforms
        Object.keys(this.customUniforms).forEach(uniformName => {
            const uniform = this.uniforms[uniformName];
            switch (uniform.type) {
                case 't':
                    {
                        gl.uniform1i(uniform.location, uniform.textureIndex);
                        gl.activeTexture(uniform.activeTexture);
                        gl.bindTexture(gl.TEXTURE_2D, uniform.value);
                        break;
                    }
                case 'tc':
                    {
                        gl.uniform1i(uniform.location, uniform.textureIndex);
                        gl.activeTexture(uniform.activeTexture);
                        gl.bindTexture(gl.TEXTURE_CUBE_MAP, uniform.value);
                        break;
                    }
                case 't3d':
                    {
                        if (gl instanceof WebGL2RenderingContext) {
                            gl.uniform1i(uniform.location, uniform.textureIndex);
                            gl.activeTexture(uniform.activeTexture);
                            gl.bindTexture(gl.TEXTURE_3D, uniform.value);
                        }
                        break;
                    }
                case 'i':
                    {
                        gl.uniform1i(uniform.location, uniform.value);
                        break;
                    }
                case 'f':
                    {
                        gl.uniform1f(uniform.location, uniform.value);
                        break;
                    }
                case '2f':
                    {
                        gl.uniform2f(uniform.location, uniform.value[0], uniform.value[1]);
                        break;
                    }
                case '3f':
                    {
                        gl.uniform3f(uniform.location, uniform.value[0], uniform.value[1], uniform.value[2]);
                        break;
                    }
                case '4f':
                    {
                        gl.uniform4f(uniform.location, uniform.value[0], uniform.value[1], uniform.value[2], uniform.value[3]);
                        break;
                    }
                case '1iv':
                    {
                        gl.uniform1iv(uniform.location, uniform.value);
                        break;
                    }
                case '2iv':
                    {
                        gl.uniform2iv(uniform.location, uniform.value);
                        break;
                    }
                case '1fv':
                    {
                        gl.uniform1fv(uniform.location, uniform.value);
                        break;
                    }
                case '2fv':
                    {
                        gl.uniform2fv(uniform.location, uniform.value);
                        break;
                    }
                case '3fv':
                    {
                        gl.uniform3fv(uniform.location, uniform.value);
                        break;
                    }
                case '4fv':
                    {
                        gl.uniform4fv(uniform.location, uniform.value);
                        break;
                    }
                case 'Matrix3fv':
                    {
                        gl.uniformMatrix3fv(uniform.location, false, uniform.value);
                        break;
                    }
                case 'Matrix4fv':
                    {
                        gl.uniformMatrix4fv(uniform.location, false, uniform.value);
                        break;
                    }
                default:
            }
        });
        if (!__WEBPACK_IMPORTED_MODULE_9__GL__["webgl2"]) {
            gl.uniformMatrix4fv(this.uniforms.uProjectionMatrix.location, false, projectionMatrix);
        }
        gl.uniformMatrix4fv(this.uniforms.uModelViewMatrix.location, false, modelViewMatrix);
        gl.uniformMatrix4fv(this.uniforms.uModelMatrix.location, false, modelMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(inversedModelViewMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].invert(inversedModelViewMatrix, modelMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat3 */].identity(normalMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat3 */].fromMat4(normalMatrix, inversedModelViewMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["a" /* mat3 */].transpose(normalMatrix, normalMatrix);
        gl.uniformMatrix3fv(this.uniforms.uNormalMatrix.location, false, normalMatrix);
        // uDiffuse
        gl.uniform3f(this.uniforms.uDiffuse.location, this.uniforms.uDiffuse.value[0], this.uniforms.uDiffuse.value[1], this.uniforms.uDiffuse.value[2]);
        // Camera
        if (camera && this.uniforms.uCameraPosition) {
            gl.uniform3f(this.uniforms.uCameraPosition.location, camera.position.v[0], camera.position.v[1], camera.position.v[2]);
        }
    }
    dispose() {
        // Dispose textures
        Object.keys(this.customUniforms).forEach(uniformName => {
            const uniform = this.uniforms[uniformName];
            switch (uniform.type) {
                case 't':
                case 'tc':
                    {
                        gl.deleteTexture(uniform.value);
                        break;
                    }
                default:
            }
        });
        this.program.dispose();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Material;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Es300
/* harmony default export */ __webpack_exports__["a"] = (`
	uniform ProjectionView {
		mat4 projectionMatrix;
	} uProjectionView;
`);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);

class Vector2 {
    constructor(x = 0, y = 0) {
        this.v = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].create();
        this.set(x, y);
        return this;
    }
    set x(value) {
        this.v[0] = value;
    }
    get x() {
        return this.v[0];
    }
    set y(value) {
        this.v[1] = value;
    }
    get y() {
        return this.v[1];
    }
    set(x, y) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].set(this.v, x, y);
        return this;
    }
    clone() {
        return new Vector2(this.v[0], this.v[1]);
    }
    copy(vector2) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].copy(this.v, vector2.v);
        return this;
    }
    add(vector2) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].add(this.v, this.v, vector2.v);
        return this;
    }
    subtract(vector2) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].subtract(this.v, this.v, vector2.v);
        return this;
    }
    subtractVectors(vector0, vector1) {
        const out = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].create();
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].subtract(out, vector0.v, vector1.v);
        return out;
    }
    scale(value) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].scale(this.v, this.v, value);
        return this;
    }
    distance(vector2) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].distance(this.v, vector2.v);
    }
    length() {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].length(this.v);
    }
    negate() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].negate(this.v, this.v);
        return this;
    }
    normalize() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].normalize(this.v, this.v);
        return this;
    }
    lerp(vector2, value) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].lerp(this.v, this.v, vector2.v, value);
        return this;
    }
    equals(vector2) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].equals(this.v, vector2.v);
    }
    multiply(vector2) {
        this.v[0] *= vector2.v[0];
        this.v[1] *= vector2.v[1];
        return this;
    }
    fromArray(values) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].copy(this.v, values);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector2;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);

class Color {
    constructor(hex = 0xffffff) {
        this.v = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
        this.convert(hex);
        return this;
    }
    set r(value) {
        this.v[0] = value;
    }
    get r() {
        return this.v[0];
    }
    set g(value) {
        this.v[1] = value;
    }
    get g() {
        return this.v[1];
    }
    set b(value) {
        this.v[2] = value;
    }
    get b() {
        return this.v[2];
    }
    set(r, g, b) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].set(this.v, r, g, b);
        return this;
    }
    copy(rgb) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(this.v, __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(rgb[0], rgb[1], rgb[2]));
        return this;
    }
    convert(hex) {
        let rgb;
        if (typeof hex === 'number') {
            rgb = this.hexIntToRgb(hex);
        }
        if (typeof hex === 'string') {
            rgb = this.hexStringToRgb(hex);
        }
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(this.v, this.normalize(rgb));
        return this;
    }
    normalize(array) {
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(array[0] / 255, array[1] / 255, array[2] / 255);
    }
    fromArray(array) {
        this.set(array[0], array[1], array[2]);
    }
    componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }
    rgbToHex(r, g, b) {
        const hexR = this.componentToHex(r);
        const hexG = this.componentToHex(g);
        const hexB = this.componentToHex(b);
        return `#${hexR}${hexG}${hexB}`;
    }
    hexIntToRgb(hex) {
        const r = hex >> 16;
        const g = hex >> 8 & 0xff;
        const b = hex & 0xff;
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(r, g, b);
    }
    hexStringToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)) : null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const enabled = true;
const log = (() => {
    if (!window.console || !console.log) {
        return () => {
            return;
        };
    }
    if (!enabled) return () => {
        return;
    };
    return Function.prototype.bind.call(console.log, console);
})();
/* harmony export (immutable) */ __webpack_exports__["a"] = log;

const clear = (() => {
    if (!window.console || !console.clear) {
        return () => {
            return;
        };
    }
    if (!enabled) return () => {
        return;
    };
    return Function.prototype.bind.call(console.clear, console);
})();
/* unused harmony export clear */

const debug = (() => {
    if (!window.console || !console.debug) {
        return () => {
            return;
        };
    }
    if (!enabled) return () => {
        return;
    };
    return Function.prototype.bind.call(console.debug, console);
})();
/* unused harmony export debug */

const info = (() => {
    if (!window.console || !console.info) {
        return () => {
            return;
        };
    }
    if (!enabled) return () => {
        return;
    };
    return Function.prototype.bind.call(console.info, console);
})();
/* unused harmony export info */

const warn = (() => {
    if (!window.console || !console.warn) {
        return () => {
            return;
        };
    }
    if (!enabled) return () => {
        return;
    };
    return Function.prototype.bind.call(console.warn, console);
})();
/* harmony export (immutable) */ __webpack_exports__["b"] = warn;

const error = (() => {
    if (!window.console || !console.error) {
        return () => {
            return;
        };
    }
    if (!enabled) return () => {
        return;
    };
    return Function.prototype.bind.call(console.error, console);
})();
/* unused harmony export error */


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://github.com/arboleya/happens
class EventDispatcher {
    on(event, fn) {
        this.validate(fn);
        this.init(event).push(fn);
    }
    off(event, fn) {
        const pool = this.init(event);
        pool.splice(pool.indexOf(fn), 1);
    }
    once(event, fn) {
        this.validate(fn);
        const wrapper = () => {
            this.off(event, wrapper);
            fn.apply(this, arguments);
        };
        this.on(event, wrapper);
    }
    emit(event, ...args) {
        const pool = this.init(event).slice(0);
        for (const i in pool) pool[i].apply(this, [].slice.call(arguments, 1));
    }
    validate(fn) {
        if (!(fn && fn instanceof Function)) throw new Error(fn + ' is not a Function');
    }
    init(event) {
        const tmp = this.listeners || (this.listeners = []);
        return tmp[event] || (tmp[event] = []);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventDispatcher;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["setup"] = setup;
/* harmony export (immutable) */ __webpack_exports__["updateProjectionView"] = updateProjectionView;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UniformBuffer__ = __webpack_require__(19);


// Global uniform buffers
const uniformBuffers = {};
// Create buffers when gl context is ready
function setup() {
    // ProjectionView
    const projectionViewData = new Float32Array(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create());
    uniformBuffers.projectionView = new __WEBPACK_IMPORTED_MODULE_1__UniformBuffer__["a" /* default */](projectionViewData);
}
// Update projectionView buffer data
function updateProjectionView(gl, projectionMatrix) {
    gl.bindBufferBase(gl.UNIFORM_BUFFER, 0, uniformBuffers.projectionView.buffer);
    gl.bindBuffer(gl.UNIFORM_BUFFER, uniformBuffers.projectionView.buffer);
    const projectionViewData = [...projectionMatrix];
    uniformBuffers.projectionView.data.set(projectionViewData, 0);
    gl.bufferSubData(gl.UNIFORM_BUFFER, 0, uniformBuffers.projectionView.data);
    gl.bindBuffer(gl.UNIFORM_BUFFER, null);
}
/* harmony default export */ __webpack_exports__["default"] = (uniformBuffers);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector3__ = __webpack_require__(2);


class Sphere {
    constructor(center = new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* default */](), radius = 0) {
        this.center = center;
        this.radius = radius;
    }
    copy(sphere) {
        this.center.copy(sphere.center);
        this.radius = sphere.radius;
    }
    applyMatrix(matrix) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].transformMat4(this.center.v, this.center.v, matrix);
        const scaling = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].getScaling(__WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create(), matrix);
        this.radius *= Math.max(scaling[0], scaling[1], scaling[2]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sphere;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector3__ = __webpack_require__(2);



class Camera {
    constructor(options) {
        this.projectionMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.worldInverseMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.isCamera = true;
        this.isPespectiveCamera = false;
        this.isOrthographicCamera = false;
        this.near = 0.1;
        this.far = 100;
        this.fov = 70;
        this.aspect = __WEBPACK_IMPORTED_MODULE_1__core_Constants__["RENDERER_DEFAULT_RATIO"];
        this.position = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */]();
        this.target = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */]();
        this.up = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */](0, 1, 0);
        Object.assign(this, options);
    }
    lookAt(x = 0, y = 0, z = 0) {
        this.target.set(x, y, z);
    }
    updateMatrixWorld() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(this.worldInverseMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].lookAt(this.worldInverseMatrix, this.position.v, this.target.v, this.up.v);
    }
    updateProjectionMatrix() {
        // override
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GL__ = __webpack_require__(0);

class UniformBuffer {
    constructor(data) {
        this.data = data;
        this.buffer = Object(__WEBPACK_IMPORTED_MODULE_0__GL__["createUniformBuffer"])(data);
    }
    setValues(values, offset = 0) {
        this.data.set(values, offset);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UniformBuffer;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ambientLightEs300", function() { return ambientLightEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ambientLightEs100", function() { return ambientLightEs100; });
const ambientLightEs300 = `
	uniform AmbientLight {
		vec4 color;
		vec4 intensity;
	} uAmbientLight;
`;
const ambientLightEs100 = `
	struct AmbientLight {
		vec3 color;
		float intensity;
	};
	uniform AmbientLight uAmbientLight;
`;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionalLightsEs300", function() { return directionalLightsEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionalLightsEs100", function() { return directionalLightsEs100; });
const directionalLightsEs300 = `
	struct DirectionalLight {
		vec4 position;
		vec4 color;
		vec4 intensity;
	};
	uniform DirectionalLights {
		DirectionalLight uDirectionalLights[#HOOK_DIRECTIONAL_LIGHTS];
	};
`;
const directionalLightsEs100 = `
	struct DirectionalLight {
		vec3 position;
		vec3 color;
		float intensity;
	};
	uniform DirectionalLight uDirectionalLights[#HOOK_DIRECTIONAL_LIGHTS];
`;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lambertEs300", function() { return lambertEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lambertEs100", function() { return lambertEs100; });
const lambertEs300 = `
	vec3 CalculateDirectionalLight(DirectionalLight light, vec3 normal) {
		vec3 lightDirection = normalize(light.position.xyz);
		// diffuse shading
		float diff = max(dot(lightDirection, normal), 0.0);

		vec3 ambientColor = vec3(0.5);
		float ambientIntensity = 0.5;

		#ifdef ambientLight
		ambientColor = uAmbientLight.color.rgb;
		ambientIntensity = uAmbientLight.intensity.x;
		#endif

		// combine results
		vec3 ambient = (ambientColor * ambientIntensity) * vDiffuse;
		vec3 diffuse = light.color.rgb * diff * vDiffuse;
		return (ambient + diffuse * light.intensity.x);
	}
`;
const lambertEs100 = `
	vec3 CalculateDirectionalLight(DirectionalLight light, vec3 normal) {
		vec3 lightDirection = normalize(light.position);
		// diffuse shading
		float diff = max(dot(lightDirection, normal), 0.0);

			vec3 ambientColor = vec3(0.5);
			float ambientIntensity = 0.5;

			#ifdef ambientLight
			ambientColor = uAmbientLight.color;
			ambientIntensity = uAmbientLight.intensity;
			#endif

			// combine results
		vec3 ambient = (ambientColor * ambientIntensity) * vDiffuse;
			vec3 diffuse = light.color * diff * vDiffuse;
		return (ambient + diffuse * light.intensity);
	}
`;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HdrLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse_hdr__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse_hdr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parse_hdr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ImageData__ = __webpack_require__(24);


function HdrLoader(src) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.responseType = 'arraybuffer';
        req.onreadystatechange = () => {
            if (req.readyState !== 4) return;
            if (req.readyState === 4 && req.status === 200) {
                const hdr = __WEBPACK_IMPORTED_MODULE_0_parse_hdr___default()(req.response);
                const image = new __WEBPACK_IMPORTED_MODULE_1__core_ImageData__["a" /* default */](hdr.shape[0], hdr.shape[1], hdr.data);
                resolve(image);
            } else {
                reject(req.status);
            }
        };
        req.open('GET', src, true);
        req.send();
    });
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ImageData {
    constructor(width, height, data) {
        this.width = width;
        this.height = height;
        this.data = data;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageData;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ImageLoader;
function ImageLoader(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = () => {
            reject(`Failed to load ${src}`);
        };
        image.src = src;
    });
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCanvas;
function createCanvas(width = 1, height = 1) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    return {
        canvas,
        ctx
    };
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Light {
    update() {
        return;
    }
    setValues(values, offset = 0) {
        this.data.set(values, offset);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Light;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FileLoader;
function FileLoader(url, responseType) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.responseType = responseType || '';
        req.onreadystatechange = () => {
            if (req.readyState !== 4) return;
            if (req.readyState === 4 && req.status === 200) {
                resolve(req.response, req.status);
            } else {
                reject(req.status);
            }
        };
        req.open('GET', url, true);
        req.send();
    });
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["fromMat4"] = fromMat4;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromMat2d"] = fromMat2d;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["normalFromMat4"] = normalFromMat4;
/* harmony export (immutable) */ __webpack_exports__["projection"] = projection;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);


/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b01 = a22 * a11 - a12 * a21;
  let b11 = -a22 * a10 + a12 * a20;
  let b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  let det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  out[0] = (a11 * a22 - a12 * a21);
  out[1] = (a02 * a21 - a01 * a22);
  out[2] = (a01 * a12 - a02 * a11);
  out[3] = (a12 * a20 - a10 * a22);
  out[4] = (a00 * a22 - a02 * a20);
  out[5] = (a02 * a10 - a00 * a12);
  out[6] = (a10 * a21 - a11 * a20);
  out[7] = (a01 * a20 - a00 * a21);
  out[8] = (a00 * a11 - a01 * a10);
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2];
  let a10 = a[3], a11 = a[4], a12 = a[5];
  let a20 = a[6], a21 = a[7], a22 = a[8];

  let b00 = b[0], b01 = b[1], b02 = b[2];
  let b10 = b[3], b11 = b[4], b12 = b[5];
  let b20 = b[6], b21 = b[7], b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],
    x = v[0], y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  let a00 = a[0], a01 = a[1], a02 = a[2],
    a10 = a[3], a11 = a[4], a12 = a[5],
    a20 = a[6], a21 = a[7], a22 = a[8],

    s = Math.sin(rad),
    c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
          a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}



/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
         a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
         a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["transpose"] = transpose;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["adjoint"] = adjoint;
/* harmony export (immutable) */ __webpack_exports__["determinant"] = determinant;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["translate"] = translate;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["fromTranslation"] = fromTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromScaling"] = fromScaling;
/* harmony export (immutable) */ __webpack_exports__["fromRotation"] = fromRotation;
/* harmony export (immutable) */ __webpack_exports__["fromXRotation"] = fromXRotation;
/* harmony export (immutable) */ __webpack_exports__["fromYRotation"] = fromYRotation;
/* harmony export (immutable) */ __webpack_exports__["fromZRotation"] = fromZRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslation"] = fromRotationTranslation;
/* harmony export (immutable) */ __webpack_exports__["fromQuat2"] = fromQuat2;
/* harmony export (immutable) */ __webpack_exports__["getTranslation"] = getTranslation;
/* harmony export (immutable) */ __webpack_exports__["getScaling"] = getScaling;
/* harmony export (immutable) */ __webpack_exports__["getRotation"] = getRotation;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScale"] = fromRotationTranslationScale;
/* harmony export (immutable) */ __webpack_exports__["fromRotationTranslationScaleOrigin"] = fromRotationTranslationScaleOrigin;
/* harmony export (immutable) */ __webpack_exports__["fromQuat"] = fromQuat;
/* harmony export (immutable) */ __webpack_exports__["frustum"] = frustum;
/* harmony export (immutable) */ __webpack_exports__["perspective"] = perspective;
/* harmony export (immutable) */ __webpack_exports__["perspectiveFromFieldOfView"] = perspectiveFromFieldOfView;
/* harmony export (immutable) */ __webpack_exports__["ortho"] = ortho;
/* harmony export (immutable) */ __webpack_exports__["lookAt"] = lookAt;
/* harmony export (immutable) */ __webpack_exports__["targetTo"] = targetTo;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["frob"] = frob;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalar"] = multiplyScalar;
/* harmony export (immutable) */ __webpack_exports__["multiplyScalarAndAdd"] = multiplyScalarAndAdd;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);


/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}


/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    let a01 = a[1], a02 = a[2], a03 = a[3];
    let a12 = a[6], a13 = a[7];
    let a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
  out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
  out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
  out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
  out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
  out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  let b00 = a00 * a11 - a01 * a10;
  let b01 = a00 * a12 - a02 * a10;
  let b02 = a00 * a13 - a03 * a10;
  let b03 = a01 * a12 - a02 * a11;
  let b04 = a01 * a13 - a03 * a11;
  let b05 = a02 * a13 - a03 * a12;
  let b06 = a20 * a31 - a21 * a30;
  let b07 = a20 * a32 - a22 * a30;
  let b08 = a20 * a33 - a23 * a30;
  let b09 = a21 * a32 - a22 * a31;
  let b10 = a21 * a33 - a23 * a31;
  let b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  let a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  let a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  let a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  let a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

  // Cache only the current line of the second matrix
  let b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
  out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
  out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

  b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
  out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
  out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
  out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
  out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  let x = v[0], y = v[1], z = v[2];
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
    out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
    out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  let x = v[0], y = v[1], z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;
  let a00, a01, a02, a03;
  let a10, a11, a12, a13;
  let a20, a21, a22, a23;
  let b00, b01, b02;
  let b10, b11, b12;
  let b20, b21, b22;

  if (len < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
  a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
  a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
  b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
  b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[0]  = a[0];
    out[1]  = a[1];
    out[2]  = a[2];
    out[3]  = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a20 = a[8];
  let a21 = a[9];
  let a22 = a[10];
  let a23 = a[11];

  if (a !== out) { // If the source and destination differ, copy the unchanged rows
    out[4]  = a[4];
    out[5]  = a[5];
    out[6]  = a[6];
    out[7]  = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  let a00 = a[0];
  let a01 = a[1];
  let a02 = a[2];
  let a03 = a[3];
  let a10 = a[4];
  let a11 = a[5];
  let a12 = a[6];
  let a13 = a[7];

  if (a !== out) { // If the source and destination differ, copy the unchanged last row
    out[8]  = a[8];
    out[9]  = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  let x = axis[0], y = axis[1], z = axis[2];
  let len = Math.sqrt(x * x + y * y + z * z);
  let s, c, t;

  if (len < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) { return null; }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = 1;
  out[1]  = 0;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = 0;
  out[2]  = -s;
  out[3]  = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0]  = c;
  out[1]  = s;
  out[2]  = 0;
  out[3]  = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
  let translation = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  let bx = -a[0], by = -a[1], bz = -a[2], bw = a[3],
  ax = a[4], ay = a[5], az = a[6], aw = a[7];

  let magnitude = bx * bx + by * by + bz * bz + bw * bw;
  //Only scale if it makes sense
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  let m11 = mat[0];
  let m12 = mat[1];
  let m13 = mat[2];
  let m21 = mat[4];
  let m22 = mat[5];
  let m23 = mat[6];
  let m31 = mat[8];
  let m32 = mat[9];
  let m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  let trace = mat[0] + mat[5] + mat[10];
  let S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if ((mat[0] > mat[5]) && (mat[0] > mat[10])) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;
  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let xy = x * y2;
  let xz = x * z2;
  let yy = y * y2;
  let yz = y * z2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  let sx = s[0];
  let sy = s[1];
  let sz = s[2];

  let ox = o[0];
  let oy = o[1];
  let oz = o[2];

  let out0 = (1 - (yy + zz)) * sx;
  let out1 = (xy + wz) * sx;
  let out2 = (xz - wy) * sx;
  let out4 = (xy - wz) * sy;
  let out5 = (1 - (xx + zz)) * sy;
  let out6 = (yz + wx) * sy;
  let out8 = (xz + wy) * sz;
  let out9 = (yz - wx) * sz;
  let out10 = (1 - (xx + yy)) * sz;

  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  let x = q[0], y = q[1], z = q[2], w = q[3];
  let x2 = x + x;
  let y2 = y + y;
  let z2 = z + z;

  let xx = x * x2;
  let yx = y * x2;
  let yy = y * y2;
  let zx = z * x2;
  let zy = z * y2;
  let zz = z * z2;
  let wx = w * x2;
  let wy = w * y2;
  let wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  let rl = 1 / (right - left);
  let tb = 1 / (top - bottom);
  let nf = 1 / (near - far);
  out[0] = (near * 2) * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = (near * 2) * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (far * near * 2) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  let f = 1.0 / Math.tan(fovy / 2);
  let nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  let upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
  let downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
  let leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
  let rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
  let xScale = 2.0 / (leftTan + rightTan);
  let yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = ((upTan - downTan) * yScale * 0.5);
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = (far * near) / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  let lr = 1 / (left - right);
  let bt = 1 / (bottom - top);
  let nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  let x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  let eyex = eye[0];
  let eyey = eye[1];
  let eyez = eye[2];
  let upx = up[0];
  let upy = up[1];
  let upz = up[2];
  let centerx = center[0];
  let centery = center[1];
  let centerz = center[2];

  if (Math.abs(eyex - centerx) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] &&
      Math.abs(eyey - centery) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] &&
      Math.abs(eyez - centerz) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  let eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  let z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  let len = z0*z0 + z1*z1 + z2*z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  let x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  len = x0*x0 + x1*x1 + x2*x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
          a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
          a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
          a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  out[6] = a[6] + (b[6] * scale);
  out[7] = a[7] + (b[7] * scale);
  out[8] = a[8] + (b[8] * scale);
  out[9] = a[9] + (b[9] * scale);
  out[10] = a[10] + (b[10] * scale);
  out[11] = a[11] + (b[11] * scale);
  out[12] = a[12] + (b[12] * scale);
  out[13] = a[13] + (b[13] * scale);
  out[14] = a[14] + (b[14] * scale);
  out[15] = a[15] + (b[15] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
         a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
         a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
         a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0  = a[0],  a1  = a[1],  a2  = a[2],  a3  = a[3];
  let a4  = a[4],  a5  = a[5],  a6  = a[6],  a7  = a[7];
  let a8  = a[8],  a9  = a[9],  a10 = a[10], a11 = a[11];
  let a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];

  let b0  = b[0],  b1  = b[1],  b2  = b[2],  b3  = b[3];
  let b4  = b[4],  b5  = b[5],  b6  = b[6],  b7  = b[7];
  let b8  = b[8],  b9  = b[9],  b10 = b[10], b11 = b[11];
  let b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];

  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link mat4.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["identity"] = identity;
/* harmony export (immutable) */ __webpack_exports__["setAxisAngle"] = setAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["getAxisAngle"] = getAxisAngle;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["calculateW"] = calculateW;
/* harmony export (immutable) */ __webpack_exports__["slerp"] = slerp;
/* harmony export (immutable) */ __webpack_exports__["invert"] = invert;
/* harmony export (immutable) */ __webpack_exports__["conjugate"] = conjugate;
/* harmony export (immutable) */ __webpack_exports__["fromMat3"] = fromMat3;
/* harmony export (immutable) */ __webpack_exports__["fromEuler"] = fromEuler;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mat3_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vec3_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vec4_js__ = __webpack_require__(33);





/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  let s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  let rad = Math.acos(q[3]) * 2.0;
  let s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let by = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bz = Math.sin(rad), bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  let x = a[0], y = a[1], z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0], ay = a[1], az = a[2], aw = a[3];
  let bx = b[0], by = b[1], bz = b[2], bw = b[3];

  let omega, cosom, sinom, scale0, scale1;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if ( cosom < 0.0 ) {
    cosom = -cosom;
    bx = - bx;
    by = - by;
    bz = - bz;
    bw = - bw;
  }
  // calculate coefficients
  if ( (1.0 - cosom) > 0.000001 ) {
    // standard case (slerp)
    omega  = Math.acos(cosom);
    sinom  = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let dot = a0*a0 + a1*a1 + a2*a2 + a3*a3;
  let invDot = dot ? 1.0/dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0*invDot;
  out[1] = -a1*invDot;
  out[2] = -a2*invDot;
  out[3] = a3*invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  let fTrace = m[0] + m[4] + m[8];
  let fRoot;

  if ( fTrace > 0.0 ) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0);  // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5/fRoot;  // 1/(4w)
    out[0] = (m[5]-m[7])*fRoot;
    out[1] = (m[6]-m[2])*fRoot;
    out[2] = (m[1]-m[3])*fRoot;
  } else {
    // |w| <= 1/2
    let i = 0;
    if ( m[4] > m[0] )
      i = 1;
    if ( m[8] > m[i*3+i] )
      i = 2;
    let j = (i+1)%3;
    let k = (i+2)%3;

    fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j*3+k] - m[k*3+j]) * fRoot;
    out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
    out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    let halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;

    let sx = Math.sin(x);
    let cx = Math.cos(x);
    let sy = Math.sin(y);
    let cy = Math.cos(y);
    let sz = Math.sin(z);
    let cz = Math.cos(z);

    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;

    return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
const clone = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["b" /* clone */];
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;


/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
const fromValues = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["g" /* fromValues */];
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;


/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
const copy = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["c" /* copy */];
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;


/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
const set = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["l" /* set */];
/* harmony export (immutable) */ __webpack_exports__["set"] = set;


/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
const add = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["a" /* add */];
/* harmony export (immutable) */ __webpack_exports__["add"] = add;


/**
 * Alias for {@link quat.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
const scale = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["k" /* scale */];
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;


/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["d" /* dot */];
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;


/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */
const lerp = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["i" /* lerp */];
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;


/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["h" /* length */];
/* harmony export (immutable) */ __webpack_exports__["length"] = length;


/**
 * Alias for {@link quat.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["m" /* squaredLength */];
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;


/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
const normalize = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["j" /* normalize */];
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;


/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const exactEquals = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["f" /* exactEquals */];
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;


/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
const equals = __WEBPACK_IMPORTED_MODULE_3__vec4_js__["e" /* equals */];
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;


/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
const rotationTo = (function() {
  let tmpvec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["create"]();
  let xUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["fromValues"](1,0,0);
  let yUnitVec3 = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["fromValues"](0,1,0);

  return function(out, a, b) {
    let dot = __WEBPACK_IMPORTED_MODULE_2__vec3_js__["dot"](a, b);
    if (dot < -0.999999) {
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, xUnitVec3, a);
      if (__WEBPACK_IMPORTED_MODULE_2__vec3_js__["len"](tmpvec3) < 0.000001)
        __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, yUnitVec3, a);
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      __WEBPACK_IMPORTED_MODULE_2__vec3_js__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
})();
/* harmony export (immutable) */ __webpack_exports__["rotationTo"] = rotationTo;


/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}());
/* harmony export (immutable) */ __webpack_exports__["sqlerp"] = sqlerp;


/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
const setAxes = (function() {
  let matr = __WEBPACK_IMPORTED_MODULE_1__mat3_js__["create"]();

  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
})();
/* harmony export (immutable) */ __webpack_exports__["setAxes"] = setAxes;



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["hermite"] = hermite;
/* harmony export (immutable) */ __webpack_exports__["bezier"] = bezier;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformQuat"] = transformQuat;
/* harmony export (immutable) */ __webpack_exports__["rotateX"] = rotateX;
/* harmony export (immutable) */ __webpack_exports__["rotateY"] = rotateY;
/* harmony export (immutable) */ __webpack_exports__["rotateZ"] = rotateZ;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);


/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
  var out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return Math.sqrt(x*x + y*y + z*z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  return x*x + y*y + z*z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  return x*x + y*y + z*z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let len = x*x + y*y + z*z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  let ax = a[0], ay = a[1], az = a[2];
  let bx = b[0], by = b[1], bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  let factorTimes2 = t * t;
  let factor1 = factorTimes2 * (2 * t - 3) + 1;
  let factor2 = factorTimes2 * (t - 2) + t;
  let factor3 = factorTimes2 * (t - 1);
  let factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  let inverseFactor = 1 - t;
  let inverseFactorTimesTwo = inverseFactor * inverseFactor;
  let factorTimes2 = t * t;
  let factor1 = inverseFactorTimesTwo * inverseFactor;
  let factor2 = 3 * t * inverseFactorTimesTwo;
  let factor3 = 3 * factorTimes2 * inverseFactor;
  let factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  let r = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 * Math.PI;
  let z = (__WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0) - 1.0;
  let zScale = Math.sqrt(1.0-z*z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  let w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  let x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    let qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    let x = a[0], y = a[1], z = a[2];
    // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    let uvx = qy * z - qz * y,
        uvy = qz * x - qx * z,
        uvz = qx * y - qy * x;
    // var uuv = vec3.cross([], qvec, uv);
    let uuvx = qy * uvz - qz * uvy,
        uuvy = qz * uvx - qx * uvz,
        uuvz = qx * uvy - qy * uvx;
    // vec3.scale(uv, uv, 2 * w);
    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  r[1] = p[1];
  r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
  let p = [], r=[];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let tempA = fromValues(a[0], a[1], a[2]);
  let tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  let cosine = dot(tempA, tempB);

  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2];
  let b0 = b[0], b1 = b[1], b2 = b[2];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec3.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec3.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec3.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec3.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 3;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* harmony export (immutable) */ __webpack_exports__["b"] = clone;
/* harmony export (immutable) */ __webpack_exports__["g"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["c"] = copy;
/* harmony export (immutable) */ __webpack_exports__["l"] = set;
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* unused harmony export subtract */
/* unused harmony export multiply */
/* unused harmony export divide */
/* unused harmony export ceil */
/* unused harmony export floor */
/* unused harmony export min */
/* unused harmony export max */
/* unused harmony export round */
/* harmony export (immutable) */ __webpack_exports__["k"] = scale;
/* unused harmony export scaleAndAdd */
/* unused harmony export distance */
/* unused harmony export squaredDistance */
/* harmony export (immutable) */ __webpack_exports__["h"] = length;
/* harmony export (immutable) */ __webpack_exports__["m"] = squaredLength;
/* unused harmony export negate */
/* unused harmony export inverse */
/* harmony export (immutable) */ __webpack_exports__["j"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["d"] = dot;
/* harmony export (immutable) */ __webpack_exports__["i"] = lerp;
/* unused harmony export random */
/* unused harmony export transformMat4 */
/* unused harmony export transformQuat */
/* unused harmony export str */
/* harmony export (immutable) */ __webpack_exports__["f"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["e"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);


/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  let x = b[0] - a[0];
  let y = b[1] - a[1];
  let z = b[2] - a[2];
  let w = b[3] - a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return Math.sqrt(x*x + y*y + z*z + w*w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  return x*x + y*y + z*z + w*w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  let x = a[0];
  let y = a[1];
  let z = a[2];
  let w = a[3];
  let len = x*x + y*y + z*z + w*w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  let ax = a[0];
  let ay = a[1];
  let az = a[2];
  let aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;
  var v1, v2, v3, v4;
  var s1, s2;
  do {
    v1 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    v2 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);
  do {
    v3 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    v4 = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  let x = a[0], y = a[1], z = a[2], w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  let x = a[0], y = a[1], z = a[2];
  let qx = q[0], qy = q[1], qz = q[2], qw = q[3];

  // calculate quat * vec
  let ix = qw * x + qy * z - qz * y;
  let iy = qw * y + qz * x - qx * z;
  let iz = qw * z + qx * y - qy * x;
  let iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */


/**
 * Alias for {@link vec4.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link vec4.divide}
 * @function
 */
const div = divide;
/* unused harmony export div */


/**
 * Alias for {@link vec4.distance}
 * @function
 */
const dist = distance;
/* unused harmony export dist */


/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* unused harmony export sqrDist */


/**
 * Alias for {@link vec4.length}
 * @function
 */
const len = length;
/* unused harmony export len */


/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* unused harmony export sqrLen */


/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 4;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
    }

    return a;
  };
})();
/* unused harmony export forEach */



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector3__ = __webpack_require__(2);



let axisAngle = 0;
const quaternionAxisAngle = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
class Object3D {
    constructor() {
        this.children = [];
        this.localMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.modelMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.modelViewMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
        this.matrixAutoUpdate = true;
        this.position = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */]();
        this.rotation = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */]();
        this.scale = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */](1, 1, 1);
        this.isObject3D = true;
        this.quaternion = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].create();
        this.quaternionLookAt = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].create();
        this.lookAtUp = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create(); // needs to be [0, 0, 0] although it should be [0, 1, 0]
    }
    updateMatrix(camera) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(this.modelViewMatrix);
        if (this.matrixAutoUpdate) {
            // Reset
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(this.localMatrix);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(this.modelMatrix);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].identity(this.quaternion);
            // If Object3D has a parent, copy the computed modelMatrix into localMatrix
            if (this.parent) {
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].copy(this.localMatrix, this.parent.modelMatrix);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].multiply(this.modelMatrix, this.modelMatrix, this.localMatrix);
            }
            // Use lookAt quat as base
            // Note: this.rotation isn't updated if lookAt's used
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].copy(this.quaternion, this.quaternionLookAt);
            // Apply local transitions to modelMatrix
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].translate(this.modelMatrix, this.modelMatrix, this.position.v);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].rotateX(this.quaternion, this.quaternion, this.rotation.x);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].rotateY(this.quaternion, this.quaternion, this.rotation.y);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].rotateZ(this.quaternion, this.quaternion, this.rotation.z);
            axisAngle = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].getAxisAngle(quaternionAxisAngle, this.quaternion);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].rotate(this.modelMatrix, this.modelMatrix, axisAngle, quaternionAxisAngle);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].scale(this.modelMatrix, this.modelMatrix, this.scale.v);
        }
        // Model View Matrix
        if (camera) {
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].multiply(this.modelViewMatrix, camera.worldInverseMatrix, this.modelMatrix);
        }
    }
    lookAt(target) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["c" /* quat */].identity(this.quaternionLookAt);
        this.quaternionLookAt = Object(__WEBPACK_IMPORTED_MODULE_1__math_Utils__["lookAt"])(this.position.v, target.v, this.lookAtUp);
    }
    setParent(parent) {
        this.unParent();
        if (parent.isObject3D) {
            parent.children.push(this);
            this.parent = parent;
        }
    }
    unParent() {
        if (this.parent === undefined) return;
        const objectIndex = this.parent.children.indexOf(this);
        if (objectIndex !== -1) {
            this.parent.children.splice(objectIndex, 1);
            this.parent = null;
        }
    }
    dispose() {
        this.unParent();
        this.children = [];
        this.localMatrix = null;
        this.modelMatrix = null;
        this.position = null;
        this.rotation = null;
        this.scale = null;
        this.quaternion = null;
        this.isObject3D = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Object3D;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GL__ = __webpack_require__(0);


let gl;
class Vao {
    constructor() {
        gl = __WEBPACK_IMPORTED_MODULE_1__GL__["get"]();
        if (gl instanceof WebGL2RenderingContext) {
            this.vao = gl.createVertexArray();
        } else if (__WEBPACK_IMPORTED_MODULE_0__Capabilities__["extensions"].vertexArrayObject) {
            this.vao = __WEBPACK_IMPORTED_MODULE_0__Capabilities__["extensions"].vertexArrayObject.createVertexArrayOES();
        }
    }
    bind() {
        if (gl instanceof WebGL2RenderingContext) {
            gl.bindVertexArray(this.vao);
        } else if (__WEBPACK_IMPORTED_MODULE_0__Capabilities__["extensions"].vertexArrayObject) {
            __WEBPACK_IMPORTED_MODULE_0__Capabilities__["extensions"].vertexArrayObject.bindVertexArrayOES(this.vao);
        }
    }
    unbind() {
        if (gl instanceof WebGL2RenderingContext) {
            gl.bindVertexArray(null);
        } else if (__WEBPACK_IMPORTED_MODULE_0__Capabilities__["extensions"].vertexArrayObject) {
            __WEBPACK_IMPORTED_MODULE_0__Capabilities__["extensions"].vertexArrayObject.bindVertexArrayOES(null);
        }
    }
    dispose() {
        if (gl instanceof WebGL2RenderingContext) {
            gl.deleteVertexArray(this.vao);
        } else if (__WEBPACK_IMPORTED_MODULE_0__Capabilities__["extensions"].vertexArrayObject) {
            __WEBPACK_IMPORTED_MODULE_0__Capabilities__["extensions"].vertexArrayObject.deleteVertexArrayOES(this.vao);
        }
        this.vao = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vao;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector3__ = __webpack_require__(2);


const diff = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
const edge1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
const edge2 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
const normal = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
const v1 = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
class Ray {
    constructor() {
        this.origin = new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* default */]();
        this.direction = new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* default */]();
    }
    set(origin, direction) {
        this.origin.copy(origin);
        this.direction.copy(direction);
    }
    intersectTriangle(a, b, c, culling = true) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(edge1, b.v, a.v);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(edge2, c.v, a.v);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(normal, edge1, edge2);
        // Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
        // E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
        //   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
        //   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
        //   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
        // console.log('normal', normal);
        let DdN = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(this.direction.v, normal);
        let sign;
        // console.log('normal', normal);
        if (DdN > 0) {
            if (culling) return null;
            sign = 1;
        } else if (DdN < 0) {
            sign = -1;
            DdN = -DdN;
        } else {
            return null;
        }
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(diff, this.origin.v, a.v);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(edge2, diff, edge2);
        const DdQxE2 = sign * __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(this.direction.v, edge2);
        // b1 < 0, no intersection
        if (DdQxE2 < 0) {
            return null;
        }
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(edge1, edge1, diff);
        const DdE1xQ = sign * __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(this.direction.v, edge1);
        // b2 < 0, no intersection
        if (DdE1xQ < 0) {
            return null;
        }
        // b1+b2 > 1, no intersection
        if (DdQxE2 + DdE1xQ > DdN) {
            return null;
        }
        // Line intersects triangle, check if ray does.
        const QdN = -sign * __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(diff, normal);
        // t < 0, no intersection
        if (QdN < 0) {
            return null;
        }
        const result = new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* default */]();
        result.copy(this.direction).scale(QdN / DdN).add(this.origin);
        return result;
    }
    at(scale) {
        const result = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].fromValues(this.direction.v[0], this.direction.v[1], this.direction.v[2]);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].scale(result, result, scale);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].add(result, result, this.origin.v);
    }
    intersectsSphere(sphere) {
        return this.distanceToPoint(sphere.center) <= sphere.radius;
    }
    distanceToPoint(point) {
        return Math.sqrt(this.distanceSqToPoint(point));
    }
    distanceSqToPoint(point) {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].subtract(v1, point.v, this.origin.v);
        const directionDistance = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].dot(v1, this.direction.v);
        // point behind the ray
        if (directionDistance < 0) {
            return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].squaredDistance(this.origin.v, point.v);
        }
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(v1, this.direction.v);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].scale(v1, v1, directionDistance);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].add(v1, v1, this.origin.v);
        return __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].squaredDistance(v1, point.v);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Ray;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
    try {
        const renderingContext = WebGLRenderingContext;
        const canvasWebgl = document.createElement('canvas');
        const canvasWebg2 = document.createElement('canvas');
        const webgl2Context = canvasWebg2.getContext('webgl2');
        const webglContext = canvasWebgl.getContext('webgl') || canvasWebgl.getContext('experimental-webgl');
        if (renderingContext === undefined) {
            return false;
        }
        return {
            webgl: !!webglContext,
            webgl2: !!webgl2Context
        };
    } catch (error) {
        return false;
    }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointLightsEs300", function() { return pointLightsEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointLightsEs100", function() { return pointLightsEs100; });
const pointLightsEs300 = `
	struct PointLight {
		vec4 position;
		vec4 color;
		vec4 specularColor;
		vec4 shininess;
		vec4 intensity;
	};
	uniform PointLights {
		PointLight uPointLights[#HOOK_POINT_LIGHTS];
	};
`;
const pointLightsEs100 = `
	struct PointLight {
		vec3 position;
		vec3 color;
		vec3 specularColor;
		float shininess;
		float intensity;
	};
	uniform PointLight uPointLights[#HOOK_POINT_LIGHTS];
`;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const definePI = `
#define PI 3.141592653589793
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = definePI;

const definePITwo = `
#define TWO_PI 6.283185307179586
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = definePITwo;

const mapLinear = `
float mapLinear(float value, float in_min, float in_max, float out_min, float out_max) {
	return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
`;
/* unused harmony export mapLinear */

/* harmony default export */ __webpack_exports__["a"] = ({
    definePI,
    definePITwo,
    mapLinear
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["flatten"] = flatten;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector2__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector3__ = __webpack_require__(2);


function flatten(arr /* [number[] | Vector3[] | Vector2[]] */) {
    return arr.reduce((a, b) => {
        if (b instanceof __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* default */] || b instanceof __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* default */]) {
            return a.concat(...b.v);
        }
        return a.concat(b);
    }, []);
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_GL__ = __webpack_require__(0);

let gl;
class BufferAttribute {
    constructor(type, data, // Float32Array | Uint16Array | Uint32Array, (typings are wrong for createBuffer)
    itemSize, shaderAttribute = true) {
        this.type = type;
        this.itemSize = itemSize;
        this.numItems = data.length / itemSize;
        this.buffer = __WEBPACK_IMPORTED_MODULE_0__core_GL__["createBuffer"](type, data);
        this.shaderAttribute = shaderAttribute;
    }
    bind() {
        gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
        gl.bindBuffer(this.type, this.buffer);
    }
    unbind() {
        gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
        gl.bindBuffer(this.type, null);
    }
    update(data) {
        this.bind();
        gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
        gl.bufferSubData(this.type, 0, data);
        this.unbind();
    }
    dispose() {
        gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
        gl.deleteBuffer(this.buffer);
        this.buffer = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BufferAttribute;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Geometry__ = __webpack_require__(7);

class LineGeometry extends __WEBPACK_IMPORTED_MODULE_0__Geometry__["a" /* default */] {
    constructor(bufferVertices) {
        const vertices = [];
        let i3 = 0;
        let i6 = 0;
        const length = bufferVertices.length / 3;
        for (let i = 0; i < length; i += 1) {
            i3 = i * 3;
            i6 = i * 6;
            if (i < length - 1) {
                vertices[i6] = bufferVertices[i3];
                vertices[i6 + 1] = bufferVertices[i3 + 1];
                vertices[i6 + 2] = bufferVertices[i3 + 2];
                vertices[i6 + 3] = bufferVertices[i3 + 3];
                vertices[i6 + 4] = bufferVertices[i3 + 4];
                vertices[i6 + 5] = bufferVertices[i3 + 5];
            }
        }
        super(new Float32Array(vertices));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LineGeometry;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Geometry__ = __webpack_require__(7);

class SphereGeometry extends __WEBPACK_IMPORTED_MODULE_0__Geometry__["a" /* default */] {
    constructor(radius = 1, axisDivisions = 8, heightDivisons = 8, colors) {
        // https://github.com/gpjt/webgl-lessons/blob/master/lesson12/index.html
        const vertices = [];
        const normals = [];
        const uvs = [];
        for (let axisNumber = 0; axisNumber <= axisDivisions; axisNumber += 1) {
            const theta = axisNumber * Math.PI / axisDivisions;
            const sinTheta = Math.sin(theta);
            const cosTheta = Math.cos(theta);
            for (let heightNumber = 0; heightNumber <= heightDivisons; heightNumber += 1) {
                const phi = heightNumber * 2 * Math.PI / heightDivisons;
                const sinPhi = Math.sin(phi);
                const cosPhi = Math.cos(phi);
                const x = cosPhi * sinTheta;
                const y = cosTheta;
                const z = sinPhi * sinTheta;
                const u = 1 - heightNumber / heightDivisons;
                const v = 1 - axisNumber / axisDivisions;
                normals.push(x);
                normals.push(y);
                normals.push(z);
                uvs.push(u);
                uvs.push(v);
                vertices.push(radius * x);
                vertices.push(radius * y);
                vertices.push(radius * z);
            }
        }
        const indices = [];
        for (let axisNumber = 0; axisNumber < axisDivisions; axisNumber += 1) {
            for (let heightNumber = 0; heightNumber < heightDivisons; heightNumber += 1) {
                const first = axisNumber * (heightDivisons + 1) + heightNumber;
                const second = first + heightDivisons + 1;
                indices.push(first);
                indices.push(second);
                indices.push(first + 1);
                indices.push(second);
                indices.push(second + 1);
                indices.push(first + 1);
            }
        }
        super(new Float32Array(vertices), new Uint16Array(indices), new Float32Array(normals), new Float32Array(uvs), colors);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SphereGeometry;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/**
  A javascript Bezier curve library by Pomax.

  Based on http://pomax.github.io/bezierinfo

  This code is MIT licensed.
**/
(function() {
  "use strict";

  // math-inlining.
  var abs = Math.abs,
      min = Math.min,
      max = Math.max,
      acos = Math.acos,
      sqrt = Math.sqrt,
      pi = Math.PI,
      // a zero coordinate, which is surprisingly useful
      ZERO = {x:0,y:0,z:0};

  // quite needed
  var utils = __webpack_require__(45);

  // not quite needed, but eventually this'll be useful...
  var PolyBezier = __webpack_require__(95);

  /**
   * Bezier curve constructor. The constructor argument can be one of three things:
   *
   * 1. array/4 of {x:..., y:..., z:...}, z optional
   * 2. numerical array/8 ordered x1,y1,x2,y2,x3,y3,x4,y4
   * 3. numerical array/12 ordered x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4
   *
   */
  var Bezier = function(coords) {
    var args = (coords && coords.forEach) ? coords : [].slice.call(arguments);
    var coordlen = false;
    if(typeof args[0] === "object") {
      coordlen = args.length;
      var newargs = [];
      args.forEach(function(point) {
        ['x','y','z'].forEach(function(d) {
          if(typeof point[d] !== "undefined") {
            newargs.push(point[d]);
          }
        });
      });
      args = newargs;
    }
    var higher = false;
    var len = args.length;
    if (coordlen) {
      if(coordlen>4) {
        if (arguments.length !== 1) {
          throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
        }
        higher = true;
      }
    } else {
      if(len!==6 && len!==8 && len!==9 && len!==12) {
        if (arguments.length !== 1) {
          throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
        }
      }
    }
    var _3d = (!higher && (len === 9 || len === 12)) || (coords && coords[0] && typeof coords[0].z !== "undefined");
    this._3d = _3d;
    var points = [];
    for(var idx=0, step=(_3d ? 3 : 2); idx<len; idx+=step) {
      var point = {
        x: args[idx],
        y: args[idx+1]
      };
      if(_3d) { point.z = args[idx+2] };
      points.push(point);
    }
    this.order = points.length - 1;
    this.points = points;
    var dims = ['x','y'];
    if(_3d) dims.push('z');
    this.dims = dims;
    this.dimlen = dims.length;

    (function(curve) {
      var order = curve.order;
      var points = curve.points;
      var a = utils.align(points, {p1:points[0], p2:points[order]});
      for(var i=0; i<a.length; i++) {
        if(abs(a[i].y) > 0.0001) {
          curve._linear = false;
          return;
        }
      }
      curve._linear = true;
    }(this));

    this._t1 = 0;
    this._t2 = 1;
    this.update();
  };

  Bezier.fromSVG = function(svgString) {
    var list = svgString.match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g).map(parseFloat);
    var relative = /[cq]/.test(svgString);
    if(!relative) return new Bezier(list);
    list = list.map(function(v,i) {
      return i < 2 ? v : v + list[i % 2];
    });
    return new Bezier(list);
  };

  function getABC(n,S,B,E,t) {
    if(typeof t === "undefined") { t = 0.5; }
    var u = utils.projectionratio(t,n),
        um = 1-u,
        C = {
          x: u*S.x + um*E.x,
          y: u*S.y + um*E.y
        },
        s = utils.abcratio(t,n),
        A = {
          x: B.x + (B.x-C.x)/s,
          y: B.y + (B.y-C.y)/s
        };
    return { A:A, B:B, C:C };
  }

  Bezier.quadraticFromPoints = function(p1,p2,p3, t) {
    if(typeof t === "undefined") { t = 0.5; }
    // shortcuts, although they're really dumb
    if(t===0) { return new Bezier(p2,p2,p3); }
    if(t===1) { return new Bezier(p1,p2,p2); }
    // real fitting.
    var abc = getABC(2,p1,p2,p3,t);
    return new Bezier(p1, abc.A, p3);
  };

  Bezier.cubicFromPoints = function(S,B,E, t,d1) {
    if(typeof t === "undefined") { t = 0.5; }
    var abc = getABC(3,S,B,E,t);
    if(typeof d1 === "undefined") { d1 = utils.dist(B,abc.C); }
    var d2 = d1 * (1-t)/t;

    var selen = utils.dist(S,E),
        lx = (E.x-S.x)/selen,
        ly = (E.y-S.y)/selen,
        bx1 = d1 * lx,
        by1 = d1 * ly,
        bx2 = d2 * lx,
        by2 = d2 * ly;
    // derivation of new hull coordinates
    var e1  = { x: B.x - bx1, y: B.y - by1 },
        e2  = { x: B.x + bx2, y: B.y + by2 },
        A = abc.A,
        v1  = { x: A.x + (e1.x-A.x)/(1-t), y: A.y + (e1.y-A.y)/(1-t) },
        v2  = { x: A.x + (e2.x-A.x)/(t), y: A.y + (e2.y-A.y)/(t) },
        nc1 = { x: S.x + (v1.x-S.x)/(t), y: S.y + (v1.y-S.y)/(t) },
        nc2 = { x: E.x + (v2.x-E.x)/(1-t), y: E.y + (v2.y-E.y)/(1-t) };
    // ...done
    return new Bezier(S,nc1,nc2,E);
  };

  var getUtils = function() {
    return utils;
  };

  Bezier.getUtils = getUtils;

  Bezier.prototype = {
    getUtils: getUtils,
    valueOf: function() {
      return this.toString();
    },
    toString: function() {
      return utils.pointsToString(this.points);
    },
    toSVG: function(relative) {
      if(this._3d) return false;
      var p = this.points,
          x = p[0].x,
          y = p[0].y,
          s = ["M", x, y, (this.order===2 ? "Q":"C")];
      for(var i=1, last=p.length; i<last; i++) {
        s.push(p[i].x);
        s.push(p[i].y);
      }
      return s.join(" ");
    },
    update: function() {
      // one-time compute derivative coordinates
      this.dpoints = [];
      for(var p=this.points, d=p.length, c=d-1; d>1; d--, c--) {
        var list = [];
        for(var j=0, dpt; j<c; j++) {
          dpt = {
            x: c * (p[j+1].x - p[j].x),
            y: c * (p[j+1].y - p[j].y)
          };
          if(this._3d) {
            dpt.z = c * (p[j+1].z - p[j].z);
          }
          list.push(dpt);
        }
        this.dpoints.push(list);
        p = list;
      };
      this.computedirection();
    },
    computedirection: function() {
      var points = this.points;
      var angle = utils.angle(points[0], points[this.order], points[1]);
      this.clockwise = angle > 0;
    },
    length: function() {
      return utils.length(this.derivative.bind(this));
    },
    _lut: [],
    getLUT: function(steps) {
      steps = steps || 100;
      if (this._lut.length === steps) { return this._lut; }
      this._lut = [];
      for(var t=0; t<=steps; t++) {
        this._lut.push(this.compute(t/steps));
      }
      return this._lut;
    },
    on: function(point, error) {
      error = error || 5;
      var lut = this.getLUT(), hits = [], c, t=0;
      for(var i=0; i<lut.length; i++) {
        c = lut[i];
        if (utils.dist(c,point) < error) {
          hits.push(c)
          t += i / lut.length;
        }
      }
      if(!hits.length) return false;
      return t /= hits.length;
    },
    project: function(point) {
      // step 1: coarse check
      var LUT = this.getLUT(), l = LUT.length-1,
          closest = utils.closest(LUT, point),
          mdist = closest.mdist,
          mpos = closest.mpos;
      if (mpos===0 || mpos===l) {
        var t = mpos/l, pt = this.compute(t);
        pt.t = t;
        pt.d = mdist;
        return pt;
      }

      // step 2: fine check
      var ft, t, p, d,
          t1 = (mpos-1)/l,
          t2 = (mpos+1)/l,
          step = 0.1/l;
      mdist += 1;
      for(t=t1,ft=t; t<t2+step; t+=step) {
        p = this.compute(t);
        d = utils.dist(point, p);
        if (d<mdist) {
          mdist = d;
          ft = t;
        }
      }
      p = this.compute(ft);
      p.t = ft;
      p.d = mdist;
      return p;
    },
    get: function(t) {
      return this.compute(t);
    },
    point: function(idx) {
      return this.points[idx];
    },
    compute: function(t) {
      // shortcuts
      if(t===0) { return this.points[0]; }
      if(t===1) { return this.points[this.order]; }

      var p = this.points;
      var mt = 1-t;

      // linear?
      if(this.order===1) {
        ret = {
          x: mt*p[0].x + t*p[1].x,
          y: mt*p[0].y + t*p[1].y
        };
        if (this._3d) { ret.z = mt*p[0].z + t*p[1].z; }
        return ret;
      }

      // quadratic/cubic curve?
      if(this.order<4) {
        var mt2 = mt*mt,
            t2 = t*t,
            a,b,c,d = 0;
        if(this.order===2) {
          p = [p[0], p[1], p[2], ZERO];
          a = mt2;
          b = mt*t*2;
          c = t2;
        }
        else if(this.order===3) {
          a = mt2*mt;
          b = mt2*t*3;
          c = mt*t2*3;
          d = t*t2;
        }
        var ret = {
          x: a*p[0].x + b*p[1].x + c*p[2].x + d*p[3].x,
          y: a*p[0].y + b*p[1].y + c*p[2].y + d*p[3].y
        };
        if(this._3d) {
          ret.z = a*p[0].z + b*p[1].z + c*p[2].z + d*p[3].z;
        }
        return ret;
      }

      // higher order curves: use de Casteljau's computation
      var dCpts = JSON.parse(JSON.stringify(this.points));
      while(dCpts.length > 1) {
        for (var i=0; i<dCpts.length-1; i++) {
          dCpts[i] = {
            x: dCpts[i].x + (dCpts[i+1].x - dCpts[i].x) * t,
            y: dCpts[i].y + (dCpts[i+1].y - dCpts[i].y) * t
          };
          if (typeof dCpts[i].z !== "undefined") {
            dCpts[i] = dCpts[i].z + (dCpts[i+1].z - dCpts[i].z) * t
          }
        }
        dCpts.splice(dCpts.length-1, 1);
      }
      return dCpts[0];
    },
    raise: function() {
      var p = this.points, np = [p[0]], i, k=p.length, pi, pim;
      for (var i=1; i<k; i++) {
        pi = p[i];
        pim = p[i-1];
        np[i] = {
          x: (k-i)/k * pi.x + i/k * pim.x,
          y: (k-i)/k * pi.y + i/k * pim.y
        };
      }
      np[k] = p[k-1];
      return new Bezier(np);
    },
    derivative: function(t) {
      var mt = 1-t,
          a,b,c=0,
          p = this.dpoints[0];
      if(this.order===2) { p = [p[0], p[1], ZERO]; a = mt; b = t; }
      if(this.order===3) { a = mt*mt; b = mt*t*2; c = t*t; }
      var ret = {
        x: a*p[0].x + b*p[1].x + c*p[2].x,
        y: a*p[0].y + b*p[1].y + c*p[2].y
      };
      if(this._3d) {
        ret.z = a*p[0].z + b*p[1].z + c*p[2].z;
      }
      return ret;
    },
    inflections: function() {
      return utils.inflections(this.points);
    },
    normal: function(t) {
      return this._3d ? this.__normal3(t) : this.__normal2(t);
    },
    __normal2: function(t) {
      var d = this.derivative(t);
      var q = sqrt(d.x*d.x + d.y*d.y)
      return { x: -d.y/q, y: d.x/q };
    },
    __normal3: function(t) {
      // see http://stackoverflow.com/questions/25453159
      var r1 = this.derivative(t),
          r2 = this.derivative(t+0.01),
          q1 = sqrt(r1.x*r1.x + r1.y*r1.y + r1.z*r1.z),
          q2 = sqrt(r2.x*r2.x + r2.y*r2.y + r2.z*r2.z);
      r1.x /= q1; r1.y /= q1; r1.z /= q1;
      r2.x /= q2; r2.y /= q2; r2.z /= q2;
      // cross product
      var c = {
        x: r2.y*r1.z - r2.z*r1.y,
        y: r2.z*r1.x - r2.x*r1.z,
        z: r2.x*r1.y - r2.y*r1.x
      };
      var m = sqrt(c.x*c.x + c.y*c.y + c.z*c.z);
      c.x /= m; c.y /= m; c.z /= m;
      // rotation matrix
      var R = [   c.x*c.x,   c.x*c.y-c.z, c.x*c.z+c.y,
                c.x*c.y+c.z,   c.y*c.y,   c.y*c.z-c.x,
                c.x*c.z-c.y, c.y*c.z+c.x,   c.z*c.z    ];
      // normal vector:
      var n = {
        x: R[0] * r1.x + R[1] * r1.y + R[2] * r1.z,
        y: R[3] * r1.x + R[4] * r1.y + R[5] * r1.z,
        z: R[6] * r1.x + R[7] * r1.y + R[8] * r1.z
      };
      return n;
    },
    hull: function(t) {
      var p = this.points,
          _p = [],
          pt,
          q = [],
          idx = 0,
          i=0,
          l=0;
      q[idx++] = p[0];
      q[idx++] = p[1];
      q[idx++] = p[2];
      if(this.order === 3) { q[idx++] = p[3]; }
      // we lerp between all points at each iteration, until we have 1 point left.
      while(p.length>1) {
        _p = [];
        for(i=0, l=p.length-1; i<l; i++) {
          pt = utils.lerp(t,p[i],p[i+1]);
          q[idx++] = pt;
          _p.push(pt);
        }
        p = _p;
      }
      return q;
    },
    split: function(t1, t2) {
      // shortcuts
      if(t1===0 && !!t2) { return this.split(t2).left; }
      if(t2===1) { return this.split(t1).right; }

      // no shortcut: use "de Casteljau" iteration.
      var q = this.hull(t1);
      var result = {
        left: this.order === 2 ? new Bezier([q[0],q[3],q[5]]) : new Bezier([q[0],q[4],q[7],q[9]]),
        right: this.order === 2 ? new Bezier([q[5],q[4],q[2]]) : new Bezier([q[9],q[8],q[6],q[3]]),
        span: q
      };

      // make sure we bind _t1/_t2 information!
      result.left._t1  = utils.map(0,  0,1, this._t1,this._t2);
      result.left._t2  = utils.map(t1, 0,1, this._t1,this._t2);
      result.right._t1 = utils.map(t1, 0,1, this._t1,this._t2);
      result.right._t2 = utils.map(1,  0,1, this._t1,this._t2);

      // if we have no t2, we're done
      if(!t2) { return result; }

      // if we have a t2, split again:
      t2 = utils.map(t2,t1,1,0,1);
      var subsplit = result.right.split(t2);
      return subsplit.left;
    },
    extrema: function() {
      var dims = this.dims,
          result={},
          roots=[],
          p, mfn;
      dims.forEach(function(dim) {
        mfn = function(v) { return v[dim]; };
        p = this.dpoints[0].map(mfn);
        result[dim] = utils.droots(p);
        if(this.order === 3) {
          p = this.dpoints[1].map(mfn);
          result[dim] = result[dim].concat(utils.droots(p));
        }
        result[dim] = result[dim].filter(function(t) { return (t>=0 && t<=1); });
        roots = roots.concat(result[dim].sort());
      }.bind(this));
      roots = roots.sort().filter(function(v,idx) { return (roots.indexOf(v) === idx); });
      result.values = roots;
      return result;
    },
    bbox: function() {
      var extrema = this.extrema(), result = {};
      this.dims.forEach(function(d) {
        result[d] = utils.getminmax(this, d, extrema[d]);
      }.bind(this));
      return result;
    },
    overlaps: function(curve) {
      var lbbox = this.bbox(),
          tbbox = curve.bbox();
      return utils.bboxoverlap(lbbox,tbbox);
    },
    offset: function(t, d) {
      if(typeof d !== "undefined") {
        var c = this.get(t);
        var n = this.normal(t);
        var ret = {
          c: c,
          n: n,
          x: c.x + n.x * d,
          y: c.y + n.y * d
        };
        if(this._3d) {
          ret.z = c.z + n.z * d;
        };
        return ret;
      }
      if(this._linear) {
        var nv = this.normal(0);
        var coords = this.points.map(function(p) {
          var ret = {
            x: p.x + t * nv.x,
            y: p.y + t * nv.y
          };
          if(p.z && n.z) { ret.z = p.z + t * nv.z; }
          return ret;
        });
        return [new Bezier(coords)];
      }
      var reduced = this.reduce();
      return reduced.map(function(s) {
        return s.scale(t);
      });
    },
    simple: function() {
      if(this.order===3) {
        var a1 = utils.angle(this.points[0], this.points[3], this.points[1]);
        var a2 = utils.angle(this.points[0], this.points[3], this.points[2]);
        if(a1>0 && a2<0 || a1<0 && a2>0) return false;
      }
      var n1 = this.normal(0);
      var n2 = this.normal(1);
      var s = n1.x*n2.x + n1.y*n2.y;
      if(this._3d) { s += n1.z*n2.z; }
      var angle = abs(acos(s));
      return angle < pi/3;
    },
    reduce: function() {
      var i, t1=0, t2=0, step=0.01, segment, pass1=[], pass2=[];
      // first pass: split on extrema
      var extrema = this.extrema().values;
      if(extrema.indexOf(0)===-1) { extrema = [0].concat(extrema); }
      if(extrema.indexOf(1)===-1) { extrema.push(1); }

      for(t1=extrema[0], i=1; i<extrema.length; i++) {
        t2 = extrema[i];
        segment = this.split(t1,t2);
        segment._t1 = t1;
        segment._t2 = t2;
        pass1.push(segment);
        t1 = t2;
      }

      // second pass: further reduce these segments to simple segments
      pass1.forEach(function(p1) {
        t1=0;
        t2=0;
        while(t2 <= 1) {
          for(t2=t1+step; t2<=1+step; t2+=step) {
            segment = p1.split(t1,t2);
            if(!segment.simple()) {
              t2 -= step;
              if(abs(t1-t2)<step) {
                // we can never form a reduction
                return [];
              }
              segment = p1.split(t1,t2);
              segment._t1 = utils.map(t1,0,1,p1._t1,p1._t2);
              segment._t2 = utils.map(t2,0,1,p1._t1,p1._t2);
              pass2.push(segment);
              t1 = t2;
              break;
            }
          }
        }
        if(t1<1) {
          segment = p1.split(t1,1);
          segment._t1 = utils.map(t1,0,1,p1._t1,p1._t2);
          segment._t2 = p1._t2;
          pass2.push(segment);
        }
      });
      return pass2;
    },
    scale: function(d) {
      var order = this.order;
      var distanceFn = false
      if(typeof d === "function") { distanceFn = d; }
      if(distanceFn && order === 2) { return this.raise().scale(distanceFn); }

      // TODO: add special handling for degenerate (=linear) curves.
      var clockwise = this.clockwise;
      var r1 = distanceFn ? distanceFn(0) : d;
      var r2 = distanceFn ? distanceFn(1) : d;
      var v = [ this.offset(0,10), this.offset(1,10) ];
      var o = utils.lli4(v[0], v[0].c, v[1], v[1].c);
      if(!o) { throw new Error("cannot scale this curve. Try reducing it first."); }
      // move all points by distance 'd' wrt the origin 'o'
      var points=this.points, np=[];

      // move end points by fixed distance along normal.
      [0,1].forEach(function(t) {
        var p = np[t*order] = utils.copy(points[t*order]);
        p.x += (t?r2:r1) * v[t].n.x;
        p.y += (t?r2:r1) * v[t].n.y;
      }.bind(this));

      if (!distanceFn) {
        // move control points to lie on the intersection of the offset
        // derivative vector, and the origin-through-control vector
        [0,1].forEach(function(t) {
          if(this.order===2 && !!t) return;
          var p = np[t*order];
          var d = this.derivative(t);
          var p2 = { x: p.x + d.x, y: p.y + d.y };
          np[t+1] = utils.lli4(p, p2, o, points[t+1]);
        }.bind(this));
        return new Bezier(np);
      }

      // move control points by "however much necessary to
      // ensure the correct tangent to endpoint".
      [0,1].forEach(function(t) {
        if(this.order===2 && !!t) return;
        var p = points[t+1];
        var ov = {
          x: p.x - o.x,
          y: p.y - o.y
        };
        var rc = distanceFn ? distanceFn((t+1)/order) : d;
        if(distanceFn && !clockwise) rc = -rc;
        var m = sqrt(ov.x*ov.x + ov.y*ov.y);
        ov.x /= m;
        ov.y /= m;
        np[t+1] = {
          x: p.x + rc*ov.x,
          y: p.y + rc*ov.y
        }
      }.bind(this));
      return new Bezier(np);
    },
    outline: function(d1, d2, d3, d4) {
      d2 = (typeof d2 === "undefined") ? d1 : d2;
      var reduced = this.reduce(),
          len = reduced.length,
          fcurves = [],
          bcurves = [],
          p,
          alen = 0,
          tlen = this.length();

      var graduated = (typeof d3 !== "undefined" && typeof d4 !== "undefined");

      function linearDistanceFunction(s,e, tlen,alen,slen) {
        return function (v) {
          var f1 = alen/tlen, f2 = (alen+slen)/tlen, d = e-s;
          return utils.map(v, 0,1, s+f1*d, s+f2*d);
        };
      };

      // form curve oulines
      reduced.forEach(function(segment) {
        slen = segment.length();
        if (graduated) {
          fcurves.push(segment.scale(  linearDistanceFunction( d1, d3, tlen,alen,slen)  ));
          bcurves.push(segment.scale(  linearDistanceFunction(-d2,-d4, tlen,alen,slen)  ));
        } else {
          fcurves.push(segment.scale( d1));
          bcurves.push(segment.scale(-d2));
        }
        alen += slen;
      });

      // reverse the "return" outline
      bcurves = bcurves.map(function(s) {
        p = s.points;
        if(p[3]) { s.points = [p[3],p[2],p[1],p[0]]; }
        else { s.points = [p[2],p[1],p[0]]; }
        return s;
      }).reverse();

      // form the endcaps as lines
      var fs = fcurves[0].points[0],
          fe = fcurves[len-1].points[fcurves[len-1].points.length-1],
          bs = bcurves[len-1].points[bcurves[len-1].points.length-1],
          be = bcurves[0].points[0],
          ls = utils.makeline(bs,fs),
          le = utils.makeline(fe,be),
          segments = [ls].concat(fcurves).concat([le]).concat(bcurves),
          slen = segments.length;

      return new PolyBezier(segments);
    },
    outlineshapes: function(d1, d2, curveIntersectionThreshold) {
      d2 = d2 || d1;
      var outline = this.outline(d1,d2).curves;
      var shapes = [];
      for(var i=1, len=outline.length; i < len/2; i++) {
        var shape = utils.makeshape(outline[i], outline[len-i], curveIntersectionThreshold);
        shape.startcap.virtual = (i > 1);
        shape.endcap.virtual = (i < len/2-1);
        shapes.push(shape);
      }
      return shapes;
    },
    intersects: function(curve, curveIntersectionThreshold) {
      if(!curve) return this.selfintersects(curveIntersectionThreshold);
      if(curve.p1 && curve.p2) {
        return this.lineIntersects(curve);
      }
      if(curve instanceof Bezier) { curve = curve.reduce(); }
      return this.curveintersects(this.reduce(), curve, curveIntersectionThreshold);
    },
    lineIntersects: function(line) {
      var mx = min(line.p1.x, line.p2.x),
          my = min(line.p1.y, line.p2.y),
          MX = max(line.p1.x, line.p2.x),
          MY = max(line.p1.y, line.p2.y),
          self=this;
      return utils.roots(this.points, line).filter(function(t) {
        var p = self.get(t);
        return utils.between(p.x, mx, MX) && utils.between(p.y, my, MY);
      });
    },
    selfintersects: function(curveIntersectionThreshold) {
      var reduced = this.reduce();
      // "simple" curves cannot intersect with their direct
      // neighbour, so for each segment X we check whether
      // it intersects [0:x-2][x+2:last].
      var i,len=reduced.length-2,results=[],result,left,right;
      for(i=0; i<len; i++) {
        left = reduced.slice(i,i+1);
        right = reduced.slice(i+2);
        result = this.curveintersects(left, right, curveIntersectionThreshold);
        results = results.concat( result );
      }
      return results;
    },
    curveintersects: function(c1, c2, curveIntersectionThreshold) {
      var pairs = [];
      // step 1: pair off any overlapping segments
      c1.forEach(function(l) {
        c2.forEach(function(r) {
          if(l.overlaps(r)) {
            pairs.push({ left: l, right: r });
          }
        });
      });
      // step 2: for each pairing, run through the convergence algorithm.
      var intersections = [];
      pairs.forEach(function(pair) {
        var result = utils.pairiteration(pair.left, pair.right, curveIntersectionThreshold);
        if(result.length > 0) {
          intersections = intersections.concat(result);
        }
      });
      return intersections;
    },
    arcs: function(errorThreshold) {
      errorThreshold = errorThreshold || 0.5;
      var circles = [];
      return this._iterate(errorThreshold, circles);
    },
    _error: function(pc, np1, s, e) {
      var q = (e - s) / 4,
          c1 = this.get(s + q),
          c2 = this.get(e - q),
          ref = utils.dist(pc, np1),
          d1  = utils.dist(pc, c1),
          d2  = utils.dist(pc, c2);
      return abs(d1-ref) + abs(d2-ref);
    },
    _iterate: function(errorThreshold, circles) {
      var s = 0, e = 1, safety;
      // we do a binary search to find the "good `t` closest to no-longer-good"
      do {
        safety=0;

        // step 1: start with the maximum possible arc
        e = 1;

        // points:
        var np1 = this.get(s), np2, np3, arc, prev_arc;

        // booleans:
        var curr_good = false, prev_good = false, done;

        // numbers:
        var m = e, prev_e = 1, step = 0;

        // step 2: find the best possible arc
        do {
          prev_good = curr_good;
          prev_arc = arc;
          m = (s + e)/2;
          step++;

          np2 = this.get(m);
          np3 = this.get(e);

          arc = utils.getccenter(np1, np2, np3);

          //also save the t values
          arc.interval = {
            start: s,
            end: e
          };

          var error = this._error(arc, np1, s, e);
          curr_good = (error <= errorThreshold);

          done = prev_good && !curr_good;
          if(!done) prev_e = e;

          // this arc is fine: we can move 'e' up to see if we can find a wider arc
          if(curr_good) {

            // if e is already at max, then we're done for this arc.
            if (e >= 1) {
              arc.interval.end = prev_e = 1;
              prev_arc = arc;
              break;
            }
            // if not, move it up by half the iteration distance
            e = e + (e-s)/2;
          }

          // this is a bad arc: we need to move 'e' down to find a good arc
          else {
            e = m;
          }
        }
        while(!done && safety++<100);

        if(safety>=100) {
          break;
        }

        // console.log("L835: [F] arc found", s, prev_e, prev_arc.x, prev_arc.y, prev_arc.s, prev_arc.e);

        prev_arc = (prev_arc ? prev_arc : arc);
        circles.push(prev_arc);
        s = prev_e;
      }
      while(e < 1);
      return circles;
    }
  };

  module.exports = Bezier;

}());


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  "use strict";

  // math-inlining.
  var abs = Math.abs,
      cos = Math.cos,
      sin = Math.sin,
      acos = Math.acos,
      atan2 = Math.atan2,
      sqrt = Math.sqrt,
      pow = Math.pow,
      // cube root function yielding real roots
      crt = function(v) { return (v<0) ? -pow(-v,1/3) : pow(v,1/3); },
      // trig constants
      pi = Math.PI,
      tau = 2*pi,
      quart = pi/2,
      // float precision significant decimal
      epsilon = 0.000001,
      // extremas used in bbox calculation and similar algorithms
      nMax = Number.MAX_SAFE_INTEGER,
      nMin = Number.MIN_SAFE_INTEGER;

  // Bezier utility functions
  var utils = {
    // Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
    Tvalues: [
      -0.0640568928626056260850430826247450385909,
       0.0640568928626056260850430826247450385909,
      -0.1911188674736163091586398207570696318404,
       0.1911188674736163091586398207570696318404,
      -0.3150426796961633743867932913198102407864,
       0.3150426796961633743867932913198102407864,
      -0.4337935076260451384870842319133497124524,
       0.4337935076260451384870842319133497124524,
      -0.5454214713888395356583756172183723700107,
       0.5454214713888395356583756172183723700107,
      -0.6480936519369755692524957869107476266696,
       0.6480936519369755692524957869107476266696,
      -0.7401241915785543642438281030999784255232,
       0.7401241915785543642438281030999784255232,
      -0.8200019859739029219539498726697452080761,
       0.8200019859739029219539498726697452080761,
      -0.8864155270044010342131543419821967550873,
       0.8864155270044010342131543419821967550873,
      -0.9382745520027327585236490017087214496548,
       0.9382745520027327585236490017087214496548,
      -0.9747285559713094981983919930081690617411,
       0.9747285559713094981983919930081690617411,
      -0.9951872199970213601799974097007368118745,
       0.9951872199970213601799974097007368118745
    ],

    // Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
    Cvalues: [
      0.1279381953467521569740561652246953718517,
      0.1279381953467521569740561652246953718517,
      0.1258374563468282961213753825111836887264,
      0.1258374563468282961213753825111836887264,
      0.1216704729278033912044631534762624256070,
      0.1216704729278033912044631534762624256070,
      0.1155056680537256013533444839067835598622,
      0.1155056680537256013533444839067835598622,
      0.1074442701159656347825773424466062227946,
      0.1074442701159656347825773424466062227946,
      0.0976186521041138882698806644642471544279,
      0.0976186521041138882698806644642471544279,
      0.0861901615319532759171852029837426671850,
      0.0861901615319532759171852029837426671850,
      0.0733464814110803057340336152531165181193,
      0.0733464814110803057340336152531165181193,
      0.0592985849154367807463677585001085845412,
      0.0592985849154367807463677585001085845412,
      0.0442774388174198061686027482113382288593,
      0.0442774388174198061686027482113382288593,
      0.0285313886289336631813078159518782864491,
      0.0285313886289336631813078159518782864491,
      0.0123412297999871995468056670700372915759,
      0.0123412297999871995468056670700372915759
    ],

    arcfn: function(t, derivativeFn) {
      var d = derivativeFn(t);
      var l = d.x*d.x + d.y*d.y;
      if(typeof d.z !== "undefined") {
        l += d.z*d.z;
      }
      return sqrt(l);
    },

    between: function(v, m, M) {
      return (m <= v && v <= M) || utils.approximately(v, m) || utils.approximately(v, M);
    },

    approximately: function(a,b,precision) {
      return abs(a-b) <= (precision || epsilon);
    },

    length: function(derivativeFn) {
      var z=0.5,sum=0,len=utils.Tvalues.length,i,t;
      for(i=0; i<len; i++) {
        t = z * utils.Tvalues[i] + z;
        sum += utils.Cvalues[i] * utils.arcfn(t,derivativeFn);
      }
      return z * sum;
    },

    map: function(v, ds,de, ts,te) {
      var d1 = de-ds, d2 = te-ts, v2 =  v-ds, r = v2/d1;
      return ts + d2*r;
    },

    lerp: function(r, v1, v2) {
      var ret = {
        x: v1.x + r*(v2.x-v1.x),
        y: v1.y + r*(v2.y-v1.y)
      };
      if(!!v1.z && !!v2.z) {
        ret.z =  v1.z + r*(v2.z-v1.z);
      }
      return ret;
    },

    pointToString: function(p) {
      var s = p.x+"/"+p.y;
      if(typeof p.z !== "undefined") {
        s += "/"+p.z;
      }
      return s;
    },

    pointsToString: function(points) {
      return "[" + points.map(utils.pointToString).join(", ") + "]";
    },

    copy: function(obj) {
      return JSON.parse(JSON.stringify(obj));
    },

    angle: function(o,v1,v2) {
      var dx1 = v1.x - o.x,
          dy1 = v1.y - o.y,
          dx2 = v2.x - o.x,
          dy2 = v2.y - o.y,
          cross = dx1*dy2 - dy1*dx2,
          dot = dx1*dx2 + dy1*dy2;
      return atan2(cross, dot);
    },

    // round as string, to avoid rounding errors
    round: function(v, d) {
      var s = '' + v;
      var pos = s.indexOf(".");
      return parseFloat(s.substring(0,pos+1+d));
    },

    dist: function(p1, p2) {
      var dx = p1.x - p2.x,
          dy = p1.y - p2.y;
      return sqrt(dx*dx+dy*dy);
    },

    closest: function(LUT, point) {
      var mdist = pow(2,63), mpos, d;
      LUT.forEach(function(p, idx) {
        d = utils.dist(point, p);
        if (d<mdist) {
          mdist = d;
          mpos = idx;
        }
      });
      return { mdist:mdist, mpos:mpos };
    },

    abcratio: function(t, n) {
      // see ratio(t) note on http://pomax.github.io/bezierinfo/#abc
      if (n!==2 && n!==3) {
        return false;
      }
      if (typeof t === "undefined") {
        t = 0.5;
      } else if (t===0 || t===1) {
        return t;
      }
      var bottom = pow(t,n) + pow(1-t,n), top = bottom - 1;
      return abs(top/bottom);
    },

    projectionratio: function(t, n) {
      // see u(t) note on http://pomax.github.io/bezierinfo/#abc
      if (n!==2 && n!==3) {
        return false;
      }
      if (typeof t === "undefined") {
        t = 0.5;
      } else if (t===0 || t===1) {
        return t;
      }
      var top = pow(1-t, n), bottom = pow(t,n) + top;
      return top/bottom;
    },

    lli8: function(x1,y1,x2,y2,x3,y3,x4,y4) {
      var nx=(x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4),
          ny=(x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4),
          d=(x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
      if(d==0) { return false; }
      return { x: nx/d, y: ny/d };
    },

    lli4: function(p1,p2,p3,p4) {
      var x1 = p1.x, y1 = p1.y,
          x2 = p2.x, y2 = p2.y,
          x3 = p3.x, y3 = p3.y,
          x4 = p4.x, y4 = p4.y;
      return utils.lli8(x1,y1,x2,y2,x3,y3,x4,y4);
    },

    lli: function(v1, v2) {
      return utils.lli4(v1,v1.c,v2,v2.c);
    },

    makeline: function(p1,p2) {
      var Bezier = __webpack_require__(44);
      var x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y, dx = (x2-x1)/3, dy = (y2-y1)/3;
      return new Bezier(x1, y1, x1+dx, y1+dy, x1+2*dx, y1+2*dy, x2, y2);
    },

    findbbox: function(sections) {
      var mx=nMax,my=nMax,MX=nMin,MY=nMin;
      sections.forEach(function(s) {
        var bbox = s.bbox();
        if(mx > bbox.x.min) mx = bbox.x.min;
        if(my > bbox.y.min) my = bbox.y.min;
        if(MX < bbox.x.max) MX = bbox.x.max;
        if(MY < bbox.y.max) MY = bbox.y.max;
      });
      return {
        x: { min: mx, mid:(mx+MX)/2, max: MX, size:MX-mx },
        y: { min: my, mid:(my+MY)/2, max: MY, size:MY-my }
      }
    },

    shapeintersections: function(s1, bbox1, s2, bbox2, curveIntersectionThreshold) {
      if(!utils.bboxoverlap(bbox1, bbox2)) return [];
      var intersections = [];
      var a1 = [s1.startcap, s1.forward, s1.back, s1.endcap];
      var a2 = [s2.startcap, s2.forward, s2.back, s2.endcap];
      a1.forEach(function(l1) {
        if(l1.virtual) return;
        a2.forEach(function(l2) {
          if(l2.virtual) return;
          var iss = l1.intersects(l2, curveIntersectionThreshold);
          if(iss.length>0) {
            iss.c1 = l1;
            iss.c2 = l2;
            iss.s1 = s1;
            iss.s2 = s2;
            intersections.push(iss);
          }
        });
      });
      return intersections;
    },

    makeshape: function(forward, back, curveIntersectionThreshold) {
      var bpl = back.points.length;
      var fpl = forward.points.length;
      var start  = utils.makeline(back.points[bpl-1], forward.points[0]);
      var end    = utils.makeline(forward.points[fpl-1], back.points[0]);
      var shape  = {
        startcap: start,
        forward: forward,
        back: back,
        endcap: end,
        bbox: utils.findbbox([start, forward, back, end])
      };
      var self = utils;
      shape.intersections = function(s2) {
        return self.shapeintersections(shape,shape.bbox,s2,s2.bbox, curveIntersectionThreshold);
      };
      return shape;
    },

    getminmax: function(curve, d, list) {
      if(!list) return { min:0, max:0 };
      var min=nMax, max=nMin,t,c;
      if(list.indexOf(0)===-1) { list = [0].concat(list); }
      if(list.indexOf(1)===-1) { list.push(1); }
      for(var i=0,len=list.length; i<len; i++) {
        t = list[i];
        c = curve.get(t);
        if(c[d] < min) { min = c[d]; }
        if(c[d] > max) { max = c[d]; }
      }
      return { min:min, mid:(min+max)/2, max:max, size:max-min };
    },

    align: function(points, line) {
      var tx = line.p1.x,
          ty = line.p1.y,
          a = -atan2(line.p2.y-ty, line.p2.x-tx),
          d = function(v) {
            return {
              x: (v.x-tx)*cos(a) - (v.y-ty)*sin(a),
              y: (v.x-tx)*sin(a) + (v.y-ty)*cos(a)
            };
          };
      return points.map(d);
    },

    roots: function(points, line) {
      line = line || {p1:{x:0,y:0},p2:{x:1,y:0}};
      var order = points.length - 1;
      var p = utils.align(points, line);
      var reduce = function(t) { return 0<=t && t <=1; };

      if (order === 2) {
        var a = p[0].y,
            b = p[1].y,
            c = p[2].y,
            d = a - 2*b + c;
        if(d!==0) {
          var m1 = -sqrt(b*b-a*c),
              m2 = -a+b,
              v1 = -( m1+m2)/d,
              v2 = -(-m1+m2)/d;
          return [v1, v2].filter(reduce);
        }
        else if(b!==c && d===0) {
          return [ (2*b-c)/2*(b-c) ].filter(reduce);
        }
        return [];
      }

      // see http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
      var pa = p[0].y,
          pb = p[1].y,
          pc = p[2].y,
          pd = p[3].y,
          d = (-pa + 3*pb - 3*pc + pd),
          a = (3*pa - 6*pb + 3*pc) / d,
          b = (-3*pa + 3*pb) / d,
          c = pa / d,
          p = (3*b - a*a)/3,
          p3 = p/3,
          q = (2*a*a*a - 9*a*b + 27*c)/27,
          q2 = q/2,
          discriminant = q2*q2 + p3*p3*p3,
          u1,v1,x1,x2,x3;
       if (discriminant < 0) {
        var mp3 = -p/3,
            mp33 = mp3*mp3*mp3,
            r = sqrt( mp33 ),
            t = -q/(2*r),
            cosphi = t<-1 ? -1 : t>1 ? 1 : t,
            phi = acos(cosphi),
            crtr = crt(r),
            t1 = 2*crtr;
        x1 = t1 * cos(phi/3) - a/3;
        x2 = t1 * cos((phi+tau)/3) - a/3;
        x3 = t1 * cos((phi+2*tau)/3) - a/3;
        return [x1, x2, x3].filter(reduce);
      } else if(discriminant === 0) {
        u1 = q2 < 0 ? crt(-q2) : -crt(q2);
        x1 = 2*u1-a/3;
        x2 = -u1 - a/3;
        return [x1,x2].filter(reduce);
      } else {
        var sd = sqrt(discriminant);
        u1 = crt(-q2+sd);
        v1 = crt(q2+sd);
        return [u1-v1-a/3].filter(reduce);;
      }
    },

    droots: function(p) {
      // quadratic roots are easy
      if(p.length === 3) {
        var a = p[0],
            b = p[1],
            c = p[2],
            d = a - 2*b + c;
        if(d!==0) {
          var m1 = -sqrt(b*b-a*c),
              m2 = -a+b,
              v1 = -( m1+m2)/d,
              v2 = -(-m1+m2)/d;
          return [v1, v2];
        }
        else if(b!==c && d===0) {
          return [(2*b-c)/(2*(b-c))];
        }
        return [];
      }

      // linear roots are even easier
      if(p.length === 2) {
        var a = p[0], b = p[1];
        if(a!==b) {
          return [a/(a-b)];
        }
        return [];
      }
    },

    inflections: function(points) {
      if (points.length<4) return [];

      // FIXME: TODO: add in inflection abstraction for quartic+ curves?

      var p = utils.align(points, { p1: points[0], p2: points.slice(-1)[0] }),
          a = p[2].x * p[1].y,
          b = p[3].x * p[1].y,
          c = p[1].x * p[2].y,
          d = p[3].x * p[2].y,
          v1 = 18 * (-3*a + 2*b + 3*c - d),
          v2 = 18 * (3*a - b - 3*c),
          v3 = 18 * (c - a);

      if (utils.approximately(v1,0)){
        if(!utils.approximately(v2,0)){
          var t = -v3/v2;
          if (0 <= t && t <= 1)
             return [t];
        }
        return [];
      }

      var trm = v2*v2 - 4*v1*v3,
          sq = Math.sqrt(trm),
          d = 2 * v1;

      if (utils.approximately(d,0)) return [];

      return [(sq-v2)/d, -(v2+sq)/d].filter(function(r) {
        return (0 <= r && r <= 1);
      });
    },

    bboxoverlap: function(b1,b2) {
      var dims=['x','y'],len=dims.length,i,dim,l,t,d
      for(i=0; i<len; i++) {
        dim = dims[i];
        l = b1[dim].mid;
        t = b2[dim].mid;
        d = (b1[dim].size + b2[dim].size)/2;
        if(abs(l-t) >= d) return false;
      }
      return true;
    },

    expandbox: function(bbox, _bbox) {
      if(_bbox.x.min < bbox.x.min) { bbox.x.min = _bbox.x.min; }
      if(_bbox.y.min < bbox.y.min) { bbox.y.min = _bbox.y.min; }
      if(_bbox.z && _bbox.z.min < bbox.z.min) { bbox.z.min = _bbox.z.min; }
      if(_bbox.x.max > bbox.x.max) { bbox.x.max = _bbox.x.max; }
      if(_bbox.y.max > bbox.y.max) { bbox.y.max = _bbox.y.max; }
      if(_bbox.z && _bbox.z.max > bbox.z.max) { bbox.z.max = _bbox.z.max; }
      bbox.x.mid = (bbox.x.min + bbox.x.max)/2;
      bbox.y.mid = (bbox.y.min + bbox.y.max)/2;
      if(bbox.z) { bbox.z.mid = (bbox.z.min + bbox.z.max)/2; }
      bbox.x.size = bbox.x.max - bbox.x.min;
      bbox.y.size = bbox.y.max - bbox.y.min;
      if(bbox.z) { bbox.z.size = bbox.z.max - bbox.z.min; }
    },

    pairiteration: function(c1, c2, curveIntersectionThreshold) {
      var c1b = c1.bbox(),
          c2b = c2.bbox(),
          r = 100000,
          threshold = curveIntersectionThreshold || 0.5;
      if(c1b.x.size + c1b.y.size < threshold && c2b.x.size + c2b.y.size < threshold) {
        return [ ((r * (c1._t1+c1._t2)/2)|0)/r + "/" + ((r * (c2._t1+c2._t2)/2)|0)/r ];
      }
      var cc1 = c1.split(0.5),
          cc2 = c2.split(0.5),
          pairs = [
            {left: cc1.left, right: cc2.left },
            {left: cc1.left, right: cc2.right },
            {left: cc1.right, right: cc2.right },
            {left: cc1.right, right: cc2.left }];
      pairs = pairs.filter(function(pair) {
        return utils.bboxoverlap(pair.left.bbox(),pair.right.bbox());
      });
      var results = [];
      if(pairs.length === 0) return results;
      pairs.forEach(function(pair) {
        results = results.concat(
          utils.pairiteration(pair.left, pair.right, threshold)
        );
      })
      results = results.filter(function(v,i) {
        return results.indexOf(v) === i;
      });
      return results;
    },

    getccenter: function(p1,p2,p3) {
      var dx1 = (p2.x - p1.x),
          dy1 = (p2.y - p1.y),
          dx2 = (p3.x - p2.x),
          dy2 = (p3.y - p2.y);
      var dx1p = dx1 * cos(quart) - dy1 * sin(quart),
          dy1p = dx1 * sin(quart) + dy1 * cos(quart),
          dx2p = dx2 * cos(quart) - dy2 * sin(quart),
          dy2p = dx2 * sin(quart) + dy2 * cos(quart);
      // chord midpoints
      var mx1 = (p1.x + p2.x)/2,
          my1 = (p1.y + p2.y)/2,
          mx2 = (p2.x + p3.x)/2,
          my2 = (p2.y + p3.y)/2;
      // midpoint offsets
      var mx1n = mx1 + dx1p,
          my1n = my1 + dy1p,
          mx2n = mx2 + dx2p,
          my2n = my2 + dy2p;
      // intersection of these lines:
      var arc = utils.lli8(mx1,my1,mx1n,my1n, mx2,my2,mx2n,my2n),
          r = utils.dist(arc,p1),
          // arc start/end values, over mid point:
          s = atan2(p1.y - arc.y, p1.x - arc.x),
          m = atan2(p2.y - arc.y, p2.x - arc.x),
          e = atan2(p3.y - arc.y, p3.x - arc.x),
          _;
      // determine arc direction (cw/ccw correction)
      if (s<e) {
        // if s<m<e, arc(s, e)
        // if m<s<e, arc(e, s + tau)
        // if s<e<m, arc(e, s + tau)
        if (s>m || m>e) { s += tau; }
        if (s>e) { _=e; e=s; s=_; }
      } else {
        // if e<m<s, arc(e, s)
        // if m<e<s, arc(s, e + tau)
        // if e<s<m, arc(s, e + tau)
        if (e<m && m<s) { _=e; e=s; s=_; } else { e += tau; }
      }
      // assign and done.
      arc.s = s;
      arc.e = e;
      arc.r = r;
      return arc;
    }
  };

  module.exports = utils;
}());


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_webgl_obj_loader__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_webgl_obj_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_webgl_obj_loader__);

/* harmony default export */ __webpack_exports__["a"] = (function (data) {
    const mesh = new __WEBPACK_IMPORTED_MODULE_0_webgl_obj_loader___default.a.Mesh(data);
    return {
        vertices: new Float32Array(mesh.vertices),
        normals: new Float32Array(mesh.vertexNormals),
        indices: new Uint16Array(mesh.indices),
        uvs: new Float32Array(mesh.textures)
    };
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Capabilities__ = __webpack_require__(5);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Capabilities", function() { return __WEBPACK_IMPORTED_MODULE_0__core_Capabilities__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Constants__ = __webpack_require__(3);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return __WEBPACK_IMPORTED_MODULE_1__core_Constants__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_GL__ = __webpack_require__(0);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "GL", function() { return __WEBPACK_IMPORTED_MODULE_2__core_GL__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Mesh__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return __WEBPACK_IMPORTED_MODULE_3__core_Mesh__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Object3D__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Object3D", function() { return __WEBPACK_IMPORTED_MODULE_4__core_Object3D__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cameras_Camera__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return __WEBPACK_IMPORTED_MODULE_5__cameras_Camera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cameras_OrthographicCamera__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrthographicCamera", function() { return __WEBPACK_IMPORTED_MODULE_6__cameras_OrthographicCamera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cameras_PerspectiveCamera__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PerspectiveCamera", function() { return __WEBPACK_IMPORTED_MODULE_7__cameras_PerspectiveCamera__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_Raycaster__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RayCaster", function() { return __WEBPACK_IMPORTED_MODULE_8__core_Raycaster__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_Renderer__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return __WEBPACK_IMPORTED_MODULE_9__core_Renderer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_RenderTarget__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return __WEBPACK_IMPORTED_MODULE_10__core_RenderTarget__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_Scene__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return __WEBPACK_IMPORTED_MODULE_11__core_Scene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_Material__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return __WEBPACK_IMPORTED_MODULE_12__core_Material__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_Texture__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return __WEBPACK_IMPORTED_MODULE_13__core_Texture__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_Texture3d__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Texture3d", function() { return __WEBPACK_IMPORTED_MODULE_14__core_Texture3d__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_TextureCube__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextureCube", function() { return __WEBPACK_IMPORTED_MODULE_15__core_TextureCube__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_TextureVideo__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TextureVideo", function() { return __WEBPACK_IMPORTED_MODULE_16__core_TextureVideo__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_UniformBuffer__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UniformBuffer", function() { return __WEBPACK_IMPORTED_MODULE_17__core_UniformBuffer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_UniformBuffers__ = __webpack_require__(16);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UniformBuffers", function() { return __WEBPACK_IMPORTED_MODULE_18__core_UniformBuffers__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_Vao__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vao", function() { return __WEBPACK_IMPORTED_MODULE_19__core_Vao__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__geometry_BoxGeometry__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BoxGeometry", function() { return __WEBPACK_IMPORTED_MODULE_20__geometry_BoxGeometry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__geometry_BufferAttribute__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BufferAttribute", function() { return __WEBPACK_IMPORTED_MODULE_21__geometry_BufferAttribute__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__geometry_Geometry__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return __WEBPACK_IMPORTED_MODULE_22__geometry_Geometry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__geometry_LineGeometry__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "LineGeometry", function() { return __WEBPACK_IMPORTED_MODULE_23__geometry_LineGeometry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__geometry_PlaneGeometry__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PlaneGeometry", function() { return __WEBPACK_IMPORTED_MODULE_24__geometry_PlaneGeometry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__geometry_SphereGeometry__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SphereGeometry", function() { return __WEBPACK_IMPORTED_MODULE_25__geometry_SphereGeometry__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__helpers_AxisHelper__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AxisHelper", function() { return __WEBPACK_IMPORTED_MODULE_26__helpers_AxisHelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__helpers_CameraHelper__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CameraHelper", function() { return __WEBPACK_IMPORTED_MODULE_27__helpers_CameraHelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__helpers_GridHelper__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GridHelper", function() { return __WEBPACK_IMPORTED_MODULE_28__helpers_GridHelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__helpers_NormalsHelper__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NormalsHelper", function() { return __WEBPACK_IMPORTED_MODULE_29__helpers_NormalsHelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__helpers_VerticesHelper__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VerticesHelper", function() { return __WEBPACK_IMPORTED_MODULE_30__helpers_VerticesHelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__lights_Lights__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Lights", function() { return __WEBPACK_IMPORTED_MODULE_31__lights_Lights__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__lights_AmbientLight__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AmbientLight", function() { return __WEBPACK_IMPORTED_MODULE_32__lights_AmbientLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__lights_DirectionalLight__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalLight", function() { return __WEBPACK_IMPORTED_MODULE_33__lights_DirectionalLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__lights_PointLight__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PointLight", function() { return __WEBPACK_IMPORTED_MODULE_34__lights_PointLight__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__math_Color__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return __WEBPACK_IMPORTED_MODULE_35__math_Color__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__math_Vector3__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3", function() { return __WEBPACK_IMPORTED_MODULE_36__math_Vector3__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__math_Vector2__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2", function() { return __WEBPACK_IMPORTED_MODULE_37__math_Vector2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__math_Ray__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Ray", function() { return __WEBPACK_IMPORTED_MODULE_38__math_Ray__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__math_Sphere__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sphere", function() { return __WEBPACK_IMPORTED_MODULE_39__math_Sphere__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__math_Utils__ = __webpack_require__(8);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "MathUtils", function() { return __WEBPACK_IMPORTED_MODULE_40__math_Utils__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shaders_chunks_index__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderChunks", function() { return __WEBPACK_IMPORTED_MODULE_41__shaders_chunks_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__utils_Array__ = __webpack_require__(40);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ArrayUtils", function() { return __WEBPACK_IMPORTED_MODULE_42__utils_Array__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__utils_CameraDolly__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDolly", function() { return __WEBPACK_IMPORTED_MODULE_43__utils_CameraDolly__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__utils_Clock__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return __WEBPACK_IMPORTED_MODULE_44__utils_Clock__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__utils_Detect__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Detect", function() { return __WEBPACK_IMPORTED_MODULE_45__utils_Detect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__utils_ObjParser__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjParser", function() { return __WEBPACK_IMPORTED_MODULE_46__utils_ObjParser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__controls_OrbitControls__ = __webpack_require__(102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OrbitControls", function() { return __WEBPACK_IMPORTED_MODULE_47__controls_OrbitControls__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__loaders_FileLoader__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoader", function() { return __WEBPACK_IMPORTED_MODULE_48__loaders_FileLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__loaders_HdrLoader__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HdrLoader", function() { return __WEBPACK_IMPORTED_MODULE_49__loaders_HdrLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__loaders_ImageLoader__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoader", function() { return __WEBPACK_IMPORTED_MODULE_50__loaders_ImageLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__loaders_JsonLoader__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "JsonLoader", function() { return __WEBPACK_IMPORTED_MODULE_51__loaders_JsonLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__loaders_ObjLoader__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjLoader", function() { return __WEBPACK_IMPORTED_MODULE_52__loaders_ObjLoader__["a"]; });
// Polyfill
if (window.WebGL2RenderingContext === undefined) {
    window.WebGL2RenderingContext = function WebGL2RenderingContext() {
        return this;
    };
}
// Core








































// Geometry












// Helpers










// Lights








// Math












// Shaders


// Utils










// Controls


// Loaders











/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export transpose */
/* unused harmony export invert */
/* unused harmony export adjoint */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export LDU */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);


/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    let a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];

  // Calculate the determinant
  let det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] =  a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] =  a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  let a0 = a[0];
  out[0] =  a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] =  a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2]/a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link mat2.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export fromValues */
/* unused harmony export set */
/* unused harmony export invert */
/* unused harmony export determinant */
/* unused harmony export multiply */
/* unused harmony export rotate */
/* unused harmony export scale */
/* unused harmony export translate */
/* unused harmony export fromRotation */
/* unused harmony export fromScaling */
/* unused harmony export fromTranslation */
/* unused harmony export str */
/* unused harmony export frob */
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export multiplyScalar */
/* unused harmony export multiplyScalarAndAdd */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);


/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  let aa = a[0], ab = a[1], ac = a[2], ad = a[3];
  let atx = a[4], aty = a[5];

  let det = aa * ad - ab * ac;
  if(!det){
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let s = Math.sin(rad);
  let c = Math.cos(rad);
  out[0] = a0 *  c + a2 * s;
  out[1] = a1 *  c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let v0 = v[0], v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  let s = Math.sin(rad), c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
          a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  out[2] = a[2] + (b[2] * scale);
  out[3] = a[3] + (b[3] * scale);
  out[4] = a[4] + (b[4] * scale);
  out[5] = a[5] + (b[5] * scale);
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
  let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
const sub = subtract;
/* unused harmony export sub */



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export create */
/* unused harmony export clone */
/* unused harmony export fromValues */
/* unused harmony export fromRotationTranslationValues */
/* unused harmony export fromRotationTranslation */
/* unused harmony export fromTranslation */
/* unused harmony export fromRotation */
/* unused harmony export fromMat4 */
/* unused harmony export copy */
/* unused harmony export identity */
/* unused harmony export set */
/* unused harmony export getDual */
/* unused harmony export setDual */
/* unused harmony export getTranslation */
/* unused harmony export translate */
/* unused harmony export rotateX */
/* unused harmony export rotateY */
/* unused harmony export rotateZ */
/* unused harmony export rotateByQuatAppend */
/* unused harmony export rotateByQuatPrepend */
/* unused harmony export rotateAroundAxis */
/* unused harmony export add */
/* unused harmony export multiply */
/* unused harmony export scale */
/* unused harmony export lerp */
/* unused harmony export invert */
/* unused harmony export conjugate */
/* unused harmony export normalize */
/* unused harmony export str */
/* unused harmony export exactEquals */
/* unused harmony export equals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quat_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mat4_js__ = __webpack_require__(30);




/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */


/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
  let dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = 0;
  dq[1] = 0;
  dq[2] = 0;
  dq[3] = 1;
  dq[4] = 0;
  dq[5] = 0;
  dq[6] = 0;
  dq[7] = 0;
  return dq;
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
function clone(a) {
  let dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}

/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  let dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}

/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  let dq = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  let ax = x2 * 0.5,
    ay = y2 * 0.5,
    az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotationTranslation(out, q, t) {
  let ax = t[0] * 0.5,
    ay = t[1] * 0.5,
    az = t[2] * 0.5,
    bx = q[0],
    by = q[1],
    bz = q[2],
    bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}

/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
function fromMat4(out, a) {
  //TODO Optimize this
  let outer = __WEBPACK_IMPORTED_MODULE_1__quat_js__["create"]();
  __WEBPACK_IMPORTED_MODULE_2__mat4_js__["getRotation"](outer, a);
  let t = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](3);
  __WEBPACK_IMPORTED_MODULE_2__mat4_js__["getTranslation"](t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;

  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}

/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */
const getReal = __WEBPACK_IMPORTED_MODULE_1__quat_js__["copy"];
/* unused harmony export getReal */


/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */
function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}

/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */
const setReal = __WEBPACK_IMPORTED_MODULE_1__quat_js__["copy"];
/* unused harmony export setReal */


/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
function getTranslation(out, a) {
  let ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */
function translate(out, a, v) {
  let ax1 = a[0],
    ay1 = a[1],
    az1 = a[2],
    aw1 = a[3],
    bx1 = v[0] * 0.5,
    by1 = v[1] * 0.5,
    bz1 = v[2] * 0.5,
    ax2 = a[4],
    ay2 = a[5],
    az2 = a[6],
    aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateX(out, a, rad) {
  let bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["rotateX"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateY(out, a, rad) {
  let bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["rotateY"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateZ(out, a, rad) {
  let bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7],
    ax1 = ax * bw + aw * bx + ay * bz - az * by,
    ay1 = ay * bw + aw * by + az * bx - ax * bz,
    az1 = az * bw + aw * bz + ax * by - ay * bx,
    aw1 = aw * bw - ax * bx - ay * by - az * bz;
  __WEBPACK_IMPORTED_MODULE_1__quat_js__["rotateZ"](out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
function rotateByQuatAppend(out, a, q) {
  let qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3],
    ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];

  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
function rotateByQuatPrepend(out, q, a) {
  let qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3],
    bx = a[0],
    by = a[1],
    bz = a[2],
    bw = a[3];

  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]) {
    return copy(out, a);
  }
  let axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);

  rad = rad * 0.5;
  let s = Math.sin(rad);
  let bx = s * axis[0] / axisLength;
  let by = s * axis[1] / axisLength;
  let bz = s * axis[2] / axisLength;
  let bw = Math.cos(rad);

  let ax1 = a[0],
    ay1 = a[1],
    az1 = a[2],
    aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;

  let ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;

  return out;
}

/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}

/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */
function multiply(out, a, b) {
  let ax0 = a[0],
    ay0 = a[1],
    az0 = a[2],
    aw0 = a[3],
    bx1 = b[4],
    by1 = b[5],
    bz1 = b[6],
    bw1 = b[7],
    ax1 = a[4],
    ay1 = a[5],
    az1 = a[6],
    aw1 = a[7],
    bx0 = b[0],
    by0 = b[1],
    bz0 = b[2],
    bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}

/**
 * Alias for {@link quat2.multiply}
 * @function
 */
const mul = multiply;
/* unused harmony export mul */


/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}

/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot = __WEBPACK_IMPORTED_MODULE_1__quat_js__["dot"];
/* unused harmony export dot */


/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */
function lerp(out, a, b, t) {
  let mt = 1 - t;
  if (dot(a, b) < 0) t = -t;

  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;

  return out;
}

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
function invert(out, a) {
  let sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}

/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
const length = __WEBPACK_IMPORTED_MODULE_1__quat_js__["length"];
/* unused harmony export length */


/**
 * Alias for {@link quat2.length}
 * @function
 */
const len = length;
/* unused harmony export len */


/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
const squaredLength = __WEBPACK_IMPORTED_MODULE_1__quat_js__["squaredLength"];
/* unused harmony export squaredLength */


/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* unused harmony export sqrLen */


/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
function normalize(out, a) {
  let magnitude = squaredLength(a);
  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    out[0] = a[0] / magnitude;
    out[1] = a[1] / magnitude;
    out[2] = a[2] / magnitude;
    out[3] = a[3] / magnitude;
    out[4] = a[4] / magnitude;
    out[5] = a[5] / magnitude;
    out[6] = a[6] / magnitude;
    out[7] = a[7] / magnitude;
  }
  return out;
}

/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
function str(a) {
  return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
    a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3],
    a4 = a[4],
    a5 = a[5],
    a6 = a[6],
    a7 = a[7];
  let b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3],
    b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
    Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
    Math.abs(a2 - b2) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
    Math.abs(a3 - b3) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
    Math.abs(a4 - b4) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
    Math.abs(a5 - b5) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
    Math.abs(a6 - b6) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
    Math.abs(a7 - b7) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */] * Math.max(1.0, Math.abs(a7), Math.abs(b7)));
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["create"] = create;
/* harmony export (immutable) */ __webpack_exports__["clone"] = clone;
/* harmony export (immutable) */ __webpack_exports__["fromValues"] = fromValues;
/* harmony export (immutable) */ __webpack_exports__["copy"] = copy;
/* harmony export (immutable) */ __webpack_exports__["set"] = set;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["ceil"] = ceil;
/* harmony export (immutable) */ __webpack_exports__["floor"] = floor;
/* harmony export (immutable) */ __webpack_exports__["min"] = min;
/* harmony export (immutable) */ __webpack_exports__["max"] = max;
/* harmony export (immutable) */ __webpack_exports__["round"] = round;
/* harmony export (immutable) */ __webpack_exports__["scale"] = scale;
/* harmony export (immutable) */ __webpack_exports__["scaleAndAdd"] = scaleAndAdd;
/* harmony export (immutable) */ __webpack_exports__["distance"] = distance;
/* harmony export (immutable) */ __webpack_exports__["squaredDistance"] = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["length"] = length;
/* harmony export (immutable) */ __webpack_exports__["squaredLength"] = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["negate"] = negate;
/* harmony export (immutable) */ __webpack_exports__["inverse"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["normalize"] = normalize;
/* harmony export (immutable) */ __webpack_exports__["dot"] = dot;
/* harmony export (immutable) */ __webpack_exports__["cross"] = cross;
/* harmony export (immutable) */ __webpack_exports__["lerp"] = lerp;
/* harmony export (immutable) */ __webpack_exports__["random"] = random;
/* harmony export (immutable) */ __webpack_exports__["transformMat2"] = transformMat2;
/* harmony export (immutable) */ __webpack_exports__["transformMat2d"] = transformMat2d;
/* harmony export (immutable) */ __webpack_exports__["transformMat3"] = transformMat3;
/* harmony export (immutable) */ __webpack_exports__["transformMat4"] = transformMat4;
/* harmony export (immutable) */ __webpack_exports__["rotate"] = rotate;
/* harmony export (immutable) */ __webpack_exports__["angle"] = angle;
/* harmony export (immutable) */ __webpack_exports__["str"] = str;
/* harmony export (immutable) */ __webpack_exports__["exactEquals"] = exactEquals;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_js__ = __webpack_require__(6);


/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  let out = new __WEBPACK_IMPORTED_MODULE_0__common_js__["a" /* ARRAY_TYPE */](2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round (out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + (b[0] * scale);
  out[1] = a[1] + (b[1] * scale);
  return out;
}

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return Math.sqrt(x*x + y*y);
}

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
    y = b[1] - a[1];
  return x*x + y*y;
}

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
    y = a[1];
  return Math.sqrt(x*x + y*y);
}

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength (a) {
  var x = a[0],
    y = a[1];
  return x*x + y*y;
}

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
    y = a[1];
  var len = x*x + y*y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
    ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = __WEBPACK_IMPORTED_MODULE_0__common_js__["c" /* RANDOM */]() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  let x = a[0];
  let y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */
function rotate(out, a, b, c) {
  //Translate point to the origin
  let p0 = a[0] - b[0],
  p1 = a[1] - b[1],
  sinC = Math.sin(c),
  cosC = Math.cos(c);
  
  //perform rotation and translate to correct position
  out[0] = p0*cosC - p1*sinC + b[0];
  out[1] = p0*sinC + p1*cosC + b[1];

  return out;
}

/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  let x1 = a[0],
    y1 = a[1],
    x2 = b[0],
    y2 = b[1];
  
  let len1 = x1*x1 + y1*y1;
  if (len1 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len1 = 1 / Math.sqrt(len1);
  }
  
  let len2 = x2*x2 + y2*y2;
  if (len2 > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len2 = 1 / Math.sqrt(len2);
  }
  
  let cosine = (x1 * x2 + y1 * y2) * len1 * len2;
  
  
  if(cosine > 1.0) {
    return 0;
  }
  else if(cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  let a0 = a[0], a1 = a[1];
  let b0 = b[0], b1 = b[1];
  return (Math.abs(a0 - b0) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= __WEBPACK_IMPORTED_MODULE_0__common_js__["b" /* EPSILON */]*Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
const len = length;
/* harmony export (immutable) */ __webpack_exports__["len"] = len;


/**
 * Alias for {@link vec2.subtract}
 * @function
 */
const sub = subtract;
/* harmony export (immutable) */ __webpack_exports__["sub"] = sub;


/**
 * Alias for {@link vec2.multiply}
 * @function
 */
const mul = multiply;
/* harmony export (immutable) */ __webpack_exports__["mul"] = mul;


/**
 * Alias for {@link vec2.divide}
 * @function
 */
const div = divide;
/* harmony export (immutable) */ __webpack_exports__["div"] = div;


/**
 * Alias for {@link vec2.distance}
 * @function
 */
const dist = distance;
/* harmony export (immutable) */ __webpack_exports__["dist"] = dist;


/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
const sqrDist = squaredDistance;
/* harmony export (immutable) */ __webpack_exports__["sqrDist"] = sqrDist;


/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
const sqrLen = squaredLength;
/* harmony export (immutable) */ __webpack_exports__["sqrLen"] = sqrLen;


/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
const forEach = (function() {
  let vec = create();

  return function(a, stride, offset, count, fn, arg) {
    let i, l;
    if(!stride) {
      stride = 2;
    }

    if(!offset) {
      offset = 0;
    }

    if(count) {
      l = Math.min((count * stride) + offset, a.length);
    } else {
      l = a.length;
    }

    for(i = offset; i < l; i += stride) {
      vec[0] = a[i]; vec[1] = a[i+1];
      fn(vec, vec, arg);
      a[i] = vec[0]; a[i+1] = vec[1];
    }

    return a;
  };
})();
/* harmony export (immutable) */ __webpack_exports__["forEach"] = forEach;



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Camera__ = __webpack_require__(18);


class OrthographicCamera extends __WEBPACK_IMPORTED_MODULE_1__Camera__["a" /* default */] {
    constructor(options = {}) {
        super(options);
        this.left = options.left || -1;
        this.right = options.right || 1;
        this.bottom = options.bottom || -1;
        this.top = options.top || 1;
        this.isOrthographicCamera = true;
    }
    updateProjectionMatrix() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OrthographicCamera;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Camera__ = __webpack_require__(18);


class PerspectiveCamera extends __WEBPACK_IMPORTED_MODULE_1__Camera__["a" /* default */] {
    constructor(options) {
        super(options);
        this.isPespectiveCamera = true;
    }
    updateProjectionMatrix() {
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].perspective(this.projectionMatrix, this.fov, this.aspect, this.near, this.far);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PerspectiveCamera;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Ray__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Sphere__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Vector2__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_Vector3__ = __webpack_require__(2);






const inversedProjectionViewMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
const cameraDirection = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
const directionVector = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* default */]();
let barycoord;
const fvA = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* default */]();
const fvB = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* default */]();
const fvC = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* default */]();
const uvA = new __WEBPACK_IMPORTED_MODULE_4__math_Vector2__["a" /* default */]();
const uvB = new __WEBPACK_IMPORTED_MODULE_4__math_Vector2__["a" /* default */]();
const uvC = new __WEBPACK_IMPORTED_MODULE_4__math_Vector2__["a" /* default */]();
const sphere = new __WEBPACK_IMPORTED_MODULE_2__math_Sphere__["a" /* default */]();
class RayCaster {
    constructor(origin, direction, near, far) {
        this.ray = new __WEBPACK_IMPORTED_MODULE_1__math_Ray__["a" /* default */]();
        this.near = near || 0;
        this.far = far || Infinity;
    }
    setFromCamera(coords, scene, camera, object) {
        if (camera && camera.isPespectiveCamera) {
            this.ray.origin.copy(camera.position);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(cameraDirection, [coords.x, coords.y, 0.5]);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].multiply(inversedProjectionViewMatrix, camera.projectionMatrix, camera.worldInverseMatrix);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].invert(inversedProjectionViewMatrix, inversedProjectionViewMatrix);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].transformMat4(cameraDirection, cameraDirection, inversedProjectionViewMatrix);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].sub(cameraDirection, cameraDirection, camera.position.v);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(cameraDirection, cameraDirection);
            directionVector.set(cameraDirection[0], cameraDirection[1], cameraDirection[2]);
            this.ray.direction.copy(directionVector);
        }
    }
    uvIntersection(point, v0, v1, v2) {
        barycoord = Object(__WEBPACK_IMPORTED_MODULE_3__math_Utils__["barycoordFromPoint"])(point.v, v0.v, v1.v, v2.v);
        uvA.scale(barycoord.x);
        uvB.scale(barycoord.y);
        uvC.scale(barycoord.z);
        uvA.add(uvB).add(uvC);
        return uvA.clone();
    }
    intersectObject(object) {
        if (!object.visible) return;
        let intersect;
        let uv;
        let face;
        // Check sphere
        if (object.boundingSphere === undefined) object.computeBoundingSphere();
        sphere.copy(object.boundingSphere);
        // Apply object modelMatrix, incase object has been transformed
        sphere.applyMatrix(object.modelMatrix);
        // Exit if the ray doesn't intersect the sphere
        if (!this.ray.intersectsSphere(sphere)) {
            return;
        }
        for (const f of object.geometry.faces) {
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(fvA.v, f.vertices[0].v);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(fvB.v, f.vertices[1].v);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].copy(fvC.v, f.vertices[2].v);
            // Multiply vertices by object matrix
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].transformMat4(fvA.v, fvA.v, object.modelMatrix);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].transformMat4(fvB.v, fvB.v, object.modelMatrix);
            __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].transformMat4(fvC.v, fvC.v, object.modelMatrix);
            intersect = this.ray.intersectTriangle(fvA, fvB, fvC);
            if (intersect) {
                // Get uv intersection
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].copy(uvA.v, object.geometry.uvs[f.uvs[0]].v);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].copy(uvB.v, object.geometry.uvs[f.uvs[1]].v);
                __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["d" /* vec2 */].copy(uvC.v, object.geometry.uvs[f.uvs[2]].v);
                face = f;
                uv = this.uvIntersection(intersect, fvA, fvB, fvC);
                break;
            }
        }
        return intersect ? { point: intersect, uv, face } : null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RayCaster;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_Console__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Detect__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UniformBuffers__ = __webpack_require__(16);






const config = __webpack_require__(56);
let gl;
class Renderer {
    constructor(options) {
        // Default renderer settings
        this.width = __WEBPACK_IMPORTED_MODULE_3__Constants__["RENDERER_DEFAULT_WIDTH"];
        this.height = __WEBPACK_IMPORTED_MODULE_3__Constants__["RENDERER_DEFAULT_HEIGHT"];
        this.ratio = __WEBPACK_IMPORTED_MODULE_3__Constants__["RENDERER_DEFAULT_WIDTH"] / __WEBPACK_IMPORTED_MODULE_3__Constants__["RENDERER_DEFAULT_HEIGHT"];
        this.preserveDrawingBuffer = false;
        this.pixelRatio = 1;
        this.prefferedContext = __WEBPACK_IMPORTED_MODULE_3__Constants__["RENDERER_DEFAULT_CONTEXT"];
        this.autoClear = true;
        this.clearColor = { r: 0, g: 0, b: 0, a: 1 };
        // Apply defaults
        Object.assign(this, options);
        // Create canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        // Try initialising gl
        const attributes = {
            preserveDrawingBuffer: this.preserveDrawingBuffer
        };
        const detect = Object(__WEBPACK_IMPORTED_MODULE_1__utils_Detect__["a" /* default */])();
        if (detect) {
            let contextType;
            if (detect.webgl2 && this.prefferedContext === __WEBPACK_IMPORTED_MODULE_3__Constants__["WEBGL2_CONTEXT"]) {
                contextType = __WEBPACK_IMPORTED_MODULE_3__Constants__["WEBGL2_CONTEXT"];
                const _gl = this.canvas.getContext('webgl2', attributes);
                __WEBPACK_IMPORTED_MODULE_4__GL__["set"](_gl, contextType);
            } else {
                contextType = __WEBPACK_IMPORTED_MODULE_3__Constants__["WEBGL_CONTEXT"];
                const _gl = this.canvas.getContext('webgl', attributes) || this.canvas.getContext('experimental-webgl', attributes);
                __WEBPACK_IMPORTED_MODULE_4__GL__["set"](_gl, contextType);
            }
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_Console__["b" /* warn */])('Webgl not supported');
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_Console__["a" /* log */])(`%c${config.name} ${config.version} webgl${__WEBPACK_IMPORTED_MODULE_4__GL__["webgl2"] ? 2 : ''}`, 'padding: 1px; background: #222; color: #ff00ff');
        gl = __WEBPACK_IMPORTED_MODULE_4__GL__["get"]();
        // Log Capabilities of gpu
        __WEBPACK_IMPORTED_MODULE_2__Capabilities__["set"](gl);
        // Setup global uniform buffers
        if (__WEBPACK_IMPORTED_MODULE_4__GL__["webgl2"]) {
            __WEBPACK_IMPORTED_MODULE_5__UniformBuffers__["setup"]();
        }
        // log("capabilities", Capabilities.capabilities);
        // log("extensions", Capabilities.extensions);
        this.viewport = {
            x: 0,
            y: 0,
            width: gl.drawingBufferWidth,
            height: gl.drawingBufferHeight
        };
        this.setClearColor();
        gl.enable(gl.DEPTH_TEST);
    }
    setClearColor(r = 0, g = 0, b = 0, a = 1) {
        this.clearColor.r = r;
        this.clearColor.g = g;
        this.clearColor.b = b;
        this.clearColor.a = a;
    }
    setSize(width, height) {
        const newWidth = width * this.pixelRatio;
        const newHeight = height * this.pixelRatio;
        if (newWidth !== this.width || newHeight !== this.height) {
            this.width = width * this.pixelRatio;
            this.height = height * this.pixelRatio;
            this.ratio = this.width / this.height;
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            this.canvas.style.width = `${width}px`;
            this.canvas.style.height = `${height}px`;
            this.setViewport(0, 0, width, height);
        }
    }
    setDevicePixelRatio(ratio = 1) {
        this.pixelRatio = ratio || 1;
        this.setSize(this.width, this.height);
    }
    setSissorTest(enable = false) {
        gl = __WEBPACK_IMPORTED_MODULE_4__GL__["get"]();
        if (enable) {
            gl.enable(gl.SCISSOR_TEST);
        } else {
            gl.disable(gl.SCISSOR_TEST);
        }
    }
    setSissor(x, y, width, height) {
        gl = __WEBPACK_IMPORTED_MODULE_4__GL__["get"]();
        gl.scissor(x * this.pixelRatio, y * this.pixelRatio, width * this.pixelRatio, height * this.pixelRatio);
    }
    setViewport(x, y, width, height) {
        this.viewport.x = x * this.pixelRatio;
        this.viewport.y = y * this.pixelRatio;
        this.viewport.width = width * this.pixelRatio;
        this.viewport.height = height * this.pixelRatio;
    }
    render(scene, camera) {
        gl = __WEBPACK_IMPORTED_MODULE_4__GL__["get"]();
        gl.viewport(this.viewport.x, this.viewport.y, this.viewport.width, this.viewport.height);
        gl.clearColor(this.clearColor.r, this.clearColor.g, this.clearColor.b, this.clearColor.a);
        if (this.autoClear) {
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
        // Update the scene
        scene.update();
        // Draw the scene objects
        if (gl instanceof WebGL2RenderingContext) {
            // Update global uniform buffers
            __WEBPACK_IMPORTED_MODULE_5__UniformBuffers__["updateProjectionView"](gl, camera.projectionMatrix);
        }
        // Render the scene objects
        scene.objects.forEach(child => {
            if (child.isInstanced) {
                child.drawInstance(camera);
            } else {
                child.draw(camera);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Renderer;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {"name":"ixviii.medium","version":"0.4.3","description":"Progressive WebGL toolkit for art.","main":"lib/ixviii.medium.js","scripts":{"start":"concurrently 'npm run server' 'npm run examples:js' 'npm run examples:html'","server":"live-server ./examples --quiet --port=3000 --watch='js/*,assets/**/*,*.html' --ignore='src'","examples:js":"webpack --config webpack.config.examples.js --colors --watch","examples:html":"node ./pug.config.js","examples:build":"NODE_ENV=production webpack --config webpack.config.examples.js --colors; node ./pug.config.js","build":"NODE_ENV=production npm run lint; webpack --config webpack.config.build.js --colors; NODE_ENV=production webpack --config webpack.config.build.js --colors","prepublish":"npm run build","formatting":"prettier --write --single-quote --print-width 80 './src/**/*.ts'","formatting:examples":"prettier --write --single-quote --print-width 80 './examples/src/js/**/*.js'","lint:src":"tslint --fix ./src/**/*.ts","lint:examples":"eslint --fix --ext .js ./examples/src ./internals --cache","lint":"npm run lint:src; npm run lint:examples;","precommit":"npm run lint"},"repository":{"type":"git","url":"https://github.com/amelierosser/medium.git"},"author":"Amelie Rosser <amelierosser1986@gmail.com> (https://www.ixviii.io)","license":"MIT","bugs":{"url":"https://github.com/amelierosser/medium/issues"},"homepage":"https://github.com/amelierosser/medium","devDependencies":{"@types/gl-matrix":"^2.3.0","@types/node":"^10.5.2","@types/webgl2":"^0.0.2","babel-cli":"^6.26.0","babel-eslint":"^8.0.0","babel-loader":"^7.1.2","babel-plugin-module-resolver":"^2.7.1","babel-plugin-transform-class-properties":"^6.24.1","babel-preset-env":"^1.6.0","babel-preset-minify":"^0.2.0","babili-webpack-plugin":"^0.1.2","concurrently":"^3.5.0","eslint":"^4.6.1","eslint-config-airbnb":"^15.1.0","eslint-config-airbnb-base":"^12.0.0","eslint-config-prettier":"^2.4.0","eslint-plugin-import":"^2.7.0","eslint-plugin-prettier":"^2.2.0","husky":"^0.14.3","install":"^0.10.1","json-loader":"^0.5.7","live-server":"^1.2.0","prettier":"^1.6.1","pug-cli":"^1.0.0-alpha6","stats-js":"^1.0.0-alpha1","ts-loader":"^2.3.7","tslint":"^5.7.0","tslint-config-prettier":"^1.5.0","typescript":"^2.5.2","webpack":"^3.5.6"},"dependencies":{"@types/dat-gui":"^0.6.3","bezier-js":"^2.2.3","dat-gui":"^0.5.0","file-name":"^0.1.0","gl-matrix":"^2.4.0","parse-hdr":"^1.0.0","query-string":"^5.0.0","shelljs":"^0.7.8","simplex-noise":"^2.3.0","uuid":"^3.1.0","webgl-obj-loader":"^0.1.1"}}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UniformBuffers__ = __webpack_require__(16);


let gl;
class RenderTarget {
    constructor(options) {
        this.pixelRatio = options.pixelRatio || 1;
        this.width = options.width * this.pixelRatio;
        this.height = options.height * this.pixelRatio;
        this.ratio = this.width / this.height;
        this.viewport = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        };
        this.autoClear = true;
        this.clearColor = { r: 0, g: 0, b: 0, a: 1 };
        gl = __WEBPACK_IMPORTED_MODULE_0__GL__["get"]();
        this.frameBuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        this.renderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer);
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    setClearColor(r = 0, g = 0, b = 0, a = 1) {
        this.clearColor.r = r;
        this.clearColor.g = g;
        this.clearColor.b = b;
        this.clearColor.a = a;
    }
    setSize(width, height) {
        const newWidth = width * this.pixelRatio;
        const newHeight = height * this.pixelRatio;
        if (newWidth !== this.width || newHeight !== this.height) {
            this.width = width * this.pixelRatio;
            this.height = height * this.pixelRatio;
            this.ratio = this.width / this.height;
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.width, this.height);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
            this.setViewport(0, 0, width, height);
        }
    }
    setSissorTest(enable = false) {
        gl = __WEBPACK_IMPORTED_MODULE_0__GL__["get"]();
        if (enable) {
            gl.enable(gl.SCISSOR_TEST);
        } else {
            gl.disable(gl.SCISSOR_TEST);
        }
    }
    setSissor(x, y, width, height) {
        gl = __WEBPACK_IMPORTED_MODULE_0__GL__["get"]();
        gl.scissor(x * this.pixelRatio, y * this.pixelRatio, width * this.pixelRatio, height * this.pixelRatio);
    }
    setViewport(x, y, width, height) {
        this.viewport.x = x * this.pixelRatio;
        this.viewport.y = y * this.pixelRatio;
        this.viewport.width = width * this.pixelRatio;
        this.viewport.height = height * this.pixelRatio;
    }
    render(scene, camera) {
        gl = __WEBPACK_IMPORTED_MODULE_0__GL__["get"]();
        gl.viewport(this.viewport.x, this.viewport.y, this.viewport.width, this.viewport.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
        if (this.autoClear) {
            gl.clearColor(this.clearColor.r, this.clearColor.g, this.clearColor.b, this.clearColor.a);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
        // Update the scene
        scene.update();
        if (gl instanceof WebGL2RenderingContext) {
            // Update global uniform buffers
            __WEBPACK_IMPORTED_MODULE_1__UniformBuffers__["updateProjectionView"](gl, camera.projectionMatrix);
        }
        // Render the scene objects
        scene.objects.forEach(child => {
            if (child.isInstanced) {
                child.drawInstance(camera);
            } else {
                child.draw(camera);
            }
        });
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.bindTexture(gl.TEXTURE_2D, null);
        // Reset
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RenderTarget;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Scene {
    constructor() {
        this.objects = [];
        this.pointLights = undefined;
        this.directionalLights = undefined;
    }
    add(object) {
        this.objects.push(object);
    }
    remove(object, dispose = false) {
        const objectIndex = this.objects.indexOf(object);
        if (objectIndex !== -1) {
            this.objects.splice(objectIndex, 1);
            if (dispose) {
                object.dispose();
                object = undefined;
            }
        }
    }
    update() {
        if (this.ambientLight) {
            this.ambientLight.update();
            this.ambientLight.bind();
        }
        if (this.directionalLights) {
            this.directionalLights.update();
            this.directionalLights.bind();
        }
        if (this.pointLights) {
            this.pointLights.update();
            this.pointLights.bind();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return basicFragmentShaderEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicFragmentShaderEs100; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks_EsVersion_glsl__ = __webpack_require__(4);

const basicFragmentShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_0__chunks_EsVersion_glsl__["a" /* default */]}
	#HOOK_PRECISION
	#HOOK_DEFINES

	layout(std140) uniform;

	in vec3 vDiffuse;
	in vec3 vPosition;

	#ifdef normals
	in vec3 vNormal;
	#endif

	#ifdef uv
	in vec2 vUv;
	#endif

	out vec4 outgoingColor;

	#HOOK_FRAGMENT_PRE

	void main(void){

		vec3 color = vDiffuse;

		#ifdef normals
		vec3 normal = normalize(vNormal);
		#endif

		#HOOK_FRAGMENT_MAIN

		outgoingColor = vec4(color.rgb, 1.0);

		#HOOK_FRAGMENT_END
	}
`;
const basicFragmentShaderEs100 = `
	#HOOK_PRECISION
	#HOOK_DEFINES

	varying vec3 vDiffuse;
	varying vec3 vPosition;

	#ifdef normals
	varying vec3 vNormal;
	#endif

	#ifdef uv
	varying vec2 vUv;
	#endif

	#HOOK_FRAGMENT_PRE

	void main(void){

		vec3 color = vDiffuse;

		#ifdef normals
		vec3 normal = normalize(vNormal);
		#endif

		#HOOK_FRAGMENT_MAIN

		gl_FragColor = vec4(color.rgb, 1.0);

		#HOOK_FRAGMENT_END
	}
`;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lambertFragmentShaderEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lambertFragmentShaderEs100; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks_AmbientLight_glsl__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunks_DirectionalLights_glsl__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunks_EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chunks_Lambert_glsl__ = __webpack_require__(22);




const lambertFragmentShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_2__chunks_EsVersion_glsl__["a" /* default */]}
	#HOOK_PRECISION
	#HOOK_DEFINES

	layout(std140) uniform;

	in vec3 vDiffuse;
	in vec3 vPosition;

	#ifdef normals
	in vec3 vNormal;
	#endif

	#ifdef uv
	in vec2 vUv;
	#endif

	#ifdef ambientLight
	${__WEBPACK_IMPORTED_MODULE_0__chunks_AmbientLight_glsl__["ambientLightEs300"]}
	#endif

	#ifdef directionalLights
	${__WEBPACK_IMPORTED_MODULE_1__chunks_DirectionalLights_glsl__["directionalLightsEs300"]}
	${__WEBPACK_IMPORTED_MODULE_3__chunks_Lambert_glsl__["lambertEs300"]}
	#endif

	out vec4 outgoingColor;


	#HOOK_FRAGMENT_PRE

	void main(void){

		vec3 color = vec3(0.0);

		#ifdef normals
		vec3 normal = normalize(vNormal);
		#endif

		#HOOK_FRAGMENT_MAIN

		#ifdef directionalLights
		for (int i = 0; i < #HOOK_DIRECTIONAL_LIGHTS; i++) {
			color += CalculateDirectionalLight(uDirectionalLights[i], normal);
		}
		#endif

		outgoingColor = vec4(color.rgb, 1.0);

		#HOOK_FRAGMENT_END
	}
`;
const lambertFragmentShaderEs100 = `
	#HOOK_PRECISION
	#HOOK_DEFINES

	varying vec3 vDiffuse;
	varying vec3 vPosition;

	#ifdef normals
	varying vec3 vNormal;
	#endif

	#ifdef uv
	varying vec2 vUv;
	#endif

	#ifdef ambientLight
	${__WEBPACK_IMPORTED_MODULE_0__chunks_AmbientLight_glsl__["ambientLightEs100"]}
	#endif

	#ifdef directionalLights
	${__WEBPACK_IMPORTED_MODULE_1__chunks_DirectionalLights_glsl__["directionalLightsEs100"]}
	${__WEBPACK_IMPORTED_MODULE_3__chunks_Lambert_glsl__["lambertEs100"]}
	#endif

	#HOOK_FRAGMENT_PRE

	void main(void){

		vec3 color = vec3(0.0);

		#ifdef normals
		vec3 normal = normalize(vNormal);
		#endif

		#HOOK_FRAGMENT_MAIN

		#ifdef directionalLights
		for (int i = 0; i < #HOOK_DIRECTIONAL_LIGHTS; i++) {
			color += CalculateDirectionalLight(uDirectionalLights[i], normal);
		}
		#endif

		gl_FragColor = vec4(color.rgb, 1.0);

		#HOOK_FRAGMENT_END
	}
`;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return phongFragmentShaderEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return phongFragmentShaderEs100; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks_AmbientLight_glsl__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunks_DirectionalLights_glsl__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunks_EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chunks_Lambert_glsl__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chunks_Phong_glsl__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chunks_PointLights_glsl__ = __webpack_require__(38);






const phongFragmentShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_2__chunks_EsVersion_glsl__["a" /* default */]}
	#HOOK_PRECISION
	#HOOK_DEFINES

	layout(std140) uniform;

	in vec3 vDiffuse;
	in vec3 vPosition;
	in vec4 vWorldPosition;

	uniform vec3 uCameraPosition;

	#ifdef normals
	in vec3 vNormal;
	#endif

	#ifdef uv
	in vec2 vUv;
	#endif

	#ifdef ambientLight
	${__WEBPACK_IMPORTED_MODULE_0__chunks_AmbientLight_glsl__["ambientLightEs300"]}
	#endif

	#ifdef directionalLights
	${__WEBPACK_IMPORTED_MODULE_1__chunks_DirectionalLights_glsl__["directionalLightsEs300"]}
	${__WEBPACK_IMPORTED_MODULE_3__chunks_Lambert_glsl__["lambertEs300"]}
	#endif

	#ifdef pointLights
	${__WEBPACK_IMPORTED_MODULE_5__chunks_PointLights_glsl__["pointLightsEs300"]}
	${__WEBPACK_IMPORTED_MODULE_4__chunks_Phong_glsl__["b" /* phongEs300 */]}
	#endif

	out vec4 outgoingColor;

	#HOOK_FRAGMENT_PRE

	void main(void){

		vec3 color = vec3(0.0);

		#ifdef normals
		vec3 normal = normalize(vNormal);
		#endif

		#HOOK_FRAGMENT_MAIN

		#ifdef directionalLights
		for (int i = 0; i < #HOOK_DIRECTIONAL_LIGHTS; i++) {
			color += CalculateDirectionalLight(uDirectionalLights[i], normal);
		}
		#endif

		#ifdef pointLights
		for (int i = 0; i < #HOOK_POINT_LIGHTS; i++) {
			color += CalculatePointLight(uPointLights[i], normal);
		}
		#endif

		outgoingColor = vec4(color.rgb, 1.0);

		#HOOK_FRAGMENT_END
	}
`;
const phongFragmentShaderEs100 = `
	#HOOK_PRECISION
	#HOOK_DEFINES

	varying vec3 vDiffuse;
	varying vec3 vPosition;
	varying vec4 vWorldPosition;

	#ifdef normals
	varying vec3 vNormal;
	#endif

	#ifdef uv
	varying vec2 vUv;
	#endif

	#ifdef ambientLight
	${__WEBPACK_IMPORTED_MODULE_0__chunks_AmbientLight_glsl__["ambientLightEs100"]}
	#endif

	#ifdef directionalLights
	${__WEBPACK_IMPORTED_MODULE_1__chunks_DirectionalLights_glsl__["directionalLightsEs100"]}
	${__WEBPACK_IMPORTED_MODULE_3__chunks_Lambert_glsl__["lambertEs100"]}
	#endif

	#ifdef pointLights
	${__WEBPACK_IMPORTED_MODULE_5__chunks_PointLights_glsl__["pointLightsEs100"]}
	${__WEBPACK_IMPORTED_MODULE_4__chunks_Phong_glsl__["a" /* phongEs100 */]}
	#endif

	#HOOK_FRAGMENT_PRE

	void main(void){

		vec3 color = vec3(0.0);

		#ifdef normals
		vec3 normal = normalize(vNormal);
		#endif

		#HOOK_FRAGMENT_MAIN

		#ifdef directionalLights
		for (int i = 0; i < #HOOK_DIRECTIONAL_LIGHTS; i++) {
			color += CalculateDirectionalLight(uDirectionalLights[i], normal);
		}
		#endif

		#ifdef pointLights
		for (int i = 0; i < #HOOK_POINT_LIGHTS; i++) {
			color += CalculatePointLight(uPointLights[i], normal);
		}
		#endif

		gl_FragColor = vec4(color.rgb, 1.0);

		#HOOK_FRAGMENT_END
	}
`;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return phongEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return phongEs100; });
// https://learnopengl.com/#!Lighting/Multiple-lights
const phongEs300 = `
	vec3 CalculatePointLight(PointLight light, vec3 normal) {
		vec3 lightDirection = normalize(light.position.xyz - vWorldPosition.xyz);

		// diffuse shading
		float diff = max(dot(normal, lightDirection), 0.0);
		// specular shading
		vec3 reflectDirection = reflect(-lightDirection, normal);

		// Fix the spec from showing on the backside by multiplying it by the lambert term
		float spec = diff * pow(max(dot(lightDirection, reflectDirection), 0.0), light.shininess.x);
		// attenuation
		float constant = 1.0;
		float linear = 0.09;
		float quadratic = 0.032;

		float dist = length(light.position.xyz);
		float attenuation = 1.0 / (constant + linear * dist + quadratic * (dist * dist));

		vec3 ambientColor = vec3(0.5);
		float ambientIntensity = 0.5;

		#ifdef ambientLight
		ambientColor = uAmbientLight.color.rgb;
		ambientIntensity = uAmbientLight.intensity.x;
		#endif

		// combine results
		vec3 ambient = (ambientColor * ambientIntensity) * vDiffuse;
		vec3 diffuse = diff * vDiffuse;
		vec3 specular = light.specularColor.rgb * spec * light.shininess.x;
		ambient  *= attenuation;
		diffuse  *= attenuation;
		specular *= attenuation;
		return (ambient + diffuse + specular);
	}
`;
const phongEs100 = `
	vec3 CalculatePointLight(PointLight light, vec3 normal) {
		vec3 lightDirection = normalize(light.position - vWorldPosition.xyz);

		// diffuse shading
		float diff = max(dot(normal, lightDirection), 0.0);
		// specular shading
		vec3 reflectDirection = reflect(-lightDirection, normal);

		// Fix the spec from showing on the backside by multiplying it by the lambert term
		float spec = diff * pow(max(dot(lightDirection, reflectDirection), 0.0), light.shininess);
		// attenuation
		float constant = 1.0;
		float linear = 0.09;
		float quadratic = 0.032;

		float dist = length(light.position);
		float attenuation = 1.0 / (constant + linear * dist + quadratic * (dist * dist));

		vec3 ambientColor = vec3(0.5);
		float ambientIntensity = 0.5;

		#ifdef ambientLight
		ambientColor = uAmbientLight.color;
		ambientIntensity = uAmbientLight.intensity;
		#endif

		// combine results
		vec3 ambient = (ambientColor * ambientIntensity) * vDiffuse;
		vec3 diffuse = diff * vDiffuse;
		vec3 specular = light.specularColor * spec * light.shininess;
		ambient  *= attenuation;
		diffuse  *= attenuation;
		specular *= attenuation;
		return (ambient + diffuse + specular);
	}
`;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vertexShaderEs300; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vertexShaderEs100; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks_EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunks_Math_glsl__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunks_ProjectionView_glsl__ = __webpack_require__(11);



const vertexShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_0__chunks_EsVersion_glsl__["a" /* default */]}
	${__WEBPACK_IMPORTED_MODULE_1__chunks_Math_glsl__["b" /* definePI */]}
	${__WEBPACK_IMPORTED_MODULE_1__chunks_Math_glsl__["c" /* definePITwo */]}
	#HOOK_DEFINES

	layout(std140) uniform;

	${__WEBPACK_IMPORTED_MODULE_2__chunks_ProjectionView_glsl__["a" /* default */]}

	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelViewMatrix;
	uniform mat4 uModelMatrix;
	uniform mat3 uNormalMatrix;

	in vec3 aVertexPosition;
	out vec3 vPosition;
	out vec4 vWorldPosition;

	// Camera
	uniform vec3 uCameraPosition;

	#ifdef vertexColors
	in vec3 aVertexColor;
	#endif

	// Color
	uniform vec3 uDiffuse;
	out vec3 vDiffuse;

	// Normal
	#ifdef normals
	in vec3 aVertexNormal;
	out vec3 vNormal;
	#endif

	// Uv
	#ifdef uv
	in vec2 aUv;
	out vec2 vUv;
	#endif

	#HOOK_VERTEX_PRE

	void main(void){

		vDiffuse = uDiffuse;

		// Override for custom positioning
		vec3 transformed = vec3(0.0);

		#ifdef vertexColors
		vDiffuse = aVertexColor;
		#endif

		#ifdef uv
		vUv = aUv;
		#endif

		#HOOK_VERTEX_MAIN

		#ifdef normals
		vNormal = uNormalMatrix * aVertexNormal;
		#endif

		// Vertex position + offset
		vPosition = aVertexPosition + transformed;

		// Calculate world position of vertex with transformed
		vWorldPosition = uModelMatrix * vec4(aVertexPosition + transformed, 1.0);

		gl_Position = uProjectionView.projectionMatrix * uModelViewMatrix * vec4(vPosition, 1.0);

		#HOOK_VERTEX_END
	}
`;
const vertexShaderEs100 = `

	${__WEBPACK_IMPORTED_MODULE_1__chunks_Math_glsl__["b" /* definePI */]}
	${__WEBPACK_IMPORTED_MODULE_1__chunks_Math_glsl__["c" /* definePITwo */]}
	#HOOK_DEFINES

	// Position
	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelViewMatrix;
	uniform mat4 uModelMatrix;
	uniform mat3 uNormalMatrix;
	attribute vec3 aVertexPosition;
	varying vec3 vPosition;
	varying vec4 vWorldPosition;

	// Camera
	uniform vec3 uCameraPosition;

	#ifdef vertexColors
	attribute vec3 aVertexColor;
	#endif

	// Color
	uniform vec3 uDiffuse;
	varying vec3 vDiffuse;

	// Normal
	#ifdef normals
	attribute vec3 aVertexNormal;
	varying vec3 vNormal;
	#endif

	// Uv
	#ifdef uv
	attribute vec2 aUv;
	varying vec2 vUv;
	#endif

	#HOOK_VERTEX_PRE

	void main(void){

		vDiffuse = uDiffuse;

		// Override for custom positioning
		vec3 transformed = vec3(0.0);

		#ifdef vertexColors
		vDiffuse = aVertexColor;
		#endif

		#ifdef uv
		vUv = aUv;
		#endif

		#HOOK_VERTEX_MAIN

		#ifdef normals
		vNormal = uNormalMatrix * aVertexNormal;
		#endif

		// Vertex position + offset
		vPosition = aVertexPosition + transformed;

		// Calculate world position of vertex with transformed
		vWorldPosition = uModelMatrix * vec4(aVertexPosition + transformed, 1.0);

		gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(vPosition, 1.0);

		#HOOK_VERTEX_END
	}
`;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shaders_chunks_EsVersion_glsl__ = __webpack_require__(4);


const WORD_REGX = word => new RegExp(`\\b${word}\\b`, 'gi');
const LINE_REGX = word => new RegExp(`${word}`, 'gi');
const VERTEX = [{
    match: WORD_REGX('in'),
    replace: 'attribute'
}, {
    match: WORD_REGX('out'),
    replace: 'varying'
}];
const FRAGMENT = [{
    match: WORD_REGX('in'),
    replace: 'varying'
}, {
    match: LINE_REGX('out vec4 outgoingColor;'),
    replace: ''
}, {
    match: WORD_REGX('outgoingColor'),
    replace: 'gl_FragColor'
}, {
    match: WORD_REGX('textureProj'),
    replace: 'texture2DProj'
}, {
    match: WORD_REGX('texture'),
    replace(shader) {
        // Find all texture defintions
        const textureGlobalRegx = new RegExp('\\btexture\\b', 'gi');
        // Find single texture definition
        const textureSingleRegx = new RegExp('\\btexture\\b', 'i');
        // Gets the texture call signature e.g texture(uTexture1, vUv);
        const textureUniformNameRegx = new RegExp(/texture\(([^)]+)\)/, 'i');
        // Get all matching occurances
        const matches = shader.match(textureGlobalRegx);
        let replacement = '';
        // If nothing matches return
        if (matches === null) return shader;
        // Replace each occurance by it's uniform type
        for (const i of matches) {
            const match = shader.match(textureUniformNameRegx)[0];
            if (match) {
                // Extract the uniform name
                const uniformName = match.replace('texture(', '').split(',')[0];
                // Find the uniform definition
                let uniformType = shader.match(`(.*?) ${uniformName}`, 'i')[1];
                // Remove whitespace at the start
                uniformType = uniformType.replace(/^\s+/g, '');
                // Get the sampler type
                uniformType = uniformType.split(' ')[1];
                switch (uniformType) {
                    case 'sampler2D':
                        {
                            replacement = 'texture2D';
                            break;
                        }
                    case 'samplerCube':
                        {
                            replacement = 'textureCube';
                            break;
                        }
                    default:
                }
            }
            shader = shader.replace(textureSingleRegx, replacement);
        }
        return shader;
    }
}];
const GENERIC = [{
    match: LINE_REGX(__WEBPACK_IMPORTED_MODULE_1__shaders_chunks_EsVersion_glsl__["a" /* default */]),
    replace: ''
}];
const VERTEX_RULES = [...GENERIC, ...VERTEX];
const FRAGMENT_RULES = [...GENERIC, ...FRAGMENT];
/**
 * Replaces es300 syntax to es100
 */
function parse(shader, shaderType) {
    if (__WEBPACK_IMPORTED_MODULE_0__core_GL__["webgl2"]) {
        return shader;
    }
    const rules = shaderType === 'vertex' ? VERTEX_RULES : FRAGMENT_RULES;
    rules.forEach(rule => {
        if (typeof rule.replace === 'function') {
            shader = rule.replace(shader);
        } else {
            shader = shader.replace(rule.match, rule.replace);
        }
    });
    // if (shaderType === 'vertex') {
    // 	console.log(shader);
    // }
    // if (shaderType === 'fragment') {
    // 	console.log(shader);
    // }
    return shader;
}

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Console__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GL__ = __webpack_require__(0);



let gl;
class Program {
    constructor() {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        this.program = gl.createProgram();
        this.created = false;
        // Uniform blocks
        this.uniformBlocks = {};
        // Cache all attribute locations
        this.attributeLocations = {};
    }
    link(vertexShader, fragmentShader, transformFeedbackVaryings) {
        this.compiledVertexShader = this.compile('vs', vertexShader);
        this.compiledFragmentShader = this.compile('fs', fragmentShader);
        // Don"t attach a broken shader
        // this will allow other objects to continue rendering
        if (!this.compiledVertexShader || !this.compiledFragmentShader) {
            return;
        }
        gl.attachShader(this.program, this.compiledVertexShader);
        gl.attachShader(this.program, this.compiledFragmentShader);
        if (transformFeedbackVaryings instanceof Array && gl instanceof WebGL2RenderingContext) {
            gl.transformFeedbackVaryings(this.program, transformFeedbackVaryings, gl.SEPARATE_ATTRIBS);
        }
        gl.linkProgram(this.program);
        gl.validateProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            const info = gl.getProgramInfoLog(this.program);
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_Console__["b" /* warn */])('Failed to initialise shaders', info);
        }
        this.created = true;
    }
    compile(type, source) {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
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
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_Console__["b" /* warn */])(`Failed to compile '${type}' shader:`);
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_Console__["b" /* warn */])(gl.getShaderInfoLog(shader));
            Object(__WEBPACK_IMPORTED_MODULE_1__utils_Console__["b" /* warn */])(Object(__WEBPACK_IMPORTED_MODULE_0__math_Utils__["addLineNumbers"])(source));
            return false;
        }
        return shader;
    }
    setAttributeLocation(attributeName) {
        if (!this.created) return;
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        this.attributeLocations[attributeName] = gl.getAttribLocation(this.program, attributeName);
        gl.enableVertexAttribArray(this.attributeLocations[attributeName]);
    }
    setAttributePointer(attributeName, itemSize) {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        gl.vertexAttribPointer(this.attributeLocations[attributeName], itemSize, gl.FLOAT, false, 0, 0);
    }
    setAttributeInstancedPointer(attributeName, itemSize) {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        gl.vertexAttribPointer(this.attributeLocations[attributeName], itemSize, gl.FLOAT, false, 0, 0);
    }
    setUniformLocation(uniforms, uniformName) {
        if (!this.created) return;
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        uniforms[uniformName].location = gl.getUniformLocation(this.program, uniformName);
    }
    setUniformBlockLocation(uniformName, uniformBuffer, index) {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        if (gl instanceof WebGL2RenderingContext) {
            this.uniformBlocks[uniformName] = gl.getUniformBlockIndex(this.program, uniformName);
            gl.uniformBlockBinding(this.program, this.uniformBlocks[uniformName], index);
            gl.bindBufferBase(gl.UNIFORM_BUFFER, index, uniformBuffer);
        }
    }
    bind() {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        gl.useProgram(this.program);
    }
    dispose() {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Program;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loaders_HdrLoader__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loaders_ImageLoader__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_Canvas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Console__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ImageData__ = __webpack_require__(24);








let gl;
class Texture extends __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__["a" /* default */] {
    constructor(options) {
        super();
        this.onTextureLoaded = response => {
            this.image = response;
            this.update(this.image);
            this.emit('loaded');
        };
        this.onTextureError = error => {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_Console__["b" /* warn */])(error);
            this.emit('error', error);
        };
        gl = __WEBPACK_IMPORTED_MODULE_6__GL__["get"]();
        this.src = null;
        this.magFilter = gl.NEAREST;
        this.minFilter = gl.NEAREST;
        this.wrapS = gl.CLAMP_TO_EDGE;
        this.wrapT = gl.CLAMP_TO_EDGE;
        this.resizeToPow2 = false;
        Object.assign(this, options);
        const { canvas } = Object(__WEBPACK_IMPORTED_MODULE_4__utils_Canvas__["a" /* createCanvas */])(1, 1);
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.wrapT);
        gl.bindTexture(gl.TEXTURE_2D, null);
        if (this.src) {
            this._isHdr = this.src.split('.').pop() === 'hdr';
            this.load(this.src);
        }
    }
    load(src) {
        if (this._isHdr) {
            Object(__WEBPACK_IMPORTED_MODULE_1__loaders_HdrLoader__["a" /* default */])(src).then(this.onTextureLoaded).catch(this.onTextureError);
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_2__loaders_ImageLoader__["a" /* default */])(src).then(this.onTextureLoaded).catch(this.onTextureError);
        }
    }
    updateImage(src) {
        this.src = src || this.src;
        this.load(this.src);
    }
    update(image) {
        gl = __WEBPACK_IMPORTED_MODULE_6__GL__["get"]();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        if (image instanceof __WEBPACK_IMPORTED_MODULE_7__ImageData__["a" /* default */] && gl instanceof WebGL2RenderingContext) {
            this.image = image;
            // This is only for hdr data texture atm
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, image.width, image.height, 0, gl.RGBA, gl.FLOAT, image.data);
        } else if (image instanceof HTMLCanvasElement || image instanceof HTMLImageElement) {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        }
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
    _resizeImage(image) {
        if (!this.resizeToPow2 || image instanceof __WEBPACK_IMPORTED_MODULE_7__ImageData__["a" /* default */]) return this.image;
        // Return if the image size is already a power of 2
        if (Object(__WEBPACK_IMPORTED_MODULE_3__math_Utils__["isPowerOf2"])(image.width) && Object(__WEBPACK_IMPORTED_MODULE_3__math_Utils__["isPowerOf2"])(image.height)) {
            return image;
        }
        const size = Object(__WEBPACK_IMPORTED_MODULE_3__math_Utils__["nearestPowerOf2"])(Math.max(image.width, image.height));
        const { canvas, ctx } = Object(__WEBPACK_IMPORTED_MODULE_4__utils_Canvas__["a" /* createCanvas */])(size, size);
        ctx.drawImage(image, 0, 0, size, size);
        return canvas;
    }
    dispose() {
        gl = __WEBPACK_IMPORTED_MODULE_6__GL__["get"]();
        gl.deleteTexture(this.texture);
        this.texture = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Texture;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

//Code ported by Marcin Ignac (2014)
//Based on Java implementation from
//https://code.google.com/r/cys12345-research/source/browse/hdr/image_processor/RGBE.java?r=7d84e9fd866b24079dbe61fa0a966ce8365f5726
var radiancePattern = "#\\?RADIANCE"
var commentPattern = "#.*"
var gammaPattern = "GAMMA=";
var exposurePattern = "EXPOSURE=\\s*([0-9]*[.][0-9]*)";
var formatPattern = "FORMAT=32-bit_rle_rgbe";
var widthHeightPattern = "-Y ([0-9]+) \\+X ([0-9]+)";

//http://croquetweak.blogspot.co.uk/2014/08/deconstructing-floats-frexp-and-ldexp.html
function ldexp(mantissa, exponent) {
    return exponent > 1023 // avoid multiplying by infinity
        ? mantissa * Math.pow(2, 1023) * Math.pow(2, exponent - 1023)
        : exponent < -1074 // avoid multiplying by zero
        ? mantissa * Math.pow(2, -1074) * Math.pow(2, exponent + 1074)
        : mantissa * Math.pow(2, exponent);
}

function readPixelsRawRLE(buffer, data, offset, fileOffset, scanline_width, num_scanlines) {
    var rgbe = new Array(4);
    var scanline_buffer = null;
    var ptr;
    var ptr_end;
    var count;
    var buf = new Array(2);
    var bufferLength = buffer.length;

    function readBuf(buf) {
      var bytesRead = 0;
      do {
        buf[bytesRead++] = buffer[fileOffset];
      } while(++fileOffset < bufferLength && bytesRead < buf.length);
      return bytesRead;
    }

    function readBufOffset(buf, offset, length) {
      var bytesRead = 0;
      do {
        buf[offset + bytesRead++] = buffer[fileOffset];
      } while(++fileOffset < bufferLength && bytesRead < length);
      return bytesRead;
    }

    function readPixelsRaw(buffer, data, offset, numpixels) {
        var numExpected = 4 * numpixels;
        var numRead = readBufOffset(data, offset, numExpected);
        if (numRead < numExpected) {
            throw new Error('Error reading raw pixels: got ' + numRead + ' bytes, expected ' + numExpected);
        }
    }

    while (num_scanlines > 0) {
      if (readBuf(rgbe) < rgbe.length) {
        throw new Error("Error reading bytes: expected " + rgbe.length);
      }

      if ((rgbe[0] != 2)||(rgbe[1] != 2)||((rgbe[2] & 0x80) != 0)) {
          //this file is not run length encoded
          data[offset++] = rgbe[0];
          data[offset++] = rgbe[1];
          data[offset++] = rgbe[2];
          data[offset++] = rgbe[3];
          readPixelsRaw(buffer, data, offset, scanline_width*num_scanlines-1);
          return;
      }

      if ((((rgbe[2] & 0xFF)<<8) | (rgbe[3] & 0xFF)) != scanline_width) {
        throw new Error("Wrong scanline width " + (((rgbe[2] & 0xFF)<<8) | (rgbe[3] & 0xFF)) + ", expected " + scanline_width);
      }

      if (scanline_buffer == null) {
        scanline_buffer = new Array(4*scanline_width);
      }

      ptr = 0;
      /* read each of the four channels for the scanline into the buffer */
      for (var i=0; i<4; i++) {
        ptr_end = (i+1)*scanline_width;
        while(ptr < ptr_end) {
          if (readBuf(buf) < buf.length) {
            throw new Error("Error reading 2-byte buffer");
          }
          if ((buf[0] & 0xFF) > 128) {
            /* a run of the same value */
            count = (buf[0] & 0xFF) - 128;
            if ((count == 0) || (count > ptr_end - ptr)) {
              throw new Error("Bad scanline data");
            }
            while(count-- > 0)
              scanline_buffer[ptr++] = buf[1];
          }
          else {
            /* a non-run */
            count = buf[0] & 0xFF;
            if ((count == 0) || (count > ptr_end - ptr)) {
              throw new Error("Bad scanline data");
            }
            scanline_buffer[ptr++] = buf[1];
            if (--count > 0) {
              if (readBufOffset(scanline_buffer, ptr, count) < count) {
                throw new Error("Error reading non-run data");
              }
              ptr += count;
            }
          }
        }
      }

      /* copy byte data to output */
      for(var i = 0; i < scanline_width; i++) {
        data[offset + 0] = scanline_buffer[i];
        data[offset + 1] = scanline_buffer[i+scanline_width];
        data[offset + 2] = scanline_buffer[i+2*scanline_width];
        data[offset + 3] = scanline_buffer[i+3*scanline_width];
        offset += 4;
      }

      num_scanlines--;
    }

}

//Returns data as floats and flipped along Y by default
function parseHdr(buffer) {
    if (buffer instanceof ArrayBuffer) {
        buffer = new Uint8Array(buffer);
    }

    var fileOffset = 0;
    var bufferLength = buffer.length;

    var NEW_LINE = 10;

    function readLine() {
        var buf = "";
        do {
            var b = buffer[fileOffset];
            if (b == NEW_LINE) {
                ++fileOffset
                break;
            }
            buf += String.fromCharCode(b);
        } while(++fileOffset < bufferLength);
        return buf;
    }

    var width = 0;
    var height = 0;
    var exposure = 1;
    var gamma = 1;
    var rle = false;

    for(var i=0; i<20; i++) {
        var line = readLine();
        var match;
        if (match = line.match(radiancePattern)) {
        }
        else if (match = line.match(formatPattern)) {
            rle = true;
        }
        else if (match = line.match(exposurePattern)) {
            exposure = Number(match[1]);
        }
        else if (match = line.match(commentPattern)) {
        }
        else if (match = line.match(widthHeightPattern)) {
            height = Number(match[1]);
            width = Number(match[2]);
            break;
        }
    }

    if (!rle) {
        throw new Error("File is not run length encoded!");
    }

    var data = new Uint8Array(width * height * 4);
    var scanline_width = width;
    var num_scanlines = height;

    readPixelsRawRLE(buffer, data, 0, fileOffset, scanline_width, num_scanlines);

    //TODO: Should be Float16
    var floatData = new Float32Array(width * height * 4);
    for(var offset=0; offset<data.length; offset += 4) {
        var r = data[offset+0]/255;
        var g = data[offset+1]/255;
        var b = data[offset+2]/255;
        var e = data[offset+3];
        var f = Math.pow(2.0, e - 128.0)

        r *= f;
        g *= f;
        b *= f;

        var floatOffset = offset;

        floatData[floatOffset+0] = r;
        floatData[floatOffset+1] = g;
        floatData[floatOffset+2] = b;
        floatData[floatOffset+3] = 1.0;
    }

    return {
        shape: [width, height],
        exposure: exposure,
        gamma: gamma,
        data: floatData
    }
}

module.exports = parseHdr;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GL__ = __webpack_require__(0);


let gl;
class Texture3d extends __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__["a" /* default */] {
    constructor(options) {
        super();
        gl = __WEBPACK_IMPORTED_MODULE_1__GL__["get"]();
        if (!(gl instanceof WebGL2RenderingContext)) {
            return;
        }
        this.src = null;
        this.size = null;
        Object.assign(this, options);
        this.texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_3D, this.texture);
        gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_BASE_LEVEL, 0);
        gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MAX_LEVEL, Math.log2(this.size));
        gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texImage3D(gl.TEXTURE_3D, 0, gl.R8, this.size, this.size, this.size, 0, gl.RED, gl.UNSIGNED_BYTE, this.src);
        gl.generateMipmap(gl.TEXTURE_3D);
    }
    dispose() {
        gl = __WEBPACK_IMPORTED_MODULE_1__GL__["get"]();
        if (!(gl instanceof WebGL2RenderingContext)) {
            return;
        }
        gl.deleteTexture(this.texture);
        this.texture = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Texture3d;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loaders_HdrLoader__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loaders_ImageLoader__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_Canvas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_Console__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ImageData__ = __webpack_require__(24);








let gl;
class TextureCube extends __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__["a" /* default */] {
    constructor(options) {
        super();
        this.onTextureLoaded = response => {
            this.images = response;
            this.update(this.images);
            this.emit('loaded');
        };
        this.onTextureError = error => {
            Object(__WEBPACK_IMPORTED_MODULE_5__utils_Console__["b" /* warn */])(error);
            this.emit('error', error);
        };
        gl = __WEBPACK_IMPORTED_MODULE_6__GL__["get"]();
        this.src = Array(6).fill('');
        this.magFilter = gl.LINEAR;
        this.minFilter = gl.LINEAR;
        this.wrapS = gl.CLAMP_TO_EDGE;
        this.wrapT = gl.CLAMP_TO_EDGE;
        this.resizeToPow2 = false;
        Object.assign(this, options);
        this.texture = gl.createTexture();
        this.images = [];
        this.loaders = [];
        const images = [];
        const { canvas } = Object(__WEBPACK_IMPORTED_MODULE_4__utils_Canvas__["a" /* createCanvas */])(1, 1);
        for (let i = 0; i < 6; i += 1) {
            images.push(canvas);
        }
        this.update(images);
        // Check media type
        this._isHdr = this.src[0].split('.').pop() === 'hdr';
        this.src.forEach((src, i) => {
            this.loaders[i] = this.load(this.src[i]);
        });
        Promise.all(this.loaders).then(this.onTextureLoaded).catch(this.onTextureError);
    }
    load(src) {
        if (this._isHdr) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__loaders_HdrLoader__["a" /* default */])(src);
        } else {
            return Object(__WEBPACK_IMPORTED_MODULE_2__loaders_ImageLoader__["a" /* default */])(src);
        }
    }
    update(images) {
        gl = __WEBPACK_IMPORTED_MODULE_6__GL__["get"]();
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.texture);
        const targets = [gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_X, gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        for (let i = 0; i < 6; i += 1) {
            const image = this._isHdr ? images[i] : this._resizeImage(images[i]);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
            if (image instanceof __WEBPACK_IMPORTED_MODULE_7__ImageData__["a" /* default */]) {
                if (gl instanceof WebGL2RenderingContext) {
                    gl.texImage2D(targets[i], 0, gl.RGBA16F, image.width, image.height, 0, gl.RGBA, gl.FLOAT, image.data);
                } else {
                    // TODO
                }
            } else {
                gl.texImage2D(targets[i], 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
            }
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, this.magFilter);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, this.minFilter);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, this.wrapS);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, this.wrapT);
        }
        // gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
    }
    _resizeImage(image) {
        if (!this.resizeToPow2 || image instanceof __WEBPACK_IMPORTED_MODULE_7__ImageData__["a" /* default */]) return image;
        // Return if the image size is already a power of 2
        if (Object(__WEBPACK_IMPORTED_MODULE_3__math_Utils__["isPowerOf2"])(image.width) && Object(__WEBPACK_IMPORTED_MODULE_3__math_Utils__["isPowerOf2"])(image.height)) {
            return image;
        }
        const size = Object(__WEBPACK_IMPORTED_MODULE_3__math_Utils__["nearestPowerOf2"])(Math.max(image.width, image.height));
        const { canvas, ctx } = Object(__WEBPACK_IMPORTED_MODULE_4__utils_Canvas__["a" /* createCanvas */])(size, size);
        ctx.drawImage(image, 0, 0, size, size);
        return canvas;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextureCube;


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Canvas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GL__ = __webpack_require__(0);



let gl;
class VideoTexture extends __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__["a" /* default */] {
    constructor(options) {
        super();
        this._onCanPlayThrough = () => {
            this.emit('canplaythrough');
        };
        this._onEnded = () => {
            this.emit('ended');
        };
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        this.src = '';
        this.magFilter = gl.NEAREST;
        this.minFilter = gl.NEAREST;
        this.wrapS = gl.CLAMP_TO_EDGE;
        this.wrapT = gl.CLAMP_TO_EDGE;
        this.loop = false;
        this.autoplay = true;
        Object.assign(this, options);
        this.video = document.createElement('video');
        this.video.src = this.src;
        this.video.loop = this.loop;
        this.video.autoplay = this.autoplay;
        this.video.setAttribute('webkitplaysinline', 'webkitplaysinline');
        this.video.setAttribute('playsinline', 'playsinline');
        this.video.addEventListener('canplaythrough', this._onCanPlayThrough, true);
        this.video.addEventListener('ended', this._onEnded, true);
        this._currentTime = 0;
        const { canvas } = Object(__WEBPACK_IMPORTED_MODULE_1__utils_Canvas__["a" /* createCanvas */])(1, 1);
        this.texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.wrapT);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }
    update() {
        gl = __WEBPACK_IMPORTED_MODULE_2__GL__["get"]();
        if (this.video.readyState >= this.video.HAVE_CURRENT_DATA) {
            if (this.video.currentTime !== this._currentTime) {
                gl.bindTexture(gl.TEXTURE_2D, this.texture);
                gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.video);
                gl.bindTexture(gl.TEXTURE_2D, null);
            }
            this._currentTime = this.video.currentTime;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VideoTexture;


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Geometry__ = __webpack_require__(7);

class Box extends __WEBPACK_IMPORTED_MODULE_0__Geometry__["a" /* default */] {
    constructor(width = 1, height = 1, depth = 1, colors) {
        // this.colors = [];
        // Screenspace
        /*
                (-1, 1)  (0, 1)  (1, 1)
                     (-1, 0)  (0, 0)  (1, 0)
                     (-1,-1)  (0,-1)  (1,-1)
                */
        const vertices = [
        // Front face
        -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
        // Back face
        -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
        // Top face
        -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
        // Bottom face
        -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
        // Right face
        1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
        // Left face
        -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0];
        for (let i = 0; i < vertices.length; i += 3) {
            vertices[i] *= width;
            vertices[i + 1] *= height;
            vertices[i + 2] *= depth;
        }
        const indices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23 // Left face
        ];
        const normals = [
        // Front
        0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
        // Back
        0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
        // Top
        0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
        // Bottom
        0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
        // Right
        1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
        // Left
        -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0];
        const uvs = [
        // Front face
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
        // Back face
        1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0,
        // Top face
        0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0,
        // Bottom face
        1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
        // Right face
        1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0,
        // Left face
        0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0];
        super(new Float32Array(vertices), new Uint16Array(indices), new Float32Array(normals), new Float32Array(uvs), colors);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Box;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector3__ = __webpack_require__(2);


const cb = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
const ab = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].create();
class Face {
    constructor(indiceA, indiceB, indiceC, vertexA, vertexB, vertexC) {
        this.indices = [indiceA, indiceB, indiceC];
        this.vertices = [vertexA, vertexB, vertexC];
        this.uvs = [indiceA, indiceB, indiceC];
        this.normal = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* default */]();
        this.updateFaceNormal();
    }
    updateFaceNormal() {
        // from threejs
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].set(cb, 0, 0, 0);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].set(ab, 0, 0, 0);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].subtract(cb, this.vertices[2].v, this.vertices[1].v);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].subtract(ab, this.vertices[0].v, this.vertices[1].v);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].cross(cb, cb, ab);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["e" /* vec3 */].normalize(cb, cb);
        this.normal.set(cb[0], cb[1], cb[2]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Face;


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Geometry__ = __webpack_require__(7);

class Plane extends __WEBPACK_IMPORTED_MODULE_0__Geometry__["a" /* default */] {
    constructor(width = 1, height = 1, subdivisionsX = 1, subdivisionsY = 1, axis = 'XY', colors) {
        // https://github.com/yiwenl/Alfrid/blob/master/src/alfrid/Geom.js#L9
        // Note triangles are seperate...
        let vertices = [];
        const indices = [];
        let normals = [];
        let uvs = [];
        let index = 0;
        const spacerX = width / subdivisionsX;
        const spacerY = height / subdivisionsY;
        const offsetX = -width * 0.5;
        const offsetY = -height * 0.5;
        const spacerU = 1 / subdivisionsX;
        const spacerV = 1 / subdivisionsY;
        for (let y = 0; y < subdivisionsY; y += 1) {
            for (let x = 0; x < subdivisionsX; x += 1) {
                const triangleX = spacerX * x + offsetX;
                const triangleY = spacerY * y + offsetY;
                const u = x / subdivisionsX;
                const v = y / subdivisionsY;
                switch (axis) {
                    case 'XZ':
                        {
                            // Facing towards y
                            vertices = vertices.concat([triangleX, 0, triangleY]);
                            vertices = vertices.concat([triangleX + spacerX, 0, triangleY]);
                            vertices = vertices.concat([triangleX + spacerX, 0, triangleY + spacerY]);
                            vertices = vertices.concat([triangleX, 0, triangleY + spacerY]);
                            normals = normals.concat([0, 1, 0]);
                            normals = normals.concat([0, 1, 0]);
                            normals = normals.concat([0, 1, 0]);
                            normals = normals.concat([0, 1, 0]);
                            uvs = uvs.concat([u, 1 - v]);
                            uvs = uvs.concat([u + spacerU, 1 - v]);
                            uvs = uvs.concat([u + spacerU, 1 - (v + spacerV)]);
                            uvs = uvs.concat([u, 1 - (v + spacerV)]);
                            break;
                        }
                    case 'YZ':
                        {
                            // Facing towards x
                            vertices = vertices.concat([0, triangleY, triangleX]);
                            vertices = vertices.concat([0, triangleY, triangleX + spacerX]);
                            vertices = vertices.concat([0, triangleY + spacerY, triangleX + spacerX]);
                            vertices = vertices.concat([0, triangleY + spacerY, triangleX]);
                            normals = normals.concat([1, 0, 0]);
                            normals = normals.concat([1, 0, 0]);
                            normals = normals.concat([1, 0, 0]);
                            normals = normals.concat([1, 0, 0]);
                            uvs = uvs.concat([1 - u, v]);
                            uvs = uvs.concat([1 - (u + spacerU), v]);
                            uvs = uvs.concat([1 - (u + spacerU), v + spacerV]);
                            uvs = uvs.concat([1 - u, v + spacerV]);
                            break;
                        }
                    default:
                        {
                            // Facing towards z
                            vertices = vertices.concat([triangleX, triangleY, 0]);
                            vertices = vertices.concat([triangleX + spacerX, triangleY, 0]);
                            vertices = vertices.concat([triangleX + spacerX, triangleY + spacerY, 0]);
                            vertices = vertices.concat([triangleX, triangleY + spacerY, 0]);
                            normals = normals.concat([0, 0, 1]);
                            normals = normals.concat([0, 0, 1]);
                            normals = normals.concat([0, 0, 1]);
                            normals = normals.concat([0, 0, 1]);
                            uvs = uvs.concat([u, v]);
                            uvs = uvs.concat([u + spacerU, v]);
                            uvs = uvs.concat([u + spacerU, v + spacerV]);
                            uvs = uvs.concat([u, v + spacerV]);
                        }
                }
                indices.push(index * 4 + 0);
                indices.push(index * 4 + 1);
                indices.push(index * 4 + 2);
                indices.push(index * 4 + 0);
                indices.push(index * 4 + 2);
                indices.push(index * 4 + 3);
                index += 1;
            }
        }
        super(new Float32Array(vertices), new Uint16Array(indices), new Float32Array(normals), new Float32Array(uvs), colors);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Plane;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Mesh__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Geometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shaders_chunks_EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shaders_chunks_ProjectionView_glsl__ = __webpack_require__(11);







let gl;
const vertexShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_5__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	layout (location = 0) in vec3 aVertexPosition;
	layout (location = 1) in vec3 aVertexColor;

	${__WEBPACK_IMPORTED_MODULE_6__shaders_chunks_ProjectionView_glsl__["a" /* default */]}

	uniform mat4 uModelViewMatrix;

	out vec3 vColor;

	void main(void){
		vColor = aVertexColor;
		gl_Position = uProjectionView.projectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
	}
`;
const vertexShaderEs100 = `
	attribute vec3 aVertexPosition;
	attribute vec3 aVertexColor;

	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelViewMatrix;

	varying vec3 vColor;

	void main(void){
		vColor = aVertexColor;
		gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
	}
`;
function fragmentShaderEs300() {
    return `${__WEBPACK_IMPORTED_MODULE_5__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	precision ${__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["capabilities"].precision} float;
	in vec3 vColor;
	out vec4 outgoingColor;

	void main(void){
		outgoingColor = vec4(vColor, 1.0);
	}
	`;
}
function fragmentShaderEs100() {
    return `
	precision ${__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["capabilities"].precision} float;
	varying vec3 vColor;

	void main(void){
		gl_FragColor = vec4(vColor, 1.0);
	}
	`;
}
class AxisGeometry extends __WEBPACK_IMPORTED_MODULE_4__geometry_Geometry__["a" /* default */] {
    constructor(size) {
        let vertices = [];
        // X
        vertices = vertices.concat([0, 0, 0, size, 0, 0]);
        // Y
        vertices = vertices.concat([0, 0, 0, 0, size, 0]);
        // Z
        vertices = vertices.concat([0, 0, 0, 0, 0, size]);
        // Colors
        const colors = new Float32Array([1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1]);
        super(new Float32Array(vertices), undefined, undefined, undefined, colors);
    }
}
class AxisHelper extends __WEBPACK_IMPORTED_MODULE_3__core_Mesh__["a" /* default */] {
    constructor(size = 1) {
        const vertexShader = __WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"] ? vertexShaderEs300 : vertexShaderEs100;
        const fragmentShader = __WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"] ? fragmentShaderEs300() : fragmentShaderEs100();
        super(new AxisGeometry(size), new __WEBPACK_IMPORTED_MODULE_2__core_Material__["a" /* default */]({
            name: 'AxisHelper',
            vertexShader,
            fragmentShader
        }));
    }
    draw(camera) {
        if (!this.visible) return;
        gl = __WEBPACK_IMPORTED_MODULE_1__core_GL__["get"]();
        // Update modelMatrix
        this.updateMatrix(camera);
        this.material.program.bind();
        this.material.setUniforms(camera.projectionMatrix, this.modelViewMatrix, this.modelMatrix, camera);
        if (__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.bind();
        } else {
            this.bindAttributes();
            this.bindAttributesInstanced();
            this.bindIndexBuffer();
        }
        gl.drawArrays(gl.LINES, 0, this.geometry.attributes.aVertexPosition.numItems);
        if (__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.unbind();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AxisHelper;


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Mesh__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geometry_Geometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shaders_chunks_EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shaders_chunks_ProjectionView_glsl__ = __webpack_require__(11);








let gl;
const vertexShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_6__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	${__WEBPACK_IMPORTED_MODULE_7__shaders_chunks_ProjectionView_glsl__["a" /* default */]}

	in vec3 aVertexPosition;

	uniform mat4 uModelViewMatrix;
	uniform mat3 uNormalMatrix;

	void main(void){
		gl_Position = uProjectionView.projectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
	}
`;
const vertexShaderEs100 = `
	attribute vec3 aVertexPosition;

	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelViewMatrix;
	uniform mat3 uNormalMatrix;

	void main(void){
		gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
	}
`;
function fragmentShaderEs300() {
    return `${__WEBPACK_IMPORTED_MODULE_6__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	precision ${__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["capabilities"].precision} float;
	out vec4 outgoingColor;

	void main(void){
		outgoingColor = vec4(1.0, 1.0, 0.0, 1.0);
	}
	`;
}
function fragmentShaderEs100() {
    return `
	precision ${__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["capabilities"].precision} float;

	void main(void){
		gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
	}
	`;
}
class CameraGeometry extends __WEBPACK_IMPORTED_MODULE_5__geometry_Geometry__["a" /* default */] {
    constructor(mesh, size = 0.5) {
        let vertices = [];
        const addVertex = (x, y, z) => {
            vertices = vertices.concat([x, y, z]);
        };
        function box(z, scale = 1) {
            // bottom left
            addVertex(-1 * scale, -1 * scale, z);
            // top left
            addVertex(-1 * scale, 1 * scale, z);
            addVertex(-1 * scale, 1 * scale, z);
            // top right
            addVertex(1 * scale, 1 * scale, z);
            addVertex(1 * scale, 1 * scale, z);
            // bottom right
            addVertex(1 * scale, -1 * scale, z);
            addVertex(1 * scale, -1 * scale, z);
            // bottom left
            addVertex(-1 * scale, -1 * scale, z);
        }
        const zPosition = 3.5;
        const scaleNear = 0.5;
        const scaleFar = 3;
        // Boxes
        box(0, scaleNear);
        box(zPosition, scaleFar);
        // Lines
        // Bottom left
        addVertex(-1 * scaleNear, -1 * scaleNear, 0);
        addVertex(-1 * scaleFar, -1 * scaleFar, zPosition);
        // Top left
        addVertex(-1 * scaleNear, 1 * scaleNear, 0);
        addVertex(-1 * scaleFar, 1 * scaleFar, zPosition);
        // Top right
        addVertex(1 * scaleNear, 1 * scaleNear, 0);
        addVertex(1 * scaleFar, 1 * scaleFar, zPosition);
        // Bottom right
        addVertex(1 * scaleNear, -1 * scaleNear, 0);
        addVertex(1 * scaleFar, -1 * scaleFar, zPosition);
        super(new Float32Array(vertices));
    }
}
class CameraHelper extends __WEBPACK_IMPORTED_MODULE_4__core_Mesh__["a" /* default */] {
    constructor(camera) {
        const vertexShader = __WEBPACK_IMPORTED_MODULE_2__core_GL__["webgl2"] ? vertexShaderEs300 : vertexShaderEs100;
        const fragmentShader = __WEBPACK_IMPORTED_MODULE_2__core_GL__["webgl2"] ? fragmentShaderEs300() : fragmentShaderEs100();
        super(new CameraGeometry(camera), new __WEBPACK_IMPORTED_MODULE_3__core_Material__["a" /* default */]({
            name: 'CameraHelper',
            vertexShader,
            fragmentShader,
            drawType: __WEBPACK_IMPORTED_MODULE_1__core_Constants__["DRAW_LINE_STRIP"]
        }));
        this.camera = camera;
    }
    update() {
        this.position.copy(this.camera.position);
        this.lookAt(this.camera.target);
    }
    draw(camera) {
        if (!this.visible) return;
        gl = __WEBPACK_IMPORTED_MODULE_2__core_GL__["get"]();
        // Update modelMatrix
        this.updateMatrix(camera);
        this.material.program.bind();
        this.material.setUniforms(camera.projectionMatrix, this.modelViewMatrix, this.modelMatrix, camera);
        if (__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.bind();
        } else {
            this.bindAttributes();
            this.bindAttributesInstanced();
            this.bindIndexBuffer();
        }
        gl.drawArrays(gl.LINES, 0, this.geometry.attributes.aVertexPosition.numItems);
        if (__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.unbind();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CameraHelper;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Mesh__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Geometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_Utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shaders_chunks_EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shaders_chunks_ProjectionView_glsl__ = __webpack_require__(11);








let gl;
const vertexShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_6__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	${__WEBPACK_IMPORTED_MODULE_7__shaders_chunks_ProjectionView_glsl__["a" /* default */]}

	in vec3 aVertexPosition;

	uniform mat4 uModelViewMatrix;

	void main(void){
		gl_Position = uProjectionView.projectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
	}
`;
const vertexShaderEs100 = `
	attribute vec3 aVertexPosition;

	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelViewMatrix;

	void main(void){
		gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
	}
`;
function fragmentShaderEs300() {
    return `${__WEBPACK_IMPORTED_MODULE_6__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	precision ${__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["capabilities"].precision} float;
	out vec4 outgoingColor;

	void main(void){
		outgoingColor = vec4(vec3(0.5), 1.0);
	}
	`;
}
function fragmentShaderEs100() {
    return `
	precision ${__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["capabilities"].precision} float;

	void main(void){
		gl_FragColor = vec4(vec3(0.5), 1.0);
	}
	`;
}
class GridGeometry extends __WEBPACK_IMPORTED_MODULE_4__geometry_Geometry__["a" /* default */] {
    constructor(size, divisions) {
        let vertices = [];
        const halfSize = size * 0.5;
        for (let i = 0; i < divisions + 1; i += 1) {
            const x1 = Object(__WEBPACK_IMPORTED_MODULE_5__math_Utils__["lerp"])(-halfSize, halfSize, i / divisions);
            const y1 = 0;
            const z1 = -halfSize;
            const x2 = Object(__WEBPACK_IMPORTED_MODULE_5__math_Utils__["lerp"])(-halfSize, halfSize, i / divisions);
            const y2 = 0;
            const z2 = halfSize;
            vertices = vertices.concat([x1, y1, z1, x2, y2, z2]);
        }
        for (let i = 0; i < divisions + 1; i += 1) {
            const x1 = -halfSize;
            const y1 = 0;
            const z1 = Object(__WEBPACK_IMPORTED_MODULE_5__math_Utils__["lerp"])(-halfSize, halfSize, i / divisions);
            const x2 = halfSize;
            const y2 = 0;
            const z2 = Object(__WEBPACK_IMPORTED_MODULE_5__math_Utils__["lerp"])(-halfSize, halfSize, i / divisions);
            vertices = vertices.concat([x1, y1, z1, x2, y2, z2]);
        }
        super(new Float32Array(vertices));
    }
}
class GridHelper extends __WEBPACK_IMPORTED_MODULE_3__core_Mesh__["a" /* default */] {
    constructor(size = 1, divisions = 10) {
        const vertexShader = __WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"] ? vertexShaderEs300 : vertexShaderEs100;
        const fragmentShader = __WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"] ? fragmentShaderEs300() : fragmentShaderEs100();
        super(new GridGeometry(size, divisions), new __WEBPACK_IMPORTED_MODULE_2__core_Material__["a" /* default */]({
            name: 'GridHelper',
            vertexShader,
            fragmentShader
        }));
    }
    draw(camera) {
        if (!this.visible) return;
        gl = __WEBPACK_IMPORTED_MODULE_1__core_GL__["get"]();
        // Update modelMatrix
        this.updateMatrix(camera);
        this.material.program.bind();
        this.material.setUniforms(camera.projectionMatrix, this.modelViewMatrix, this.modelMatrix, camera);
        if (__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.bind();
        } else {
            this.bindAttributes();
            this.bindAttributesInstanced();
            this.bindIndexBuffer();
        }
        gl.drawArrays(gl.LINES, 0, this.geometry.attributes.aVertexPosition.numItems);
        if (__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.unbind();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GridHelper;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Mesh__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometry_Geometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shaders_chunks_EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shaders_chunks_ProjectionView_glsl__ = __webpack_require__(11);







let gl;
const vertexShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_5__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	${__WEBPACK_IMPORTED_MODULE_6__shaders_chunks_ProjectionView_glsl__["a" /* default */]}

	in vec3 aVertexPosition;

	uniform mat4 uModelViewMatrix;
	uniform mat3 uNormalMatrix;

	void main(void){
		gl_Position = uProjectionView.projectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
	}
`;
const vertexShaderEs100 = `
	attribute vec3 aVertexPosition;

	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelViewMatrix;
	uniform mat3 uNormalMatrix;

	void main(void){
		gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
	}
`;
function fragmentShaderEs300() {
    return `${__WEBPACK_IMPORTED_MODULE_5__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	precision ${__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["capabilities"].precision} float;
	out vec4 outgoingColor;

	void main(void){
		outgoingColor = vec4(1.0);
	}
	`;
}
function fragmentShaderEs100() {
    return `
	precision ${__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["capabilities"].precision} float;

	void main(void){
		gl_FragColor = vec4(1.0);
	}
	`;
}
class NormalsGeometry extends __WEBPACK_IMPORTED_MODULE_4__geometry_Geometry__["a" /* default */] {
    constructor(mesh, size = 0.5) {
        let vertices = [];
        const sx = mesh.scale.x;
        const sy = mesh.scale.y;
        const sz = mesh.scale.z;
        const length = mesh.geometry.bufferNormals.length / 3;
        for (let i = 0; i < length; i += 1) {
            const i3 = i * 3;
            const v0x = sx * mesh.geometry.bufferVertices[i3];
            const v0y = sy * mesh.geometry.bufferVertices[i3 + 1];
            const v0z = sz * mesh.geometry.bufferVertices[i3 + 2];
            const nx = mesh.geometry.bufferNormals[i3];
            const ny = mesh.geometry.bufferNormals[i3 + 1];
            const nz = mesh.geometry.bufferNormals[i3 + 2];
            const v1x = v0x + size * nx;
            const v1y = v0y + size * ny;
            const v1z = v0z + size * nz;
            vertices = vertices.concat([v0x, v0y, v0z, v1x, v1y, v1z]);
        }
        super(new Float32Array(vertices));
    }
}
class NormalsHelper extends __WEBPACK_IMPORTED_MODULE_3__core_Mesh__["a" /* default */] {
    constructor(mesh, size = 1) {
        const vertexShader = __WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"] ? vertexShaderEs300 : vertexShaderEs100;
        const fragmentShader = __WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"] ? fragmentShaderEs300() : fragmentShaderEs100();
        super(new NormalsGeometry(mesh, size), new __WEBPACK_IMPORTED_MODULE_2__core_Material__["a" /* default */]({
            name: 'NormalsHelper',
            vertexShader,
            fragmentShader
        }));
    }
    draw(camera) {
        if (!this.visible) return;
        gl = __WEBPACK_IMPORTED_MODULE_1__core_GL__["get"]();
        // Update modelMatrix
        this.updateMatrix(camera);
        this.material.program.bind();
        this.material.setUniforms(camera.projectionMatrix, this.modelViewMatrix, this.modelMatrix, camera);
        if (__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.bind();
        } else {
            this.bindAttributes();
            this.bindAttributesInstanced();
            this.bindIndexBuffer();
        }
        gl.drawArrays(gl.LINES, 0, this.geometry.attributes.aVertexPosition.numItems);
        if (__WEBPACK_IMPORTED_MODULE_0__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.unbind();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NormalsHelper;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gl_matrix__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Capabilities__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Mesh__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geometry_Geometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_Color__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_Utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shaders_chunks_EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shaders_chunks_ProjectionView_glsl__ = __webpack_require__(11);










let gl;
const vertexShaderEs300 = `${__WEBPACK_IMPORTED_MODULE_8__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	${__WEBPACK_IMPORTED_MODULE_9__shaders_chunks_ProjectionView_glsl__["a" /* default */]}

	in vec3 aVertexPosition;

	uniform mat4 uModelViewMatrix;
	uniform float uSize;

	void main(void){
		vec4 mvPosition = uProjectionView.projectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
		gl_PointSize = uSize * (100.0 / length(mvPosition.xyz));
		gl_Position = mvPosition;
	}
`;
const vertexShaderEs100 = `
	attribute vec3 aVertexPosition;

	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelViewMatrix;
	uniform float uSize;

	void main(void){
		vec4 mvPosition = uProjectionMatrix * uModelViewMatrix * vec4(aVertexPosition, 1.0);
		gl_PointSize = uSize * (100.0 / length(mvPosition.xyz));
		gl_Position = mvPosition;
	}
`;
function fragmentShaderEs300() {
    return `${__WEBPACK_IMPORTED_MODULE_8__shaders_chunks_EsVersion_glsl__["a" /* default */]}
	precision ${__WEBPACK_IMPORTED_MODULE_1__core_Capabilities__["capabilities"].precision} float;
	uniform vec3 uColor;
	out vec4 outgoingColor;

	void main(void){
		if(length(gl_PointCoord - 0.5) > 0.5) {
			discard;
		}
		outgoingColor = vec4(uColor, 1.0);
	}
	`;
}
function fragmentShaderEs100() {
    return `
	precision ${__WEBPACK_IMPORTED_MODULE_1__core_Capabilities__["capabilities"].precision} float;
	uniform vec3 uColor;

	void main(void){
		if(length(gl_PointCoord - 0.5) > 0.5) {
			discard;
		}
		gl_FragColor = vec4(uColor, 1.0);
	}
	`;
}
class VerticesGeometry extends __WEBPACK_IMPORTED_MODULE_5__geometry_Geometry__["a" /* default */] {
    constructor(mesh, size = 0.5) {
        const vertices = [];
        const length = mesh.geometry.bufferVertices.length;
        for (let i = 0; i < length; i += 1) {
            vertices[i] = mesh.geometry.bufferVertices[i];
        }
        super(new Float32Array(vertices));
    }
}
const projectionViewMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
const modelWorldMatrix = __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].create();
class VerticesHelper extends __WEBPACK_IMPORTED_MODULE_4__core_Mesh__["a" /* default */] {
    constructor(mesh, size = 1, colorPoint = 0x00ff00, colorLabel = '#ffffff') {
        const vertexShader = __WEBPACK_IMPORTED_MODULE_2__core_GL__["webgl2"] ? vertexShaderEs300 : vertexShaderEs100;
        const fragmentShader = __WEBPACK_IMPORTED_MODULE_2__core_GL__["webgl2"] ? fragmentShaderEs300() : fragmentShaderEs100();
        super(new VerticesGeometry(mesh, size), new __WEBPACK_IMPORTED_MODULE_3__core_Material__["a" /* default */]({
            name: 'VerticesHelper',
            vertexShader,
            fragmentShader,
            uniforms: {
                uSize: {
                    type: 'f',
                    value: size
                },
                uColor: {
                    type: '3f',
                    value: new __WEBPACK_IMPORTED_MODULE_6__math_Color__["a" /* default */](colorPoint).v
                }
            }
        }));
        this._labels = [];
        this._parentMesh = mesh;
        let element;
        const addLabel = indice => {
            element = document.createElement('div');
            element.style.position = 'absolute';
            element.style.pointerEvents = 'none';
            element.style.color = colorLabel;
            element.style.fontSize = '16px';
            this._labels.push({
                indice,
                element
            });
            document.body.appendChild(element);
        };
        this._parentMesh.geometry.faces.forEach((face, i) => {
            addLabel(face.indices[0]);
            addLabel(face.indices[1]);
            addLabel(face.indices[2]);
        });
    }
    draw(camera) {
        if (!this.visible) return;
        gl = __WEBPACK_IMPORTED_MODULE_2__core_GL__["get"]();
        // Update modelMatrix
        this.updateMatrix(camera);
        // Update
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(projectionViewMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].identity(modelWorldMatrix);
        __WEBPACK_IMPORTED_MODULE_0_gl_matrix__["b" /* mat4 */].mul(projectionViewMatrix, camera.projectionMatrix, this.modelViewMatrix);
        let screenPosition;
        let vertex;
        this._labels.forEach((label, i) => {
            vertex = this._parentMesh.geometry.vertices[label.indice];
            screenPosition = Object(__WEBPACK_IMPORTED_MODULE_7__math_Utils__["from3DTo2D"])(vertex, projectionViewMatrix);
            label.element.style.left = `${screenPosition.x * window.innerWidth}px`;
            label.element.style.top = `${screenPosition.y * window.innerHeight}px`;
            label.element.innerHTML = `${label.indice}`;
        });
        this.material.program.bind();
        this.material.setUniforms(camera.projectionMatrix, this.modelViewMatrix, this.modelMatrix, camera);
        if (__WEBPACK_IMPORTED_MODULE_1__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.bind();
        } else {
            this.bindAttributes();
            this.bindAttributesInstanced();
            this.bindIndexBuffer();
        }
        gl.drawArrays(gl.POINTS, 0, this.geometry.attributes.aVertexPosition.numItems);
        if (__WEBPACK_IMPORTED_MODULE_1__core_Capabilities__["extensions"].vertexArrayObject) {
            this.vao.unbind();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VerticesHelper;


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_UniformBuffer__ = __webpack_require__(19);


let gl;
/**
    * Genetic class for PointLights and DirectionalLights
    * Creates a uniform buffer which stores all the data for the specific
    * light type
    */
class Lights {
    constructor(lights) {
        this.lights = lights;
        gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
        if (__WEBPACK_IMPORTED_MODULE_0__core_GL__["webgl2"]) {
            const dataLength = this.lights[0].data.length;
            // Setup data
            const values = Array(lights.length * dataLength);
            const data = new Float32Array(values);
            // Create uniform buffer to store all point lights data
            // The uniform block is an array of lights
            this.uniformBuffer = new __WEBPACK_IMPORTED_MODULE_1__core_UniformBuffer__["a" /* default */](data);
            // Tmp array for updating the lights data buffer
            this._lightsData = new Float32Array(lights[0].data.length * lights.length);
        }
    }
    get length() {
        return this.lights.length;
    }
    get() {
        return this.lights;
    }
    update() {
        if (__WEBPACK_IMPORTED_MODULE_0__core_GL__["webgl2"]) {
            // Get data from lights and update the uniform buffer
            this.lights.forEach((light, i) => {
                light.update();
                this._lightsData.set(light.data, i * light.data.length);
            });
            this.uniformBuffer.setValues(this._lightsData, 0);
        } else {
            this.lights.forEach(light => {
                light.update();
            });
        }
    }
    bind() {
        if (__WEBPACK_IMPORTED_MODULE_0__core_GL__["webgl2"]) {
            gl = __WEBPACK_IMPORTED_MODULE_0__core_GL__["get"]();
            gl.bindBuffer(gl.UNIFORM_BUFFER, this.uniformBuffer.buffer);
            gl.bufferSubData(gl.UNIFORM_BUFFER, 0, this.uniformBuffer.data);
            gl.bindBuffer(gl.UNIFORM_BUFFER, null);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Lights;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Color__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Light__ = __webpack_require__(27);




class AmbientLight extends __WEBPACK_IMPORTED_MODULE_3__Light__["a" /* default */] {
    constructor(uniforms = {}) {
        super();
        this.type = __WEBPACK_IMPORTED_MODULE_0__core_Constants__["LIGHT_AMBIENT"];
        this.uniforms = {
            color: {
                type: '3f',
                value: new __WEBPACK_IMPORTED_MODULE_2__math_Color__["a" /* default */](0x404040).v
            },
            intensity: {
                type: 'f',
                value: 0.1
            }
        };
        Object.assign(this.uniforms, uniforms);
        if (__WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"]) {
            // Buffer data
            this.data = new Float32Array([...this.uniforms.color.value, 0.0, this.uniforms.intensity.value, 0.0, 0.0, 0.0]);
        }
    }
    update() {
        if (__WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"]) {
            // Set values for buffer data
            this.setValues(this.uniforms.color.value, 0);
            this.setValues([this.uniforms.intensity.value], 4);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AmbientLight;


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Color__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Vector3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Light__ = __webpack_require__(27);





class DirectionalLight extends __WEBPACK_IMPORTED_MODULE_4__Light__["a" /* default */] {
    constructor(uniforms = {}) {
        super();
        this.type = __WEBPACK_IMPORTED_MODULE_0__core_Constants__["LIGHT_DIRECTIONAL"];
        this.uniforms = {
            position: {
                type: '3f',
                value: new __WEBPACK_IMPORTED_MODULE_3__math_Vector3__["a" /* default */](0, 0, 0).v
            },
            color: {
                type: '3f',
                value: new __WEBPACK_IMPORTED_MODULE_2__math_Color__["a" /* default */](0xffffff).v
            },
            intensity: {
                type: 'f',
                value: 1
            }
        };
        Object.assign(this.uniforms, uniforms);
        this.position = new __WEBPACK_IMPORTED_MODULE_3__math_Vector3__["a" /* default */]();
        if (__WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"]) {
            // Buffer data
            this.data = new Float32Array([...this.uniforms.position.value, 0.0, ...this.uniforms.color.value, 0.0, this.uniforms.intensity.value, 0.0, 0.0, 0.0]);
        }
    }
    update() {
        if (__WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"]) {
            // Set values for buffer data
            this.setValues(this.position.v);
            this.setValues(this.uniforms.color.value, 4);
            this.setValues([this.uniforms.intensity.value], 8);
        } else {
            this.uniforms.position.value.set(this.position.v);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DirectionalLight;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_GL__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Color__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Vector3__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Light__ = __webpack_require__(27);





class PointLight extends __WEBPACK_IMPORTED_MODULE_4__Light__["a" /* default */] {
    constructor(uniforms = {}) {
        super();
        this.type = __WEBPACK_IMPORTED_MODULE_0__core_Constants__["LIGHT_POINT"];
        this.uniforms = {
            position: {
                type: '3f',
                value: new __WEBPACK_IMPORTED_MODULE_3__math_Vector3__["a" /* default */](0, 0, 0).v
            },
            color: {
                type: '3f',
                value: new __WEBPACK_IMPORTED_MODULE_2__math_Color__["a" /* default */](0xffffff).v
            },
            specularColor: {
                type: '3f',
                value: new __WEBPACK_IMPORTED_MODULE_2__math_Color__["a" /* default */](0xffffff).v
            },
            shininess: {
                type: 'f',
                value: 100
            },
            intensity: {
                type: 'f',
                value: 1
            }
        };
        Object.assign(this.uniforms, uniforms);
        this.position = new __WEBPACK_IMPORTED_MODULE_3__math_Vector3__["a" /* default */]();
        if (__WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"]) {
            // Buffer data
            this.data = new Float32Array([...this.uniforms.position.value, 0.0, ...this.uniforms.color.value, 0.0, ...this.uniforms.specularColor.value, 0.0, this.uniforms.shininess.value, 0.0, 0.0, 0.0, this.uniforms.intensity.value, 0.0, 0.0, 0.0]);
        }
    }
    update() {
        if (__WEBPACK_IMPORTED_MODULE_1__core_GL__["webgl2"]) {
            // Set values for buffer data
            this.setValues(this.position.v);
            this.setValues(this.uniforms.color.value, 4);
            this.setValues(this.uniforms.specularColor.value, 8);
            this.setValues([this.uniforms.shininess.value], 12);
            this.setValues([this.uniforms.intensity.value], 16);
        } else {
            this.uniforms.position.value.set(this.position.v);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PointLight;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AmbientLight_glsl__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Conditionals_glsl__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DirectionalLights_glsl__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EnvMapCube_glsl__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EsVersion_glsl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Fog_glsl__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Gamma_glsl__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Lambert_glsl__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Matcap_glsl__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Math_glsl__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Noise_glsl__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Packing_glsl__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__PointLights_glsl__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ProjectionView_glsl__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Tonemap_glsl__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Transpose_glsl__ = __webpack_require__(92);
















/* harmony default export */ __webpack_exports__["a"] = ({
    AmbientLight: __WEBPACK_IMPORTED_MODULE_0__AmbientLight_glsl__,
    Conditionals: __WEBPACK_IMPORTED_MODULE_1__Conditionals_glsl__["a" /* default */],
    DirectionalLights: __WEBPACK_IMPORTED_MODULE_2__DirectionalLights_glsl__,
    EnvMapCube: __WEBPACK_IMPORTED_MODULE_3__EnvMapCube_glsl__["a" /* default */],
    EsVersion: __WEBPACK_IMPORTED_MODULE_4__EsVersion_glsl__["a" /* default */],
    Fog: __WEBPACK_IMPORTED_MODULE_5__Fog_glsl__["a" /* default */],
    Gamma: __WEBPACK_IMPORTED_MODULE_6__Gamma_glsl__["a" /* default */],
    Lambert: __WEBPACK_IMPORTED_MODULE_7__Lambert_glsl__,
    Matcap: __WEBPACK_IMPORTED_MODULE_8__Matcap_glsl__["a" /* default */],
    Math: __WEBPACK_IMPORTED_MODULE_9__Math_glsl__["a" /* default */],
    Noise: __WEBPACK_IMPORTED_MODULE_10__Noise_glsl__,
    Packing: __WEBPACK_IMPORTED_MODULE_11__Packing_glsl__["a" /* default */],
    PointLights: __WEBPACK_IMPORTED_MODULE_12__PointLights_glsl__,
    ProjectionView: __WEBPACK_IMPORTED_MODULE_13__ProjectionView_glsl__["a" /* default */],
    Tonemap: __WEBPACK_IMPORTED_MODULE_14__Tonemap_glsl__,
    Transpose: __WEBPACK_IMPORTED_MODULE_15__Transpose_glsl__["a" /* default */]
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const whenEquals = `
float whenEquals(float x, float y) {
  return 1.0 - abs(sign(x - y));
};
`;
/* unused harmony export whenEquals */

const whenEqualsInt = `
int whenEqualsInt(int x, int y) {
  return 1 - abs(sign(x - y));
}
`;
/* unused harmony export whenEqualsInt */

const whenLessThan = `
float whenLessThan(float x, float y) {
  return max(sign(y - x), 0.0);
}
`;
/* unused harmony export whenLessThan */

const whenGreaterThan = `
float whenGreaterThan(float x, float y) {
  return max(sign(x - y), 0.0);
}
`;
/* unused harmony export whenGreaterThan */

/* harmony default export */ __webpack_exports__["a"] = ({
  whenEquals,
  whenEqualsInt,
  whenLessThan,
  whenGreaterThan
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * https://github.com/vorg/pragmatic-pbr/blob/master/local_modules/glsl-envmap-cube/index.glsl
 */
/* harmony default export */ __webpack_exports__["a"] = (`
/**
 * Samples cubemap environment map
 * @param  {vec3} wcNormal - normal in the world coordinate space
 * @param  {float} - flipEnvMap    -1.0 for left handed coorinate system oriented texture (usual case)
 *                                  1.0 for right handed coorinate system oriented texture
 * @return {vec4} - cubemap texture coordinate
 */
vec3 envMapCube(vec3 wcNormal, float flipEnvMap) {
	return vec3(flipEnvMap * wcNormal.x, wcNormal.y, wcNormal.z);
}

vec3 envMapCube(vec3 wcNormal) {
 //-1.0 for left handed coorinate system oriented texture (usual case)
 return envMapCube(wcNormal, -1.0);
}
`);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://github.com/hughsk/glsl-fog
const linear = `
float fogLinear(const float dist, const float start, const float end) {
  return 1.0 - clamp((end - dist) / (end - start), 0.0, 1.0);
}
`;
/* unused harmony export linear */

const exp = `
float fogExp(
  const float dist,
  const float density
) {
  return 1.0 - clamp(exp(-density * dist), 0.0, 1.0);
}
`;
/* unused harmony export exp */

const exp2 = `
float fogExp2(
  const float dist,
  const float density
) {
  const float LOG2 = -1.442695;
  float d = density * dist;
  return 1.0 - clamp(exp2(d * d * LOG2), 0.0, 1.0);
}
`;
/* unused harmony export exp2 */

/* harmony default export */ __webpack_exports__["a"] = ({
  linear,
  exp,
  exp2
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://raw.githubusercontent.com/stackgl/glsl-gamma/master/out.glsl
/* harmony default export */ __webpack_exports__["a"] = (`
	const float gamma = 2.2;

	float toGamma(float v) {
	  return pow(v, 1.0 / gamma);
	}

	vec2 toGamma(vec2 v) {
	  return pow(v, vec2(1.0 / gamma));
	}

	vec3 toGamma(vec3 v) {
	  return pow(v, vec3(1.0 / gamma));
	}

	vec4 toGamma(vec4 v) {
	  return vec4(toGamma(v.rgb), v.a);
	}
`);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://github.com/hughsk/matcap/blob/master/matcap.glsl
/* harmony default export */ __webpack_exports__["a"] = (`
vec2 matcap(vec3 eye, vec3 normal) {
  vec3 reflected = reflect(eye, normal);
  float m = 2.8284271247461903 * sqrt( reflected.z+1.0 );
  return reflected.xy / m + 0.5;
}
`);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// https://github.com/hughsk/glsl-noise
const classicNoise2D = `
//
// GLSL textureless classic 2D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 fade(vec2 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float classicNoise2D(vec2 P)
{
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod289(Pi); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;

  vec4 i = permute(permute(ix) + iy);

  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
  vec4 gy = abs(gx) - 0.5 ;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;

  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);

  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;

  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));

  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}
`;
/* harmony export (immutable) */ __webpack_exports__["classicNoise2D"] = classicNoise2D;

const classicNoise3D = `
//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float classicNoise3D(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}
`;
/* harmony export (immutable) */ __webpack_exports__["classicNoise3D"] = classicNoise3D;

const classicNoise4D = `
//
// GLSL textureless classic 4D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 fade(vec4 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float classicNoise4D(vec4 P)
{
  vec4 Pi0 = floor(P); // Integer part for indexing
  vec4 Pi1 = Pi0 + 1.0; // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec4 Pf0 = fract(P); // Fractional part for interpolation
  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.zzzz);
  vec4 iz1 = vec4(Pi1.zzzz);
  vec4 iw0 = vec4(Pi0.wwww);
  vec4 iw1 = vec4(Pi1.wwww);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 ixy00 = permute(ixy0 + iw0);
  vec4 ixy01 = permute(ixy0 + iw1);
  vec4 ixy10 = permute(ixy1 + iw0);
  vec4 ixy11 = permute(ixy1 + iw1);

  vec4 gx00 = ixy00 * (1.0 / 7.0);
  vec4 gy00 = floor(gx00) * (1.0 / 7.0);
  vec4 gz00 = floor(gy00) * (1.0 / 6.0);
  gx00 = fract(gx00) - 0.5;
  gy00 = fract(gy00) - 0.5;
  gz00 = fract(gz00) - 0.5;
  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
  vec4 sw00 = step(gw00, vec4(0.0));
  gx00 -= sw00 * (step(0.0, gx00) - 0.5);
  gy00 -= sw00 * (step(0.0, gy00) - 0.5);

  vec4 gx01 = ixy01 * (1.0 / 7.0);
  vec4 gy01 = floor(gx01) * (1.0 / 7.0);
  vec4 gz01 = floor(gy01) * (1.0 / 6.0);
  gx01 = fract(gx01) - 0.5;
  gy01 = fract(gy01) - 0.5;
  gz01 = fract(gz01) - 0.5;
  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
  vec4 sw01 = step(gw01, vec4(0.0));
  gx01 -= sw01 * (step(0.0, gx01) - 0.5);
  gy01 -= sw01 * (step(0.0, gy01) - 0.5);

  vec4 gx10 = ixy10 * (1.0 / 7.0);
  vec4 gy10 = floor(gx10) * (1.0 / 7.0);
  vec4 gz10 = floor(gy10) * (1.0 / 6.0);
  gx10 = fract(gx10) - 0.5;
  gy10 = fract(gy10) - 0.5;
  gz10 = fract(gz10) - 0.5;
  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
  vec4 sw10 = step(gw10, vec4(0.0));
  gx10 -= sw10 * (step(0.0, gx10) - 0.5);
  gy10 -= sw10 * (step(0.0, gy10) - 0.5);

  vec4 gx11 = ixy11 * (1.0 / 7.0);
  vec4 gy11 = floor(gx11) * (1.0 / 7.0);
  vec4 gz11 = floor(gy11) * (1.0 / 6.0);
  gx11 = fract(gx11) - 0.5;
  gy11 = fract(gy11) - 0.5;
  gz11 = fract(gz11) - 0.5;
  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
  vec4 sw11 = step(gw11, vec4(0.0));
  gx11 -= sw11 * (step(0.0, gx11) - 0.5);
  gy11 -= sw11 * (step(0.0, gy11) - 0.5);

  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
  g0000 *= norm00.x;
  g0100 *= norm00.y;
  g1000 *= norm00.z;
  g1100 *= norm00.w;

  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
  g0001 *= norm01.x;
  g0101 *= norm01.y;
  g1001 *= norm01.z;
  g1101 *= norm01.w;

  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
  g0010 *= norm10.x;
  g0110 *= norm10.y;
  g1010 *= norm10.z;
  g1110 *= norm10.w;

  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
  g0011 *= norm11.x;
  g0111 *= norm11.y;
  g1011 *= norm11.z;
  g1111 *= norm11.w;

  float n0000 = dot(g0000, Pf0);
  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
  float n1111 = dot(g1111, Pf1);

  vec4 fade_xyzw = fade(Pf0);
  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
  return 2.2 * n_xyzw;
}
`;
/* harmony export (immutable) */ __webpack_exports__["classicNoise4D"] = classicNoise4D;

const periodicNoise2D = `
//
// GLSL textureless classic 2D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 fade(vec2 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float periodicNoise2D(vec2 P, vec2 rep)
{
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, rep.xyxy); // To create noise with explicit period
  Pi = mod289(Pi);        // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;

  vec4 i = permute(permute(ix) + iy);

  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
  vec4 gy = abs(gx) - 0.5 ;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;

  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);

  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;

  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));

  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}
`;
/* harmony export (immutable) */ __webpack_exports__["periodicNoise2D"] = periodicNoise2D;

const periodicNoise3D = `
//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float periodicNoise3D(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}
`;
/* harmony export (immutable) */ __webpack_exports__["periodicNoise3D"] = periodicNoise3D;

const periodicNoise4D = `
//
// GLSL textureless classic 4D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 fade(vec4 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic version
float periodicNoise4D(vec4 P, vec4 rep)
{
  vec4 Pi0 = mod(floor(P), rep); // Integer part modulo rep
  vec4 Pi1 = mod(Pi0 + 1.0, rep); // Integer part + 1 mod rep
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec4 Pf0 = fract(P); // Fractional part for interpolation
  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.zzzz);
  vec4 iz1 = vec4(Pi1.zzzz);
  vec4 iw0 = vec4(Pi0.wwww);
  vec4 iw1 = vec4(Pi1.wwww);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 ixy00 = permute(ixy0 + iw0);
  vec4 ixy01 = permute(ixy0 + iw1);
  vec4 ixy10 = permute(ixy1 + iw0);
  vec4 ixy11 = permute(ixy1 + iw1);

  vec4 gx00 = ixy00 * (1.0 / 7.0);
  vec4 gy00 = floor(gx00) * (1.0 / 7.0);
  vec4 gz00 = floor(gy00) * (1.0 / 6.0);
  gx00 = fract(gx00) - 0.5;
  gy00 = fract(gy00) - 0.5;
  gz00 = fract(gz00) - 0.5;
  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
  vec4 sw00 = step(gw00, vec4(0.0));
  gx00 -= sw00 * (step(0.0, gx00) - 0.5);
  gy00 -= sw00 * (step(0.0, gy00) - 0.5);

  vec4 gx01 = ixy01 * (1.0 / 7.0);
  vec4 gy01 = floor(gx01) * (1.0 / 7.0);
  vec4 gz01 = floor(gy01) * (1.0 / 6.0);
  gx01 = fract(gx01) - 0.5;
  gy01 = fract(gy01) - 0.5;
  gz01 = fract(gz01) - 0.5;
  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
  vec4 sw01 = step(gw01, vec4(0.0));
  gx01 -= sw01 * (step(0.0, gx01) - 0.5);
  gy01 -= sw01 * (step(0.0, gy01) - 0.5);

  vec4 gx10 = ixy10 * (1.0 / 7.0);
  vec4 gy10 = floor(gx10) * (1.0 / 7.0);
  vec4 gz10 = floor(gy10) * (1.0 / 6.0);
  gx10 = fract(gx10) - 0.5;
  gy10 = fract(gy10) - 0.5;
  gz10 = fract(gz10) - 0.5;
  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
  vec4 sw10 = step(gw10, vec4(0.0));
  gx10 -= sw10 * (step(0.0, gx10) - 0.5);
  gy10 -= sw10 * (step(0.0, gy10) - 0.5);

  vec4 gx11 = ixy11 * (1.0 / 7.0);
  vec4 gy11 = floor(gx11) * (1.0 / 7.0);
  vec4 gz11 = floor(gy11) * (1.0 / 6.0);
  gx11 = fract(gx11) - 0.5;
  gy11 = fract(gy11) - 0.5;
  gz11 = fract(gz11) - 0.5;
  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
  vec4 sw11 = step(gw11, vec4(0.0));
  gx11 -= sw11 * (step(0.0, gx11) - 0.5);
  gy11 -= sw11 * (step(0.0, gy11) - 0.5);

  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
  g0000 *= norm00.x;
  g0100 *= norm00.y;
  g1000 *= norm00.z;
  g1100 *= norm00.w;

  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
  g0001 *= norm01.x;
  g0101 *= norm01.y;
  g1001 *= norm01.z;
  g1101 *= norm01.w;

  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
  g0010 *= norm10.x;
  g0110 *= norm10.y;
  g1010 *= norm10.z;
  g1110 *= norm10.w;

  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
  g0011 *= norm11.x;
  g0111 *= norm11.y;
  g1011 *= norm11.z;
  g1111 *= norm11.w;

  float n0000 = dot(g0000, Pf0);
  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
  float n1111 = dot(g1111, Pf1);

  vec4 fade_xyzw = fade(Pf0);
  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
  return 2.2 * n_xyzw;
}
`;
/* harmony export (immutable) */ __webpack_exports__["periodicNoise4D"] = periodicNoise4D;

const simplexNoise2D = `
//
// Description : Array and textureless GLSL 2D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float simplexNoise2D(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;
/* harmony export (immutable) */ __webpack_exports__["simplexNoise2D"] = simplexNoise2D;

const simplexNoise3D = `
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float simplexNoise3D(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }
`;
/* harmony export (immutable) */ __webpack_exports__["simplexNoise3D"] = simplexNoise3D;

const simplexNoise4D = `
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip)
  {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

  return p;
  }

// (sqrt(5) - 1)/4 = F4, used once below
#define F4 0.309016994374947451

float simplexNoise4D(vec4 v)
  {
  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                        0.276393202250021,  // 2 * G4
                        0.414589803375032,  // 3 * G4
                       -0.447213595499958); // -1 + 4 * G4

// First corner
  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

// Other corners

// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
//  i0.x = dot( isX, vec3( 1.0 ) );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  // i0 now contains the unique values 0,1,2,3 in each channel
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  //  x0 = x0 - 0.0 + 0.0 * C.xxxx
  //  x1 = x0 - i1  + 1.0 * C.xxxx
  //  x2 = x0 - i2  + 2.0 * C.xxxx
  //  x3 = x0 - i3  + 3.0 * C.xxxx
  //  x4 = x0 - 1.0 + 4.0 * C.xxxx
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

// Permutations
  i = mod289(i);
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

// Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

// Mix contributions from the five corners
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

  }
`;
/* harmony export (immutable) */ __webpack_exports__["simplexNoise4D"] = simplexNoise4D;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const packNormalToRGB = `
	vec3 packNormalToRGB(const in vec3 normal) {
	  return normalize(normal) * 0.5 + 0.5;
	}
`;
/* unused harmony export packNormalToRGB */

/* harmony default export */ __webpack_exports__["a"] = ({
	packNormalToRGB
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// https://raw.githubusercontent.com/stackgl/glsl-gamma/master/out.glsl
const tonemapReinhard = `
	vec3 tonemapReinhard(vec3 color) {
	  return color / (color + vec3(1.0));
	}
`;
/* harmony export (immutable) */ __webpack_exports__["tonemapReinhard"] = tonemapReinhard;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * https://github.com/stackgl/glsl-transpose/blob/master/index.glsl
 */
/* harmony default export */ __webpack_exports__["a"] = (`
	float transpose(float m) {
	  return m;
	}

	mat2 transpose(mat2 m) {
	  return mat2(m[0][0], m[1][0],
	              m[0][1], m[1][1]);
	}

	mat3 transpose(mat3 m) {
	  return mat3(m[0][0], m[1][0], m[2][0],
	              m[0][1], m[1][1], m[2][1],
	              m[0][2], m[1][2], m[2][2]);
	}

	mat4 transpose(mat4 m) {
	  return mat4(m[0][0], m[1][0], m[2][0], m[3][0],
	              m[0][1], m[1][1], m[2][1], m[3][1],
	              m[0][2], m[1][2], m[2][2], m[3][2],
	              m[0][3], m[1][3], m[2][3], m[3][3]);
	}
`);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_js__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bezier_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bezier_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid_v1__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uuid_v1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_uuid_v1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_EventDispatcher__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_Material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_Mesh__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geometry_LineGeometry__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geometry_SphereGeometry__ = __webpack_require__(43);








class Dolly {
    constructor(origin, lookat, steps = 50) {
        this.origin = origin;
        this.lookat = lookat;
        let originPoints = [];
        let lookatPoints = [];
        origin.forEach(point => {
            originPoints = originPoints.concat(point);
        });
        lookat.forEach(point => {
            lookatPoints = lookatPoints.concat(point);
        });
        this.curves = {
            origin: new __WEBPACK_IMPORTED_MODULE_0_bezier_js___default.a(originPoints),
            lookat: new __WEBPACK_IMPORTED_MODULE_0_bezier_js___default.a(lookatPoints)
        };
    }
    get(time = 0) {
        const origin = this.curves.origin.get(time);
        const lookat = this.curves.lookat.get(time);
        return {
            origin,
            lookat
        };
    }
    rebuild() {
        this.curves.origin.update();
        this.curves.lookat.update();
    }
    destroy() {
        this.curves.origin = null;
        this.curves.lookat = null;
    }
}
class DollyHelper extends __WEBPACK_IMPORTED_MODULE_3__core_EventDispatcher__["a" /* default */] {
    constructor(dolly, scene, gui, steps = 50, range = 100, guiOpen = false, guiOpenOrigin = false, guiOpenLookat = false) {
        super();
        this._rebuild = () => {
            this.dolly.rebuild();
            this.updateLine('origin', this.dolly.curves.origin.getLUT(this.steps));
            this.updateLine('lookat', this.dolly.curves.lookat.getLUT(this.steps));
            this.updatePoints('origin', this.dolly.curves.origin.points);
            this.updatePoints('lookat', this.dolly.curves.lookat.points);
            this.emit('rebuild');
        };
        this.id = __WEBPACK_IMPORTED_MODULE_1_uuid_v1___default()();
        this.dolly = dolly;
        this.scene = scene;
        this.gui = gui.addFolder(`Dolly ${this.id}`);
        if (guiOpen) {
            this.gui.open();
        }
        this.steps = steps;
        this.range = range;
        this.lines = {
            origin: null,
            lookat: null
        };
        this.points = {
            origin: [],
            lookat: []
        };
        this.createPoints('origin', this.dolly.origin);
        this.createPoints('lookat', this.dolly.lookat);
        this.createLine('origin', this.dolly.curves.origin.getLUT(this.steps));
        this.createLine('lookat', this.dolly.curves.lookat.getLUT(this.steps));
        // Create gui folders
        this.guiOrigin = this.gui.addFolder(`origin`);
        this.guiLookat = this.gui.addFolder(`lookat`);
        if (guiOpenOrigin) {
            this.guiOrigin.open();
        }
        if (guiOpenLookat) {
            this.guiLookat.open();
        }
        this.guiLookat.open();
        this.dolly.curves.origin.points.forEach((point, i) => {
            const folder = this.guiOrigin.addFolder(`${i}`);
            folder.open();
            folder.add(point, 'x', -this.range, this.range).onChange(this._rebuild);
            folder.add(point, 'y', -this.range, this.range).onChange(this._rebuild);
            folder.add(point, 'z', -this.range, this.range).onChange(this._rebuild);
        });
        this.dolly.curves.lookat.points.forEach((point, i) => {
            const folder = this.guiLookat.addFolder(`${i}`);
            folder.open();
            folder.add(point, 'x', -this.range, this.range).onChange(this._rebuild);
            folder.add(point, 'y', -this.range, this.range).onChange(this._rebuild);
            folder.add(point, 'z', -this.range, this.range).onChange(this._rebuild);
        });
    }
    flatten(points) {
        let pointsFlat = [];
        points.forEach(point => {
            pointsFlat = pointsFlat.concat([point.x, point.y, point.z]);
        });
        return pointsFlat;
    }
    createPoints(id, points) {
        points.forEach((point, i) => {
            this.points[id][i] = new __WEBPACK_IMPORTED_MODULE_5__core_Mesh__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_7__geometry_SphereGeometry__["a" /* default */](0.2, 4, 5), new __WEBPACK_IMPORTED_MODULE_4__core_Material__["a" /* default */]({
                drawType: __WEBPACK_IMPORTED_MODULE_2__core_Constants__["DRAW_LINES"]
            }));
            this.points[id][i].position.set(point.x, point.y, point.z);
            this.scene.add(this.points[id][i]);
        });
    }
    updatePoints(id, points) {
        points.forEach((point, i) => {
            this.points[id][i].position.set(point.x, point.y, point.z);
        });
    }
    updateLine(id, points) {
        const length = this.lines[id].geometry.vertices.length / 2;
        let i2 = 0;
        let point0;
        let point1;
        for (let i = 0; i < length; i += 1) {
            i2 = i * 2;
            if (i < length) {
                point0 = points[i];
                point1 = points[i + 1];
                this.lines[id].geometry.vertices[i2].set(point0.x, point0.y, point0.z);
                this.lines[id].geometry.vertices[i2 + 1].set(point1.x, point1.y, point1.z);
            }
        }
        this.lines[id].geometry.updateVertices();
    }
    createLine(id, points) {
        const bufferVertices = new Float32Array(this.flatten(points));
        this.lines[id] = new __WEBPACK_IMPORTED_MODULE_5__core_Mesh__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_6__geometry_LineGeometry__["a" /* default */](bufferVertices), new __WEBPACK_IMPORTED_MODULE_4__core_Material__["a" /* default */]({
            drawType: __WEBPACK_IMPORTED_MODULE_2__core_Constants__["DRAW_LINES"]
        }));
        this.scene.add(this.lines[id]);
    }
    destroy() {
        Object.keys(this.lines).forEach(id => {
            this.scene.remove(this.lines[id], true);
        });
        Object.keys(this.points).forEach(id => {
            this.points[id].forEach(mesh => {
                this.scene.remove(mesh, true);
            });
        });
        this.scene = null;
    }
}
class CameraDolly {
    constructor(options) {
        this.update = () => {
            const { origin, lookat } = this.dollies[this.dolly].get(this.time);
            this.camera.position.set(origin.x, origin.y, origin.z);
            this.camera.lookAt(lookat.x, lookat.y, lookat.z);
        };
        this.id = __WEBPACK_IMPORTED_MODULE_1_uuid_v1___default()();
        Object.assign(this, options);
        this.dollies = [];
        this.helpers = [];
        this.dolly = '';
        this.time = 0;
        if (this.gui) {
            this.guiFolder = this.gui.addFolder(`Camera Dolly ${this.id}`);
            this.guiFolder.open();
            this.guiFolder.add(this, 'export');
        }
    }
    add(id, data) {
        this.dollies[id] = new Dolly(data.origin, data.lookat, this.curveSteps);
        this.set(id);
        if (this.guiFolder) {
            this.helpers[id] = new DollyHelper(this.dollies[id], this.scene, this.gui, this.curveSteps, this.guiSliderRange, this.guiOpen, this.guiOpenOrigin, this.guiOpenLookat);
            this.helpers[id].on('rebuild', this.update);
        }
    }
    export() {
        const data = JSON.stringify({
            origin: this.dollies[this.dolly].curves.origin.points,
            lookat: this.dollies[this.dolly].curves.lookat.points
        }, undefined, 2);
        window.prompt('Copy to clipboard: Ctrl+C, Enter', data);
    }
    set(id) {
        this.dolly = id;
    }
    destroy() {
        Object.keys(this.dollies).forEach(id => {
            this.dollies[id].destroy();
        });
        Object.keys(this.helpers).forEach(id => {
            this.helpers[id].destroy();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CameraDolly;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

(function() {
  "use strict";

  var utils = __webpack_require__(45);

  /**
   * Poly Bezier
   * @param {[type]} curves [description]
   */
  var PolyBezier = function(curves) {
    this.curves = [];
    this._3d = false;
    if(!!curves) {
      this.curves = curves;
      this._3d = this.curves[0]._3d;
    }
  }

  PolyBezier.prototype = {
    valueOf: function() {
      return this.toString();
    },
    toString: function() {
      return "[" + this.curves.map(function(curve) {
        return utils.pointsToString(curve.points);
      }).join(", ") + "]";
    },
    addCurve: function(curve) {
      this.curves.push(curve);
      this._3d = this._3d || curve._3d;
    },
    length: function() {
      return this.curves.map(function(v) { return v.length(); }).reduce(function(a,b) { return a+b; });
    },
    curve: function(idx) {
      return this.curves[idx];
    },
    bbox: function() {
      var c = this.curves;
      var bbox = c[0].bbox();
      for(var i=1; i<c.length; i++) {
        utils.expandbox(bbox, c[i].bbox());
      }
      return bbox;
    },
    offset: function(d) {
      var offset = [];
      this.curves.forEach(function(v) {
        offset = offset.concat(v.offset(d));
      });
      return new PolyBezier(offset);
    }
  };

  module.exports = PolyBezier;
}());


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(97);
var bytesToUuid = __webpack_require__(99);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(98)))

/***/ }),
/* 98 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @author alteredq / http://alteredqualia.com/
 * https://github.com/mrdoob/three.js/blob/master/src/core/Clock.js
 */
let diff;
let newTime;
const dateType = window.performance || Date;
class Clock {
    constructor(autoStart = false) {
        this.startTime = 0;
        this.oldTime = 0;
        this.elapsedTime = 0;
        this.isRunning = autoStart;
    }
    start() {
        this.startTime = dateType.now();
        this.oldTime = this.startTime;
        this.elapsedTime = 0;
        this.isRunning = true;
    }
    stop() {
        this.getElapsedTime();
        this.isRunning = false;
    }
    getElapsedTime() {
        this.getDelta();
        return this.elapsedTime;
    }
    getDelta() {
        diff = 0;
        if (this.autoStart && !this.isRunning) {
            this.start();
        }
        if (this.isRunning) {
            newTime = dateType.now();
            diff = (newTime - this.oldTime) / 1000;
            this.oldTime = newTime;
            this.elapsedTime += diff;
        }
        return diff;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Clock;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

(function (undefined) {
  'use strict';

  var OBJ = {};

  if (true) {
    module.exports = OBJ;
  } else {
    window.OBJ = OBJ;
  }

  /**
   * The main Mesh class. The constructor will parse through the OBJ file data
   * and collect the vertex, vertex normal, texture, and face information. This
   * information can then be used later on when creating your VBOs. See
   * OBJ.initMeshBuffers for an example of how to use the newly created Mesh
   *
   * @class Mesh
   * @constructor
   *
   * @param {String} objectData a string representation of an OBJ file with newlines preserved.
   */
  OBJ.Mesh = function (objectData) {
    /*
     The OBJ file format does a sort of compression when saving a model in a
     program like Blender. There are at least 3 sections (4 including textures)
     within the file. Each line in a section begins with the same string:
       * 'v': indicates vertex section
       * 'vn': indicates vertex normal section
       * 'f': indicates the faces section
       * 'vt': indicates vertex texture section (if textures were used on the model)
     Each of the above sections (except for the faces section) is a list/set of
     unique vertices.

     Each line of the faces section contains a list of
     (vertex, [texture], normal) groups
     Some examples:
         // the texture index is optional, both formats are possible for models
         // without a texture applied
         f 1/25 18/46 12/31
         f 1//25 18//46 12//31

         // A 3 vertex face with texture indices
         f 16/92/11 14/101/22 1/69/1

         // A 4 vertex face
         f 16/92/11 40/109/40 38/114/38 14/101/22

     The first two lines are examples of a 3 vertex face without a texture applied.
     The second is an example of a 3 vertex face with a texture applied.
     The third is an example of a 4 vertex face. Note: a face can contain N
     number of vertices.

     Each number that appears in one of the groups is a 1-based index
     corresponding to an item from the other sections (meaning that indexing
     starts at one and *not* zero).

     For example:
         `f 16/92/11` is saying to
           - take the 16th element from the [v] vertex array
           - take the 92nd element from the [vt] texture array
           - take the 11th element from the [vn] normal array
         and together they make a unique vertex.
     Using all 3+ unique Vertices from the face line will produce a polygon.

     Now, you could just go through the OBJ file and create a new vertex for
     each face line and WebGL will draw what appears to be the same model.
     However, vertices will be overlapped and duplicated all over the place.

     Consider a cube in 3D space centered about the origin and each side is
     2 units long. The front face (with the positive Z-axis pointing towards
     you) would have a Top Right vertex (looking orthogonal to its normal)
     mapped at (1,1,1) The right face would have a Top Left vertex (looking
     orthogonal to its normal) at (1,1,1) and the top face would have a Bottom
     Right vertex (looking orthogonal to its normal) at (1,1,1). Each face
     has a vertex at the same coordinates, however, three distinct vertices
     will be drawn at the same spot.

     To solve the issue of duplicate Vertices (the `(vertex, [texture], normal)`
     groups), while iterating through the face lines, when a group is encountered
     the whole group string ('16/92/11') is checked to see if it exists in the
     packed.hashindices object, and if it doesn't, the indices it specifies
     are used to look up each attribute in the corresponding attribute arrays
     already created. The values are then copied to the corresponding unpacked
     array (flattened to play nice with WebGL's ELEMENT_ARRAY_BUFFER indexing),
     the group string is added to the hashindices set and the current unpacked
     index is used as this hashindices value so that the group of elements can
     be reused. The unpacked index is incremented. If the group string already
     exists in the hashindices object, its corresponding value is the index of
     that group and is appended to the unpacked indices array.
     */
    var verts = [], vertNormals = [], textures = [], unpacked = {};
    // unpacking stuff
    unpacked.verts = [];
    unpacked.norms = [];
    unpacked.textures = [];
    unpacked.hashindices = {};
    unpacked.indices = [];
    unpacked.index = 0;
    // array of lines separated by the newline
    var lines = objectData.split('\n');
    
    var VERTEX_RE = /^v\s/;
    var NORMAL_RE = /^vn\s/;
    var TEXTURE_RE = /^vt\s/;
    var FACE_RE = /^f\s/;
    var WHITESPACE_RE = /\s+/;
    
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      var elements = line.split(WHITESPACE_RE);
      elements.shift();
      
      if (VERTEX_RE.test(line)) {
        // if this is a vertex
        verts.push.apply(verts, elements);
      } else if (NORMAL_RE.test(line)) {
        // if this is a vertex normal
        vertNormals.push.apply(vertNormals, elements);
      } else if (TEXTURE_RE.test(line)) {
        // if this is a texture
        textures.push.apply(textures, elements);
      } else if (FACE_RE.test(line)) {
        // if this is a face
        /*
        split this face into an array of vertex groups
        for example:
           f 16/92/11 14/101/22 1/69/1
        becomes:
          ['16/92/11', '14/101/22', '1/69/1'];
        */
        var quad = false;
        for (var j = 0, eleLen = elements.length; j < eleLen; j++){
            // Triangulating quads
            // quad: 'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2 v3/t3/vn3/'
            // corresponding triangles:
            //      'f v0/t0/vn0 v1/t1/vn1 v2/t2/vn2'
            //      'f v2/t2/vn2 v3/t3/vn3 v0/t0/vn0'
            if(j === 3 && !quad) {
                // add v2/t2/vn2 in again before continuing to 3
                j = 2;
                quad = true;
            }
            if(elements[j] in unpacked.hashindices){
                unpacked.indices.push(unpacked.hashindices[elements[j]]);
            }
            else{
                /*
                Each element of the face line array is a vertex which has its
                attributes delimited by a forward slash. This will separate
                each attribute into another array:
                    '19/92/11'
                becomes:
                    vertex = ['19', '92', '11'];
                where
                    vertex[0] is the vertex index
                    vertex[1] is the texture index
                    vertex[2] is the normal index
                 Think of faces having Vertices which are comprised of the
                 attributes location (v), texture (vt), and normal (vn).
                 */
                var vertex = elements[ j ].split( '/' );
                /*
                 The verts, textures, and vertNormals arrays each contain a
                 flattend array of coordinates.

                 Because it gets confusing by referring to vertex and then
                 vertex (both are different in my descriptions) I will explain
                 what's going on using the vertexNormals array:

                 vertex[2] will contain the one-based index of the vertexNormals
                 section (vn). One is subtracted from this index number to play
                 nice with javascript's zero-based array indexing.

                 Because vertexNormal is a flattened array of x, y, z values,
                 simple pointer arithmetic is used to skip to the start of the
                 vertexNormal, then the offset is added to get the correct
                 component: +0 is x, +1 is y, +2 is z.

                 This same process is repeated for verts and textures.
                 */
                // vertex position
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 0]);
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 1]);
                unpacked.verts.push(+verts[(vertex[0] - 1) * 3 + 2]);
                // vertex textures
                if (textures.length) {
                  unpacked.textures.push(+textures[(vertex[1] - 1) * 2 + 0]);
                  unpacked.textures.push(+textures[(vertex[1] - 1) * 2 + 1]);
                }
                // vertex normals
                unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 0]);
                unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 1]);
                unpacked.norms.push(+vertNormals[(vertex[2] - 1) * 3 + 2]);
                // add the newly created vertex to the list of indices
                unpacked.hashindices[elements[j]] = unpacked.index;
                unpacked.indices.push(unpacked.index);
                // increment the counter
                unpacked.index += 1;
            }
            if(j === 3 && quad) {
                // add v0/t0/vn0 onto the second triangle
                unpacked.indices.push( unpacked.hashindices[elements[0]]);
            }
        }
      }
    }
    this.vertices = unpacked.verts;
    this.vertexNormals = unpacked.norms;
    this.textures = unpacked.textures;
    this.indices = unpacked.indices;
  }

  var Ajax = function(){
    // this is just a helper class to ease ajax calls
    var _this = this;
    this.xmlhttp = new XMLHttpRequest();

    this.get = function(url, callback){
      _this.xmlhttp.onreadystatechange = function(){
        if(_this.xmlhttp.readyState === 4){
          callback(_this.xmlhttp.responseText, _this.xmlhttp.status);
        }
      };
      _this.xmlhttp.open('GET', url, true);
      _this.xmlhttp.send();
    }
  };

  /**
   * Takes in an object of `mesh_name`, `'/url/to/OBJ/file'` pairs and a callback
   * function. Each OBJ file will be ajaxed in and automatically converted to
   * an OBJ.Mesh. When all files have successfully downloaded the callback
   * function provided will be called and passed in an object containing
   * the newly created meshes.
   *
   * **Note:** In order to use this function as a way to download meshes, a
   * webserver of some sort must be used.
   *
   * @param {Object} nameAndURLs an object where the key is the name of the mesh and the value is the url to that mesh's OBJ file
   *
   * @param {Function} completionCallback should contain a function that will take one parameter: an object array where the keys will be the unique object name and the value will be a Mesh object
   *
   * @param {Object} meshes In case other meshes are loaded separately or if a previously declared variable is desired to be used, pass in a (possibly empty) json object of the pattern: { '<mesh_name>': OBJ.Mesh }
   *
   */
  OBJ.downloadMeshes = function (nameAndURLs, completionCallback, meshes){
    // the total number of meshes. this is used to implement "blocking"
    var semaphore = Object.keys(nameAndURLs).length;
    // if error is true, an alert will given
    var error = false;
    // this is used to check if all meshes have been downloaded
    // if meshes is supplied, then it will be populated, otherwise
    // a new object is created. this will be passed into the completionCallback
    if(meshes === undefined) meshes = {};
    // loop over the mesh_name,url key,value pairs
    for(var mesh_name in nameAndURLs){
      if(nameAndURLs.hasOwnProperty(mesh_name)){
        new Ajax().get(nameAndURLs[mesh_name], (function(name) {
          return function (data, status) {
            if (status === 200) {
              meshes[name] = new OBJ.Mesh(data);
            }
            else {
              error = true;
              console.error('An error has occurred and the mesh "' +
                name + '" could not be downloaded.');
            }
            // the request has finished, decrement the counter
            semaphore--;
            if (semaphore === 0) {
              if (error) {
                // if an error has occurred, the user is notified here and the
                // callback is not called
                console.error('An error has occurred and one or meshes has not been ' +
                  'downloaded. The execution of the script has terminated.');
                throw '';
              }
              // there haven't been any errors in retrieving the meshes
              // call the callback
              completionCallback(meshes);
            }
          }
        })(mesh_name));
      }
    }
  };

  var _buildBuffer = function( gl, type, data, itemSize ){
    var buffer = gl.createBuffer();
    var arrayView = type === gl.ARRAY_BUFFER ? Float32Array : Uint16Array;
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, new arrayView(data), gl.STATIC_DRAW);
    buffer.itemSize = itemSize;
    buffer.numItems = data.length / itemSize;
    return buffer;
  }

  /**
   * Takes in the WebGL context and a Mesh, then creates and appends the buffers
   * to the mesh object as attributes.
   *
   * @param {WebGLRenderingContext} gl the `canvas.getContext('webgl')` context instance
   * @param {Mesh} mesh a single `OBJ.Mesh` instance
   *
   * The newly created mesh attributes are:
   *
   * Attrbute | Description
   * :--- | ---
   * **normalBuffer**       |contains the model&#39;s Vertex Normals
   * normalBuffer.itemSize  |set to 3 items
   * normalBuffer.numItems  |the total number of vertex normals
   * |
   * **textureBuffer**      |contains the model&#39;s Texture Coordinates
   * textureBuffer.itemSize |set to 2 items
   * textureBuffer.numItems |the number of texture coordinates
   * |
   * **vertexBuffer**       |contains the model&#39;s Vertex Position Coordinates (does not include w)
   * vertexBuffer.itemSize  |set to 3 items
   * vertexBuffer.numItems  |the total number of vertices
   * |
   * **indexBuffer**        |contains the indices of the faces
   * indexBuffer.itemSize   |is set to 1
   * indexBuffer.numItems   |the total number of indices
   *
   * A simple example (a lot of steps are missing, so don't copy and paste):
   *
   *     var gl   = canvas.getContext('webgl'),
   *         mesh = OBJ.Mesh(obj_file_data);
   *     // compile the shaders and create a shader program
   *     var shaderProgram = gl.createProgram();
   *     // compilation stuff here
   *     ...
   *     // make sure you have vertex, vertex normal, and texture coordinate
   *     // attributes located in your shaders and attach them to the shader program
   *     shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
   *     gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
   *
   *     shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
   *     gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
   *
   *     shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
   *     gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);
   *
   *     // create and initialize the vertex, vertex normal, and texture coordinate buffers
   *     // and save on to the mesh object
   *     OBJ.initMeshBuffers(gl, mesh);
   *
   *     // now to render the mesh
   *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.vertexBuffer);
   *     gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, mesh.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *
   *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.textureBuffer);
   *     gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, mesh.textureBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *
   *     gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
   *     gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, mesh.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);
   *
   *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.mesh.indexBuffer);
   *     gl.drawElements(gl.TRIANGLES, model.mesh.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
   */
  OBJ.initMeshBuffers = function( gl, mesh ){
    mesh.normalBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertexNormals, 3);
    mesh.textureBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.textures, 2);
    mesh.vertexBuffer = _buildBuffer(gl, gl.ARRAY_BUFFER, mesh.vertices, 3);
    mesh.indexBuffer = _buildBuffer(gl, gl.ELEMENT_ARRAY_BUFFER, mesh.indices, 1);
  }

  OBJ.deleteMeshBuffers = function( gl, mesh ){
    gl.deleteBuffer(mesh.normalBuffer);
    gl.deleteBuffer(mesh.textureBuffer);
    gl.deleteBuffer(mesh.vertexBuffer);
    gl.deleteBuffer(mesh.indexBuffer);
  }
})();



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector2__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector3__ = __webpack_require__(2);



const MODE_DRAG = 'MODE_DRAG';
const MODE_PAN = 'MODE_PAN';
const MODE_ZOOM = 'MODE_ZOOM';
const UP = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */](0, 1, 0);
const EASE_THRESHOLD = 0.0001;
class OrbitControls {
    constructor(camera, element) {
        this._onTouchStart = event => {
            event.preventDefault();
            if (event.touches) {
                // Device
                switch (event.touches.length) {
                    case 1:
                        this._mode = MODE_DRAG;
                        this._offset.y = this._rotation.y;
                        this._offset.x = this._rotation.x;
                        break;
                    case 2:
                        {
                            this._mode = MODE_ZOOM;
                            this._radiusOffset = this._radius;
                            break;
                        }
                    default:
                        {
                            this._mode = MODE_PAN;
                            this._offset.y = this.target.y;
                            this._offset.x = this.target.x;
                        }
                }
            } else {
                // Desktop
                switch (event.which) {
                    case 3:
                        this._mode = MODE_PAN;
                        this._offset.y = this.target.y;
                        this._offset.x = this.target.x;
                        break;
                    default:
                        {
                            this._mode = MODE_DRAG;
                            this._offset.y = this._rotation.y;
                            this._offset.x = this._rotation.x;
                        }
                }
            }
            this._start.y = event.pageX / this._width;
            this._start.x = event.pageY / this._height;
            this._targetOffset.copy(this.target);
            this._radiusOffset = this._radius;
            this.isDown = true;
        };
        this._onTouchMove = event => {
            if (this.isDown) {
                this.isDragging = true;
                switch (this._mode) {
                    case MODE_PAN:
                        {
                            if (!this.pan) return;
                            const y = event.pageX / this._width;
                            const x = event.pageY / this._height;
                            this._direction.copy(this._camera.position).subtract(this.target).normalize();
                            const cross = this._direction.cross(UP);
                            const tx = this._targetOffset.x + -(this._start.y - y) * this.panSpeed * cross.x;
                            const ty = this._targetOffset.y + -(this._start.x - x) * this.panSpeed;
                            const tz = this._targetOffset.z + -(this._start.y - y) * this.panSpeed * cross.z;
                            this.target.set(tx, ty, tz);
                            break;
                        }
                    case MODE_ZOOM:
                        {
                            if (!this.zoom) return;
                            const dx = event.touches[0].pageX - event.touches[1].pageX;
                            const dy = event.touches[0].pageY - event.touches[1].pageY;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            const sign = this._lastZoomDistance > distance ? 1 : -1;
                            // Simulate the same data as the scroll
                            this._zoomConstraint(sign * 100);
                            this._lastZoomDistance = distance;
                            break;
                        }
                    default:
                        {
                            // Drag
                            const y = event.pageX / this._width;
                            const x = event.pageY / this._height;
                            this._rotation.x = this._offset.x + -(this._start.x - x) * this.rotationSpeed;
                            this._rotation.y = this._offset.y + (this._start.y - y) * this.rotationSpeed;
                            this._rotation.x = Object(__WEBPACK_IMPORTED_MODULE_0__math_Utils__["clamp"])(this._rotation.x, -Math.PI / 2, Math.PI / 2);
                        }
                }
                this.update();
            }
        };
        this._onTouchEnd = () => {
            this.isDown = false;
            this.isDragging = false;
        };
        this._onContextMenu = event => {
            event.preventDefault();
        };
        this._onMouseWheel = event => {
            let delta = 0;
            if (event.wheelDelta) {
                // Webkit, Opera, Explorer
                delta = event.wheelDelta;
            } else if (event.detail) {
                // Firefox
                delta = event.detail;
            }
            this._zoomConstraint(-delta);
        };
        this._onKeypress = event => {
            switch (event.keyCode) {
                case 114:
                    // r
                    // Reset
                    this.reset();
                    break;
                default:
            }
        };
        this.rotationSpeed = 5;
        this.panSpeed = 10;
        this.zoom = true;
        this.pan = true;
        this.smoothing = false;
        this.easing = 0.1;
        this.isDragging = false;
        this._camera = camera;
        this._element = element;
        this._zoomMin = 0.1;
        this._zoomMax = Infinity;
        this._radius = Math.max(camera.position.x, camera.position.z);
        this._radiusOffset = 0;
        this._defaultRadius = Math.max(camera.position.x, camera.position.z);
        this.rotation = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* default */]();
        this._rotation = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* default */]();
        this._rotation.x = Math.atan2(camera.position.y - 0, +this._radius - 0);
        this._rotation.y = Math.atan2(camera.position.z - 0, camera.position.x - 0);
        this._defaultRotation = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* default */]();
        this._defaultRotation.x = Math.atan2(camera.position.y - 0, +this._radius - 0);
        this._defaultRotation.y = Math.atan2(camera.position.z - 0, camera.position.x - 0);
        const y = this._radius * Math.sin(this._rotation.x);
        const r = this._radius * Math.cos(this._rotation.x);
        const x = Math.sin(this._rotation.y) * r;
        const z = Math.cos(this._rotation.y) * r;
        this._x = x;
        this._y = y;
        this._z = z;
        this._start = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* default */]();
        this._offset = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* default */]();
        this._offsetPan = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* default */]();
        this.target = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */]();
        this._targetOffset = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */]();
        this._direction = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* default */]();
        this._lastZoomDistance = 0;
        this._width = window.innerWidth;
        this._height = window.innerHeight;
        this._element.addEventListener('mousedown', this._onTouchStart, false);
        this._element.addEventListener('mousemove', this._onTouchMove, false);
        this._element.addEventListener('mouseup', this._onTouchEnd, false);
        this._element.addEventListener('touchstart', this._onTouchStart, false);
        this._element.addEventListener('touchmove', this._onTouchMove, false);
        this._element.addEventListener('touchend', this._onTouchEnd, false);
        this._element.addEventListener('contextmenu', this._onContextMenu, false);
        window.addEventListener('mousewheel', this._onMouseWheel, false);
        window.addEventListener('keypress', this._onKeypress, false);
    }
    _zoomConstraint(delta) {
        if (!this.zoom) return;
        const value = delta / 1000;
        const speed = 3;
        this._radius += value * speed;
        this._radius = Object(__WEBPACK_IMPORTED_MODULE_0__math_Utils__["clamp"])(this._radius, this._zoomMin, this._zoomMax);
        this.update();
    }
    update() {
        if (this.smoothing) {
            this.rotation.x += (this._rotation.x - this.rotation.x) * this.easing;
            this.rotation.y += (this._rotation.y - this.rotation.y) * this.easing;
            if (Math.abs(this.rotation.x - this._rotation.x) < EASE_THRESHOLD) {
                this.rotation.x = this._rotation.x;
            }
            if (Math.abs(this.rotation.y - this._rotation.y) < EASE_THRESHOLD) {
                this.rotation.y = this._rotation.y;
            }
        } else {
            this.rotation.x = this._rotation.x;
            this.rotation.y = this._rotation.y;
        }
        const y = this._radius * Math.sin(this.rotation.x);
        const r = this._radius * Math.cos(this.rotation.x); // radius of the sphere
        const x = Math.sin(this.rotation.y) * r;
        const z = Math.cos(this.rotation.y) * r;
        this._x = x;
        this._y = y;
        this._z = z;
        this._camera.position.set(this._x, this._y, this._z).add(this.target);
        this._camera.lookAt(this.target.x, this.target.y, this.target.z);
    }
    reset() {
        this.target.set(0, 0, 0);
        this._rotation.y = this._defaultRotation.y;
        this._rotation.x = this._defaultRotation.x;
        this._radius = this._defaultRadius;
        this.update();
    }
    dispose() {
        this._element.removeEventListener('mousedown', this._onTouchStart);
        this._element.removeEventListener('mousemove', this._onTouchMove);
        this._element.removeEventListener('mouseup', this._onTouchEnd);
        this._element.removeEventListener('touchstart', this._onTouchStart);
        this._element.removeEventListener('touchmove', this._onTouchMove);
        this._element.removeEventListener('touchend', this._onTouchEnd);
        this._element.removeEventListener('contextmenu', this._onContextMenu);
        window.removeEventListener('mousewheel', this._onMouseWheel);
        window.removeEventListener('keypress', this._onKeypress);
        this._camera = null;
        this._element = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OrbitControls;


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FileLoader__ = __webpack_require__(28);

/* harmony default export */ __webpack_exports__["a"] = (function (file) {
    return new Promise((resolve, reject) => {
        Object(__WEBPACK_IMPORTED_MODULE_0__FileLoader__["a" /* default */])(file).then(response => {
            const data = JSON.parse(response);
            resolve(data);
        }).catch(reject);
    });
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_ObjParser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FileLoader__ = __webpack_require__(28);


/* harmony default export */ __webpack_exports__["a"] = (function (file) {
    return new Promise((resolve, reject) => {
        Object(__WEBPACK_IMPORTED_MODULE_1__FileLoader__["a" /* default */])(file).then(response => {
            const data = Object(__WEBPACK_IMPORTED_MODULE_0__utils_ObjParser__["a" /* default */])(response);
            resolve(data);
        }).catch(reject);
    });
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=ixviii.medium.js.map