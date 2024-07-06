const FisheyeShader = {
    uniforms: {
      tDiffuse: { value: null },
      strength: { value: 0.5 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float strength;
      uniform sampler2D tDiffuse;
      varying vec2 vUv;
  
      void main() {
        vec2 p = vUv;
        vec2 center = vec2(0.5, 0.5);
        p -= center;
        float dist = length(p);
        if (dist < 0.5) {
          float percent = 1.0 - (dist / 0.5);
          p *= mix(1.0, strength, percent);
        }
        p += center;
        gl_FragColor = texture2D(tDiffuse, p);
      }
    `,
  };
  
  export default FisheyeShader;
  