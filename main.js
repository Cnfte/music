const canvas = document.getElementById('gl-canvas');
const gl = canvas.getContext('webgl');

// 初始化着色器
const vsSource = `
    attribute vec4 aVertexPosition;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
`;
const fsSource = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 红色
    }
`;

// 编译着色器
const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vsSource);
gl.compileShader(vs);

const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fsSource);
gl.compileShader(fs);

// 创建着色器程序
const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

// 初始化数据
const bufferInfo = twgl.createBufferInfoFrom[已中止]
 
