import * as THREE from 'three'
import { Suspense, useRef, useState, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Scene(props) {
    const group = useRef()
    const actions = useRef()
    const {nodes, scene, materials, animations} = useLoader(GLTFLoader, '/model/fire/scene.gltf')
    const [mixer] = useState(() => new THREE.AnimationMixer())

    useFrame((state, delta) => mixer.update(delta))
    useEffect(() => {
        actions.current = { idle: mixer.clipAction(animations[0], group.current) }
        actions.current.idle.play()
        return () => animations.forEach((clip) => mixer.uncacheClip(clip))
      }, [])

    return (
    <group {...props} dispose={null}>
        <primitive object={scene} ref={group} />
    </group>
    )
  }
  

  export default Scene;