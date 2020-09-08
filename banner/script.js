let img = [
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80",
    "https://images.unsplash.com/photo-1570481060336-9c82d078588e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&auto=format&fit=crop&w=1532&q=80",
    "https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  ],
  temp = 5000,
  tr = true,
  min = 0,
  index = min,
  max = img.length,
  int = setInterval(auto, temp);

function troca(foto) {
  document.querySelector(
    "#moldura",
  ).style.backgroundImage = `URL( ${img[foto]})`;
  document.querySelector("#moldura").addEventListener("transitionend", () => {
    tr = true; //aguardando o final da transição para liberar o botão
  });
}

function prox(dr) {
  clearInterval(int); // limpa o intervalo para continuar na sequencia
  if (tr) {
    tr = false;
    index += dr;
    if (index >= max) {
      index = min;
    }
    if (index <= min) {
      index = max - 1;
    }
    troca(index);
  }
  int = setInterval(auto, temp);
}
function auto() {
  tr = false;
  index++;
  if (index >= max) {
    index = min;
  }
  troca(index);
}
window.addEventListener("load", troca(0));
