// Imports
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
// import './style.css'
// import * as THREE from 'three'
// import * as THREE from 'https://cdn.skypack.dev/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports/optimized/three.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
// import { PointLight, Sphere } from 'three'


// Visual controls
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.IcosahedronGeometry(5, 0);
// const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
// const geometry = new THREE.SphereGeometry(5, 4, 4);
// const geometry = new THREE.TorusKnotGeometry( 5, 1.5, 100, 10 );
// const loader = new THREE.FontLoader();

// loader.load( 'fonts/ubuntu.json', function ( font ) {
// 	const geometry = new THREE.TextGeometry( 'E', {
// 		font: font,
// 		size: 20,ll
// 		height: 5,
// 		curveSegments: 1,
// 		bevelEnabled: false,
// 		bevelThickness: 1,
// 		bevelSize: 1,
// 		bevelOffset: 0,
// 		bevelSegments: 1
// 	} );

// Loading
// const textureLoader = new THREE.TextureLoader()
// const normalMap = textureLoader.load('textures/normalMap.png')

// Materials
const material = new THREE.MeshStandardMaterial()
material.color = new THREE.Color(0xFFFFFF)
material.metalness = 0.7
material.roughness = 0.2
// material.normalMap = normalMap

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)

// Lights
//RED
const pointLight = new THREE.PointLight(0xa83232, 2)
pointLight.position.set(10,10,1)
scene.add(pointLight)

//BLUE
const pointLight2 = new THREE.PointLight(0x2b00ff, 2)
pointLight2.position.set(10,-10,1)
scene.add(pointLight2)

//RED
const pointLight3 = new THREE.PointLight(0xa83232, 2)
pointLight3.position.set(-10,-10,1)
scene.add(pointLight3)

//BLUE
const pointLight4 = new THREE.PointLight(0x2b00ff, 2)
pointLight4.position.set(-10,10,1)
scene.add(pointLight4)

const pointLight5 = new THREE.PointLight(0x944300, 1)
pointLight5.position.set(0,0,20)
scene.add(pointLight5)

//LightsHelpers
// const sphereSize = 1;
// const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
// scene.add( pointLightHelper);
// const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
// scene.add( pointLightHelper2);
// const pointLightHelper3 = new THREE.PointLightHelper( pointLight3, sphereSize );
// scene.add( pointLightHelper3);

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 3, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 20
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animate
document.addEventListener('mousemove', onDocumentMouseMove)
let mouseX=0;
let mouseY=0;
let targetX=0;
let targetY=0;

const windowX = window.innerWidth / 1;
const windowY = window.innerHeight / 1;

function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowX)
    mouseY = (event.clientY - windowY)
}

const clock = new THREE.Clock()

const tick = () =>
{
    targetX = mouseX * .002
    targetY = mouseY * .002

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    const num1 = Math.random()
    const num2 = Math.random()
    sphere.rotation.y = 0.5 * elapsedTime
    sphere.rotation.x = .5 * elapsedTime
    sphere.rotation.y += .5 * (targetX - sphere.rotation.y)
    sphere.rotation.x += .5 * (targetY - sphere.rotation.x)

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Tick next frame
    window.requestAnimationFrame(tick)
}
tick()