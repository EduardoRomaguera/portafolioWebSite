// Imports
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.IcosahedronGeometry(5, 0);
const geometry2 = new THREE.IcosahedronGeometry(0.9, 0);
const geometry3 = new THREE.IcosahedronGeometry(0.9, 0);
const geometry4 = new THREE.IcosahedronGeometry(0.2, 0);

// Loading
const textureLoader = new THREE.TextureLoader()
const normalMap = textureLoader.load('images/normalMap.png')

// Materials
//Main object
const material = new THREE.MeshStandardMaterial()
material.color = new THREE.Color(0xFFFFFF)
material.metalness = 0.75
material.roughness = 0.2
material.normalMap = normalMap

//blue ball
const material2 = new THREE.MeshPhysicalMaterial()
material2.color = new THREE.Color(0xFFFFFF)
material2.metalness = 0.6
material2.roughness = 0.1

//red ball
const material3 = new THREE.MeshPhysicalMaterial()
material3.color = new THREE.Color(0xFFFFFF)
material3.metalness = 0.6
material3.roughness = 0.1

//small ball
const material4 = new THREE.MeshPhysicalMaterial()
material4.color = new THREE.Color(0xFFFFFF)
material4.metalness = 0.5
material4.roughness = 0.1


// Mesh
const sphere = new THREE.Mesh(geometry,material)
const point1 = new THREE.Mesh(geometry2,material2)
const point2 = new THREE.Mesh(geometry2,material3)
const point3 = new THREE.Mesh(geometry4,material4)
sphere.castShadow = true;
point1.castShadow = true;
point2.castShadow = true;
point3.castShadow = true;

sphere.receiveShadow = true;
point1.receiveShadow = true;
point2.receiveShadow = true;
point3.receiveShadow = true;

scene.add(sphere)
scene.add(point1)
scene.add(point2)
scene.add(point3)

// Lights
//RED
const pointLight1 = new THREE.PointLight(0xc22d2d, 2)
pointLight1.position.set(10,10,2)
scene.add(pointLight1)

//BLUE
const pointLight2 = new THREE.PointLight(0x2b00ff, 2)
pointLight2.position.set(10,-10,2)
scene.add(pointLight2)

//RED
const pointLight3 = new THREE.PointLight(0xa83232, 0.5)
pointLight3.position.set(-10,-10,2)
scene.add(pointLight3)

//BLUE
const pointLight4 = new THREE.PointLight(0x2b00ff, 0.5)
pointLight4.position.set(-10,10,2)
scene.add(pointLight4)

//SMALL WHITE
const pointLight5 = new THREE.PointLight( 0x06bab7, 4, 4 );
scene.add(pointLight5)

//Z Orange
const spotLight = new THREE.SpotLight( 0x8e4dff );
spotLight.position.set( 0, 0, 30 );
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024; // default
spotLight.shadow.mapSize.height = 1024; // default
spotLight.shadow.camera.near = 10; // default
spotLight.shadow.camera.far = -10; // default
spotLight.shadow.focus = 1; // default
scene.add( spotLight );

//LightsHelpers
// const sphereSize = 2;
// const pointLightHelper = new THREE.PointLightHelper( pointLight1, sphereSize );
// scene.add( pointLightHelper);
// const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
// scene.add( pointLightHelper2);
// const pointLightHelper3 = new THREE.PointLightHelper( pointLight3, sphereSize );
// scene.add( pointLightHelper3);
// const pointLightHelper5 = new THREE.PointLightHelper( pointLight5, sphereSize );
// scene.add( pointLightHelper5);
// const spotLightHelper = new THREE.SpotLightHelper( spotLight );
// scene.add( spotLightHelper );

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth,
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
camera.position.z = 24
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

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
    sphere.rotation.y = 0.4 * elapsedTime
    sphere.rotation.x = .4 * elapsedTime
    sphere.rotation.y += .4 * (targetX - sphere.rotation.x)
    sphere.rotation.x += .4 * (targetY - sphere.rotation.y)

    point1.rotation.x = sphere.rotation.x
    point1.rotation.y = sphere.rotation.y
    point1.rotation.x += .01 * (targetX - point1.rotation.y)
    point1.rotation.y += .01 * (targetY - point1.rotation.x)

    point2.rotation.x = point1.rotation.x
    point2.rotation.y = point1.rotation.y
    point2.rotation.x += .01 * (targetX - point2.rotation.y)
    point2.rotation.y += .01 * (targetY - point2.rotation.x)
    
    point1.position.x = 8 * Math.sin(sphere.rotation.y+sphere.rotation.y)
    point1.position.y = 8 * Math.cos(sphere.rotation.y)
    point1.position.z = 9 * Math.sin(sphere.rotation.y)
    
    point2.position.x = 8 * Math.cos(sphere.rotation.x+sphere.rotation.x)
    point2.position.y = 8 * Math.sin(sphere.rotation.x)
    point2.position.z = 9 * Math.cos(-sphere.rotation.x)

    point3.position.x = point2.position.x+ 1.5*Math.cos(3*sphere.rotation.x)
    point3.position.y = point2.position.y+ 1.5*Math.sin(2.8*sphere.rotation.x)
    point3.position.z = point2.position.z+ 1.5*Math.cos(3.2*sphere.rotation.x)

    pointLight5.position.x = point3.position.x
    pointLight5.position.y = point3.position.y
    pointLight5.position.z = point3.position.z
    
    pointLight1.position.x = 8 * Math.sin(sphere.rotation.y+sphere.rotation.y)
    pointLight1.position.y = 8 * Math.cos(sphere.rotation.y)
    pointLight1.position.z = 9 * Math.sin(sphere.rotation.y)

    pointLight2.position.x = 8 * Math.cos(sphere.rotation.x+sphere.rotation.x)
    pointLight2.position.y = 8 * Math.sin(sphere.rotation.x)
    pointLight2.position.z = 9 * Math.cos(-sphere.rotation.x)



    spotLight.position.x = 1 * Math.cos(sphere.rotation.x)
    spotLight.position.y = 1 * Math.sin(sphere.rotation.x)

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Tick next frame
    window.requestAnimationFrame(tick)
}
tick()