import * as THREE from 'three';

// create the renderer and set its window size
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

// set the renderer as child of the document body
document.body.appendChild(renderer.domElement);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------- CREATING SCENE AND ADDING THE CAMERA -----------------------//
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth/ window.innerHeight,
    0.1, 
    1000
);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

camera.position.z = 5;

renderer.render(scene, camera);S