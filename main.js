//CHIAMATA IMMAGINE

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  let immagine = response.data[0].url;
  document.getElementById("foto-1").src = immagine;
});
