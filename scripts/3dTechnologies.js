// Imports
import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
// import './style.css'
// import * as THREE from 'three'
// import * as THREE from 'https://cdn.skypack.dev/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports/optimized/three.js';canvas
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
// import { PointLight, Sphere } from 'three'

// Visual controls

// Canvas
const canvas = document.querySelector('canvas.webg2')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.IcosahedronGeometry(1, 0);

const loader = new THREE.FontLoader();

let scrFont = 'fonts/ubuntu.json';
// let file = new XMLHttpRequest();
// file.open('HEAD', scrFont, false);
// file.send();
// console.log(file);

// if (file.readyState == 4 && file.status == 404 ) {
// 	scrFont = '/portafolioWebSite/fonts/ubuntu.json';
// } else {
// 	console.log("File exists");
// }

loader.load( scrFont, function ( font ) {
	const text1 = new THREE.TextGeometry( 'HTML', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text2 = new THREE.TextGeometry( 'CSS', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text3 = new THREE.TextGeometry( 'JAVASCRIPT', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text4 = new THREE.TextGeometry( 'THREE.JS', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text5 = new THREE.TextGeometry( 'NODE.JS', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text6 = new THREE.TextGeometry( 'JAVA', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text7 = new THREE.TextGeometry( 'C#', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text8 = new THREE.TextGeometry( 'OOP', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text9 = new THREE.TextGeometry( 'MONGODB', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text10 = new THREE.TextGeometry( 'SQL', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text11 = new THREE.TextGeometry( 'POSTMAN', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text12 = new THREE.TextGeometry( 'GITHUB', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text13 = new THREE.TextGeometry( 'BITBUCKET', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text14 = new THREE.TextGeometry( 'VISUAL STUDIO', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text15 = new THREE.TextGeometry( 'INTELLIJ IDEA', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text16 = new THREE.TextGeometry( 'ASANA', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
    const text17 = new THREE.TextGeometry( 'JIRA', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );
	const text18 = new THREE.TextGeometry( 'AGILE', {
		font: font,
		size: 1,
		height: 0.01,
		bevelEnabled: false,
	} );

// Loading
const textureLoader = new THREE.TextureLoader()
const normalMap = textureLoader.load('../images/normalMap.png')

// Materials
//Main object
const material = new THREE.MeshStandardMaterial()
material.color = new THREE.Color(0xFFFFFF)
material.metalness = 0.75
material.roughness = 0.2
material.normalMap = normalMap

//blue ball
const material2 = new THREE.MeshBasicMaterial()
material2.color = new THREE.Color(0xFFFFFF)
material2.metalness = 0.6
material2.roughness = 0.1

//red ball
const material3 = new THREE.MeshBasicMaterial()
material2.color = new THREE.Color(0xFFFFFF)
material2.metalness = 0.6
material2.roughness = 0.1

//TEXT
const material4 = new THREE.MeshStandardMaterial()
material4.color = new THREE.Color(0xFFFFFF)
material4.metalness = 0.5
material4.roughness = 0


// Mesh
const sphere = new THREE.Mesh(geometry,material)
const t1 = new THREE.Mesh(text1,material4)
const t2 = new THREE.Mesh(text2,material4)
const t3 = new THREE.Mesh(text3,material4)
const t4 = new THREE.Mesh(text4,material4)
const t5 = new THREE.Mesh(text5,material4)
const t6 = new THREE.Mesh(text6,material4)
const t7 = new THREE.Mesh(text7,material4)
const t8 = new THREE.Mesh(text8,material4)
const t9 = new THREE.Mesh(text9,material4)
const t10 = new THREE.Mesh(text10,material4)
const t11 = new THREE.Mesh(text11,material4)
const t12 = new THREE.Mesh(text12,material4)
const t13 = new THREE.Mesh(text13,material4)
const t14 = new THREE.Mesh(text14,material4)
const t15 = new THREE.Mesh(text15,material4)
const t16 = new THREE.Mesh(text16,material4)
const t17 = new THREE.Mesh(text17,material4)
const t18 = new THREE.Mesh(text17,material4)

scene.add(sphere)

for (let i = 1; i <= 18; i++) {
	eval('t' + i).castShadow = true
	eval('t' + i).receiveShadow = true
    scene.add(eval('t' + i));
}

// Fog
// const fog = new THREE.Fog(0xb5b5b5, 1, 20);
// // const fog = new THREE.FogExp2(0xa83232, 0.0005);
// scene.add(fog)

// Lights
//RED
const pointLight1 = new THREE.PointLight(0xcff0000, 5, 5)
pointLight1.position.set(0,0,5)
scene.add(pointLight1)

//BLUE
const pointLight2 = new THREE.PointLight(0x0000ff, 10, 5)
pointLight2.position.set(0,0,5)
scene.add(pointLight2)

//GREEN1
const pointLight3 = new THREE.PointLight(0x00ff00, 0, 5)
pointLight3.position.set(0,0,5)
scene.add(pointLight3)

//Z Orange
const spotLight = new THREE.SpotLight( 0xffffff, 5, 30 );
spotLight.position.set( 0, 0, 20 );
spotLight.castShadow = true;
scene.add( spotLight );

//LightsHelpers
// const sphereSize = 2;
// const pointLightHelper1 = new THREE.PointLightHelper( pointLight1, sphereSize );
// scene.add( pointLightHelper1);
// const pointLightHelper2 = new THREE.PointLightHelper( pointLight2, sphereSize );
// scene.add( pointLightHelper2);
// const pointLightHelper3 = new THREE.PointLightHelper( pointLight3, sphereSize );
// scene.add( pointLightHelper3);
// const spotLightHelper4 = new THREE.SpotLightHelper( spotLight );
// scene.add( spotLightHelper4 );

//Sizes
const sizes = {
    width: window.innerWidth/2,
    
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth/2,
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 9, 40)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 24
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

    const elapsedTime = -clock.getElapsedTime()
    const ang = elapsedTime * Math.PI * .04

    // Update objects
    const num1 = Math.random()
    const num2 = Math.random()
    sphere.rotation.y = 0.4 * elapsedTime
    sphere.rotation.x = .4 * elapsedTime
    sphere.rotation.y += .4 * (targetX - sphere.rotation.y)
    sphere.rotation.x += .4 * (targetY - sphere.rotation.x)

    const vector = new THREE.Vector3();

    for ( let i = 1, l = 18; i <= l; i ++ ) {
        const phi = Math.acos( - 1 + ( 2 * i ) / l );
        const theta = Math.sqrt(l * Math.PI) * phi+(-10-sphere.rotation.y)*10/Math.sqrt(l * Math.PI) / Math.sin(phi);

        eval('t' + i).position.setFromSphericalCoords(8 , phi, theta);
		eval('t' + i).position.x = eval('t' + i).position.x-3
    }

    spotLight.position.x = 1 * Math.cos(sphere.rotation.x)
    spotLight.position.y = 1 * Math.sin(sphere.rotation.x)

    // Render
    renderer.render(scene, camera)

    // Tick next frame
    window.requestAnimationFrame(tick)
}
tick()

} );
