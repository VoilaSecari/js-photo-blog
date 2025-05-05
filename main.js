//CHIAMATA IMMAGINE

//Qui avevo provato a lasciare tutte le card in pagina e sostituire gli elementi anziché crearla direttamente.

// axios
//   .get("https://lanciweb.github.io/demo/api/pictures/")
//   .then((response) => {
//     const immagini = response.data;
//     for (let i = 0; i < 6; i++) {
//       const imgEl = document.getElementById(`foto-${i + 1}`);
//       if (imgEl && immagini[i]) {
//         imgEl.src = immagini[i].url;
//       }
//     }
//   })
//   .catch((error) => {
//     console.error(
//       "Errore ricontrolla, la richiesta non è andata a buon fine :(",
//       error
//     );
//   });

// IMPOSTARE ELEMENTO CONTAINER
const postsContainerEl = document.getElementById("posts-container");

// NUOVA CHIAMATA, CREANDO POST CON JS E BASTA

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const posts = response.data;
  // console.log(posts);

  //POST SONO CORRETTAMENTE STATI RICEVUTI

  //CREAZIONE OGNI POST
  let cardHTML = "";
  posts.forEach((post) => {
    cardHTML += generatePostCard(post);
  });

  postsContainerEl.innerHTML += cardHTML;
});

// FUNZIONE ---> sostituzione dati post in HTML

const generatePostCard = (post) => {
  const cardHTML = `
  <div class="card">
          <img src="./IMG/pin.svg" alt="Pin" class="card-pin" />
          <div class="card-content">
            <img src="${post.url}" alt="${post.title}" />
          </div>
          <div class="card-content">
            <div class="card-title">
              <p>
                ${post.title}
              </p>
            </div>
            <div class="card-date">
              <p id="card-date-text">
                ${post.date}
              </p>
            </div>
          </div>
        </div>
  `;

  // RITORNO funzione arrow

  return cardHTML;
};
