const suma = (a:number, b:number): number =>{
    return a+b;
};


// Función simple en TypeScript
function saludo(nombre: string): string {
    return `Hola, ${nombre}!`;
  }
  console.log(saludo("Ana")); // Salida: Hola, Ana!
  
  
  // Definición de una clase en TypeScript
  class Persona {
    private nombre: string;
   
    constructor(nombre: string) {
      this.nombre = nombre;
    }
   
    public saluda(): string {
      return `Hola, soy ${this.nombre}`;
    }
  }
   
  const persona = new Persona("Carlos");
  console.log(persona.saluda()); // Salida: Hola, soy Carlos