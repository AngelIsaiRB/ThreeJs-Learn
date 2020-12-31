import * as THREE from "../../node_modules/three/build/three.module.js";
import Cube from "../objects/Cube.js";

class Scene1 extends THREE.Scene {
  constructor() {
    super();
    this.background = new THREE.Color("skyblue").convertSRGBToLinear();
    this.create();
  }

  create() {
      this.cube = new Cube();
      this.add(this.cube);
        // Ligth
    // const ambientLigth = new THREE.AmbientLight(0xffffff,1);
    // scene.add(ambientLigth);
    const hemisfereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
    this.add(hemisfereLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.add(directionalLight);

    directionalLight.position.set(0.8, 2, 4);
  }

  update(){
      this.cube.rotateX(0.01);
  }
}

export default Scene1;
