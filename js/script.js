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

/* SECCIÓN PRODUCTOS */

const productContainer = document.querySelector(".productContainer")

fetch("./database.json")    //Solicita el archivo .json mediante la función fetch()             
    .then(response => response.json())  //Cuando se reciba una respuesta (response) de fetch, convierte esa respuesta a formato JSON mediante la función .json(). 
    .then(data => {         //Cuando la conversión a JSON se complete, ejecuta una función que recibe el objeto JSON en formato JavaScript como argumento.
        for(const producto of data){        //Bucle de iteración
            productContainer.innerHTML +=   //Crea elementos HTML en el documento y los agrega al contenedor productContainer            
            ` 
            <div class="productCard">
                <img src=${producto.img}>
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>Marca: ${producto.marca}</p>
                    <p>Modelo: ${producto.modelo}</p>
                    <p>${producto.descripción}</p>
                    <p>ARS ${producto.precio}.00</p>
                </div>            
            </div>
            `
        }
    })