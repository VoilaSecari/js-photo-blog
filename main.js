//CHIAMATA IMMAGINE

// axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
//   const immagine = response.data[0].url;
//   document.getElementById("foto-1").src = immagine;
// });

axios
  .get("https://lanciweb.github.io/demo/api/pictures/")
  .then((response) => {
    const immagini = response.data;
    for (let i = 0; i < 6; i++) {
      const imgEl = document.getElementById(`foto-${i + 1}`);
      if (imgEl && immagini[i]) {
        imgEl.src = immagini[i].url;
      }
    }
  })
  .catch((error) => {
    console.error(
      "Errore ricontrolla, la richiesta non è andata a buon fine :(",
      error
    );
  });
