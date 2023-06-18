

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/earth-transformed.glb')
  console.log(materials.Clouds.roughness)
  useEffect(() => {
    materials.Clouds.roughness = 1
  }, [])
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_3.geometry} material={materials.Clouds} position={[-9.954, -10.04, 9.954]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/earth-transformed.glb')
