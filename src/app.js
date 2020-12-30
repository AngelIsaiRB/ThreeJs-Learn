
const container = document.querySelector("#game-container");

// escene 

const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

// camera

// const camera = new THREE.PerspectiveCamera(
//     35, //campod e vision  (Field of View)  1-179
//     container.clientWidth/container.clientHeight, // espect ratio
//     0.1,  // que tan seca se renderizan los objetos
//     1000,  // que tal lejos se renderizan los objetos
// );

const div=200;
const camera = new THREE.OrthographicCamera(
    container.clientWidth/div,
    container.clientWidth/-div,
    container.clientHeight/div,
    container.clientHeight/-div,
    0.1,
    1000
)
// camera.zoom=2;
// camera.updateProjectionMatrix();


camera.position.set(0,0,15);

// Mesh
const geometry = new THREE.BoxBufferGeometry(2,2,2)
const material = new THREE.MeshBasicMaterial({
    color:"teal"
});
const boxMesh = new THREE.Mesh(geometry, material);
scene.add(boxMesh);

// setTimeout(()=>{
//     scene.remove(boxMesh);
// },2000)


//  render  s
const renderer = new THREE.WebGLRenderer({
    antialias:true,
   
    canvas:container
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);



const update=()=>{
    boxMesh.rotateX(0.01);
    boxMesh.rotateY(0.01);

    renderer.render(scene, camera);   
    renderer.setAnimationLoop(()=>update());
}
update();