import naveImagen from '../img/nave.png';

// objeto nave que se importará en el index.js
export class nave { 
    constructor(){
        this.el = document.createElement('img');
        this.el.src = naveImagen;
        document.body.appendChild(this.img);
    }
}