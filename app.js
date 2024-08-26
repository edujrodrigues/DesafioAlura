function inicio() {
    document.getElementById('textoOutput').style.display = 'none';
    document.getElementById('copiar').style.display = 'none';

    // Torna os elementos da esquerda visíveis
    document.getElementById('img__pesquisa').style.display = 'block';
    document.getElementById('texto0').style.display = 'block';
    document.getElementById('texto1').style.display = 'block';
    document.getElementById('texto2').style.display = 'block';
    document.getElementById('texto3').style.display = 'block';
}

inicio()

function validarEntrada() {
    let textoInput = document.getElementById("textoInput");
    let texto = textoInput.value;

    texto = texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    if (/^[a-z\s]*$/.test(texto)) {
        textoInput.value = texto;
    } else {
        console.log("Apenas letras minúsculas e sem acento são permitidas.");
    }
}

function criptografar() {
    let texto = document.getElementById("textoInput").value;

    // Regras de criptografia
    let criptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (criptografado.trim() !== "") {
        document.getElementById('img__pesquisa').style.display = 'none';
        document.getElementById('texto0').style.display = 'none';
        document.getElementById('texto1').style.display = 'none';
        document.getElementById('texto2').style.display = 'none';
        document.getElementById('texto3').style.display = 'none';

        document.getElementById('textoOutput').style.display = 'block';
        document.getElementById('copiar').style.display = 'block';
        document.getElementById("textoOutput").value = criptografado;
    }
}

function descriptografar() {
    let texto = document.getElementById("textoInput").value;

    let descriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if (descriptografado.trim() !== "") {
        document.getElementById('img__pesquisa').style.display = 'none';
        document.getElementById('texto0').style.display = 'none';
        document.getElementById('texto1').style.display = 'none';
        document.getElementById('texto2').style.display = 'none';
        document.getElementById('texto3').style.display = 'none';

        document.getElementById('textoOutput').style.display = 'block';
        document.getElementById('copiar').style.display = 'block';

        document.getElementById("textoOutput").value = descriptografado;
    }
}

function copiarTexto() {
    let textoOutput = document.getElementById("textoOutput");

    textoOutput.select();

    navigator.clipboard.writeText(textoOutput.value);
}

document.getElementById("copiar").addEventListener("click", copiarTexto);