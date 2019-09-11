import { Component } from '@angular/core';
import { Participante } from './participante.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorteo-ies';

  // participantes: Array<string> = ['Bruno Ceratto', 'Mauro Blacona', 'Hernan Giudici'];

  public inscriptos: Array<Participante>;

  public ganadores: Array<any> = [];

  public p1: Participante;
  public p2: Participante;
  public p3: Participante;
  public p4: Participante;
  public p5: Participante;
  public p6: Participante;
  public p7: Participante;
  public p8: Participante;
  public p9: Participante;
  public p10: Participante;
  public p11: Participante;
  public p12: Participante;
  public p13: Participante;
  public p14: Participante;
  public p15: Participante;
  public p16: Participante;

  constructor() {
    this.p1 = new Participante ('Bruno', 'Ceratto');
    this.p2 = new Participante ('Mauro', 'Ceratto');
    this.p3 = new Participante ('Lucas', 'Ceratto');
    this.p4 = new Participante ('Maximo', 'Ceratto');
    this.p5 = new Participante ('Agu', 'Ceratto');
    this.p6 = new Participante ('Laura', 'Ceratto');
    this.p7 = new Participante ('Miqueas', 'Ceratto');
    this.p8 = new Participante ('Juanjo', 'Ceratto');
    this.p9 = new Participante ('Carina', 'Ceratto');
    this.p10 = new Participante ('Anto', 'Ceratto');
    this.p11 = new Participante ('Maria', 'Ceratto');
    this.p12 = new Participante ('Sebastian', 'Ceratto');
    this.p13 = new Participante ('Diego', 'Ceratto');
    this.p14 = new Participante ('Jose', 'Ceratto');
    this.p15 = new Participante ('Tamara', 'Ceratto');
    this.p16 = new Participante ('Cori', 'Ceratto');

    this.inscriptos = new Array (this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8,
      this.p9, this.p10, this.p11, this.p12, this.p13, this.p14, this.p15, this.p16);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  sorteo() {
    for ( let i = 0; i < 3; i++ ) {
      const ganador = this.getRandomInt(1, 16);
      this.ganadores.push(ganador);
      console.log(ganador);
      console.log(this.ganadores[5]);
    }
    // console.log( ganador );
    // console.log( this.ganadores );
  }

  restart() {
    this.ganadores = [];
  }
}
