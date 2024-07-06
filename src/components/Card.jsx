import { motion } from "framer-motion";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

extend({ BoxBufferGeometry: THREE.BoxGeometry });

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const Card3D = ({ texture }) => {
  const text = useTexture(texture);

  return (
    <mesh>
      <boxBufferGeometry args={[5, 5, 0.2]} />
      <meshStandardMaterial map={text} />
    </mesh>
  );
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 1,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  },
};

const Card = ({ index, title, texture, about }) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="card bg-white p-8 rounded shadow-6xl flex flex-col gap-1"
      whileHover={floatingAnimation}
      style={{
        // background: "black",
        transition: "background 0.4s ease",
      }}
    >
      <motion.h2 className=" text-xl font-nerd text-black">{title}</motion.h2>
      <motion.h2 className=" text-sm text-red-500 font-nerd ">
        {about}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="w-full h-auto"
        style={{ height: "300px" }}
      >
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1.4} />
            <directionalLight position={[0, 15, 10]} />
            <Card3D texture={texture} />
          </Suspense>
        </Canvas>
      </motion.div>
    </motion.div>
  );
};

export default Card;
