// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:

//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

//var spanSelect=document.querySelector(".selected");
//var elementoPadre = spanSelect.parentElement;

var nodeList = [];

function addClass() {
  let selected = document.querySelector(".selected");

  let padre = selected.parentNode.parentNode;

  let hijos = padre.childNodes;

  let contador = 1;
  for (let i = 0; i < hijos.length; i++) {
    if (hijos[i] instanceof HTMLLIElement) {
      let il = hijos[i].children;
      il[0].classList.add("element-" + contador);
      contador++;
    }
  }
}

function editLista1() {
  let selected = document.querySelector(".selected");

  let padre = selected.parentNode.parentNode;

  let hijos = padre.childNodes;

  hijos[3].remove();
  hijos[6].remove();
}

function list2Create() {
  let lista = document.getElementById("list2");

  let btn1 = document.createElement("BUTTON");
  btn1.classList.add("element-1");
  btn1.innerHTML = "text example 1";

  let btn2 = document.createElement("BUTTON");
  btn2.classList.add("element-3");
  btn2.innerHTML = "text example 3";

  let btn3 = document.createElement("BUTTON");
  btn3.classList.add("element-5");
  btn3.innerHTML = "text example 5";
  btn3.setAttribute("id", "btn3");

  let li1 = document.createElement("LI");
  let li2 = document.createElement("LI");
  let li3 = document.createElement("LI");

  li1.appendChild(btn1);
  li2.appendChild(btn2);
  li3.appendChild(btn3);

  lista.appendChild(li1);
  lista.appendChild(li2);
  lista.appendChild(li3);
}

function disableItem(id) {
  let disabledItem = (document.getElementById(id).disabled = true);
}

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");

  addClass();
  editLista1();
  list2Create();
  disableItem("btn3");
}
