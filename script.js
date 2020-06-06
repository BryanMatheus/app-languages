document.getElementById("add").onclick = function inserirLinguagem(e) {
  e.preventDefault();

  var texto = document.mainForm.language.value;
  if (!texto) {
    return;
  }
  var lista = document.getElementById("list-languages");
  var novoItem = document.createElement("li");
  var novoTexto = document.createTextNode(texto);
  lista.appendChild(novoItem);
  novoItem.appendChild(novoTexto);
};
