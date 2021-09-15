// Imports
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
// import vertexShader from '/shaders/vertexShader.glsl'

// Canvas
const canvas = document.querySelector('canvas.webg0')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.SphereGeometry( 15, 45, 45);
const geometry2 = new THREE.SphereGeometry( 15.5, 45, 45);
const geometry3 = new THREE.SphereGeometry( 15.6, 45, 45);
const geometry4 = new THREE.BufferGeometry();
const geometry5 = new THREE.SphereGeometry( 2, 45, 45);

const starsPositions = []
for (let i=0; i< 5000; i++) {
    const x = (Math.random() - 0.5) * 2000
    const y = (Math.random() - 0.5) * 2000
    // const z = 0
    const z = -Math.random() * 2000
    starsPositions.push(x, y, z)
}
geometry4.setAttribute('position', new THREE.Float32BufferAttribute(starsPositions, 3))

// Loading
const texture = new THREE.TextureLoader().load('images/earth2.png ');
const texture2 = new THREE.TextureLoader().load('images/normalMapE.png ');
const texture3 = new THREE.TextureLoader().load('images/clouds.png')
const texture4 = new THREE.TextureLoader().load('images/displacementMap.png')
const texture5 = new THREE.TextureLoader().load('images/moon.png')

// Materials
//Sphere
const material = new THREE.MeshPhysicalMaterial( { map: texture } );
material.vertexShader= 
material.fragmentShader = 0
material.normalMap = texture2
material.displacementMap = texture4
material.displacementScale = 0.5

const material2 = new THREE.MeshPhysicalMaterial( { map: texture3 } );
material2.color = new THREE.Color(0xFFFFFF)
material2.transmission = 0.9
material2.opacity = 99
material2.transparent = true
material2.alphaMap = texture3

material2.blending = THREE.AdditiveBlending;

const map = new THREE.TextureLoader().load( 'images/glow.png' );
const material3 = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );

const material4 = new THREE.MeshPhysicalMaterial( {} );
material4.color = new THREE.Color(0x145fff)
material4.transmission = 0.9
material4.opacity = 1
material4.transparent = true

const sprite = new THREE.Sprite( material3 );
sprite.scale.set(70, 70, 1)
scene.add( sprite );

const material5 = new THREE.PointsMaterial( {
    color: 0xffffff
} );
material5.color = new THREE.Color(0xFFFFFF)

const material6 = new THREE.MeshPhysicalMaterial( {map: texture5} );



// Mesh
const sphere = new THREE.Mesh(geometry,material)
sphere.castShadow = true;
sphere.receiveShadow = true;
scene.add(sphere)

const atmosphere = new THREE.Mesh(geometry2,material2)
atmosphere.castShadow = true;
scene.add(atmosphere)

const atmosphere2 = new THREE.Mesh(geometry3,material4)
atmosphere2.castShadow = false;
scene.add(atmosphere2)

const moon = new THREE.Mesh(geometry5,material6)
moon.castShadow = true;
moon.receiveShadow = true;
scene.add(moon)

//POINTS
const stars = new THREE.Points(geometry4,material5)
scene.add(stars)

// Lights
//SUN
const sun = new THREE.PointLight(0xFFFFFF, 1.2)
sun.position.set(90,30,90)
sun.castShadow = true;
sun.shadow.mapSize.width = 1024; // default
sun.shadow.mapSize.height = 1024; // default
sun.shadow.camera.near = 60; // default
sun.shadow.camera.far = 200; // default
sun.shadow.focus = 1; // default
scene.add(sun)

//LightsHelpers
const sphereSize = 2;
const pointLightHelper = new THREE.PointLightHelper( sun, sphereSize );
scene.add( pointLightHelper);
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
    renderer.setPixelRatio(window.devicePixelRatio)
})

// Camera
const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 3, 2100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 100

scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
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

const mouse = {
    x: 0,
    y: 0
}
addEventListener('mousemove', () => {
    mouse.x = (event.clientX / innerWidth)*2-1
    mouse.y = (event.clientY / innerWidth)*2-1
})


const clock = new THREE.Clock()

const tick = () =>
{
    targetX = mouseX * .002
    targetY = mouseY * .002

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .2 * elapsedTime + 0.0005*mouseX
    atmosphere.rotation.y = .18 * elapsedTime + 0.0005*mouseX
    sphere.rotation.x = 0.0001*mouseY+0.1
    atmosphere.rotation.x = 0.0001*mouseY+0.1
    camera.position.x = mouse.x*5
    camera.position.y = mouse.y*5
    console.log(mouse.x)
    atmosphere.position.x = sphere.position.x + mouseY*0.00002

    moon.position.x = sphere.position.x+ 30*Math.cos(elapsedTime*0.2)
    moon.position.y = sphere.position.y+ 9*Math.cos(elapsedTime*0.2)
    moon.position.z = sphere.position.x+ 30*Math.sin(elapsedTime*0.2)



    // sphere.rotation.y = sphere.rotation.x + 0.0005*mouseX
    // sun.position.x = sun.position.x * Math.cos(elapsedTime)
    // sun.position.y = sun.position.x * Math.sin(elapsedTime)

    // Render
    renderer.render(scene, camera)

    // Tick next frame
    window.requestAnimationFrame(tick)
}
tick()