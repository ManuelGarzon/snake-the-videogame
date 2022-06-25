class UI extends Phaser.Scene {
    constructor() {
        super('UI');
    }
    //init es el metodo que se inicia despues de el constructor
  
    preload(){
        console.log('soy UI');
    }
}

export default UI;