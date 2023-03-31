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