import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/model/1_coffeeShop_post.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.06, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.wall2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Shop}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Menu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials.Emmision}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Shop}
          position={[-0.58, 0.75, -0.86]}
        >
          <group position={[0, -0.01, -0.06]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_1.geometry}
              material={materials.Emmision}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_2.geometry}
              material={materials.Shop}
            />
          </group>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials.Shop}
          position={[0.85, 1.89, -0.89]}
        >
          <group position={[0, -0.23, 0.92]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.17, 1.08]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.1, 1.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.18, 1.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere004_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere004_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.2, 1.63]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere005_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere005_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.12, 1.8]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere006_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere006_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.15, 0.74]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere007_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere007_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.12, 0.56]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere008_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere008_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.21, 0.39]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere009_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere009_2.geometry}
              material={materials.Emmision}
            />
          </group>
          <group position={[0, -0.17, 0.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere010_1.geometry}
              material={materials.Shop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere010_2.geometry}
              material={materials.Emmision}
            />
          </group>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.tbjr_material}
          position={[0.74, 0.95, -0.48]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.tbjr_material}
            position={[-0.05, 0, 0.05]}
            rotation={[0, -0.39, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.tbjr_material}
            position={[-0.05, 0, -0.05]}
            rotation={[0, -0.39, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials.tbjr_material}
            position={[0.06, 0, 0.05]}
            rotation={[0, -0.39, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_1.geometry}
            material={nodes.Cylinder005_1.material}
            position={[0.05, 0, -0.05]}
            rotation={[0, -0.39, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006.geometry}
            material={materials.tbjr_material}
            position={[-0.05, 0.04, 0.05]}
            rotation={[0.17, -0.97, -0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder007.geometry}
            material={materials.tbjr_material}
            position={[-0.05, 0.04, -0.05]}
            rotation={[-0.23, -0.35, -0.2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008.geometry}
            material={materials.tbjr_material}
            position={[0.06, 0.04, 0.05]}
            rotation={[0.15, -0.29, 0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009.geometry}
            material={materials.tbjr_material}
            position={[0.05, 0.04, -0.05]}
            rotation={[-0.17, 0.44, 0.04]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials.tbjr_material}
          position={[0.02, 1.51, -0.84]}
          rotation={[0, 0.1, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials.tbjr_material}
            position={[0.24, 0, 0.11]}
            rotation={[0, -0.21, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube031.geometry}
            material={materials.tbjr_material}
            position={[0.24, 0, 0.02]}
            rotation={[0, -0.25, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032.geometry}
            material={materials.tbjr_material}
            position={[0.12, 0, 0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033.geometry}
            material={materials.tbjr_material}
            position={[0.12, 0, 0.01]}
            rotation={[0, -0.1, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034.geometry}
            material={materials.tbjr_material}
            position={[-0.01, 0, 0.09]}
            rotation={[0, -0.22, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials.tbjr_material}
          position={[0.74, 0.42, 0.38]}
          rotation={[0, 1.52, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042.geometry}
            material={materials.tbjr_material}
            position={[-0.2, 0.38, 0.04]}
            rotation={[0, -1.52, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043.geometry}
            material={materials.tbjr_material}
            position={[0.01, 0.38, 0]}
            rotation={[0, 0.05, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube044.geometry}
            material={materials.tbjr_material}
            position={[-0.02, 0.19, 0]}
            rotation={[0, 0.11, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube045.geometry}
            material={materials.tbjr_material}
            position={[-0.13, 0.19, 0.01]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube046.geometry}
            material={materials.tbjr_material}
            position={[-0.23, 0.19, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube048.geometry}
            material={materials.tbjr_material}
            position={[-0.11, 0, 0.01]}
            rotation={[0, 0.22, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049.geometry}
            material={materials.tbjr_material}
            position={[-0.23, 0, 0.01]}
            rotation={[0, -0.08, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050.geometry}
            material={materials.tbjr_material}
            position={[-0.08, 0.36, 0]}
            rotation={[0, -1.52, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube051_1.geometry}
            material={materials.tbjr_material}
            position={[-0.19, 0.35, -0.05]}
            rotation={[0, -0.2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube052.geometry}
            material={materials.tbjr_material}
            position={[0, -0.24, 0]}
            rotation={[0, -1.24, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube053.geometry}
            material={materials.tbjr_material}
            position={[-0.12, -0.24, 0.06]}
            rotation={[-Math.PI, 0.23, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube054.geometry}
            material={materials.tbjr_material}
            position={[-0.19, -0.24, -0.03]}
            rotation={[Math.PI, -0.19, Math.PI]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials.tbjr_material}
          position={[-0.86, 0.55, 0.85]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder066.geometry}
            material={materials.tbjr_material}
            position={[0.27, -0.25, 0.04]}
            rotation={[0, 1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder067.geometry}
            material={materials.tbjr_material}
            position={[-0.02, -0.2, -1.16]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder068_1.geometry}
            material={materials.tbjr_material}
            position={[0.14, -0.2, -0.69]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder069_1.geometry}
            material={materials.tbjr_material}
            position={[0.14, -0.2, -0.29]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder070.geometry}
            material={materials.tbjr_material}
            position={[0.49, -0.2, 0.02]}
            rotation={[0, -1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder077.geometry}
            material={materials.tbjr_material}
            position={[0.02, 0.03, -0.58]}
            rotation={[-Math.PI, 0.64, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder078.geometry}
            material={materials.tbjr_material}
            position={[-0.05, 0.03, -0.36]}
            rotation={[0, -0.86, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder079.geometry}
            material={materials.tbjr_material}
            position={[-0.04, 0.03, -0.7]}
            rotation={[0, -0.39, 0]}
            scale={[1.72, 1, 1.72]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Torus028_1.geometry}
              material={materials.tbjr_material}
              position={[0, 0.03, 0]}
              rotation={[-Math.PI, 0.59, -Math.PI]}
              scale={[0.75, 1.29, 0.75]}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder080.geometry}
            material={materials.tbjr_material}
            position={[0, 0.03, -0.22]}
            rotation={[0, -0.39, 0]}
            scale={[1.72, 1, 1.72]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder081_1.geometry}
              material={materials.tbjr_material}
              position={[-0.01, 0.02, -0.02]}
              rotation={[0.27, 0.38, -0.08]}
              scale={[0.58, 0.98, 0.61]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder082_1.geometry}
              material={materials.tbjr_material}
              position={[0.01, 0.02, 0.02]}
              rotation={[2.87, -0.38, 3.06]}
              scale={[0.58, 0.98, 0.61]}
            />
          </mesh>
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.tbjr_material}
          position={[0.59, 0.65, -0.61]}
          rotation={[0, -0.34, 0.17]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials.tbjr_material}
          position={[0.49, 1.17, -0.79]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials.tbjr_material}
            position={[0, 0.06, 0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials.tbjr_material}
            position={[0.04, 0.06, -0.02]}
            rotation={[0, -0.96, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.tbjr_material}
            position={[-0.04, 0.06, -0.02]}
            rotation={[0, 0.91, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials.tbjr_material}
            position={[0.04, 0.09, 0.02]}
            rotation={[0, 1.01, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.tbjr_material}
            position={[0.01, 0.09, -0.04]}
            rotation={[0, 0.06, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials.tbjr_material}
            position={[-0.04, 0.09, 0.02]}
            rotation={[-Math.PI, 1.21, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials.tbjr_material}
            position={[0.02, 0.13, 0]}
            rotation={[0, 1.32, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials.tbjr_material}
            position={[-0.02, 0.13, -0.01]}
            rotation={[0, 1.32, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials.tbjr_material}
          position={[-0.29, 0.17, -0.53]}
          rotation={[0, 1.19, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018.geometry}
          material={materials.tbjr_material}
          position={[-0.11, 1.5, -0.81]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020.geometry}
          material={materials.tbjr_material}
          position={[0.76, 0.17, 0.86]}
          rotation={[0, 1.19, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder056.geometry}
          material={materials.tbjr_material}
          position={[-0.11, 0.66, -0.7]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder059.geometry}
            material={materials.tbjr_material}
            position={[0, 0.1, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder057.geometry}
          material={materials.tbjr_material}
          position={[0.1, 0.66, -0.7]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube059.geometry}
            material={materials.tbjr_material}
            position={[-0.04, 0.11, 0]}
            rotation={[0.01, 0.57, -0.1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube060.geometry}
            material={materials.tbjr_material}
            position={[0.02, 0.11, 0.06]}
            rotation={[0.02, 1.15, -0.12]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder058.geometry}
          material={materials.tbjr_material}
          position={[0.31, 0.66, -0.7]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder061.geometry}
            material={materials.tbjr_material}
            position={[-0.04, 0.1, 0.03]}
            rotation={[-0.38, 0.57, 0.79]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder062.geometry}
            material={materials.tbjr_material}
            position={[-0.02, 0.1, -0.05]}
            rotation={[0.23, 0.61, -0.09]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder063.geometry}
            material={materials.tbjr_material}
            position={[0.06, 0.1, 0.01]}
            rotation={[-0.31, 0.65, 0.45]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder064.geometry}
            material={materials.tbjr_material}
            position={[0.01, 0.1, 0.05]}
            rotation={[Math.PI, 1.4, -2.42]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={materials.tbjr_material}
          position={[0.31, 0.76, -0.7]}
          rotation={[-Math.PI, 1.4, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076.geometry}
          material={materials.tbjr_material}
          position={[0.01, 0.76, 0.11]}
          rotation={[Math.PI, -1.46, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube061.geometry}
            material={materials.tbjr_material}
            position={[-0.02, 0.11, -0.02]}
            rotation={[0.01, 0.57, -0.1]}
            scale={0.86}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube063.geometry}
            material={materials.tbjr_material}
            position={[0.03, 0.11, 0.04]}
            rotation={[0.02, 1.15, -0.12]}
            scale={0.86}
          />
        </mesh>
        <group position={[-0.05, 1.14, -0.79]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_3.geometry}
            material={materials.tbjr_material}
            position={[0.05, 0.05, -0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials.tbjr_material}
            position={[0.05, 0.05, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials.tbjr_material}
            position={[-0.05, 0.05, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials.tbjr_material}
            position={[-0.07, 0.07, 0.04]}
            rotation={[-0.14, 0.68, -0.21]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials.tbjr_material}
            position={[0.01, 0.08, 0.04]}
            rotation={[0.13, 0.36, -0.11]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.tbjr_material}
            position={[0, 0.08, -0.03]}
            rotation={[-0.01, -0.24, -0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.tbjr_material}
            position={[0, 0.05, 0]}
          />
        </group>
        <group position={[0.2, 1.14, -0.79]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.tbjr_material}
            position={[0, 0.05, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus001.geometry}
            material={materials.tbjr_material}
            position={[0, 0.06, 0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus002.geometry}
            material={materials.tbjr_material}
            position={[-0.06, 0.09, -0.01]}
            rotation={[2.1, -0.7, 2.24]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus003.geometry}
            material={materials.tbjr_material}
            position={[0.05, 0.09, -0.01]}
            rotation={[2.05, 0.73, -2.3]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.tbjr_material}
          position={[0.73, 1.18, -0.79]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials.tbjr_material}
            position={[0.05, 0, -0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.tbjr_material}
            position={[0.05, 0, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials.tbjr_material}
            position={[-0.05, 0, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.tbjr_material}
            position={[-0.07, 0.03, 0.04]}
            rotation={[-0.14, 0.68, -0.21]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials.tbjr_material}
            position={[0.01, 0.04, 0.04]}
            rotation={[0.13, 0.36, -0.11]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials.tbjr_material}
            position={[0, 0.03, -0.03]}
            rotation={[-0.01, -0.24, -0.01]}
          />
          <group position={[0, -0.05, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane007_1.geometry}
              material={materials.tbjr_material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane007_2.geometry}
              material={materials.tbjr_material}
            />
          </group>
        </mesh>
        <group position={[0.73, 1.43, -0.79]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials.tbjr_material}
            position={[0.06, 0.05, 0]}
            rotation={[0, -0.06, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials.tbjr_material}
            position={[-0.01, 0.05, 0]}
            rotation={[0, 0.06, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials.tbjr_material}
            position={[-0.29, 0.05, 0]}
            rotation={[0, -0.04, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.tbjr_material}
            position={[-0.12, 0.05, -0.03]}
            rotation={[-Math.PI, 1.55, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials.tbjr_material}
            position={[-0.12, 0.05, 0.03]}
            rotation={[0, 1.57, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials.tbjr_material}
            position={[-0.22, 0.05, 0]}
          />
        </group>
        <group position={[0.08, 0.6, 0.24]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane010_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus004.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus005.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, -0.03]}
            rotation={[0, -0.81, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus006.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, 0.03]}
            rotation={[0, -0.95, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus007.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, 0.03]}
            rotation={[0, 0.63, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus008.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, -0.03]}
            rotation={[0, -0.81, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus009.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, 0.03]}
            rotation={[0, 0.63, 0]}
          />
        </group>
        <group position={[0.08, 0.6, 0.41]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane011_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus010.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, 0.03]}
            rotation={[0, -0.77, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus011.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, -0.03]}
            rotation={[0, -0.46, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus012.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, 0.03]}
            rotation={[0, 0.4, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus013.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, -0.03]}
            rotation={[0, 0.33, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus014.geometry}
            material={materials.tbjr_material}
            position={[-0.11, 0.03, -0.03]}
            rotation={[0, 0.46, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus015.geometry}
            material={materials.tbjr_material}
            position={[-0.11, 0.03, 0.03]}
            rotation={[0, -0.08, 0]}
          />
        </group>
        <group position={[0.08, 0.6, 0.06]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane012_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder032.geometry}
            material={materials.tbjr_material}
            position={[-0.22, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder033_1.geometry}
            material={materials.tbjr_material}
            position={[-0.16, 0.03, 0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder034.geometry}
            material={materials.tbjr_material}
            position={[-0.23, 0.05, 0.03]}
            rotation={[0.87, -0.74, 0.47]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder035.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, -0.03]}
          />
        </group>
        <group position={[0.08, 0.38, 0.41]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane013_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus016.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus017.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, -0.03]}
            rotation={[0, -0.81, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus018.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, 0.03]}
            rotation={[0, -0.95, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus019.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, 0.03]}
            rotation={[0, 0.63, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus020.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, -0.03]}
            rotation={[0, -0.81, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus021.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, 0.03]}
            rotation={[0, 0.63, 0]}
          />
        </group>
        <group position={[0.08, 0.38, 0.24]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane014_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder036.geometry}
            material={materials.tbjr_material}
            position={[-0.23, 0.02, 0.04]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder037.geometry}
            material={materials.tbjr_material}
            position={[-0.19, 0.02, -0.02]}
            rotation={[-Math.PI, 1.23, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038.geometry}
            material={materials.tbjr_material}
            position={[-0.15, 0.02, 0.04]}
            rotation={[0, 0.69, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder039.geometry}
            material={materials.tbjr_material}
            position={[-0.11, 0.02, -0.02]}
            rotation={[0, 0.75, 0]}
          />
        </group>
        <group position={[0.08, 0.38, 0.06]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane015_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder040.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder041.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder042.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder043.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder044.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder045.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, 0.03]}
          />
        </group>
        <group position={[0.08, 0.17, 0.24]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane016_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder046.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder048.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder049.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder051.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, 0.03]}
          />
        </group>
        <group position={[0.08, 0.17, 0.41]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane017_2.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder052.geometry}
            material={materials.tbjr_material}
            position={[-0.22, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder053.geometry}
            material={materials.tbjr_material}
            position={[-0.16, 0.03, 0.02]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder054.geometry}
            material={materials.tbjr_material}
            position={[-0.23, 0.05, 0.03]}
            rotation={[0.87, -0.74, 0.47]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder055.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.03, -0.03]}
          />
        </group>
        <group position={[0.08, 0.17, 0.06]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane018_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus022.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, -0.03]}
            rotation={[0, 0.33, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus023.geometry}
            material={materials.tbjr_material}
            position={[-0.24, 0.03, 0.03]}
            rotation={[0, -0.77, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus024.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, -0.03]}
            rotation={[0, -0.46, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus025.geometry}
            material={materials.tbjr_material}
            position={[-0.17, 0.03, 0.03]}
            rotation={[0, 0.4, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus026.geometry}
            material={materials.tbjr_material}
            position={[-0.11, 0.03, -0.03]}
            rotation={[0, 0.46, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus027.geometry}
            material={materials.tbjr_material}
            position={[-0.11, 0.03, 0.03]}
            rotation={[0, -0.08, 0]}
          />
        </group>
        <group position={[0.01, 0.76, 0.2]} rotation={[0, 1.57, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane022_1.geometry}
            material={materials.tbjr_material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder065_1.geometry}
            material={materials.tbjr_material}
            position={[-0.22, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder071_1.geometry}
            material={materials.tbjr_material}
            position={[-0.22, 0.03, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder072.geometry}
            material={materials.tbjr_material}
            position={[-0.16, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder073.geometry}
            material={materials.tbjr_material}
            position={[-0.16, 0.03, 0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder074.geometry}
            material={materials.tbjr_material}
            position={[-0.09, 0.03, -0.03]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075.geometry}
            material={materials.tbjr_material}
            position={[-0.09, 0.03, 0.03]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.gradient_glossy}
          position={[0.8, 0.64, -0.03]}
          rotation={[0, -1.57, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials.gradient_glossy}
          position={[-0.37, 1.54, -0.76]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_1.geometry}
            material={materials.tbjr_material}
            position={[-0.38, 0.04, 0]}
            rotation={[0, 0.29, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials.tbjr_material}
            position={[-0.28, 0.03, 0.02]}
            rotation={[0, -0.03, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038.geometry}
            material={materials.tbjr_material}
            position={[-0.01, 0.2, 0]}
            rotation={[0, -0.24, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials.tbjr_material}
            position={[-0.11, 0.2, 0]}
            rotation={[0, 0.13, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube040.geometry}
            material={materials.tbjr_material}
            position={[-0.01, 0.2, -0.07]}
            rotation={[0, 0.11, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube041.geometry}
            material={materials.tbjr_material}
            position={[-0.1, 0.2, -0.07]}
            rotation={[0, -0.18, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials.gradient_glossy}
            position={[-0.1, 0, 0]}
            rotation={[0, -0.32, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013.geometry}
            material={materials.gradient_glossy}
            position={[-0.19, 0, 0]}
            rotation={[0, 0.3, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014.geometry}
            material={materials.gradient_glossy}
            position={[-0.31, 0.17, -0.01]}
            rotation={[0, -0.52, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_1.geometry}
            material={materials.gradient_glossy}
            position={[-0.4, 0.17, -0.01]}
            rotation={[0, 0.3, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016.geometry}
            material={materials.gradient_glossy}
            position={[-0.21, 0.17, -0.01]}
            rotation={[0, -0.05, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={materials.gradient_glossy}
          position={[0.76, 1.17, 0.43]}
          rotation={[Math.PI, -1.15, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube055.geometry}
            material={materials.tbjr_material}
            position={[-0.01, 0.18, 0.01]}
            rotation={[0, 0.39, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube056.geometry}
            material={materials.tbjr_material}
            position={[0.08, 0.18, -0.03]}
            rotation={[0, 0.52, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube057.geometry}
            material={materials.tbjr_material}
            position={[0.21, 0.32, -0.11]}
            rotation={[0, 0.39, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube058.geometry}
            material={materials.tbjr_material}
            position={[0.31, 0.32, -0.15]}
            rotation={[0, 0.52, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019.geometry}
            material={materials.gradient_glossy}
            position={[0.18, 0.15, -0.08]}
            rotation={[0, 0.59, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder021.geometry}
            material={materials.gradient_glossy}
            position={[0.28, 0.15, -0.13]}
            rotation={[0, 0.05, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder022.geometry}
            material={materials.gradient_glossy}
            position={[0.28, 0, -0.13]}
            rotation={[0, 0.05, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder023.geometry}
            material={materials.gradient_glossy}
            position={[0.19, 0, -0.08]}
            rotation={[0, 0.05, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder024_1.geometry}
            material={materials.gradient_glossy}
            position={[0.09, 0, -0.04]}
            rotation={[0, 0.77, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder026.geometry}
            material={materials.gradient_glossy}
            position={[-0.02, 0.27, 0.04]}
            rotation={[0, 0.59, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder027_1.geometry}
            material={materials.gradient_glossy}
            position={[0.02, 0.27, 0.02]}
            rotation={[0, 0.05, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028.geometry}
            material={materials.gradient_glossy}
            position={[0.08, 0.27, -0.01]}
            rotation={[0, 0.59, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029.geometry}
            material={materials.gradient_glossy}
            position={[0.12, 0.27, -0.03]}
            rotation={[0, 0.05, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030.geometry}
            material={materials.gradient_glossy}
            position={[-0.03, 0.29, -0.04]}
            rotation={[0, 0.47, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder031.geometry}
            material={materials.gradient_glossy}
            position={[0.06, 0.29, -0.08]}
            rotation={[0, 0.16, 0]}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/model/1_coffeeShop_post.glb");
