import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "../utils/scene";
import { OrbitControls, Center, Text } from "@react-three/drei";

const Canvas3D = () => {
  const [devise, setDevise] = useState(null);
  useEffect(() => {
    setDevise(window.innerWidth);
  }, []);

  return (
    <div style={{ height: "100%" }}>
      {devise && (
        <Canvas style={{ cursor: "grab" }}>
          <directionalLight intensity={1} />
          <pointLight color="white" position={[0, 0, 2]} intensity={1} />
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Center>
              <Model
                className="contactPage__phone"
                scale={devise <= 768 ? [8, 8, 8] : [12, 12, 12]}
                rotation={[0, -1.2, 0]}
              />
            </Center>
          </Suspense>

          <OrbitControls
            enablePan={true}
            enableZoom={false}
            enableRotate={true}
          />
          <Text
            color="white"
            anchorX="center"
            anchorY="middle"
            fontSize={devise <= 768 ? "0.3" : "0.4"}
            position={[0, 2, 0]}
            rotation={[0, 0, 0]}
          >
            +262 (0)6.92.25.32.94
          </Text>
        </Canvas>
      )}
    </div>
  );
};

export default Canvas3D;
