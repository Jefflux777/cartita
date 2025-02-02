
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('¡GRACIAS DE TODO CORAZÓN DANNITA POR ACEPTAR SER MI SAN VALENTÍN! ME HACE MUY FELIZ COMPARTIR ESTE DÍA TAN ESPECIAL CONTIGO. TE QUIERO MUCHÍSIMO.
').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
