main();

function main() {

    const canvas = document.querySelector('#glCanvas');

    const gl = canvas.getContext("webgl");

    if(gl === null) {
        alert("Unable to initialize WebGL.  Your browser or machine may not support it.");
        return;
    }

    // Set the clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);
}