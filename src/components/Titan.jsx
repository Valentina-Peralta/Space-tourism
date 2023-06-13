/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 titan.gltf --transform
Author: Danny.Gallegos (https://sketchfab.com/Danny.Gallegos)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/titan-56436d7ef2fb45b09c228344ee2bea9c
Title: Titan
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/titan-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Atmosphere_Atmosphere_0.geometry} material={materials.Atmosphere} scale={0.01} />
      <mesh geometry={nodes.Clouds_Clouds_0.geometry} material={materials.Clouds} scale={0.01} />
      <mesh geometry={nodes.Titan_Titan_0.geometry} material={materials.Titan} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/titan-transformed.glb')
