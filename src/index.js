import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
} from 'three'

import cube from './cube'

const FOV = 75
const NEAR_CLIP = 0.1
const FAR_CLIP = 1000

// SETUP
const scene = new Scene()
const camera = new PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, NEAR_CLIP, FAR_CLIP)
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// RESPONSIVINESS
window.addEventListener( 'resize', onWindowResize, false );

const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}


scene.add(cube)
camera.position.z = 5

// Animation loop
const animate = () => {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y -= 0.01
  renderer.render(scene, camera)
}

animate()
