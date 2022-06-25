class Gameover extends Phaser.Scene {
    constructor() {
        super('Gameover');
    }
    //init es el metodo que se inicia despues de el constructor
  
    preload(){
        console.log('soy Gameover');
    }
}

export default Gameover;