/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 mars.gltf --transform
Author: AirStudios (https://sketchfab.com/sebbe613)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mars-5fc8b7168b044527a05ed3903c998b65
Title: Mars
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/mars (1).glb')
  console.log(materials)
  materials.lambert3.receiveShadow = false;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pSphere1_lambert3_0.geometry} material={materials.lambert3} scale={5}  // Desactiva la recepción de sombras
      />
    </group>
  )
}

useGLTF.preload('/mars-transformed.glb')