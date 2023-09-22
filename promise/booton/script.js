// Funciones

const getData = (n1, n2, n3) => {
    return new Promise((resuelve, rechaza) => {
      setText('¿puedo ir a jugar?');
      setTimeout(() => {
        resuelve(true);
      }, 2000); 
    });
  };
  
  const setText = (data) => {
    miDiv.textContent = data; 
  };
  
  const showData = () => {
    return new Promise((resuelve1, rechaza1) => {
      setText('Esperando autorización');
      setTimeout(() => {
        resuelve1({ jugador: 'brayan' }); 
      }, 2000); 
    });
  };
  
  // Objetos
  
  const miboton = document.querySelector('#boton');
  const miDiv = document.querySelector('#miDiv');
  
  miboton.addEventListener('click', () => {
    getData().then((permitido) => {
      if (permitido) {
        return showData();
      }
    }).then((user) => {
      setText(user.jugador);
    });
  });
  