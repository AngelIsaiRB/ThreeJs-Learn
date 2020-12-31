import * as THREE from "../../node_modules/three/build/three.module.js";
import Scene1 from "./scenes/Scene1.js";



class App {
  constructor(container) {
    this.container = container;

    // escene

    this.scene = new Scene1();
   

    // camera

    this.camera = new THREE.PerspectiveCamera(
      35, //campod e vision  (Field of View)  1-179
      container.clientWidth / container.clientHeight, // espect ratio
      0.1, // que tan seca se renderizan los objetos
      1000 // que tal lejos se renderizan los objetos
    );

    this.camera.position.set(0, 0, 15);

    //  render  s
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);
    this.render();
  }

  onResize(){
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
  }


  render(){
      this.scene.update();
    this.renderer.render(this.scene, this.camera);
    this.renderer.setAnimationLoop(() => this.render());
  }

}

export default App;
