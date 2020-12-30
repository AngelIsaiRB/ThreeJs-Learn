
const container = document.querySelector("#game-container");

// escene 

const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

// camera

const camera = new THREE.PerspectiveCamera(
    35, //campod e vision
    container.clientWidth/container.clientHeight, // espect ratio
    0.1,  // que tan seca se renderizan los objetos
    1000,  // que tal lejos se renderizan los objetos
);

camera.position.set(0,0,15);

// Mesh
const geometry = new THREE.BoxGeometry(2,2,2)
const material = new THREE.MeshBasicMaterial({
    color:"teal"
});
const boxMesh = new THREE.Mesh(geometry, material);
scene.add(boxMesh);


// camera.lookAt(boxMesh.position);

//  render  s
const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const update=()=>{
    boxMesh.rotateX(0.01);
    boxMesh.rotateY(0.01);

    renderer.render(scene, camera);   
    renderer.setAnimationLoop(()=>update());
}
update();