class Gameover extends Phaser.Scene {
    constructor() {
        super('Gameover');
    }
    //init es el metodo que se inicia despues de el constructor
  
    preload(){
        console.log('soy Gameover');
    }
    create(){
        this.scene.stop('UI');
        this.add.dynamicBitmapText(this.sys.game.config.width/2,
            this.sys.game.config.height/2 - 30,
            'pixel','GAMEOVER',20).setOrigin(0.5);
            this.evento = setTimeout(() => {
                this.salirscene();
                }, 5000);

            this.input.keyboard.on('keydown-ENTER',() => {
                this.salirscene();
                })
            
            this.input.on('pointerdown',() => {
                this.salirscene();
              })
    }
    salirscene(){
        clearTimeout(this.evento);
        this.scene.start('Menu');
    }

}

export default Gameover;