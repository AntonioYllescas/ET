function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloEncriptado = document.getElementById("título__encriptado");
    let parrafo = document.getElementById("p__encriptado");
    let equis = document.getElementById("icon")

    let textoCifrado = texto
                        .replace(/e/gi,"enter")
                        .replace(/i/gi,"imes")
                        .replace(/a/gi,"ai")
                        .replace(/o/gi,"ober")
                        .replace(/u/gi,"ufat");
    if(document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloEncriptado.textContent = "La encriptación ha sido un éxito"
        parrafo.textContent = "";
        equis.src = "./Images/Icons/encriptado.png";
    } else {
        equis.src = "./Images/Icons/x.png";
        tituloEncriptado.textContent = "NINGÚN MENSAJE FUE ENCONTRADO"
        parrafo.textContent = "Ingresa el texto";
        alert ("DEBES INGRESAR TEXTO");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloEncriptado = document.getElementById("título__encriptado");
    let parrafo = document.getElementById("p__encriptado");
    let equis = document.getElementById("icon")
    let textoCifrado = texto
                        .replace(/enter/gi,"e")
                        .replace(/imes/gi,"i")
                        .replace(/ai/gi,"a")
                        .replace(/ober/gi,"o")
                        .replace(/ufat/gi,"u");
    if(document.getElementById("texto").value.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloEncriptado.textContent = "La dsencriptación ha sido un éxito"
        parrafo.textContent = "";
        equis.src = "./Images/Icons/desencriptado.png";                        
    } else {
        equis.src = "./Images/Icons/x.png";
        tituloEncriptado.textContent = "NINGÚN MENSAJE FUE ENCONTRADO"
        parrafo.textContent = "Ingresa el texto";
        alert ("DEBES INGRESAR TEXTO");
    }
}