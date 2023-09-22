class CalculadoraDeNotas {
    constructor() {
      this.inicializarEventos();
    }
  
    inicializarEventos() {
      const botonCalcular = document.getElementById('calcular');
      botonCalcular.addEventListener('click', () => this.calcularNotaFinal());
    }
  
    calcularNotaFinal() {
      const nota1 = parseFloat(document.getElementById('nota1').value);
      const nota2 = parseFloat(document.getElementById('nota2').value);
      const nota3 = parseFloat(document.getElementById('nota3').value);
  
      const arrayNotas = [nota1, nota2, nota3];
      const notaFinal = this.calcularPromedio(arrayNotas);
  
      this.mostrarResultado(notaFinal);
    }
  
    calcularPromedio(notas) {
      const total = notas.reduce((acumulador, nota) => acumulador + nota, 0);
      return total / notas.length;
    }
  
    mostrarResultado(notaFinal) {
      const resultadoElement = document.getElementById('nota-final');
      resultadoElement.textContent = notaFinal;
    }
  }
  
  const calculadora = new CalculadoraDeNotas();
  