// import { Canvas, useFrame } from "@react-three/fiber";
// import {
// 	Points, PointMaterial
// } from "@react-three/drei";
// import { useRef, useState } from "react";
// import {random} from 'maath'

// export default function HomeCanvas({}) {
// 	return (
//     <Canvas camera={{ position: [0, 0, 1] }} style={{height: '100vh', zIndex: 1}}>
//       <Stars />
//     </Canvas>
//   );
// }

// function Stars(props) {
// 	const ref = useRef()
// 	const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
// 	useFrame((state, delta) => {
// 	  ref.current.rotation.x -= delta / 10
// 	  ref.current.rotation.y -= delta / 15
// 	})
// 	return (
// 	  <group rotation={[0, 0, Math.PI / 4]}>
// 		<Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
// 		  <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
// 		</Points>
// 	  </group>
// 	)
//   }
