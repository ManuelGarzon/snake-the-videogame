import snake from '../gameobjects/snake.js'
class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }
    //init es el metodo que se inicia despues de el constructor
  
    preload() {
        console.log('soy Play');
        this.snake = new snake (this);
    }
}

export default Play;