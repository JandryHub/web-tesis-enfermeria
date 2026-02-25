import { Scene } from 'phaser';

export class Pesca extends Scene {
    constructor() {
        super('Pesca');
        
        this.palabrasDiabetes = ['Glucosa', 'Páncreas', 'Insulina', 'Tipo 2', 'Resistencia', 'Células', 'Sangre', 'Fibra', 'Glucémico', 'Metformina', 'Monitoreo'];
        this.palabrasTrampa = ['Yeso', 'Bisturí', 'Fractura', 'Asma', 'Gripe', 'Miopía', 'Sutura', 'Anemia', 'Colesterol', 'Ibuprofeno'];
        
        this.puntos = 0;
        this.vidas = 3;
        this.gameOver = false;
    }

    create() {
        this.puntos = 0;
        this.vidas = 3;
        this.gameOver = false;

        // 1. FONDO SANGUÍNEO
        this.cameras.main.setBackgroundColor('#2c040d'); // Rojo oscuro profundo

        // Generar "Glóbulos Rojos" de fondo para darle dinamismo
        this.time.addEvent({
            delay: 800,
            callback: this.generarGlobuloRojo,
            callbackScope: this,
            loop: true
        });

        // 2. INTERFAZ (HUD)
        this.textoPuntos = this.add.text(20, 20, 'Puntos: 0', { 
            fontSize: '28px', fill: '#ffffff', fontStyle: 'bold', shadow: { offsetX: 2, offsetY: 2, color: '#000', blur: 2, fill: true }
        });
        
        this.textoVidas = this.add.text(20, 60, 'Vidas: ♥ ♥ ♥', { 
            fontSize: '28px', fill: '#ff4444', fontStyle: 'bold', shadow: { offsetX: 2, offsetY: 2, color: '#000', blur: 2, fill: true }
        });

        // 3. EL "NANOBOT" (Reemplaza al anzuelo)
        // Usamos un rectángulo blanco con borde cyan brillante
        this.anzuelo = this.add.rectangle(400, 50, 15, 40, 0xffffff);
        this.anzuelo.setStrokeStyle(4, 0x00e5ff); // Borde cyan
        
        this.physics.add.existing(this.anzuelo);
        this.anzuelo.body.setCollideWorldBounds(true); 
        this.estadoAnzuelo = 'esperando'; 

        // 4. GRUPOS
        this.peces = this.physics.add.group();

        this.cursores = this.input.keyboard.createCursorKeys();
        this.teclaEspacio = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Generador de palabras (Un poco más rápido ahora, cada 1.5s)
        this.eventoGenerador = this.time.addEvent({
            delay: 1500,
            callback: this.generarPez,
            callbackScope: this,
            loop: true
        });

        this.physics.add.overlap(this.anzuelo, this.peces, this.pescarPalabra, null, this);
    }

    update() {
        if (this.gameOver) return;

        if (this.estadoAnzuelo === 'esperando') {
            // Movimiento más rápido y fluido
            if (this.cursores.left.isDown) {
                this.anzuelo.body.setVelocityX(-350);
            } else if (this.cursores.right.isDown) {
                this.anzuelo.body.setVelocityX(350);
            } else {
                this.anzuelo.body.setVelocityX(0); 
            }

            if (Phaser.Input.Keyboard.JustDown(this.teclaEspacio)) {
                this.estadoAnzuelo = 'bajando';
                this.anzuelo.body.setVelocityX(0); 
                this.anzuelo.body.setVelocityY(450); // Cae más rápido
            }
        }

        if (this.estadoAnzuelo === 'bajando' && this.anzuelo.y > 560) {
            this.estadoAnzuelo = 'subiendo';
            this.anzuelo.body.setVelocityY(-500); // Sube súper rápido (efecto de jeringa que extrae)
        }

        if (this.estadoAnzuelo === 'subiendo' && this.anzuelo.y <= 50) {
            this.estadoAnzuelo = 'esperando';
            this.anzuelo.body.setVelocityY(0);
            this.anzuelo.y = 50; 
        }
    }

    // --- NUEVO EFECTO: GLÓBULOS ROJOS DE FONDO ---
    generarGlobuloRojo() {
        if (this.gameOver) return;
        const y = Phaser.Math.Between(100, 600);
        const radio = Phaser.Math.Between(10, 40);
        const globulo = this.add.circle(850, y, radio, 0x6e091b); // Círculo rojo oscuro
        globulo.setAlpha(0.5); // Semitransparente para que se vea al fondo
        this.physics.add.existing(globulo);
        globulo.body.setVelocityX(Phaser.Math.Between(-20, -60)); // Se mueven muy lento
    }

    generarPez() {
        if (this.gameOver) return;

        const y = Phaser.Math.Between(150, 500); 
        const esCorrecta = Phaser.Math.Between(0, 1) === 1;
        const listaElegida = esCorrecta ? this.palabrasDiabetes : this.palabrasTrampa;
        const palabraAleatoria = Phaser.Math.RND.pick(listaElegida);
        
        // DISEÑO DINÁMICO DE LAS PALABRAS
        const colorFondo = esCorrecta ? '#e6fffa' : '#fff5f5'; // Verde agüita o rojito claro
        const colorTexto = esCorrecta ? '#009688' : '#e53e3e'; // Texto verde o rojo
        
        const pez = this.add.text(850, y, palabraAleatoria, {
            fontSize: '22px',
            fontFamily: 'Arial',
            fontStyle: 'bold',
            backgroundColor: colorFondo,
            color: colorTexto,
            padding: { x: 15, y: 8 },
            borderRadius: '8px'
        });
        
        this.physics.add.existing(pez);
        this.peces.add(pez);
        
        // Velocidad aleatoria para cada palabra
        const velocidadAleatoria = Phaser.Math.Between(-120, -280);
        pez.body.setVelocityX(velocidadAleatoria);
        pez.esPalabraCorrecta = esCorrecta;

        // ANIMACIÓN: Efecto de flotación (onda senoidal)
        this.tweens.add({
            targets: pez,
            y: pez.y + Phaser.Math.Between(-25, 25), // Sube o baja aleatoriamente
            duration: Phaser.Math.Between(1000, 2000),
            yoyo: true, // Va y regresa
            repeat: -1, // Infinito
            ease: 'Sine.easeInOut' // Movimiento suave
        });
    }

    pescarPalabra(anzuelo, pez) {
        if (this.estadoAnzuelo === 'bajando' || this.estadoAnzuelo === 'subiendo') {
            const eraCorrecta = pez.esPalabraCorrecta;
            
            // Efecto visual al atrapar: un flash blanco donde estaba la palabra
            const flash = this.add.circle(pez.x, pez.y, 30, 0xffffff);
            this.tweens.add({ targets: flash, alpha: 0, scale: 2, duration: 300, onComplete: () => flash.destroy() });
            
            pez.destroy(); 
            
            if (eraCorrecta) {
                this.puntos += 10;
                this.textoPuntos.setText('Puntos: ' + this.puntos);
                // Texto flotante de +10
                this.mostrarTextoFlotante(anzuelo.x, anzuelo.y, '+10', '#00ff00');
            } else {
                this.vidas -= 1;
                // Actualizar interfaz de corazones
                let corazones = '';
                for(let i=0; i<this.vidas; i++) corazones += '♥ ';
                this.textoVidas.setText('Vidas: ' + corazones);
                
                this.cameras.main.shake(200, 0.015);
                this.mostrarTextoFlotante(anzuelo.x, anzuelo.y, '¡ERROR!', '#ff0000');
            }
            
            this.estadoAnzuelo = 'subiendo';
            this.anzuelo.body.setVelocityY(-600);

            if (this.vidas <= 0) {
                this.terminarJuego();
            }
        }
    }

    // Efecto de texto que sube y desaparece
    mostrarTextoFlotante(x, y, mensaje, color) {
        const txt = this.add.text(x, y - 20, mensaje, { fontSize: '24px', fill: color, fontStyle: 'bold' }).setOrigin(0.5);
        this.tweens.add({
            targets: txt, y: y - 80, alpha: 0, duration: 800, onComplete: () => txt.destroy()
        });
    }

    terminarJuego() {
        this.gameOver = true;
        this.anzuelo.body.setVelocity(0, 0);
        this.peces.clear(true, true); 
        this.eventoGenerador.remove(); 
        
        this.add.rectangle(400, 300, 800, 600, 0x000000, 0.85);
        
        this.add.text(400, 200, '¡SISTEMA COMPROMETIDO!', { 
            fontSize: '40px', fill: '#ff4444', fontStyle: 'bold' 
        }).setOrigin(0.5);
        
        this.add.text(400, 280, `Puntuación Clínica: ${this.puntos}`, { 
            fontSize: '32px', fill: '#ffffff' 
        }).setOrigin(0.5);

        const btnReinicio = this.add.text(400, 380, 'Reiniciar Simulación', { 
            fontSize: '24px', fill: '#ffffff', backgroundColor: '#009688', padding: {x: 20, y: 10}, borderRadius: '8px'
        }).setOrigin(0.5).setInteractive();

        btnReinicio.on('pointerdown', () => this.scene.restart());
        btnReinicio.on('pointerover', () => btnReinicio.setStyle({ fill: '#000000', backgroundColor: '#00e5ff' }));
        btnReinicio.on('pointerout', () => btnReinicio.setStyle({ fill: '#ffffff', backgroundColor: '#009688' }));
    }
}