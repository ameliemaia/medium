import {
	lerp,
} from 'math/Utils';
import Mesh from 'core/Mesh';
import Shader from 'core/Shader';
import * as GL from 'core/GL';
import { capabilities } from 'core/Capabilities';
import Geometry from 'geometry/Geometry';

const vertexShader = `
	attribute vec3 aVertexPosition;

	uniform mat4 uViewMatrix;
	uniform mat4 uProjectionMatrix;
	uniform mat4 uModelMatrix;

	void main(void){
		gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);
	}
`;

function fragmentShader() {
	return `
	precision ${capabilities.precision} float;

	void main(void){
		gl_FragColor = vec4(vec3(0.5), 1.0);
	}
	`;
}


class GridGeometry extends Geometry {
	constructor(size, divisions) {
		let vertices = [];
		const halfSize = size * 0.5;

		for (let i = 0; i < divisions; i++) {
			const x1 = lerp(-halfSize, halfSize, i / (divisions - 1));
			const y1 = 0;
			const z1 = -halfSize;
			const x2 = lerp(-halfSize, halfSize, i / (divisions - 1));
			const y2 = 0;
			const z2 = halfSize;
			vertices = vertices.concat([x1, y1, z1, x2, y2, z2]);
		}

		for (let i = 0; i < divisions; i++) {
			const x1 = -halfSize;
			const y1 = 0;
			const z1 = lerp(-halfSize, halfSize, i / (divisions - 1));
			const x2 = halfSize;
			const y2 = 0;
			const z2 = lerp(-halfSize, halfSize, i / (divisions - 1));
			vertices = vertices.concat([x1, y1, z1, x2, y2, z2]);
		}

		super(vertices);
	}
}

export default class Grid extends Mesh {
	constructor(size = 1, divisions = 10, lineWidth = 3) {
		super(new GridGeometry(size, divisions), new Shader({
			name: 'GridHelper',
			vertexShader,
			fragmentShader: fragmentShader(),
		}));
		this.lineWidth = lineWidth;
	}

	draw(modelViewMatrix, projectionMatrix) {
		const gl = GL.get();

		this.shader.bindProgram();

		gl.bindBuffer(gl.ARRAY_BUFFER, this.geometry.attributes.aVertexPosition.buffer);
		gl.vertexAttribPointer(this.shader.attributeLocations.aVertexPosition,
			this.geometry.attributes.aVertexPosition.itemSize, gl.FLOAT, false, 0, 0);

		// Update modelMatrix
		this.updateMatrix();

		this.shader.setUniforms(modelViewMatrix, projectionMatrix, this.modelMatrix);

		gl.lineWidth(this.lineWidth);
		gl.drawArrays(gl.LINES, 0, this.geometry.attributes.aVertexPosition.numItems);
	}
}
