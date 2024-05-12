// Definimos una clase Persona
class Persona {
    constructor(nombre, edad) {
      this._nombre = nombre;
      this._edad = edad;
    }
  
    // Getter para obtener el nombre
    get nombre() {
      return this._nombre;
    }
  
    // Setter para establecer el nombre
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    // Getter para obtener la edad
    get edad() {
      return this._edad;
    }
  
    // Setter para establecer la edad
    set edad(nuevaEdad) {
      if (typeof nuevaEdad === 'number' && nuevaEdad >= 0) {
        this._edad = nuevaEdad;
      } else {
        console.error('La edad debe ser un número positivo');
      }
    }
  }
  
  // Creamos una instancia de Persona
  const persona = new Persona('Juan', 30);
  
  // Accedemos y modificamos las propiedades usando los getters y setters
  console.log('Nombre:', persona.nombre); // Obtener nombre
  persona.nombre = 'Pedro'; // Establecer nombre
  console.log('Nuevo nombre:', persona.nombre); // Verificar el nuevo nombre
  
  console.log('Edad:', persona.edad); // Obtener edad
  persona.edad = 25; // Establecer edad
  console.log('Nueva edad:', persona.edad); // Verificar la nueva edad
  
  persona.edad = -5; // Intentar establecer una edad negativa (no funcionará)
  console.log('Edad después de intentar establecer una edad negativa:', persona.edad); // Verificar que la edad no cambió
  