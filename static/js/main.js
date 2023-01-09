/*Programacion en JS*/

/* Variable para nuestro efecto de typing */
var typed = new Typed(".typing-3", {
    strings: ["Challenge #1: Encriptador y Desencriptador"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true
});


/*///////////////////////////Creacion de constantes a utilizar///////////////////////////*/

/*Se toman los datos con el getElementById y se le asigna a una constante*/

const textoEntrada = document.getElementById ("textoEntrada");

/*Elementos a eliminar para despejar el div Derecha*/
const escudo = document.getElementById ("escudo");
const textoDerecha_1 = document.getElementById ("textoDerecha_1");
const textoDerecha_2 = document.getElementById ("textoDerecha_2");

const divDerecha = document.getElementById ("divDerecha");
const botonEncriptar = document.getElementById ("botonEncriptar");
const botonDesencriptar = document.getElementById ("botonDesencriptar");

const textarea = document.createElement ("textarea");
const botonCopiar = document.createElement ("button");

function removerElementos () {

    escudo.remove ();
    textoDerecha_1.remove ();
    textoDerecha_2.remove ();

}

function Encriptar () {

    let texto = textoEntrada.value;
    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("No hay texto para encriptar o se ingresó un valor numerico.");
        window.location.reload ();

    } else {

        removerElementos ();
        let textoEncriptado = textoMinusculas.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        textarea.value = textoEncriptado;
        textarea.spellcheck = false;

        document.getElementById("exitosa").innerHTML = "Mensaje Encriptado:";

        textarea.className = "textoSalida";
        divDerecha.append (textarea);
        botonCopiar.className = "btnCopiar";
        botonCopiar.innerText = "Copiar";
        divDerecha.append (botonCopiar);
      
        botonCopiar.onclick = function () {
            
            let textoCopiado = textoEncriptado;
            navigator.clipboard.writeText (textoCopiado);
            botonCopiar.innerText = "Copiado en portapapeles!";

        }

    }

}

function Desencriptar () {

    let texto = textoEntrada.value;
    let textoMinusculas = texto.toLowerCase();

    if (textoMinusculas == "" || textoMinusculas == +textoMinusculas) {

        alert ("No hay texto para desencriptar o se ingresó un valor numerico.");
        window.location.reload();

    } else {

        removerElementos ();
        let textoDesencriptado = textoMinusculas.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        textarea.value = textoDesencriptado;
        textarea.spellcheck = false;

        document.getElementById("exitosa").innerHTML = "Mensaje Desencriptado:";

        textarea.className = "textoSalida";
        divDerecha.append (textarea);
        botonCopiar.className = "btnCopiar";
        botonCopiar.innerText = "Copiar";
        divDerecha.append (botonCopiar);
    


        botonCopiar.onclick = function () {

            let textoCopiado = textoDesencriptado;
            navigator.clipboard.writeText (textoCopiado);
            botonCopiar.innerText = "Copiado en portapapeles!";

        }

    }

};

botonEncriptar.addEventListener ("click", Encriptar);
botonDesencriptar.addEventListener ("click", Desencriptar);


