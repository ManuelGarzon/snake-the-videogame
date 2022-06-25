import Snake from '../gameobjects/snake.js'
class Play extends Phaser.Scene {
    constructor() {
        super('Play');
    }
    //init es el metodo que se inicia despues de el constructor
  
    preload() {
        console.log('soy Play');
        this.snake = new Snake(this);
    }
    create() {
        this.input.keyboard.on('keydown-RIGHT', () =>  {
           this.snake.changeMov('derecha')
        });
        this.input.keyboard.on('keydown-LEFT', () => {
            this.snake.changeMov('izquierda')
        });
        this.input.keyboard.on('keydown-UP', () => {
            this.snake.changeMov('arriba')
        });
        this.input.keyboard.on('keydown-DOWN', () => {
            this.snake.changeMov('abajo')
        });
    }
    update(time) {
        
        this.snake.update(time)
    }
}

export default Play;