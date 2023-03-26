"use client";
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Cloud } from '@react-three/drei';
import Model from './Model';

export default function App() {
   return (
     <Canvas
       camera={{ fov: 15 }}
       style={{
         backgroundColor: "#faf7f5",
         width: "100vw",
         height: "100vh",
       }}
     >
       <ambientLight intensity={1.25} />
       <ambientLight intensity={0.1} />
       <directionalLight intensity={0.4} />
       <Suspense fallback={null}>
         <Model position={[0.025, -0.9, 1]} />
         {/* <Cloud position={[-4, -2, -25]} speed={0.2} opacity={1} /> */}
         {/* <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.5} /> */}
         <Cloud position={[0.025, -1.5, -3.5]} speed={0.2} opacity={1} />
         {/* <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.5} /> */}
         {/* <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.75} /> */}
       </Suspense>
       <OrbitControls />
     </Canvas>
   );
}