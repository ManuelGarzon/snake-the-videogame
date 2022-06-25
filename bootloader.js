class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader');
    }
    //init es el metodo que se inicia despues de el constructor
  
    preload(){
        console.log('soy preload');
        this.scene.start('Play');
    }
}

    export default Bootloader;