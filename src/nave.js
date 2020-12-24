import naveImg from '../img/nave.png'; //ruta de la imagen de la nave

// objeto nave que se importará en el index.js
export class nave { 
    constructor(){
        this.el = document.createElement('img');
        this.el.src = naveImg; // se establece la imagen de la nave
        document.body.appendChild(this.el);

        this.el.className = 'nave'; //clase que se manipula con CSS

        this.setX(window.innerWidth / 2);  //posicionamiento sobre el eje X
        this.setY(window.innerHeight - 80); //posicionamiento sobre el eje Y
    }

    // se ejecuta la configuración de la posición X y Y
    setX(x) {
        this.x = x;
        this.el.style.left = `${this.x}px`; 
    }

    setY(y) {
        this.y = y;
        this.el.style.top = `${this.y}px`;
    }
}