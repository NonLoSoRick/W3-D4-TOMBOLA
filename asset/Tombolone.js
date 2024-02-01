
function creaTabella() {
  
  const tabella = document.createElement('table');

  for (let i = 0; i < 8; i++) {
    const riga = document.createElement('tr');

  
    for (let j = 1; j <= 10; j++) {
      const numero = i * 10 + j;
      const cella = document.createElement('td');
      cella.textContent = numero;
      riga.appendChild(cella);
    }

   
    tabella.appendChild(riga);
  }


  document.body.appendChild(tabella);
}


creaTabella();