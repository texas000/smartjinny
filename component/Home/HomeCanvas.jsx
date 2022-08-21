import { Canvas } from "@react-three/fiber";
import {
	MeshDistortMaterial,
	MeshWobbleMaterial,
	Sphere,
	Text,
} from "@react-three/drei";
import { Fragment } from "react";

// import * as THREE from 'three';

export default function HomeCanvas({}) {
	return (
		<Fragment>
			<Canvas
				style={{ height: "100vh", width: "100vw", background: "#edf2ff" }}
			>
				<Text
					color={"#6366f1"}
					fontSize={2}
					maxWidth={100}
					lineHeight={1}
					letterSpacing={0.02}
					textAlign={"left"}
					anchorX="center"
					anchorY="bottom-baseline"
					position={[0, 1.5, 0]}
					font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
					outlineWidth={0.1}
					outlineColor="#ffffff"
					selectable
				>
					SMARTJINNY
				</Text>
				<mesh
					visible // object gets render if true
					userData={{ title: "SMARTJINNY" }} // An object that can be used to store custom data about the Object3d
					position={[0, -0.5, 0]} // The position on the canvas of the object [x,y,x]
					rotation={[0, 1, 0]} // The rotation of the object
					castShadow // Sets whether or not the object cats a shadow
					// There are many more props.....
				>
					{/* A spherical shape*/}
					<sphereGeometry attach="geometry" args={[1, 16, 200]} />
					{/* A standard mesh material*/}
					<meshStandardMaterial
						attach="material" // How the element should attach itself to its parent
						color="#4338ca" // The color of the material
						transparent // Defines whether this material is transparent. This has an effect on rendering as transparent objects need special treatment and are rendered after non-transparent objects. When set to true, the extent to which the material is transparent is controlled by setting it's .opacity property.
						roughness={0.1} // The roughness of the material - Defaults to 1
						metalness={0.1} // The metalness of the material - Defaults to 0
					/>
				</mesh>

				{/*An ambient light that creates a soft light against the object */}
				<ambientLight intensity={0.5} />
				{/*An directional light which aims form the given position */}
				<directionalLight position={[10, 10, 5]} intensity={1} />
				{/*An point light, basically the same as directional. This one points from under */}
				<pointLight position={[0, -10, 5]} intensity={1} />

				{/* We can use the drei Sphere which has a simple API. This sphere has a wobble material attached to it */}
				<Sphere visible position={[-3, -0.5, 0]} args={[1, 16, 200]}>
					<MeshWobbleMaterial
						attach="material"
						color="#15803d"
						factor={1} // Strength, 0 disables the effect (default=1)
						speed={2} // Speed (default=1)
						roughness={0}
					/>
				</Sphere>

				{/* This sphere has a distort material attached to it */}
				<Sphere visible position={[3, -0.5, 0]} args={[1, 16, 200]}>
					<MeshDistortMaterial
						color="#0369a1"
						attach="material"
						distort={0.5} // Strength, 0 disables the effect (default=1)
						speed={2} // Speed (default=1)
						roughness={0}
					/>
				</Sphere>
			</Canvas>
		</Fragment>
	);
}
