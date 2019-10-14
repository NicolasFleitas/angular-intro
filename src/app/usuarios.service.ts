import { Injectable } from '@angular/core';


// Este decorador Injectable es otra forma de utilizar nuestro servicio en la aplicacion

// @Injectable({
//   providedIn: 'root'
// })

// asi se registraria el servicio en el nivel de root de nuestra aplicacion para que otros componentenes
// puedan utilizarlo

export class UsuariosService {
  getUsuarios() {
    return [
      {
        nombre: 'Luis Salinas',
        edad: 67,
        Hobby: 'Cantar'
      },
      {
        nombre: 'Nicolas Fernando',
        edad: 67,
        Hobby: 'Correr'
      },
      {
        nombre : 'Rebecca Rodriguez',
        edad : 20,
        hobby: 'Sleep'
      }
    ];
  }
}
