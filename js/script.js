/* SECCIÓN COMENTARIOS */
const comentArr = []

const comentForm = document.querySelector(".comentForm")
const cardContainer = document.querySelector(".comentContainer")

const renderComent = () =>{
    cardContainer.innerHTML = ""
    for(const opinion of comentArr){
        cardContainer.innerHTML += `
        <div class="cardOpinion">
            <img class="cardImg" src="https://static.vecteezy.com/system/resources/previews/007/226/475/non_2x/user-account-circle-glyph-color-icon-user-profile-picture-userpic-silhouette-symbol-on-white-background-with-no-outline-negative-space-illustration-vector.jpg">
            <div>
                <h3>${opinion.nombre}:</h3>
                <p>"${opinion.coment}"</p>
            </div>
        </div>
        `
    }
}

comentForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    comentArr.push({
        nombre: comentForm.nombre.value, 
        coment: comentForm.coment.value,
    })
    comentForm.reset()
    renderComent()
})


// SCRIPT PREGUNTAS FRECUENTES 
let pregunta = document.querySelectorAll('.pregunta-frecuente');
let botonDer = document.querySelectorAll('.simb-der');
let respuesta = document.querySelectorAll('.respuesta-frecuente');
let parrafo = document.querySelectorAll('.respuesta-frecuente p');

for (let i = 0; i < botonDer.length; i = i + 1) {
    let altoparrafo = parrafo[i].clientHeight;
    let conttador = 0;

    botonDer[i].addEventListener('click', () => {
        if ( conttador == 0 ) {
            respuesta[i].style.height = `${altoparrafo}px`;
            pregunta[i].style.marginBottom = '10px';
            botonDer[i].innerHTML = '<i>-</i>';
            conttador = conttador + 1
        }

        else if ( conttador == 1 ) {
            respuesta[i].style.height = `0`;
            pregunta[i].style.marginBottom = '0';
            botonDer[i].innerHTML = '<i class="bi bi-chevron-compact-down"></i>';
            conttador = conttador - 1
        }
    })
}

console.log(parrafo)

// --------------------------------