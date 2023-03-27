"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function App() {
   return (
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 10 }}
         style={{
            backgroundColor: '#faf7f5',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 1]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}

// https://docs.pmnd.rs/react-three-fiber/getting-started/examples
// THREE EXAMPLES