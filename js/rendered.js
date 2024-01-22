const contentCards = document.getElementById("contentCards");


function renderCardModel(page) {

    //Modelo de la tarjeta a renderizar.

    const card = document.createElement("div");

    card.classList.add(`card`)

    card.innerHTML = `
    <img src="imagenes/NFTs/${page.nftimg}" alt="Descripción de la imagen"">`

   


    contentCards.appendChild(card);


}


