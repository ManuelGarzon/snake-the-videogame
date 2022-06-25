class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }
    //init es el metodo que se inicia despues de el constructor
  
    preload(){
        console.log('soy Menu');
    }
}

export default Menu;