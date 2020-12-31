
const container = document.querySelector("#game-container");

// escene 

const scene = new THREE.Scene();
scene.background = new THREE.Color("skyblue");

// camera

const camera = new THREE.PerspectiveCamera(
    35, //campod e vision  (Field of View)  1-179
    container.clientWidth/container.clientHeight, // espect ratio
    0.1,  // que tan seca se renderizan los objetos
    1000,  // que tal lejos se renderizan los objetos
);



camera.position.set(0,0,15);

// textures

const textureLoader = new THREE.TextureLoader();
textureLoader.setPath("./src/assets/textures/");
const baseColor = textureLoader.load("base_color.jpg"); //uv
const roughness = textureLoader.load("metalilic_roughness.png");
const normalMap = textureLoader.load("normal_map.png");

// Material
const material = new THREE.MeshBasicMaterial({
     color:new THREE.Color("teal").convertSRGBToLinear(),
    map:baseColor,
    
    // wireframe:true,    
    // transparent:true,
    
});

const material_standar = new  THREE.MeshStandardMaterial({    
    color:new THREE.Color("coral").convertSRGBToLinear(),
    map:baseColor,
    roughnessMap:roughness,
    normalMap:normalMap
    // flatShading:true,
    // roughness: 0.2,  //reflejo rugosidad del material

    // emissive:0x0000ff
}); // PBR physicial based material
// material.opacity=0.3

// geometrias
const geometry = new THREE.BoxBufferGeometry(2,2,2)

// Mesh

const mesh = new THREE.Mesh(geometry, material);
mesh.rotateZ(THREE.MathUtils.degToRad(90));
mesh.position.set(-3,0,0)
scene.add(mesh);
// mesh2
const mesh2 = new THREE.Mesh(geometry, material_standar);
mesh2.rotateZ(THREE.MathUtils.degToRad(90));
mesh2.position.set(3,0,0)
scene.add(mesh2);

// Ligth
// const ambientLigth = new THREE.AmbientLight(0xffffff,1);
// scene.add(ambientLigth);
const hemisfereLight = new THREE.HemisphereLight(0xffffbb, 0x080820,0.5);
scene.add(hemisfereLight);
const directionalLight = new THREE.DirectionalLight(0xffffff,1);
scene.add( directionalLight);

directionalLight.position.set(.8,2,4)




//  render  s
const renderer = new THREE.WebGLRenderer({
    antialias:true,
   
    canvas:container
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.physicallyCorrectLights=true;
renderer.outputEncoding= THREE.sRGBEncoding;


const update=()=>{
    // mesh.rotateX(0.01);
    mesh.rotateY(0.01);
    mesh2.rotateY(0.01);

    renderer.render(scene, camera);   
    renderer.setAnimationLoop(()=>update());
}
update();