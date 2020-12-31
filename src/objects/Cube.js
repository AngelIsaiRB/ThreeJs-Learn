import * as THREE from "../../node_modules/three/build/three.module.js";

class Cube extends THREE.Mesh{
    constructor(){
        super();
    const textureLoader = new THREE.TextureLoader();
    textureLoader.setPath("./src/assets/textures/");
    const baseColor = textureLoader.load("base_color.jpg"); //uv
    const roughness = textureLoader.load("metallic_roughness.png");
    const normalMap = textureLoader.load("normal_map.png");
    
    this.material= new THREE.MeshStandardMaterial({
      color: new THREE.Color("coral").convertSRGBToLinear(),
      map: baseColor,
      roughnessMap: roughness,
      normalMap: normalMap,
      // flatShading:true,
      // roughness: 0.2,  //reflejo rugosidad del material
      // emissive:0x0000ff
    }); // PBR physicial based material
     // geometrias
    this.geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    // mesh2
    

    }
}

export default Cube;