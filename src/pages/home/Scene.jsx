import * as THREE from 'three'
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls, Environment } from "@react-three/drei";
import styled from 'styled-components/macro';
import {Html, useProgress} from '@react-three/drei'

import Fire from "./Fire"

const SceneWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: #2c2104; */
`

export function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/model/homepage.glb");
  // const { actions } = useAnimations(animations, group);

  const actions = useRef()
  const [mixer] = useState(() => new THREE.AnimationMixer())
  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    actions.current = { idle: mixer.clipAction(animations[0], group.current) }
    actions.current.idle.play()
    return () => animations.forEach((clip) => mixer.uncacheClip(clip))
  }, [])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="pCylinder1"
          position={[0, 1.13, 0.03]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.01, 0.01, 0]}
        />
        <group
          name="pCylinder2"
          position={[0, 1.06, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <group name="group1001" position={[0, 7.1, 0]} />
        <group name="trees2pCube4" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            name="trees2transform12"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="trees2polySurface188"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface188.geometry}
            material={materials["trees2:lambert8.001"]}
          />
          <mesh
            name="trees2polySurface191"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface191.geometry}
            material={materials["trees2:lambert8.001"]}
          />
          <mesh
            name="trees2polySurface194"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface194.geometry}
            material={materials["trees2:lambert8.001"]}
          />
          <mesh
            name="trees2polySurface186"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface186.geometry}
            material={materials["trees2:lambert8.001"]}
          />
          <mesh
            name="trees2polySurface189"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface189.geometry}
            material={materials["trees2:lambert8.001"]}
          />
          <mesh
            name="trees2polySurface192"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface192.geometry}
            material={materials["trees2:lambert8.001"]}
            position={[-0.62, -0.35, 0.05]}
            scale={1.21}
          />
          <mesh
            name="trees2polySurface187"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface187.geometry}
            material={materials["trees2:lambert8.001"]}
          />
          <mesh
            name="trees2polySurface190"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface190.geometry}
            material={materials["trees2:lambert8.001"]}
          />
          <mesh
            name="trees2polySurface193"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface193.geometry}
            material={materials["trees2:lambert8.001"]}
            position={[-0.62, -0.35, 0.05]}
            scale={1.21}
          />
        </group>
        <group
          name="trees2polySurface90"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="trees2polySurface100">
            <group
              name="trees2transform49"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface101">
            <group
              name="trees2transform46"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface104">
            <group
              name="trees2transform26"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface105">
            <group
              name="trees2transform27"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface106">
            <group
              name="trees2transform28"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface107">
            <group
              name="trees2transform25"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface111">
            <group
              name="trees2transform19"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface112">
            <group
              name="trees2transform18"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface113">
            <group
              name="trees2transform20"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface114">
            <group
              name="trees2transform17"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface116">
            <group
              name="trees2transform60"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface117">
            <group
              name="trees2transform61"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface118">
            <group
              name="trees2transform29"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface119">
            <group
              name="trees2transform24"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface120">
            <group
              name="trees2transform23"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface121">
            <group
              name="trees2transform22"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface125">
            <group
              name="trees2transform16"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface126" position={[0, 0, -0.59]}>
            <group
              name="trees2transform15"
              position={[0, 0, 0.55]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface127">
            <group
              name="trees2transform14"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface128">
            <group
              name="trees2transform13"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface130">
            <group
              name="trees2transform31"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface131">
            <group
              name="trees2transform32"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface132">
            <group
              name="trees2transform33"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface133">
            <group
              name="trees2transform30"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface134">
            <group
              name="trees2transform34"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface137">
            <group
              name="trees2transform35"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface138">
            <group
              name="trees2transform36"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface139">
            <group
              name="trees2transform37"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface142">
            <group
              name="trees2transform43"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface143">
            <group
              name="trees2transform44"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface144">
            <group
              name="trees2transform45"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface145">
            <group
              name="trees2transform39"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface146">
            <group
              name="trees2transform40"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface147">
            <group
              name="trees2transform41"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface151">
            <group
              name="trees2transform50"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface152">
            <group
              name="trees2transform51"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface153">
            <group
              name="trees2transform52"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface154">
            <group
              name="trees2transform53"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface92">
            <group
              name="trees2transform59"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface93">
            <group
              name="trees2transform42"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface94">
            <group
              name="trees2transform21"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface95">
            <group
              name="trees2transform38"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface98">
            <group
              name="trees2transform47"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface99">
            <group
              name="trees2transform48"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface161">
            <group
              name="trees2fire3transform2"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group
            name="trees2polySurface168"
            position={[8.37, -3.68, 0]}
            rotation={[0, 0, 1.5]}
          >
            <group
              name="trees2fire3transform1"
              position={[3.07, 8.61, -0.04]}
              rotation={[-Math.PI / 2, 1.5, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface201">
            <group
              name="trees2transform77"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface203">
            <group
              name="trees2transform75"
              position={[0, 0, -0.04]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <mesh
            name="trees2polySurface156"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface156.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface166"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface166.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface115"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface115.geometry}
            material={materials["TREES.001"]}
          />
          <mesh
            name="trees2polySurface178"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface178.geometry}
            material={materials["phong1.001"]}
            position={[8.17, 2.64, 0.1]}
            rotation={[0.07, -0.02, -1.87]}
            scale={[0.48, 0.32, 0.26]}
          />
          <mesh
            name="trees2polySurface124"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface124.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface102"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface102.geometry}
            material={materials["TREES.001"]}
          />
          <mesh
            name="trees2polySurface103"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface103.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface140"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface140.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface108"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface108.geometry}
            material={materials["TREES.001"]}
          />
          <mesh
            name="trees2polySurface109"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface109.geometry}
            material={materials["TREES.001"]}
          />
          <mesh
            name="trees2polySurface159"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface159.geometry}
            material={materials["TREES.001"]}
          />
          <mesh
            name="trees2polySurface110"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface110.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface135"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface135.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface163"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface163.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface122"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface122.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface149"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface149.geometry}
            material={materials["TREES.001"]}
          />
          <mesh
            name="trees2polySurface165"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface165.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface136"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface136.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface162"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface162.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface176"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface176.geometry}
            material={materials["phong1.001"]}
            position={[1.68, -5, 0.01]}
            rotation={[0.01, 0.01, 2.21]}
            scale={0.21}
          />
          <mesh
            name="trees2polySurface148"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface148.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface164"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface164.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface96"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface96.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface150"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface150.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface173"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface173.geometry}
            material={materials["phong1.001"]}
            position={[-8.58, 0.13, -0.53]}
            rotation={[0, 0, 1.5]}
            scale={0.21}
          />
          <mesh
            name="trees2polySurface158"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface158.geometry}
            material={materials["phong1.001"]}
          />
          <mesh
            name="trees2polySurface175"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface175.geometry}
            material={materials["phong1.001"]}
            position={[-0.94, -6.76, -0.03]}
            rotation={[0.01, 0.01, 2.21]}
            scale={0.21}
          />
          <mesh
            name="trees2polySurface160"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface160.geometry}
            material={materials["TREES.001"]}
          />
          <mesh
            name="trees2polySurface91"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface91.geometry}
            material={materials["TREES.001"]}
          />
          <mesh
            name="trees2polySurface179"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface179.geometry}
            material={materials["phong1.001"]}
            position={[-3.18, -7.46, 0.02]}
            rotation={[0.19, -0.23, -3.12]}
            scale={[0.3, 0.21, 0.21]}
          />
        </group>
        <group
          name="trees2fire3polySurface161"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="trees2fire3transform3"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            name="trees2fire3polySurface162"
            castShadow
            receiveShadow
            geometry={nodes.trees2fire3polySurface162.geometry}
            material={materials["FOGSTA_FOREST.001"]}
          />
          <mesh
            name="trees2polySurface184"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface184.geometry}
            material={materials["FOGSTA_FOREST.001"]}
            position={[4.09, -0.18, 0.09]}
            rotation={[3.09, 0.16, -2.17]}
            scale={0.23}
          />
          <mesh
            name="trees2polySurface183"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface183.geometry}
            material={materials["FOGSTA_FOREST.001"]}
            position={[4.02, 0.55, 0.49]}
            rotation={[-2.72, 0.58, 3.11]}
            scale={0.23}
          />
          <mesh
            name="trees2polySurface195"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface195.geometry}
            material={materials["FOGSTA_FOREST.001"]}
            position={[3.89, 0.27, 0.65]}
            rotation={[2.89, 0.71, -2.38]}
            scale={0.23}
          />
          <mesh
            name="trees2fire3polySurface163"
            castShadow
            receiveShadow
            geometry={nodes.trees2fire3polySurface163.geometry}
            material={materials["FOGSTA_FOREST.001"]}
            position={[7.01, -2.49, 2.61]}
            rotation={[2.89, 0.71, -2.38]}
          />
          <mesh
            name="trees2polySurface185"
            castShadow
            receiveShadow
            geometry={nodes.trees2polySurface185.geometry}
            material={materials["FOGSTA_FOREST.001"]}
            position={[3.41, -0.34, -0.15]}
            rotation={[3.05, 0.47, -1.47]}
            scale={0.23}
          />
        </group>
        <group name="trees2Boy_01" rotation={[Math.PI / 2, 0, 0]} scale={0.66}>
          <group name="trees2mouth" />
        </group>
        <group name="trees2group1" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            name="trees2pCube5"
            position={[4.07, 0, -0.3]}
            rotation={[-0.45, -0.85, 2.57]}
            scale={[0.2, 0.62, 0.98]}
          >
            <group
              name="trees2transform11"
              position={[10.04, 2.31, 3.3]}
              rotation={[0.6, 0.55, -2.29]}
              scale={[293.08, 408.38, 185.61]}
            />
          </group>
          <group
            name="trees2pPlane198"
            position={[-1.86, 1.68, -1.63]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform74"
              position={[0.21, -28.88, -3.54]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane199"
            position={[0.05, 2.09, -2.7]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform73"
              position={[8.24, -29.4, 5.59]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane200"
            position={[-0.65, 0.8, -1.83]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform72"
              position={[6.16, -18.53, -0.71]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane201"
            position={[2.4, 1.08, -2.67]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform71"
              position={[15.46, -11.93, 12.94]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane202"
            position={[2.76, -0.64, -3.14]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform70"
              position={[23.79, -0.76, 9.97]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane203"
            position={[1.01, 2.13, -3.8]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform69"
              position={[15.72, -31.57, 9.77]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane204"
            position={[1.83, 1.81, -3.97]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform68"
              position={[19.17, -26.61, 12.41]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane205"
            position={[1.87, -0.14, -4.36]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform67"
              position={[27.15, -14.78, 7.51]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane206"
            position={[2.71, -0.02, -4.16]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform66"
              position={[27.28, -10.91, 11.36]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane207"
            position={[3.16, -0.7, -3.76]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform65"
              position={[28.02, -2, 11.5]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane208"
            position={[2.16, 0.5, -3.93]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform64"
              position={[23.45, -15.7, 10.38]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlane209"
            position={[2.63, -1.01, -4.75]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          >
            <group
              name="trees2transform63"
              position={[33.21, -7.48, 8.48]}
              rotation={[-1.88, 0.84, 1.11]}
              scale={[633.32, 764.97, 811.14]}
            />
          </group>
          <group
            name="trees2pPlatonic1"
            position={[6.65, -5.84, -0.16]}
            rotation={[-0.08, 0, 0]}
            scale={[1, 1.61, 1]}
          >
            <group
              name="trees2transform8"
              position={[-6.65, 3.6, 0.61]}
              rotation={[-1.48, 0, 0]}
              scale={[100, 99.82, 62.3]}
            />
          </group>
          <group
            name="trees2pPlatonic10"
            position={[4.7, 8.4, -0.26]}
            rotation={[-0.3, -0.06, -1.32]}
            scale={[0.26, 0.24, 0.15]}
          />
          <group name="trees2pPlatonic11">
            <group
              name="trees2transform10"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group
            name="trees2pPlatonic2"
            position={[0.46, 6.28, 0.03]}
            rotation={[-0.08, 0, 0]}
            scale={[1, 0.9, 0.56]}
          >
            <group
              name="trees2transform7"
              position={[-0.46, -6.93, -0.93]}
              rotation={[-1.48, 0, 0]}
              scale={[100, 178.76, 111.26]}
            />
          </group>
          <group
            name="trees2pPlatonic3"
            position={[-8.05, -0.65, -0.48]}
            rotation={[-0.08, 0, 0]}
            scale={[0.71, 1.09, 0.64]}
          >
            <group
              name="trees2transform1"
              position={[11.32, 0.56, 0.82]}
              rotation={[-1.48, 0, 0]}
              scale={[140.65, 155.76, 92.22]}
            />
          </group>
          <group
            name="trees2pPlatonic4"
            position={[8.86, 2.79, 0.03]}
            rotation={[0.3, 0.1, -1.33]}
            scale={[0.26, 0.24, 0.15]}
          >
            <group
              name="trees2transform9"
              position={[1.81, -39.42, -0.54]}
              rotation={[-2.25, -0.99, -0.69]}
              scale={[425.75, 664.46, 420.51]}
            />
          </group>
          <group
            name="trees2pPlatonic5"
            position={[4.7, 4.52, 0.07]}
            rotation={[-1.2, -0.23, -1.46]}
            scale={[0.26, 0.24, 0.15]}
          >
            <group
              name="trees2transform5"
              position={[3.63, -24.18, -20.81]}
              rotation={[-0.48, -0.24, 1.34]}
              scale={[442.53, 433.21, 645.05]}
            />
          </group>
          <group
            name="trees2pPlatonic6"
            position={[1.84, -1.93, 0.07]}
            rotation={[-1.2, -0.23, -1.46]}
            scale={[0.26, 0.24, 0.15]}
          >
            <group
              name="trees2transform4"
              position={[-3.51, -5.44, 14.78]}
              rotation={[-0.48, -0.24, 1.34]}
              scale={[442.53, 433.21, 645.05]}
            />
          </group>
          <group
            name="trees2pPlatonic8"
            position={[-0.26, -6.45, 0.06]}
            rotation={[0.32, 0, 0]}
            scale={[0.18, 0.3, 0.12]}
          >
            <group
              name="trees2transform3"
              position={[1.44, 20.54, -17.65]}
              rotation={[-1.92, 0, 0]}
              scale={[542.7, 808.52, 415.45]}
            />
          </group>
          <group
            name="trees2pPlatonic9"
            position={[-3.7, 0.68, 0.06]}
            rotation={[0.32, 0, 0]}
            scale={[0.18, 0.3, 0.12]}
          >
            <group
              name="trees2transform2"
              position={[20.09, -2.23, 1.29]}
              rotation={[-1.92, 0, 0]}
              scale={[542.7, 808.52, 415.45]}
            />
          </group>
          <mesh
            name="trees2pCube6"
            castShadow
            receiveShadow
            geometry={nodes.trees2pCube6.geometry}
            material={materials["phong2.002"]}
          />
          <mesh
            name="trees2pPlane61"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane61.geometry}
            material={materials["phong1.001"]}
            position={[-6.72, 4.52, -0.18]}
            rotation={[-1.67, -1.05, -1.57]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane65"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane65.geometry}
            material={materials["phong1.001"]}
            position={[-2.49, -4.58, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane69"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane69.geometry}
            material={materials["phong1.001"]}
            position={[-0.83, -6.4, -0.05]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane72"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane72.geometry}
            material={materials["phong1.001"]}
            position={[-0.9, -7.82, -0.07]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane76"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane76.geometry}
            material={materials["phong1.001"]}
            position={[0.12, -5.06, -0.06]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane8"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane8.geometry}
            material={materials["phong1.001"]}
            position={[-5.81, 0.16, -0.07]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane107"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane107.geometry}
            material={materials["phong1.001"]}
            position={[-2.93, -9.33, -0.4]}
            rotation={[1.54, -0.56, 1.9]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane113"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane113.geometry}
            material={materials["phong1.001"]}
            position={[-4.43, -3.02, 0.02]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane83"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane83.geometry}
            material={materials["phong1.001"]}
            position={[4.33, -4.43, -0.05]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane109"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane109.geometry}
            material={materials["phong1.001"]}
            position={[-2.37, -6.83, -0.09]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane116"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane116.geometry}
            material={materials["phong1.001"]}
            position={[-5.44, -2.74, -0.07]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane87"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane87.geometry}
            material={materials["phong1.001"]}
            position={[5.2, -5.57, -0.22]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane110"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane110.geometry}
            material={materials["phong1.001"]}
            position={[-2.87, -6.71, -0.1]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane119"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane119.geometry}
            material={materials["phong1.001"]}
            position={[-4, -1.74, 0.01]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane90"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane90.geometry}
            material={materials["phong1.001"]}
            position={[6, -6.26, -0.37]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane112"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane112.geometry}
            material={materials["phong1.001"]}
            position={[-2.25, -5.2, -0.03]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane1"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane1.geometry}
            material={materials["phong1.001"]}
            position={[-4.68, -3.49, 0.02]}
            rotation={[-1.38, -1.04, -1.38]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane121"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane121.geometry}
            material={materials["phong1.001"]}
            position={[-8.43, -3.02, -0.46]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane94"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane94.geometry}
            material={materials["phong1.001"]}
            position={[0.32, -9.57, -0.1]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane115"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane115.geometry}
            material={materials["phong1.001"]}
            position={[-3.71, -4.64, 0.02]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane10"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane10.geometry}
            material={materials["phong1.001"]}
            position={[-3.25, 6.03, 0.03]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane124"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane124.geometry}
            material={materials["phong1.001"]}
            position={[-9.44, -2.74, -0.46]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane98"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane98.geometry}
            material={materials["phong1.001"]}
            position={[1.18, -10.71, -0.45]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane118"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane118.geometry}
            material={materials["phong1.001"]}
            position={[-5.44, -2.42, 0.03]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane100"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane100.geometry}
            material={materials["phong1.001"]}
            position={[1.39, -9.12, -0.1]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane127"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane127.geometry}
            material={materials["phong1.001"]}
            position={[-8, -1.74, -0.23]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane120"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane120.geometry}
            material={materials["phong1.001"]}
            position={[-3.9, -1.52, 0.01]}
            rotation={[1.6, -1.2, 1.66]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane101"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane101.geometry}
            material={materials["phong1.001"]}
            position={[1.89, -9.23, -0.09]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane13"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane13.geometry}
            material={materials["phong1.001"]}
            position={[-3.65, 3.13, -0.04]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane123"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane123.geometry}
            material={materials["phong1.001"]}
            position={[-7.7, -4.64, -0.04]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane102"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane102.geometry}
            material={materials["phong1.001"]}
            position={[1.98, -11.4, -0.34]}
            rotation={[1.54, -0.56, 2.04]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane132"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane132.geometry}
            material={materials["phong1.001"]}
            position={[1.58, 7.9, -0.28]}
            rotation={[-1.66, -0.97, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane126"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane126.geometry}
            material={materials["phong1.001"]}
            position={[-9.44, -2.42, -0.46]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane103"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane103.geometry}
            material={materials["phong1.001"]}
            position={[-4.48, -7.89, -0.5]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane135"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane135.geometry}
            material={materials["phong1.001"]}
            position={[-1.3, 8.94, -0.03]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane129"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane129.geometry}
            material={materials["phong1.001"]}
            position={[-7.4, -6.81, -0.5]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane104"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane104.geometry}
            material={materials["phong1.001"]}
            position={[-3.08, -8.31, -0.31]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane138"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane138.geometry}
            material={materials["phong1.001"]}
            position={[0.63, 6.61, -0.07]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane131"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane131.geometry}
            material={materials["phong1.001"]}
            position={[-6.47, -5.47, -0.26]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane105"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane105.geometry}
            material={materials["phong1.001"]}
            position={[-4.16, -7.09, -0.37]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane140"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane140.geometry}
            material={materials["phong1.001"]}
            position={[0.61, 9.86, -0.37]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane134"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane134.geometry}
            material={materials["phong1.001"]}
            position={[-1.04, 7.81, 0.01]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane106"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane106.geometry}
            material={materials["phong1.001"]}
            position={[-2.28, -8.99, -0.33]}
            rotation={[1.54, -0.56, 2.04]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane143"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane143.geometry}
            material={materials["phong1.001"]}
            position={[-5.2, 2.59, 0.04]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane137"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane137.geometry}
            material={materials["phong1.001"]}
            position={[-0.54, 6.82, 0.01]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane108"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane108.geometry}
            material={materials["phong1.001"]}
            position={[-5.09, -8.43, -0.61]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane146"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane146.geometry}
            material={materials["phong1.001"]}
            position={[-3.12, 5.65, 0.04]}
            rotation={[-1.63, -0.26, -1.6]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane14"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane14.geometry}
            material={materials["phong1.001"]}
            position={[-5.09, 3.27, 0.03]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane11"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane11.geometry}
            material={materials["phong1.001"]}
            position={[-3.82, 7.12, -0.21]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane149"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane149.geometry}
            material={materials["phong1.001"]}
            position={[-3.02, 4.49, 0.02]}
            rotation={[-1.65, -0.81, -1.62]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane142"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane142.geometry}
            material={materials["phong1.001"]}
            position={[-5.27, 1.16, 0.03]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane111"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane111.geometry}
            material={materials["phong1.001"]}
            position={[-2.36, -5.42, -0.06]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane151"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane151.geometry}
            material={materials["phong1.001"]}
            position={[-5.08, -1.18, 0.02]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane145"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane145.geometry}
            material={materials["phong1.001"]}
            position={[-2.39, 5.01, 0.02]}
            rotation={[-1.63, -0.26, -1.6]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane114"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane114.geometry}
            material={materials["phong1.001"]}
            position={[-5.14, -4.5, -0.07]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane154"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane154.geometry}
            material={materials["phong1.001"]}
            position={[-4.07, -1.45, 0.02]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane148"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane148.geometry}
            material={materials["phong1.001"]}
            position={[-3.02, 4.01, 0.02]}
            rotation={[-1.65, -0.81, -1.62]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane117"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane117.geometry}
            material={materials["phong1.001"]}
            position={[-5.63, -2.9, -0.07]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane157"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane157.geometry}
            material={materials["phong1.001"]}
            position={[-3.81, -3.59, 0.01]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane150"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane150.geometry}
            material={materials["phong1.001"]}
            position={[-3.95, 4.15, 0.02]}
            rotation={[-1.68, -1.08, -1.64]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane12"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane12.geometry}
            material={materials["phong1.001"]}
            position={[-4.38, 4.75, 0.04]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane16"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane16.geometry}
            material={materials["phong1.001"]}
            position={[-4.69, 5.03, -0.05]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane153"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane153.geometry}
            material={materials["phong1.001"]}
            position={[-4.21, 0.92, 0.02]}
            rotation={[-1.38, -1.04, -1.38]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane122"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane122.geometry}
            material={materials["phong1.001"]}
            position={[-9.14, -4.5, -0.1]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane162"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane162.geometry}
            material={materials["phong1.001"]}
            position={[-5.32, -0.75, -0.07]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane156"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane156.geometry}
            material={materials["phong1.001"]}
            position={[-4.22, -0.89, 0.02]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane125"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane125.geometry}
            material={materials["phong1.001"]}
            position={[-9.63, -2.9, -0.46]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane165"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane165.geometry}
            material={materials["phong1.001"]}
            position={[-2.73, -2.16, 0.03]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane159"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane159.geometry}
            material={materials["phong1.001"]}
            position={[-2.23, -3.25, 0.01]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane128"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane128.geometry}
            material={materials["phong1.001"]}
            position={[-7.89, -1.52, -0.2]}
            rotation={[1.6, -1.2, 1.66]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane168"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane168.geometry}
            material={materials["phong1.001"]}
            position={[7.25, -2.87, -0.05]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane161"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane161.geometry}
            material={materials["phong1.001"]}
            position={[-4, -4.07, 0.02]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane130"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane130.geometry}
            material={materials["phong1.001"]}
            position={[-6.78, -6.26, -0.43]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane170"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane170.geometry}
            material={materials["phong1.001"]}
            position={[7.33, -1.45, -0.02]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane164"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane164.geometry}
            material={materials["phong1.001"]}
            position={[-2.23, -2.27, 0.01]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane133"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane133.geometry}
            material={materials["phong1.001"]}
            position={[0.59, 8.11, -0.22]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane173"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane173.geometry}
            material={materials["phong1.001"]}
            position={[7.33, -6.45, -0.5]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane167"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane167.geometry}
            material={materials["phong1.001"]}
            position={[-4, -3.1, 0.02]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane136"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane136.geometry}
            material={materials["phong1.001"]}
            position={[-0.89, 8.62, -0.04]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane176"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane176.geometry}
            material={materials["phong1.001"]}
            position={[8.48, -4.62, -0.24]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane17"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane17.geometry}
            material={materials["phong1.001"]}
            position={[-4.69, 5.35, -0.1]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane139"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane139.geometry}
            material={materials["phong1.001"]}
            position={[1.93, 10.27, -0.52]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane179"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane179.geometry}
            material={materials["phong1.001"]}
            position={[10.05, -4.28, -0.24]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane172"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane172.geometry}
            material={materials["phong1.001"]}
            position={[6.68, -6.78, -0.27]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane141"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane141.geometry}
            material={materials["phong1.001"]}
            position={[0.8, 8.98, -0.27]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane181"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane181.geometry}
            material={materials["phong1.001"]}
            position={[9.49, -3.4, -0.3]}
            rotation={[1.54, -0.56, 1.9]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane175"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane175.geometry}
            material={materials["phong1.001"]}
            position={[7.94, -5.9, -0.46]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane144"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane144.geometry}
            material={materials["phong1.001"]}
            position={[-7.05, 3.93, 0.1]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane185"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane185.geometry}
            material={materials["phong1.001"]}
            position={[1, 0.7, -6.22]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane178"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane178.geometry}
            material={materials["phong1.001"]}
            position={[10.14, -3.07, -0.32]}
            rotation={[1.54, -0.56, 2.04]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane147"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane147.geometry}
            material={materials["phong1.001"]}
            position={[-3.35, 5.01, 0.02]}
            rotation={[-1.65, -0.81, -1.62]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane188"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane188.geometry}
            material={materials["phong1.001"]}
            position={[1.9, -2.19, -8.08]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane180"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane180.geometry}
            material={materials["phong1.001"]}
            position={[9.55, -4.16, -0.25]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane15"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane15.geometry}
            material={materials["phong1.001"]}
            position={[-4.26, 1.38, -0.04]}
            rotation={[1.66, -1.35, 1.71]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane190"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane190.geometry}
            material={materials["phong1.001"]}
            position={[1.36, -0.5, -6.21]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane184"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane184.geometry}
            material={materials["phong1.001"]}
            position={[1, -0.92, -6.85]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane152"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane152.geometry}
            material={materials["phong1.001"]}
            position={[-3.64, -0.17, 0.02]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane193"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane193.geometry}
            material={materials["phong1.001"]}
            position={[0.34, -0.29, -4.36]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane187"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane187.geometry}
            material={materials["phong1.001"]}
            position={[-0.77, -1.26, -5.35]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane155"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane155.geometry}
            material={materials["phong1.001"]}
            position={[-4.22, -0.17, 0.02]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane196"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane196.geometry}
            material={materials["phong1.001"]}
            position={[3.8, -1.54, -6.36]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane19"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane19.geometry}
            material={materials["phong1.001"]}
            position={[-2.37, 6.54, 0.04]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane158"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane158.geometry}
            material={materials["phong1.001"]}
            position={[-2.73, -3.13, 0.03]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane21"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane21.geometry}
            material={materials["phong1.001"]}
            position={[-2.17, 6.69, 0.03]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane192"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane192.geometry}
            material={materials["phong1.001"]}
            position={[2.03, -1.82, -6.47]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane160"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane160.geometry}
            material={materials["phong1.001"]}
            position={[-3.57, -4.21, 0.06]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane24"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane24.geometry}
            material={materials["phong1.001"]}
            position={[-2.62, 8.51, 0.03]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane195"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane195.geometry}
            material={materials["phong1.001"]}
            position={[1.96, -1.45, -6.35]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane163"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane163.geometry}
            material={materials["phong1.001"]}
            position={[-3.71, -3.66, 0.02]}
            rotation={[1.35, -1.19, 1.3]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane27"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane27.geometry}
            material={materials["phong1.001"]}
            position={[-2.41, 8.9, 0.03]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane20"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane20.geometry}
            material={materials["phong1.001"]}
            position={[-2.17, 7.02, 0.04]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane166"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane166.geometry}
            material={materials["phong1.001"]}
            position={[-3.81, -2.61, 0.01]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane3"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane3.geometry}
            material={materials["phong1.001"]}
            position={[-4.07, -1.74, 0.01]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane23"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane23.geometry}
            material={materials["phong1.001"]}
            position={[-0.73, 7.7, -0.01]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane169"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane169.geometry}
            material={materials["phong1.001"]}
            position={[7.36, -2.65, -0.02]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane32"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane32.geometry}
            material={materials["phong1.001"]}
            position={[-4.62, 7.42, -0.44]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane26"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane26.geometry}
            material={materials["phong1.001"]}
            position={[-2.21, 8.19, 0.02]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane171"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane171.geometry}
            material={materials["phong1.001"]}
            position={[5.88, -4.04, 0.05]}
            rotation={[1.54, -0.56, 2.04]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane35"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane35.geometry}
            material={materials["phong1.001"]}
            position={[-4.62, 8.95, -0.43]}
            rotation={[-1.67, -1.05, -1.94]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane29"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane29.geometry}
            material={materials["phong1.001"]}
            position={[0.17, 10.48, -0.55]}
            rotation={[-1.66, -0.97, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane174"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane174.geometry}
            material={materials["phong1.001"]}
            position={[7.24, -4.28, -0.24]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane38"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane38.geometry}
            material={materials["phong1.001"]}
            position={[-6.02, 8.95, -0.74]}
            rotation={[-1.67, -1.05, -2]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane31"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane31.geometry}
            material={materials["phong1.001"]}
            position={[0.21, 8.99, -0.28]}
            rotation={[-1.66, -0.97, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane177"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane177.geometry}
            material={materials["phong1.001"]}
            position={[8.26, -5.1, -0.34]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane40"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane40.geometry}
            material={materials["phong1.001"]}
            position={[-5.88, 7.33, -0.77]}
            rotation={[-1.67, -1.05, -1.57]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane34"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane34.geometry}
            material={materials["phong1.001"]}
            position={[-4.49, 6.67, -0.42]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane18"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane18.geometry}
            material={materials["phong1.001"]}
            position={[-4.88, 4.87, -0.04]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane43"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane43.geometry}
            material={materials["phong1.001"]}
            position={[-9.09, 4.56, -0.64]}
            rotation={[-1.67, -1.05, -1.57]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane37"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane37.geometry}
            material={materials["phong1.001"]}
            position={[-5.51, 8.16, -0.71]}
            rotation={[-1.67, -1.05, -1.94]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane182"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane182.geometry}
            material={materials["phong1.001"]}
            position={[9.34, -5.76, -0.59]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane46"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane46.geometry}
            material={materials["phong1.001"]}
            position={[-7.92, 6.1, -0.79]}
            rotation={[-1.67, -1.05, -1.57]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane4"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane4.geometry}
            material={materials["phong1.001"]}
            position={[-4.8, -0.12, -0.07]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane186"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane186.geometry}
            material={materials["phong1.001"]}
            position={[-0.77, 0.7, -5.35]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane49"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane49.geometry}
            material={materials["phong1.001"]}
            position={[-7.27, 6.07, -0.7]}
            rotation={[-1.67, -1.05, -1.57]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane42"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane42.geometry}
            material={materials["phong1.001"]}
            position={[-8.44, 4.52, -0.48]}
            rotation={[-1.67, -1.05, -1.57]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane189"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane189.geometry}
            material={materials["phong1.001"]}
            position={[0.27, 0.95, -7.13]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane51"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane51.geometry}
            material={materials["phong1.001"]}
            position={[-6.14, 3.93, 0.01]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane45"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane45.geometry}
            material={materials["phong1.001"]}
            position={[-9.09, 5.42, -0.71]}
            rotation={[-1.67, -1.05, -1.77]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane191"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane191.geometry}
            material={materials["phong1.001"]}
            position={[-0.56, 0.77, -6.44]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane54"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane54.geometry}
            material={materials["phong1.001"]}
            position={[-8.5, 1.16, -0.46]}
            rotation={[-1.38, -1.04, -1.38]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane48"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane48.geometry}
            material={materials["phong1.001"]}
            position={[-7.55, 6.93, -0.93]}
            rotation={[-1.67, -1.05, -1.51]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane194"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane194.geometry}
            material={materials["phong1.001"]}
            position={[2.65, -0.6, -5.89]}
            rotation={[1.57, -1.02, 2.16]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane57"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane57.geometry}
            material={materials["phong1.001"]}
            position={[-9.23, 3.27, -0.59]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane50"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane50.geometry}
            material={materials["phong1.001"]}
            position={[-5.95, 4.41, -0.07]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane2"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane2.geometry}
            material={materials["phong1.001"]}
            position={[-4.37, 1.16, -0.07]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane6"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane6.geometry}
            material={materials["phong1.001"]}
            position={[-4.94, 2.25, -0.07]}
            rotation={[-1.38, -1.04, -1.38]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane53"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane53.geometry}
            material={materials["phong1.001"]}
            position={[-6.36, 2.33, 0.01]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane22"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane22.geometry}
            material={materials["phong1.001"]}
            position={[-1.87, 6.42, 0.02]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane63"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane63.geometry}
            material={materials["phong1.001"]}
            position={[-1.63, -5.71, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane56"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane56.geometry}
            material={materials["phong1.001"]}
            position={[-7.79, 3.13, -0.25]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane25"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane25.geometry}
            material={materials["phong1.001"]}
            position={[-0.77, 9.2, -0.22]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane67"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane67.geometry}
            material={materials["phong1.001"]}
            position={[-1.42, -4.12, -0.02]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane59"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane59.geometry}
            material={materials["phong1.001"]}
            position={[-9.94, 0.48, -0.7]}
            rotation={[-1.38, -1.04, -1.38]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane28"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane28.geometry}
            material={materials["phong1.001"]}
            position={[-1.91, 7.91, 0.01]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane70"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane70.geometry}
            material={materials["phong1.001"]}
            position={[-1.48, -6.73, -0.07]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane62"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane62.geometry}
            material={materials["phong1.001"]}
            position={[-7.18, 4, -0.16]}
            rotation={[-1.67, -1.05, -1.57]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane30"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane30.geometry}
            material={materials["phong1.001"]}
            position={[1.34, 10.27, -0.61]}
            rotation={[-1.66, -0.97, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane74"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane74.geometry}
            material={materials["phong1.001"]}
            position={[1.89, -4.24, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane66"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane66.geometry}
            material={materials["phong1.001"]}
            position={[-2.68, -5.06, -0.06]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane33"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane33.geometry}
            material={materials["phong1.001"]}
            position={[-5.51, 6.63, -0.58]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane78"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane78.geometry}
            material={materials["phong1.001"]}
            position={[2.62, -5.85, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane7"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane7.geometry}
            material={materials["phong1.001"]}
            position={[-5.51, -1.6, 0.02]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane36"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane36.geometry}
            material={materials["phong1.001"]}
            position={[-4.49, 8.19, -0.4]}
            rotation={[-1.67, -1.05, -1.94]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane81"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane81.geometry}
            material={materials["phong1.001"]}
            position={[2.01, -7.6, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane73"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane73.geometry}
            material={materials["phong1.001"]}
            position={[1.18, -5.71, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane39"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane39.geometry}
            material={materials["phong1.001"]}
            position={[-5.88, 8.19, -0.83]}
            rotation={[-1.67, -1.05, -1.94]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane85"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane85.geometry}
            material={materials["phong1.001"]}
            position={[4.14, -4.91, -0.07]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane77"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane77.geometry}
            material={materials["phong1.001"]}
            position={[1.39, -4.12, -0.05]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane41"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane41.geometry}
            material={materials["phong1.001"]}
            position={[-5.23, 7.29, -0.63]}
            rotation={[-1.67, -1.05, -1.57]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane89"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane89.geometry}
            material={materials["phong1.001"]}
            position={[6.64, -5.71, -0.36]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane80"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane80.geometry}
            material={materials["phong1.001"]}
            position={[1.33, -6.73, -0.07]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane44"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane44.geometry}
            material={materials["phong1.001"]}
            position={[-8.72, 5.39, -0.66]}
            rotation={[-1.67, -1.05, -1.69]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane92"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane92.geometry}
            material={materials["phong1.001"]}
            position={[-0.22, -10.85, -0.61]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane84"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane84.geometry}
            material={materials["phong1.001"]}
            position={[5.41, -3.97, 0.02]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane47"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane47.geometry}
            material={materials["phong1.001"]}
            position={[-7.92, 6.97, -0.97]}
            rotation={[-1.67, -1.05, -1.77]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane96"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane96.geometry}
            material={materials["phong1.001"]}
            position={[-0.83, -11.4, -0.7]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane88"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane88.geometry}
            material={materials["phong1.001"]}
            position={[5.91, -4.09, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane5"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane5.geometry}
            material={materials["phong1.001"]}
            position={[-6, 0, -0.07]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane91"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane91.geometry}
            material={materials["phong1.001"]}
            position={[5.35, -6.59, -0.39]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane52"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane52.geometry}
            material={materials["phong1.001"]}
            position={[-4.29, 2.59, -0.05]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane95"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane95.geometry}
            material={materials["phong1.001"]}
            position={[-0.92, -9.23, -0.09]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane55"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane55.geometry}
            material={materials["phong1.001"]}
            position={[-8.43, 2.59, -0.46]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane99"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane99.geometry}
            material={materials["phong1.001"]}
            position={[1.33, -11.73, -0.44]}
            rotation={[1.54, -0.56, 1.9]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane58"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane58.geometry}
            material={materials["phong1.001"]}
            position={[-9.08, 2.25, -0.57]}
            rotation={[-1.38, -1.04, -1.38]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane60"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane60.geometry}
            material={materials["phong1.001"]}
            position={[-6.81, 3.13, 0]}
            rotation={[-1.67, -1.05, -1.63]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane64"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane64.geometry}
            material={materials["phong1.001"]}
            position={[-0.92, -4.24, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane68"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane68.geometry}
            material={materials["phong1.001"]}
            position={[-0.19, -5.85, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane71"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane71.geometry}
            material={materials["phong1.001"]}
            position={[-0.8, -7.6, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane75"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane75.geometry}
            material={materials["phong1.001"]}
            position={[0.32, -4.58, -0.04]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane79"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane79.geometry}
            material={materials["phong1.001"]}
            position={[1.98, -6.4, -0.05]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane82"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane82.geometry}
            material={materials["phong1.001"]}
            position={[1.9, -7.82, -0.07]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane86"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane86.geometry}
            material={materials["phong1.001"]}
            position={[3.83, -5.71, -0.09]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane9"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane9.geometry}
            material={materials["phong1.001"]}
            position={[-5.81, 0.48, -0.07]}
            rotation={[1.18, -1.33, 1.14]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane93"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane93.geometry}
            material={materials["phong1.001"]}
            position={[0.1, -10.06, -0.49]}
            rotation={[1.54, -0.56, 1.61]}
            scale={[0.16, 0.1, 0.2]}
          />
          <mesh
            name="trees2pPlane97"
            castShadow
            receiveShadow
            geometry={nodes.trees2pPlane97.geometry}
            material={materials["phong1.001"]}
            position={[-1.48, -11.73, -0.12]}
            rotation={[1.54, -0.56, 1.45]}
            scale={[0.16, 0.1, 0.2]}
          />
        </group>
        <group name="trees2group" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="trees2pasted__group1">
            <primitive object={nodes.trees2pasted__girl_prefix_Hips} />
            <group name="trees2pasted__Girl_01">
              <group name="trees2pasted__mouth" />
            </group>
            <skinnedMesh
              name="trees2pasted__lashes"
              geometry={nodes.trees2pasted__lashes.geometry}
              material={materials["hair_girl.001"]}
              skeleton={nodes.trees2pasted__lashes.skeleton}
            />
            <group name="trees2pasted__lowerjaw">
              <skinnedMesh
                name="Mesh572"
                geometry={nodes.Mesh572.geometry}
                material={materials["trees2:pasted__lambert23.001"]}
                skeleton={nodes.Mesh572.skeleton}
              />
              <skinnedMesh
                name="Mesh572_1"
                geometry={nodes.Mesh572_1.geometry}
                material={materials["trees2:pasted__lambert22.001"]}
                skeleton={nodes.Mesh572_1.skeleton}
              />
            </group>
            <skinnedMesh
              name="trees2pasted__poni"
              geometry={nodes.trees2pasted__poni.geometry}
              material={materials["Material.004"]}
              skeleton={nodes.trees2pasted__poni.skeleton}
            />
            <group name="trees2pasted__R_eye">
              <skinnedMesh
                name="Mesh574"
                geometry={nodes.Mesh574.geometry}
                material={materials["trees2:pasted__blinn6.001"]}
                skeleton={nodes.Mesh574.skeleton}
              />
              <skinnedMesh
                name="Mesh574_1"
                geometry={nodes.Mesh574_1.geometry}
                material={materials["trees2:pasted__lambert6.001"]}
                skeleton={nodes.Mesh574_1.skeleton}
              />
              <skinnedMesh
                name="Mesh574_2"
                geometry={nodes.Mesh574_2.geometry}
                material={materials["trees2:pasted__lambert7.001"]}
                skeleton={nodes.Mesh574_2.skeleton}
              />
              <skinnedMesh
                name="Mesh574_3"
                geometry={nodes.Mesh574_3.geometry}
                material={materials["trees2:pasted__lambert5.001"]}
                skeleton={nodes.Mesh574_3.skeleton}
              />
              <skinnedMesh
                name="Mesh574_4"
                geometry={nodes.Mesh574_4.geometry}
                material={materials["trees2:pasted__lambert8.001"]}
                skeleton={nodes.Mesh574_4.skeleton}
              />
            </group>
            <skinnedMesh
              name="trees2pasted__shirt"
              geometry={nodes.trees2pasted__shirt.geometry}
              material={materials["Material.012"]}
              skeleton={nodes.trees2pasted__shirt.skeleton}
            />
            <skinnedMesh
              name="trees2pasted__stomach"
              geometry={nodes.trees2pasted__stomach.geometry}
              material={materials["Material.011"]}
              skeleton={nodes.trees2pasted__stomach.skeleton}
            />
            <skinnedMesh
              name="trees2pasted__tongue"
              geometry={nodes.trees2pasted__tongue.geometry}
              material={materials["trees2:pasted__lambert23.001"]}
              skeleton={nodes.trees2pasted__tongue.skeleton}
            />
            <skinnedMesh
              name="trees2pasted__hands"
              geometry={nodes.trees2pasted__hands.geometry}
              material={materials["Material.011"]}
              skeleton={nodes.trees2pasted__hands.skeleton}
            />
            <skinnedMesh
              name="trees2pasted__hairs"
              geometry={nodes.trees2pasted__hairs.geometry}
              material={materials["Material.013"]}
              skeleton={nodes.trees2pasted__hairs.skeleton}
            />
            <skinnedMesh
              name="trees2pasted__skirt"
              geometry={nodes.trees2pasted__skirt.geometry}
              material={materials["Material.012"]}
              skeleton={nodes.trees2pasted__skirt.skeleton}
            />
            <group name="trees2pasted__upperjaw">
              <skinnedMesh
                name="Mesh580"
                geometry={nodes.Mesh580.geometry}
                material={materials["trees2:pasted__lambert23.001"]}
                skeleton={nodes.Mesh580.skeleton}
              />
              <skinnedMesh
                name="Mesh580_1"
                geometry={nodes.Mesh580_1.geometry}
                material={materials["trees2:pasted__lambert22.001"]}
                skeleton={nodes.Mesh580_1.skeleton}
              />
            </group>
            <skinnedMesh
              name="trees2pasted__arm_design_band"
              geometry={nodes.trees2pasted__arm_design_band.geometry}
              material={materials["Material.011"]}
              skeleton={nodes.trees2pasted__arm_design_band.skeleton}
            />
            <skinnedMesh
              name="trees2pasted__brows"
              geometry={nodes.trees2pasted__brows.geometry}
              material={materials["Material.004"]}
              skeleton={nodes.trees2pasted__brows.skeleton}
            />
            <group name="trees2pasted__ear_ring">
              <skinnedMesh
                name="Mesh565"
                geometry={nodes.Mesh565.geometry}
                material={nodes.Mesh565.material}
                skeleton={nodes.Mesh565.skeleton}
              />
              <skinnedMesh
                name="Mesh565_1"
                geometry={nodes.Mesh565_1.geometry}
                material={materials["trees2:pasted__lambert21.001"]}
                skeleton={nodes.Mesh565_1.skeleton}
              />
            </group>
            <skinnedMesh
              name="trees2pasted__face"
              geometry={nodes.trees2pasted__face.geometry}
              material={materials["Material.011"]}
              skeleton={nodes.trees2pasted__face.skeleton}
            />
            <group name="trees2pasted__L_eye">
              <skinnedMesh
                name="Mesh569"
                geometry={nodes.Mesh569.geometry}
                material={materials["trees2:pasted__lambert6.001"]}
                skeleton={nodes.Mesh569.skeleton}
              />
              <skinnedMesh
                name="Mesh569_1"
                geometry={nodes.Mesh569_1.geometry}
                material={materials["trees2:pasted__lambert7.001"]}
                skeleton={nodes.Mesh569_1.skeleton}
              />
              <skinnedMesh
                name="Mesh569_2"
                geometry={nodes.Mesh569_2.geometry}
                material={materials["trees2:pasted__lambert5.001"]}
                skeleton={nodes.Mesh569_2.skeleton}
              />
              <skinnedMesh
                name="Mesh569_3"
                geometry={nodes.Mesh569_3.geometry}
                material={materials["trees2:pasted__lambert8.001"]}
                skeleton={nodes.Mesh569_3.skeleton}
              />
              <skinnedMesh
                name="Mesh569_4"
                geometry={nodes.Mesh569_4.geometry}
                material={materials["trees2:pasted__blinn6.001"]}
                skeleton={nodes.Mesh569_4.skeleton}
              />
            </group>
            <skinnedMesh
              name="trees2pasted__legs"
              geometry={nodes.trees2pasted__legs.geometry}
              material={materials["Material.011"]}
              skeleton={nodes.trees2pasted__legs.skeleton}
            />
            <skinnedMesh
              name="trees2pasted__shoes"
              geometry={nodes.trees2pasted__shoes.geometry}
              material={materials["Material.012"]}
              skeleton={nodes.trees2pasted__shoes.skeleton}
            />
          </group>
        </group>
        <group
          name="trees2polySurface118001"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group name="trees2polySurface196">
            <group
              name="trees2transform62"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface197">
            <group
              name="trees2transform58"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface198">
            <group
              name="trees2transform57"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface199">
            <group
              name="trees2transform56"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group name="trees2polySurface200">
            <group
              name="trees2transform55"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
          <group
            name="trees2transform54"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
        <group
          name="trees2polySurface202"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="trees2transform76"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
        <group
          name="pCylinder1001"
          position={[0, 1.13, 0.03]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.01, 0.01, 0]}
        >
          <group
            name="transform1"
            position={[-0.11, -3.6, 309.99]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[116.09, 274.96, 116.09]}
          />
        </group>
        <group
          name="pCylinder2001"
          position={[0, 1.06, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="transform2"
            position={[-0.03, 0.28, 96.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={91.06}
          />
        </group>
        <group
          name="group1"
          position={[0.05, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        >
          <group
            name="pCylinder5"
            position={[-61.66, -86.91, 272.84]}
            rotation={[-0.32, 0.5, -2.62]}
            scale={3.53}
          >
            <mesh
              name="Mesh587"
              castShadow
              receiveShadow
              geometry={nodes.Mesh587.geometry}
              material={materials.phong8}
            />
            <mesh
              name="Mesh587_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh587_1.geometry}
              material={materials.phong9}
            />
          </group>
          <mesh
            name="pDisc1"
            castShadow
            receiveShadow
            geometry={nodes.pDisc1.geometry}
            material={materials.lambert3}
            position={[-226.63, -203.17, -49.97]}
            scale={22.89}
          />
          <mesh
            name="Bucket"
            castShadow
            receiveShadow
            geometry={nodes.Bucket.geometry}
            material={materials.lambert2}
            position={[-226.63, -204.38, -7.89]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10}
          />
          <group
            name="pCylinder4"
            position={[-591.37, -68.26, 2.76]}
            rotation={[-1.23, -1.13, -1.19]}
            scale={3.53}
          >
            <mesh
              name="Mesh586"
              castShadow
              receiveShadow
              geometry={nodes.Mesh586.geometry}
              material={materials.phong8}
            />
            <mesh
              name="Mesh586_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh586_1.geometry}
              material={materials.phong9}
            />
          </group>
          <group
            name="pCylinder6"
            position={[-580.69, -59.34, 2.86]}
            rotation={[-1.23, -1.13, -1.19]}
            scale={3.53}
          >
            <mesh
              name="Mesh588"
              castShadow
              receiveShadow
              geometry={nodes.Mesh588.geometry}
              material={materials.phong8}
            />
            <mesh
              name="Mesh588_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh588_1.geometry}
              material={materials.phong9}
            />
          </group>
        </group>
        <group
          name="group2"
          position={[0, 0, 0.03]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <group
          name="group3"
          position={[0.05, 0, 0.05]}
          rotation={[Math.PI / 2, 0, -1.57]}
          scale={0}
        >
          <mesh
            name="Bucket002"
            castShadow
            receiveShadow
            geometry={nodes.Bucket002.geometry}
            material={materials.lambert2}
            position={[-3.94, 16.23, -2.88]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={10}
          />
          <group
            name="pCylinder6002"
            position={[-358, 160.06, 7.87]}
            rotation={[-1.23, -1.13, -1.19]}
            scale={3.53}
          >
            <mesh
              name="Mesh602"
              castShadow
              receiveShadow
              geometry={nodes.Mesh602.geometry}
              material={materials.phong8}
            />
            <mesh
              name="Mesh602_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh602_1.geometry}
              material={materials.phong9}
            />
          </group>
          <mesh
            name="pDisc1002"
            castShadow
            receiveShadow
            geometry={nodes.pDisc1002.geometry}
            material={materials.lambert3}
            position={[0, 0, -42.07]}
            scale={22.89}
          />
          <group
            name="pCylinder3002"
            position={[-267.59, 8.38, 223.3]}
            rotation={[0, -0.78, 0]}
            scale={3.53}
          >
            <mesh
              name="Mesh599"
              castShadow
              receiveShadow
              geometry={nodes.Mesh599.geometry}
              material={materials.phong8}
            />
            <mesh
              name="Mesh599_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh599_1.geometry}
              material={materials.phong9}
            />
          </group>
          <group
            name="pCylinder4002"
            position={[-368.68, 151.15, 7.76]}
            rotation={[-1.23, -1.13, -1.19]}
            scale={3.53}
          >
            <mesh
              name="Mesh600"
              castShadow
              receiveShadow
              geometry={nodes.Mesh600.geometry}
              material={materials.phong8}
            />
            <mesh
              name="Mesh600_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh600_1.geometry}
              material={materials.phong9}
            />
          </group>
          <group
            name="pCylinder5002"
            position={[161.03, 132.49, 277.85]}
            rotation={[-0.32, 0.5, -2.62]}
            scale={3.53}
          >
            <mesh
              name="Mesh601"
              castShadow
              receiveShadow
              geometry={nodes.Mesh601.geometry}
              material={materials.phong8}
            />
            <mesh
              name="Mesh601_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh601_1.geometry}
              material={materials.phong9}
            />
          </group>
          <group
            name="pCylinder7002"
            position={[-131.51, -107.32, 292.3]}
            rotation={[0.38, -0.35, 1.18]}
            scale={3.53}
          >
            <mesh
              name="Mesh603"
              castShadow
              receiveShadow
              geometry={nodes.Mesh603.geometry}
              material={materials.phong8}
            />
            <mesh
              name="Mesh603_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh603_1.geometry}
              material={materials.phong9}
            />
          </group>
        </group>
        <group name="name_board" rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <group
          name="name_board1"
          position={[0.08, 0, 0.06]}
          rotation={[1.59, 0.01, 3.05]}
          scale={0.01}
        />
        <group
          name="name_board2"
          position={[0.07, 0, 0.04]}
          rotation={[1.59, 0.01, 3.05]}
          scale={0.01}
        />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.trees2mixamorigHips} />
          <primitive object={nodes.trees2joint1} />
          <primitive object={nodes.trees2joint7} />
          <primitive object={nodes.trees2joint8} />
          <primitive object={nodes.trees2joint9} />
          <primitive object={nodes.trees2joint10} />
          <primitive object={nodes.trees2joint11} />
          <primitive object={nodes.trees2joint12} />
          <primitive object={nodes.trees2joint13} />
          <primitive object={nodes.trees2joint14} />
          <primitive object={nodes.trees2joint15} />
          <primitive object={nodes.trees2joint16} />
          <primitive object={nodes.trees2joint17} />
          <primitive object={nodes.trees2joint18} />
          <primitive object={nodes.trees2joint19} />
          <primitive object={nodes.trees2joint20} />
          <primitive object={nodes.trees2joint21} />
          <skinnedMesh
            name="trees2face1"
            geometry={nodes.trees2face1.geometry}
            material={materials["BOY_SKIN_SHOE.001"]}
            skeleton={nodes.trees2face1.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface100001"
            geometry={nodes.trees2polySurface100001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface100001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface113001"
            geometry={nodes.trees2polySurface113001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface113001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface119001"
            geometry={nodes.trees2polySurface119001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface119001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface132001"
            geometry={nodes.trees2polySurface132001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface132001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface144001"
            geometry={nodes.trees2polySurface144001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface144001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface147001"
            geometry={nodes.trees2polySurface147001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface147001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface154001"
            geometry={nodes.trees2polySurface154001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface154001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface196001"
            geometry={nodes.trees2polySurface196001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface196001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface197001"
            geometry={nodes.trees2polySurface197001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface197001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface201001"
            geometry={nodes.trees2polySurface201001.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface201001.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface205"
            geometry={nodes.trees2polySurface205.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface205.skeleton}
          />
          <skinnedMesh
            name="trees2tongue"
            geometry={nodes.trees2tongue.geometry}
            material={materials["trees2:lambert11.001"]}
            skeleton={nodes.trees2tongue.skeleton}
          />
          <skinnedMesh
            name="trees2tshirt"
            geometry={nodes.trees2tshirt.geometry}
            material={materials["Material.008"]}
            skeleton={nodes.trees2tshirt.skeleton}
          />
          <skinnedMesh
            name="trees2brows"
            geometry={nodes.trees2brows.geometry}
            material={materials["phong3.001"]}
            skeleton={nodes.trees2brows.skeleton}
          />
          <skinnedMesh
            name="trees2gloves"
            geometry={nodes.trees2gloves.geometry}
            material={materials["BOY_SKIN_SHOE.001"]}
            skeleton={nodes.trees2gloves.skeleton}
          />
          <skinnedMesh
            name="trees2arm"
            geometry={nodes.trees2arm.geometry}
            material={materials["Material.003"]}
            skeleton={nodes.trees2arm.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface204"
            geometry={nodes.trees2polySurface204.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface204.skeleton}
          />
          <skinnedMesh
            name="trees2polySurface206"
            geometry={nodes.trees2polySurface206.geometry}
            material={materials["TREES.001"]}
            skeleton={nodes.trees2polySurface206.skeleton}
          />
          <group name="trees2Leye">
            <skinnedMesh
              name="Mesh613"
              geometry={nodes.Mesh613.geometry}
              material={materials["trees2:lambert16.001"]}
              skeleton={nodes.Mesh613.skeleton}
            />
            <skinnedMesh
              name="Mesh613_1"
              geometry={nodes.Mesh613_1.geometry}
              material={materials["trees2:lambert17.001"]}
              skeleton={nodes.Mesh613_1.skeleton}
            />
            <skinnedMesh
              name="Mesh613_2"
              geometry={nodes.Mesh613_2.geometry}
              material={materials["trees2:lambert4.001"]}
              skeleton={nodes.Mesh613_2.skeleton}
            />
            <skinnedMesh
              name="Mesh613_3"
              geometry={nodes.Mesh613_3.geometry}
              material={materials["trees2:lambert18.001"]}
              skeleton={nodes.Mesh613_3.skeleton}
            />
            <skinnedMesh
              name="Mesh613_4"
              geometry={nodes.Mesh613_4.geometry}
              material={materials["trees2:blinn7.001"]}
              skeleton={nodes.Mesh613_4.skeleton}
            />
          </group>
          <group name="trees2Reye">
            <skinnedMesh
              name="Mesh631"
              geometry={nodes.Mesh631.geometry}
              material={materials["trees2:lambert16.001"]}
              skeleton={nodes.Mesh631.skeleton}
            />
            <skinnedMesh
              name="Mesh631_1"
              geometry={nodes.Mesh631_1.geometry}
              material={materials["trees2:lambert17.001"]}
              skeleton={nodes.Mesh631_1.skeleton}
            />
            <skinnedMesh
              name="Mesh631_2"
              geometry={nodes.Mesh631_2.geometry}
              material={materials["trees2:lambert4.001"]}
              skeleton={nodes.Mesh631_2.skeleton}
            />
            <skinnedMesh
              name="Mesh631_3"
              geometry={nodes.Mesh631_3.geometry}
              material={materials["trees2:lambert18.001"]}
              skeleton={nodes.Mesh631_3.skeleton}
            />
            <skinnedMesh
              name="Mesh631_4"
              geometry={nodes.Mesh631_4.geometry}
              material={materials["trees2:blinn7.001"]}
              skeleton={nodes.Mesh631_4.skeleton}
            />
          </group>
          <group name="trees2lowerjaw">
            <skinnedMesh
              name="Mesh614"
              geometry={nodes.Mesh614.geometry}
              material={materials["trees2:lambert11.001"]}
              skeleton={nodes.Mesh614.skeleton}
            />
            <skinnedMesh
              name="Mesh614_1"
              geometry={nodes.Mesh614_1.geometry}
              material={materials["trees2:lambert12.001"]}
              skeleton={nodes.Mesh614_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="trees2shoes"
            geometry={nodes.trees2shoes.geometry}
            material={materials["BOY_SKIN_SHOE.001"]}
            skeleton={nodes.trees2shoes.skeleton}
          />
          <skinnedMesh
            name="trees2pents"
            geometry={nodes.trees2pents.geometry}
            material={materials["Material.008"]}
            skeleton={nodes.trees2pents.skeleton}
          />
          <skinnedMesh
            name="trees2belt"
            geometry={nodes.trees2belt.geometry}
            material={materials["phong4.001"]}
            skeleton={nodes.trees2belt.skeleton}
          />
          <skinnedMesh
            name="trees2hairs"
            geometry={nodes.trees2hairs.geometry}
            material={materials["Material.014"]}
            skeleton={nodes.trees2hairs.skeleton}
          />
          <group name="trees2upperjaw">
            <skinnedMesh
              name="Mesh635"
              geometry={nodes.Mesh635.geometry}
              material={materials["trees2:lambert11.001"]}
              skeleton={nodes.Mesh635.skeleton}
            />
            <skinnedMesh
              name="Mesh635_1"
              geometry={nodes.Mesh635_1.geometry}
              material={materials["trees2:lambert12.001"]}
              skeleton={nodes.Mesh635_1.skeleton}
            />
          </group>
        </group>
        <group name="fire3transform2" />
        <group name="fire3transform1" />
        <group name="transform8" />
        <group name="transform7" />
        <group name="transform1001" />
        <group name="transform9" />
        <group name="transform5" />
        <group name="transform4" />
        <group name="transform3" />
        <group name="transform2001" />
        <group name="transform6" />
        <group name="transform10" />
        <group
          name="fire3polySurface161"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="fire3transform3"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
        <group name="group1002" position={[0, 7.1, 0]} />
        <mesh
          name="trees2pDisc1"
          castShadow
          receiveShadow
          geometry={nodes.trees2pDisc1.geometry}
          material={materials["phong7.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.15}
        />
        <mesh
          name="trees2pCylinder29"
          castShadow
          receiveShadow
          geometry={nodes.trees2pCylinder29.geometry}
          material={materials["Material.001"]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="trees2pPlane198001"
          castShadow
          receiveShadow
          geometry={nodes.trees2pPlane198001.geometry}
          material={materials["phong1.001"]}
          position={[0, 0.03, -0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="trees2pPlane210"
          castShadow
          receiveShadow
          geometry={nodes.trees2pPlane210.geometry}
          material={materials["TREES.001"]}
          position={[0, 0.03, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="trees2pPlane211"
          castShadow
          receiveShadow
          geometry={nodes.trees2pPlane211.geometry}
          material={materials["TREES.001"]}
          position={[0, 0.03, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
        <mesh
          name="fire6Group20972"
          castShadow
          receiveShadow
          geometry={nodes.fire6Group20972.geometry}
          material={materials["lambert9.001"]}
          morphTargetDictionary={nodes.fire6Group20972.morphTargetDictionary}
          morphTargetInfluences={nodes.fire6Group20972.morphTargetInfluences}
          position={[0.03, 0, 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <group
          name="Enemy"
          position={[0.07, 0, 0]}
          rotation={[0, 0.12, 0]}
          scale={0}
        >
          <mesh
            name="Mesh605"
            castShadow
            receiveShadow
            geometry={nodes.Mesh605.geometry}
            material={
              materials["Monster_walk_ref3:Monster_v3:rsArchitectural2"]
            }
          />
          <mesh
            name="Mesh605_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh605_1.geometry}
            material={
              materials["Monster_walk_ref3:Monster_v3:rsArchitectural1"]
            }
          />
          <mesh
            name="Mesh605_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh605_2.geometry}
            material={
              materials["Monster_walk_ref3:Monster_v3:rsArchitectural1.001"]
            }
          />
        </group>
        <group
          name="Enemy1"
          position={[0.05, 0, 0]}
          rotation={[0.03, 0.25, 0.07]}
          scale={0}
        >
          <mesh
            name="Mesh606"
            castShadow
            receiveShadow
            geometry={nodes.Mesh606.geometry}
            material={
              materials["Monster_walk_ref3:Monster_v3:rsArchitectural2"]
            }
          />
          <mesh
            name="Mesh606_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh606_1.geometry}
            material={
              materials["Monster_walk_ref3:Monster_v3:rsArchitectural1"]
            }
          />
          <mesh
            name="Mesh606_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh606_2.geometry}
            material={
              materials["Monster_walk_ref3:Monster_v3:rsArchitectural1.001"]
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model/homepage.glb");


const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 18px;
`



// const Loader = () => {
//   console.log(loaded);
//   return (
//     <LoaderWrapper>
//       {progress.toFixed(2)} % loaded
//     </LoaderWrapper>
//   )
// }


const Scene = (props) => {
  const [ref, light] = useState();
  const { active, progress, errors, item, loaded, total } = useProgress()

  useEffect(() => {
    console.log("active", active)
  }, [active])

  return (
    <SceneWrapper>
      <Canvas drp={[1, 2]} camera={{ position: [7.5, 1.2, 3], fov: 20 }}>
        <ambientLight intensity={1.2} color="#cfd1a3" />
        <pointLight position={[1.2, 0.2, 0.8]} color={0xa89b32} intensity={1.4} ref={light} />
        <gridHelper />
        {/* {ref && <pointLightHelper args={[ref]} />} */}
        <Suspense fallback={<Html>{progress} : {loaded}</Html>}>
          <Model scale={40} position={[-0.6, -0.8, -0.3]} />
          <Fire scale={0.15} position={[0.52, -0.3, 0.37]} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </SceneWrapper>
  )
}

export default Scene;