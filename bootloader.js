class Bootloader extends Phaser.Scene {
	constructor() {
			super('Bootloader');
	}
	//init es el metodo que se inicia despues de el constructor

	preload() {
			console.log('soy preload');
			this.load.image('cuerpo', './assets/body.png');
			this.load.image('comida', './assets/food.png');
			this.load.image('tablero', './assets/tablero.png');
	}

	create() {
			this.scene.start('Play');
	}

}

export default Bootloader;