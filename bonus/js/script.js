/* Descrizione:
Bonus:
In una cartella bonus:
Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
Poi aggiungiamo un pulsante per aumentare questo numero. */

const app = new Vue(
  {
    el: '#app',
    data: {
     message: 'Inserisci testo',
     image: 'https://images.unsplash.com/photo-1633113088983-12fb3b2fe0ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
     width: '300px',
     display: 'd-block',
     number: 1
    },
    methods: {
      addNumbers: function () {
          this.number += 1;
      },
      removeNumbers: function () {
        if (this.number == 0) {
          this.number = 0;
        } else {
          this.number -= 1;
        }
      }
    }
  }
);