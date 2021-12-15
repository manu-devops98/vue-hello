/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

Bonus:
In una cartella bonus:
Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
Poi aggiungiamo un pulsante per aumentare questo numero. */

const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello World!',
      image: 'https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      width: '400px'
    }
  });