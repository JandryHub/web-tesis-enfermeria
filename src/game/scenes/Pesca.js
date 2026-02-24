import { Scene } from 'phaser';

export class Pesca extends Scene {
    constructor() {
        super('Pesca');
        // Nuestro banco de palabras de enfermería
        this.palabras = ['Jeringa', 'Bisturí', 'Tensión', 'Vena', 'Termómetro', 'Catéter', 'Sutura'];
        this.puntos = 0;
    }

    create() {
        // 1. Pintamos el fondo
        this.cameras.main.setBackgroundColor('#006994');

        // 2. Texto de puntuación en la esquina superior izquierda
        this.textoPuntos = this.add.text(16, 16, 'Puntos: 0', { 
            fontSize: '24px', 
            fill: '#ffffff',
            fontFamily: 'Arial'
        });

        // 3. Crear el Anzuelo (Un cuadro rojo por ahora) en la parte de arriba
        this.anzuelo = this.add.rectangle(400, 50, 20, 20, 0xff0000);
        this.physics.add.existing(this.anzuelo);
        this.anzuelo.body.setCollideWorldBounds(true); // Para que no se salga de los bordes
        
        // Máquina de estados para el anzuelo
        this.estadoAnzuelo = 'esperando'; // Puede ser: 'esperando', 'bajando', 'subiendo'

        // 4. Crear el grupo donde vivirán las palabras que nadan
        this.peces = this.physics.add.group();

        // 5. Capturar las teclas (Flechas y Espacio)
        this.cursores = this.input.keyboard.createCursorKeys();
        this.teclaEspacio = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // 6. Generar una nueva palabra cada 2 segundos
        this.time.addEvent({
            delay: 2000,
            callback: this.generarPez,
            callbackScope: this,
            loop: true
        });

        // 7. Detectar colisiones: Si el anzuelo toca un pez, ejecuta "pescarPalabra"
        this.physics.add.overlap(this.anzuelo, this.peces, this.pescarPalabra, null, this);
    }

    update() {
        // LÓGICA DE MOVIMIENTO (Se ejecuta 60 veces por segundo)

        // Si el anzuelo está arriba esperando...
        if (this.estadoAnzuelo === 'esperando') {
            // Movimiento lateral
            if (this.cursores.left.isDown) {
                this.anzuelo.body.setVelocityX(-250);
            } else if (this.cursores.right.isDown) {
                this.anzuelo.body.setVelocityX(250);
            } else {
                this.anzuelo.body.setVelocityX(0); // Detenerse si no presiona nada
            }

            // Lanzar el anzuelo con espacio
            if (Phaser.Input.Keyboard.JustDown(this.teclaEspacio)) {
                this.estadoAnzuelo = 'bajando';
                this.anzuelo.body.setVelocityX(0); // Que caiga recto
                this.anzuelo.body.setVelocityY(350); // Velocidad de caída
            }
        }

        // Si el anzuelo falla y llega al fondo del mar, hacerlo subir
        if (this.estadoAnzuelo === 'bajando' && this.anzuelo.y > 550) {
            this.estadoAnzuelo = 'subiendo';
            this.anzuelo.body.setVelocityY(-350);
        }

        // Si el anzuelo va subiendo y llega a la superficie, detenerlo
        if (this.estadoAnzuelo === 'subiendo' && this.anzuelo.y <= 50) {
            this.estadoAnzuelo = 'esperando';
            this.anzuelo.body.setVelocityY(0);
            this.anzuelo.y = 50; // Ajustar posición exacta
        }
    }

    generarPez() {
        // Elegir una altura aleatoria y una palabra al azar
        const y = Phaser.Math.Between(150, 500); 
        const palabraAleatoria = Phaser.Math.RND.pick(this.palabras);
        
        // Crear el texto simulando que es un pez
        const pez = this.add.text(850, y, palabraAleatoria, {
            fontSize: '20px',
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: { x: 10, y: 5 },
            borderRadius: '5px'
        });
        
        // Activar físicas para este texto y agregarlo al grupo
        this.physics.add.existing(pez);
        this.peces.add(pez);
        
        // Hacer que nade hacia la izquierda
        pez.body.setVelocityX(-150);
    }

    pescarPalabra(anzuelo, pez) {
        // Solo puede atrapar si el anzuelo está bajando o subiendo
        if (this.estadoAnzuelo === 'bajando' || this.estadoAnzuelo === 'subiendo') {
            pez.destroy(); // Eliminar la palabra de la pantalla
            
            // Sumar puntos
            this.puntos += 10;
            this.textoPuntos.setText('Puntos: ' + this.puntos);
            
            // Obligar al anzuelo a recogerse inmediatamente
            this.estadoAnzuelo = 'subiendo';
            this.anzuelo.body.setVelocityY(-350);
        }
    }
}