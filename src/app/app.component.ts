import { Component } from '@angular/core';
import { Participante } from './participante.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorteo-ies';

  participantes: Array<string> = ['Felicitas Centeno', 'Belen Orduna', 'Nadia Zampar',
    'Francisco Torres', 'Fiorela Ermacora', 'Candelaria Candioti', 'Candela Rivasseau',
    'Abril Cuello', 'Victoria De Caminos', 'Jonatan Guimenez', 'Pedro De Caminos', 'Yamina Mangisch',
    'Nahir Ramírez', 'Micaela	Espindola', 'Lionela Cicerchia', 'Agustina Nacimbera', 'Brenda Sánchez',
    'Belen Pautasso', 'Daiana Gauna', 'Luciana Bonahora', 'Victoria Amor', 'Lara Losano', 'Loreley Diaz',
    'Melina Rojas', 'Agustina Landra', 'Daiana Yacob', 'Tiziana Nani', 'Brian Gabriel Ahuir',
    'Mauro Zanella', 'Valentina Salina', 'Yael Arredondo', 'Guillermina Paulon', 'Ileana Sala',
    'Milagros Cimadevilla', 'Josefina Giorgi', 'Sofía Neville', 'Candela Medrano',
    'Fiore Escobar Ranzani', 'Abril Fernandez', 'Emiliano Rabbia', 'Alexis Funes', 'Luciano Bahl',
    'Maia Espindola', 'Rosalia Nardelli', 'Milagros Gomez', 'Milena Consentino', 'Lucrecia Martinez',
    'Julian Yappert', 'Daiana Diaz', 'Tamara Diaz',  'Agustina Salcedo', 'Florencia Diaz',
    'Facundo González', 'Lucía Caluva', 'Maiten Olivero', 'Cecilia Contursi', 'Yazmín Gomez',
    'Ornella Sanchez', 'Danise Olivares', 'Milagros Giacomino','Agustina Dominguez', 'Susana Seip',
    'Agustina Sosa', 'Cristina Enrique', 'Pamela Molina', 'María InésTibaldo', 'Nadia Rodríguez',
    'Ana Paula Garay', 'Gianella Fachini', 'Leila López', 'Fiorella Iordalo', 'Alma Arilla',
    'Julieta Palacios', 'Antonela Wettsten', 'Darío Menéndez', 'Camila Vega', 'Amparo Langhi',
    'Victoria Ramos', 'Anahel Moreyra', 'Camila Escalante', 'Gabriela Lej', 'Michael Zalazar',
    'Rocío Barzante', 'Azul Piñeiro', 'Santiago Zinoni', 'Valentina Ledesma', 'Joaquín Alvarez',
    'Josefina Nuñez', 'Josefina Milano', 'Ailén Braida', 'Rocío Basualdo', 'María Sol García',
    'Valentina Bircher', 'Valentina Borge', 'Lara Pintos', 'Maximiliano Agustín Burgos',
    'Julieta Bastia', 'Fiama Salva', 'Agustina Beck', 'Lara Valenzuela', 'Jeremias Fernandez',
    'Magali Galvez', 'Ludmila Gonzalez', 'Rocio Farias', 'Priscila Navarro', 'Giovana Gatti',
    'Florencia Ríos', 'Sara Molet', 'Valentina Dupraz', 'Celina Andreotti', 'Candela Durand',
    'Narela Herman', 'Leonor Mesa', 'joaquin herzog', 'Daniela cabaña', 'Catherine Fernández',
    'Eugenia Reucci',
    'Ignacio Pajon',
    'Milagros Campos',
    'Lucia Cura',
    'Camila Espinosa',
    'Sofía Ghisolfi',
    'Irina Perino',
    'Abigail Saucedo',
    'Leandro Lezcano',
    'Noelia Alassia',
    'Agustín Fernandez',
    'Sheila Riera',
    'Nayibe Suarez',
    'Selene Suarez',
    'Aylen Wagner',
    'Gaspar Lucietto',
    'Camila Ritvo',
    'Evelin Bertossi',
    'Jackeline Veron',
    'Georgina Galvan',
    'milagros valenzuela',
    'facundo mansilla',
    'Jazmin Bastisla',
    'Maria Lara Roland',
    'Ludmila Alaniz',
    'Avril Perez',
    'Florencia Paz',
    'Maria Luz Aguirre',
    'Victoria Jagou',
    'Sofia Rolon',
    'Julieta Echague',
    'Julieta Gonzalez',
    'Lucila Rubio',
    'Germán Blanco',
    'Nara Chia',
    'Antonella Galarza',
    'Florencia Maldonado',
    'Yasmin Diaz',
    'Azul Alovatti',
    'Milton Gomez',
    'Julieta Duarte',
    'Alejandra Benitez',
    'Juan Manuel Oliviero',
    'Mauro Rizzo',
    'Lautaro Leiva',
    'Matias Ducatto',
    'Lionel Perez',
    'Aylen Gomez',
    'Valentina Olive',
    'Wanda Klenrey',
    'Sebastián Aquino',
    'Francisco Alegre',
    'Rosario Miranda',
    'Huerto Botta',
    'David Maciel',
    'Mateo Maciel',
    'Ignacio Vendrell',
    'Sebastián Solís',
    'Florencia Ferger',
    'Fabricio Pallotti',
    'Matias Gutiérrez',
    'Milagros Quiroga',
    'Lola Perezlindo',
    'Candela Kelly Sánchez',
    'Angel Acuña',
    'Ludmila Cueva',
    'Candela Ingrasciotta',
    'Yael Cusinier',
    'Candela Yost',
    'Rocio Correa',
    'Araceli Kaufman',
    'Facundo Gomez',
    'Florencia Calderón',
    'Evangelina Fux',
    'Loana Natalia Guadalupe Olivieri',
    'Francisco Zeller',
    'LailaVazquez',
    'Rosalia Sanido',
    'Constanza Raimondi',
    'Joaquín Stessens',
    'Thomas Nai',
    'Camila Marchi',
    'Magdalena Marsch',
    'Jeremias Grandolio',
    'Tomas Bianco',
    'Lucas Brussa',
    'Rodrigo Mendoza',
    'Joel Maximiliano Lopez',
    'Cristian Leonel Molinas',
    'Eliseo Birollo',
    'Francisco Lopez',
    'Celeste Klein',
    'Pilar Aizpun',
    'Ana Laura De Los Santos',
    'Candela Melero',
    'Franco Ramayon',
    'Florencia Magalí Quinteros',
    'Milagros Sanchez',
    'Brisa Lorenzo',
    'Mailen Hillier',
    'antonella blanco',
    'Oriana Luque',
    'fiorella talone',
    'jazmin pujato',
    'yazmina bevilacqua',
    'Ludmila Olmedo',
    'Valentina Moreno Malatesta',
    'Giuliana Spitale',
    'Agustina Valdebenito',
    'martin luna',
    'Ciro Brarda',
    'Bruno Neder',
    'Diego Valentin Salinas',
    'Narena Paira',
    'Candela Caraballo',
    'Ignacio Rabellatu',
    'Camila Borgna',
    'Aixa Monzon',
    'Jimena Cantero',
    'Valentina Rigoni',
    'Ivan Slobodianiuk',
    'Camila Landolfi',
    'Lara Gaitan',
    'Jazmín Benavidez',
    'Carmela Busaniche',
    'Belén Gómez',
    'Morena Bello',
    'Ivan Escobar',
    'Facundo Ayala',
    'Bautista Courault',
    'Stefania Cisar',
    'Avril Savoie',
    'Brian Brites',
    'Sofia Humhofe',
    'Melina Casanova',
    'Juan Cruz Bisegna',
    'Melany Bugnon',
    'Agustín Escobar',
    'Tomas Ermolli',
    'Selene Zimmermann',
    'Agustina Roblero',
    'Matias Gomez',
    'Avril Utrera',
    'Sofia Melcratti',
    'Milagros Guini',
    'Yazmin Duarte',
    'Sofia Galarza',
    'Aldana Fernandez',
    'Elena Borzatta',
    'Micaela Asis',
    'Milagros Cerf',
    'Priscila Fabro',
    'Valentina Potolicchio',
    'Camila Gudiño',
    'Augusto Cabral',
    'Azul Cabral',
    'Brenda Ramos',
    'Juliana Bertone',
    'Giovani Rostagno',
    'Georgina Rolón',
    'Juan Fort',
    'Franco Jacob',
    'Luciano Turriani',
    'Dana Ruiz',
    'Ayelen Gomez',
    'Zoe Costa',
    'Irina Ruiz',
    'Catalina Santa Cruz',
    'Giana Masseroni',
    'Brisa Birollo',
    'Tomás Ibarrola',
    'Florencia Hernández',
    'Gabriel Mejias',
    'Lucas Szkarlat',
    'Rocío Flores',
    'Abril García',
    'Sofía Noguera',
    'Lucia Massoni',
    'Alán Obregón',
    'Santiago Bernal',
    'Braulio Gauna',
    'Milagros Chetta',
    'Franco Siares',
    'Sofía Gallo',
    'Constanza Romano',
    'Kevin Enrique',
    'Aramis Mayr',
    'Micaela Cordo',
    'Victoria Hernández',
    'Sabrina Ruiz Moreno',
    'Lucía Olmos',
    'Brian Baez',
    'Erica Gaibe',
    'Milagros Baarts',
    'Rita Geist',
    'Paula Álvarez',
    'Fatima Rolon',
    'Ezequiel González',
    'Lara Goncebat',
    'Agustina Montenegro',
    'Mirlin Bo',
    'Aymara Costa',
    'Virginia Molina',
    'Fausto Siviero',
    'Juan Martín Romano',
    'Mercedes Fernández',
    'Amancay Aranda',
    'Tomás Villarreal',
    'Agustina Fernandez',
    'Marcos Oliva',
    'Cristal Cáceres',
    'Ailen Molina',
    'Ignacio Antoniazzi',
    'Felipe Albarenque',
    'Facundo Reichholz',
    'Carlos Yedro',
    'Juan Bautista Sylvestre',
    'Conrado Canete',
    'Jeremías García',
    'Angel Julian Hernandez',
    'Agustín Gamboa',
    'Elisa Brudels',
    'Augusto Deppeler',
    'Florencia Millesimo',
    'Agustina Bordenaro',
    'Valentina Monje',
    'Jazmín Scandolo',
    'Matias Borda',
    'Alfonsina Consentino',
    'Irina Bordignon',
    'Antonela Raponi',
    'Agustina Picech',
    'Luka Vázquez',
    'Geronimo Diaz',
    'Ludmila Bonetto',
    'Camila Fiorenza',
    'Candelaria Morano',
    'Josefina Schonfeld',
    'Antonela Peralta',
    'Alejandro Román',
    'Estanislao Herrera',
    'Valentin Lopez',
    'Juan Ignacio Vacirca',
    'Antonio Melini',
    'Valentina Herrera',
    'Giuliana Leccini',
    'Valentina Gigena',
    'Julieta Bucci',
    'Nicolas Oesquer',
    'Emiliano Gonzalez',
    'Pablo Domet Hurani',
    'Jimena Garibay',
    'Enzo Buttarelli',
    'Micaela Gatti',
    'Xuan Galanti',
    'Santiago Codesal',
    'Valentin Rincón',
    'Sofía Ponce De Leon',
    'Sebastián Kisser',
    'María Belen Lescano',
    'Efrain Josue Salva',
    'Teo José Ava',
    'Mlagros Micheloni',
    'Sofía Yacovella',
    'Clarisa Pozza',
    'Valentina Sasotti',
    'Josefina Romero',
    'Alejandrina Antille',
    'Brandon Vergara',
    'Jeremías Vergara',
    'Juan Sánchez'
  ];


  public ganadores: Array<any> = [];

  /*
  public inscriptos: Array<Participante>;

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
  */

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  sorteo() {
    
      const ganador = this.getRandomInt(1, 388);
      this.ganadores.push(ganador);
      // console.log(ganador);
      // console.log(this.ganadores[]);
    
    // console.log( ganador );
    // console.log( this.ganadores );
  }

  restart() {
    this.ganadores = [];
  }
}
