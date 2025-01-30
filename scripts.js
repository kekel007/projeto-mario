const form = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");



function abrirformulario(){
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}


function fecharformulario(){
    form.style.left = "-300px";
    form.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}















/*mascara.addEventListener("click", () => {
    form.style.left = "-100%"; // Esconde o formulário
    mascara.style.visibility = "hidden"; // Esconde a máscara
});*/