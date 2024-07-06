import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, Effects } from "@react-three/drei";
import * as THREE from "three";
import { UnrealBloomPass } from "three-stdlib";

extend({ UnrealBloomPass });

const Particles = () => {
  const particlesRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const [explosion, setExplosion] = useState(false);

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(10000 * 3);
    const velocities = new Float32Array(10000 * 3);
    const colors = new Float32Array(10000 * 3);
    const sizes = new Float32Array(10000);

    for (let i = 0; i < 10000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;

      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = Math.random();
      colors[i * 3 + 2] = Math.random();

      sizes[i] = Math.random() * 5 + 1;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array;
      const velocities =
        particlesRef.current.geometry.attributes.velocity.array;
      const sizes = particlesRef.current.geometry.attributes.size.array;
      const colors = particlesRef.current.geometry.attributes.color.array;

      for (let i = 0; i < 10000; i++) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        const z = positions[i * 3 + 2];

        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        velocities[i * 3] += (Math.random() - 0.5) * 0.0001;
        velocities[i * 3 + 1] += (Math.random() - 0.5) * 0.0001;
        velocities[i * 3 + 2] += (Math.random() - 0.5) * 0.0001;

        sizes[i] = (Math.sin(time * 5 + i) + 1) * 2.5;

        colors[i * 3] = (Math.sin(time + i) + 1) / 2;
        colors[i * 3 + 1] = (Math.cos(time + i) + 1) / 2;
        colors[i * 3 + 2] = (Math.sin(time * 2 + i) + 1) / 2;

        if (explosion) {
          velocities[i * 3] += (Math.random() - 0.5) * 0.5;
          velocities[i * 3 + 1] += (Math.random() - 0.5) * 0.5;
          velocities[i * 3 + 2] += (Math.random() - 0.5) * 0.5;
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.geometry.attributes.velocity.needsUpdate = true;
      particlesRef.current.geometry.attributes.size.needsUpdate = true;
      particlesRef.current.geometry.attributes.color.needsUpdate = true;

      const { x, y } = state.mouse;
      mouse.current.x += (x - mouse.current.x) * 0.05;
      mouse.current.y += (y - mouse.current.y) * 0.05;

      particlesRef.current.rotation.y = mouse.current.x * 2;
      particlesRef.current.rotation.x = -mouse.current.y * 2;
    }
  });

  const handleMouseDown = () => {
    setExplosion(true);
    setTimeout(() => setExplosion(false), 700);
  };

  return (
    <points
      ref={particlesRef}
      geometry={particlesGeometry}
      onPointerDown={handleMouseDown}
    >
      <shaderMaterial
        attach="material"
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        depthTest={false}
      />
    </points>
  );
};

const vertexShader = `
  attribute float size;
  varying vec3 vColor;
  void main() {
    vColor = color;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (200.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor,0.6);
  }
`;

const Scene1 = () => {
  return (
    <Canvas
      className="gg"
      camera={{ position: [0, 10, 20], fov: 30 }}
      style={{ background: "black" }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 20, 40]} intensity={0.2} />
      <Particles />
      <OrbitControls />
      <Effects>
        <unrealBloomPass threshold={0.1} strength={0} radius={0.82} />
      </Effects>
    </Canvas>
  );
};

export default Scene1;
