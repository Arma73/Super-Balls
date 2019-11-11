import * as THREE from "three";
import GUI from "./Helpers/GUI";
import { GroupOne } from "./Helpers/colors";
import { gridHelper, randomInteger, axiseHelper } from "./Helpers/helpers";
import { LightProbeGenerator } from "./Helpers/LightProbeGenerator.js";
import { createCamera, createControls, camera } from "./Camera_Controls";
import {createLights, mainLight} from "./Lights";
import { spheres } from "./Meshes";
import {createRenderer, renderer} from "./Renderer";

const OrbitControls = require("three-orbit-controls")(THREE);



//Styles
import "GlobalStyles";

let scene, camera2;
let SEPARATION = 1, AMOUNTX = 20, AMOUNTY = 20;
let particles, particle, count = 0;
let currentCammera = camera;

let lightProbe;
let directionalLight;

let API = {
	lightProbeIntensity: 1.0,
	directionalLightIntensity: 0.2,
	envMapIntensity: 1
};

function init() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0x000000 );
	createCamera();
	createControls(OrbitControls, camera);
	createLights(scene);
	//createMeshes(scene);
	createRenderer();


	camera2 = new THREE.PerspectiveCamera(
		60,
		2,
		0.1,
		500,
	);

	camera2.position.set(14.5, 22, 35);
	camera2.lookAt(0, 5, 0);

	scene.add(camera2);
	createControls(OrbitControls, camera2);

	//Stars
	let geometryStar = new THREE.BufferGeometry();
	let vertices = [];

	for ( let j = 0;  j < 100000; j++ ) {
		vertices.push( THREE.Math.randFloatSpread( 3000 ) ); //x
		vertices.push( THREE.Math.randFloatSpread( 3000 ) ); //y
		vertices.push( THREE.Math.randFloatSpread( 3000 ) ); //z
	}
	geometryStar.setAttribute( "position", new THREE.Float32BufferAttribute( vertices, 3 ) );
	let particlesStar = new THREE.Points( geometryStar, new THREE.PointsMaterial( { color: 0x888888 } ) );

	scene.add( particlesStar );
	//

	function createMaterial(random = Math.random()) {
		const material = new THREE.MeshPhongMaterial({
			side: THREE.DoubleSide
		});

		const hue = random;
		const saturation = 1;
		const luminance = .5;

		material.color.setHSL(hue, saturation, luminance);

		return material;
	};

	
	//Create the sphere"s material
	const earthContainerWidth = 1;
	//Set up the sphere lets
	let radius = earthContainerWidth/10, segments = 5, rings = 64;

	// let  = new THREE.SphereBufferGeometry(radius, segments, rings, 0, Math.PI * 2, 0, Math.PI * 2);
	const sphereRadius = .085;
    const sphereWidthDivisions = 32;
    const sphereHeightDivisions = 16;
    const geometry = new THREE.SphereBufferGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);

	let frame = 0, maxFrame = 200;

	const createTrackerGroup = () => {
		let opacityMesh = [0];

		(function createGroupMaterial(){
			const number = Math.random();

			for (let j = 0; j < 11; j++){
				opacityMesh[j] = new THREE.Mesh(geometry, createMaterial(number));
			};
		})();

		const createGroup = () => {
			const group = new THREE.Group();
			let per = frame / maxFrame;
	
			for ( let i = 0; i < opacityMesh.length; i++ ) {
				let mesh = opacityMesh[i];


				let bias = Math.abs(0.5 - per) / 0.5;

				mesh.position.x =  -1 + 2 * bias - i / 8 / 2;
				mesh.position.y =  1;
				mesh.position.z =  0;
				if (i === opacityMesh.length - 1){
					mesh.material.opacity = 1;
				} else {
					mesh.material.opacity = i / 25;
				}
				mesh.material.transparent = true;
				group.add( mesh );

				frame += 1;
				frame = frame % maxFrame;
			};
	
			return group;
		};
	
		return createGroup();
	};

	
	/*******/
	particles = new Array();
	let i = 0;

	for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
		for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
			particle = particles[i++] = createTrackerGroup();
			particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
			particle.position.z = iy * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 4 );
			scene.add(particle);
		};
	};

	GUI(camera, spheres, mainLight );
	renderer.setAnimationLoop( () => {
		update();
		render();
	} );

	document.addEventListener( "keydown", onKeyDown, false );

	//gridHelper(scene);
	//SpotLightHelper(scene);
	//axiseHelper(scene);
};

function onKeyDown( event ) {
	switch ( event.keyCode ) {
		case 90: /*1*/
			currentCammera = camera;
			camera2.position.set(14.5, 22, 35);
			camera2.lookAt(0, 5, 0);
			break;
		case 88: /*2*/
			currentCammera = camera2;
			camera.position.set( 19, 2, -15 );
			camera.lookAt(0, 5, 0);
			controls.target.set(0, 5, 0);
			controls.update();
			break;
	}
}

const speedMesh = 0.04;

function update() {
	let i = 0;

	/*sphere*/
	for ( let ix = particles.length; ix--;) {
		particle = particles[ i++ ];
		//particle.position.y = Math.sin( ( ix + count ) * 0.5 )  + ( Math.sin( ( count ) * 0.5 ) );
		for (let i = 0; i < particle.children.length; i++){
			particle.children[i].position.y = Math.sin(( ix + count ) +  Math.sin( ( i / 4 ) * 0.13 ) * Math.PI);
			// if (i !== particle.children.length - 1 ){
			// 	particle.children[i].material.opacity = -particle.children[particle.children.length - i -1 ].position.y;
			// }
		};
	};
	camera.position.x -= Math.sin(2 * Math.PI) ** 2;
	
	count += 0.05;
};

function render() {
	if (currentCammera === camera){
		renderer.render(scene, camera2);
	} else {
		renderer.render( scene, camera );
		
	}
};

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	//update the camera"s frustum
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
};

window.addEventListener( "resize", onWindowResize );

init();
