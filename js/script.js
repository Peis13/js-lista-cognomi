// INPUT
var cognome = document.getElementById('cognome');
var errore = document.getElementById('errore');
var posizione = document.getElementById('posizione');
var listaPresenti = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
// Riordino l'array
listaPresenti.sort(
  function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }
);

// BOTTONI
var aggiungi = document.getElementById('aggiungi');
var togli = document.getElementById('togli');

// OUTPUT
var listaCognomi = document.getElementById('lista-cognomi');
var nuoviArrivati = [];

// Inserisco nella lista vuota gli elementi già presenti nel mio array
for (var i = 0; i < listaPresenti.length; i++) {
  listaCognomi.innerHTML += '<li>' + listaPresenti[i] + '</li>';
}

// AGGIUNGI
aggiungi.addEventListener('click',
  function() {

    // Assegno a una nuova variabile il cognome inserito dall'utente
    var cognomeInserito = cognome.value;

    // Se il valore inserito non è un numero,
    if (isNaN(cognomeInserito)) {

      // allora aggiungi il valore all'elenco di cognomi
      nuoviArrivati.push(cognomeInserito);
      listaPresenti.push(cognomeInserito);

      // Riordino l'array dei cognomi presenti, i nuovi li lascio così come sono
      listaPresenti.sort(
        function (a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        }
      );

      // Azzero la lista scritta precedentemente
      listaCognomi.innerHTML = '';

      // Inserisco nella lista precedente il cognome inserito, riscrivendola
      for (var i = 0; i < listaPresenti.length; i++) {
        listaCognomi.innerHTML += '<li>' + listaPresenti[i] + '</li>';
      }

      // altrimenti mostra un messaggio di errore
    } else {
      errore.className = 'visible'
    }

    // Calcolo la posizione del cognome inserito e lo stampo a schermo
    var numPosizione = (listaPresenti.indexOf(cognomeInserito) + 1);
    posizione.innerHTML = 'La posizione del tuo cognome nella lista è ' + numPosizione;
    posizione.className = 'visible'
  }
)

// TOGLI
togli.addEventListener('click',
  function() {

    // Reset campi
    cognome.value = '';
    errore.className = 'hidden';
    posizione.className = 'hidden';
  }
)
