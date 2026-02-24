import { Scene } from 'phaser';

export class Boot extends Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        // Aquí cargaremos los "assets" visuales y sonoros más adelante
    }

    create() {
        // Inmediatamente después de cargar, iniciamos la escena del juego
        this.scene.start('Pesca');
    }
}