import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  return (
    <div>Earth</div>
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
     </Suspense>

    </Canvas>
  )
}

export default Earth