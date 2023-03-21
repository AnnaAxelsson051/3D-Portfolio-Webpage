import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";



const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
   <primitive
   object={earth.scene}
   scale={2.5}
   position-y={0}
   rotation-y={0}/>
  )
}

const EarthCanvas =()=>{
  return(
    <Canvas 
    shadows
    frameLoop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{}}>

      <Suspense
      fallback={<CanvasLoader/>}>
<OrbitControls
autoRotateenableZoom={false}
maxPolarAngle={Math.PI / 2}
minPolarAngle={Math.PI / 2}
/>
<Earth/>
     </Suspense>

    </Canvas>
  )
}

export default EarthCanvas;