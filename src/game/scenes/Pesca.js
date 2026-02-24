import { Scene } from 'phaser';

export class Pesca extends Scene {
    constructor() {
        super('Pesca');
        
        // 1. Nuestros bancos de palabras (El conocimiento médico)
        // 1. Las palabras correctas ahora coinciden EXACTAMENTE con las etiquetas de las tarjetas
        this.palabrasDiabetes = [
            'Glucosa', 'Páncreas', 'Insulina', 
            'Tipo 2', 'Resistencia', 'Células', 
            'Sangre', 'Fibra', 'Glucémico', 
            'Metformina', 'Monitoreo'
        ];
        
        // Las palabras trampa (Otras cosas médicas o generales que restan vidas)
        this.palabrasTrampa = [
            'Yeso', 'Bisturí', 'Fractura', 'Asma', 
            'Gripe', 'Miopía', 'Sutura', 'Anemia', 
            'Colesterol', 'Ibuprofeno'
        ];
        // Variables de estado del juego
        this.puntos = 0;
        this.vidas = 3;
        this.gameOver = false;
    }

    create() {
        // Reiniciamos las variables cada vez que la escena se carga (por si el jugador reinicia)
        this.puntos = 0;
        this.vidas = 3;
        this.gameOver = false;

        // Pintamos el fondo
        this.cameras.main.setBackgroundColor('#006994');

        // 2. Interfaz en pantalla (HUD)
        this.textoPuntos = this.add.text(16, 16, 'Puntos: 0', { 
            fontSize: '24px', fill: '#ffffff', fontFamily: 'Arial', fontStyle: 'bold'
        });
        
        this.textoVidas = this.add.text(16, 50, 'Vidas: 3', { 
            fontSize: '24px', fill: '#ff4444', fontFamily: 'Arial', fontStyle: 'bold'
        });

        // 3. Crear el Anzuelo
        this.anzuelo = this.add.rectangle(400, 50, 20, 20, 0xff0000);
        this.physics.add.existing(this.anzuelo);
        this.anzuelo.body.setCollideWorldBounds(true); 
        this.estadoAnzuelo = 'esperando'; 

        // 4. Grupo donde vivirán las palabras
        this.peces = this.physics.add.group();

        // 5. Controles del teclado
        this.cursores = this.input.keyboard.createCursorKeys();
        this.teclaEspacio = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // 6. Generador de palabras (Aparece una cada 2 segundos)
        this.eventoGenerador = this.time.addEvent({
            delay: 2000,
            callback: this.generarPez,
            callbackScope: this,
            loop: true
        });

        // 7. Detectar colisiones
        this.physics.add.overlap(this.anzuelo, this.peces, this.pescarPalabra, null, this);
    }

    update() {
        // Si el jugador perdió, ignoramos las teclas y el movimiento
        if (this.gameOver) return;

        // LÓGICA DE MOVIMIENTO
        if (this.estadoAnzuelo === 'esperando') {
            if (this.cursores.left.isDown) {
                this.anzuelo.body.setVelocityX(-250);
            } else if (this.cursores.right.isDown) {
                this.anzuelo.body.setVelocityX(250);
            } else {
                this.anzuelo.body.setVelocityX(0); 
            }

            if (Phaser.Input.Keyboard.JustDown(this.teclaEspacio)) {
                this.estadoAnzuelo = 'bajando';
                this.anzuelo.body.setVelocityX(0); 
                this.anzuelo.body.setVelocityY(350); 
            }
        }

        if (this.estadoAnzuelo === 'bajando' && this.anzuelo.y > 550) {
            this.estadoAnzuelo = 'subiendo';
            this.anzuelo.body.setVelocityY(-350);
        }

        if (this.estadoAnzuelo === 'subiendo' && this.anzuelo.y <= 50) {
            this.estadoAnzuelo = 'esperando';
            this.anzuelo.body.setVelocityY(0);
            this.anzuelo.y = 50; 
        }
    }

    generarPez() {
        if (this.gameOver) return;

        const y = Phaser.Math.Between(150, 500); 
        
        // Decidimos al azar (50/50) si lanzamos una palabra correcta o una trampa
        const esCorrecta = Phaser.Math.Between(0, 1) === 1;
        const listaElegida = esCorrecta ? this.palabrasDiabetes : this.palabrasTrampa;
        const palabraAleatoria = Phaser.Math.RND.pick(listaElegida);
        
        const pez = this.add.text(850, y, palabraAleatoria, {
            fontSize: '20px',
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: { x: 10, y: 5 },
            borderRadius: '5px'
        });
        
        this.physics.add.existing(pez);
        this.peces.add(pez);
        pez.body.setVelocityX(-150);
        
        // Le "pegamos" una etiqueta invisible a la palabra para saber si era la correcta
        pez.esPalabraCorrecta = esCorrecta;
    }

    pescarPalabra(anzuelo, pez) {
        if (this.estadoAnzuelo === 'bajando' || this.estadoAnzuelo === 'subiendo') {
            // Guardamos si era correcta antes de destruirla
            const eraCorrecta = pez.esPalabraCorrecta;
            pez.destroy(); 
            
            if (eraCorrecta) {
                // ACERTÓ
                this.puntos += 10;
                this.textoPuntos.setText('Puntos: ' + this.puntos);
            } else {
                // SE EQUIVOCÓ
                this.vidas -= 1;
                this.textoVidas.setText('Vidas: ' + this.vidas);
                
                // Efecto de cámara temblando para indicar error
                this.cameras.main.shake(200, 0.01);
            }
            
            // El anzuelo sube automáticamente
            this.estadoAnzuelo = 'subiendo';
            this.anzuelo.body.setVelocityY(-350);

            // Verificar si se quedó sin vidas
            if (this.vidas <= 0) {
                this.terminarJuego();
            }
        }
    }

    terminarJuego() {
        this.gameOver = true;
        
        // Detenemos todo
        this.anzuelo.body.setVelocity(0, 0);
        this.peces.clear(true, true); // Borramos las palabras de la pantalla
        this.eventoGenerador.remove(); // Dejamos de generar palabras
        
        // Pantalla oscura semitransparente
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.8);
        
        // Textos de fin de juego
        this.add.text(400, 200, '¡SIN VIDAS!', { 
            fontSize: '48px', fill: '#ff4444', fontStyle: 'bold' 
        }).setOrigin(0.5);
        
        this.add.text(400, 280, `Puntuación Final: ${this.puntos}`, { 
            fontSize: '32px', fill: '#ffffff' 
        }).setOrigin(0.5);

        // Botón interactivo para reiniciar
        const btnReinicio = this.add.text(400, 380, 'Volver a intentar', { 
            fontSize: '24px', fill: '#ffffff', backgroundColor: '#009688', padding: {x: 20, y: 10}, borderRadius: '5px'
        }).setOrigin(0.5).setInteractive();

        // Al hacer clic en el botón, reiniciamos la escena actual
        btnReinicio.on('pointerdown', () => {
            this.scene.restart();
        });
        
        // Efecto visual al pasar el mouse por encima del botón
        btnReinicio.on('pointerover', () => btnReinicio.setStyle({ fill: '#000000', backgroundColor: '#ffffff' }));
        btnReinicio.on('pointerout', () => btnReinicio.setStyle({ fill: '#ffffff', backgroundColor: '#009688' }));
    }
}