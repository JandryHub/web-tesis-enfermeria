import Phaser from 'phaser';
import { Boot } from './scenes/Boot';
import { Pesca } from './scenes/Pesca';

export const config = {
    type: Phaser.AUTO,
    parent: 'game-container', // Este ID debe coincidir con el <div> en Vue
    width: 800,
    height: 600,
    physics: {
        default: 'arcade', // Físicas 2D para las colisiones del anzuelo
        arcade: {
            gravity: { y: 0 }, // Sin gravedad global por ahora
            debug: false       // Cambiaremos esto a true luego para ver las cajas de colisión
        }
    },
    scene: [Boot, Pesca] // Registramos nuestras escenas
};