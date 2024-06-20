
// import "./style.css";


// favorites category constants
const FAVORITES_FOODS = "foods"
const FAVORITES_BEVERAGES = "beverages"
const FAVORITES_MUSIC_GENRES = "music genres"
const FAVORITES_COLORS = "colors"
const FAVORITES_PLACES = "places"

// array of category constants
const FAVORITES_CATAGORIES = [FAVORITES_FOODS, FAVORITES_BEVERAGES, FAVORITES_MUSIC_GENRES, FAVORITES_COLORS, FAVORITES_PLACES]

// array of favorites objects
const FAVORITES = [
    { catagory: FAVORITES_FOODS, name: "pasta" },
    { catagory: FAVORITES_FOODS, name: "sushi" },
    { catagory: FAVORITES_FOODS, name: "hamburgers" },
    { catagory: FAVORITES_FOODS, name: "hawaiian bbq" },
    { catagory: FAVORITES_FOODS, name: "thai" },

    { catagory: FAVORITES_BEVERAGES, name: "water" },
    { catagory: FAVORITES_BEVERAGES, name: "coffee" },
    { catagory: FAVORITES_BEVERAGES, name: "celsius" },
    { catagory: FAVORITES_BEVERAGES, name: "tea" },
    { catagory: FAVORITES_BEVERAGES, name: "coconut water" },

    { catagory: FAVORITES_MUSIC_GENRES, name: "r&b" },
    { catagory: FAVORITES_MUSIC_GENRES, name: "indie" },
    { catagory: FAVORITES_MUSIC_GENRES, name: "cumbia" },
    { catagory: FAVORITES_MUSIC_GENRES, name: "reggaeton" },
    { catagory: FAVORITES_MUSIC_GENRES, name: "rock/punk" },

    { catagory: FAVORITES_COLORS, name: "blue" },
    { catagory: FAVORITES_COLORS, name: "pink" },
    { catagory: FAVORITES_COLORS, name: "black" },
    { catagory: FAVORITES_COLORS, name: "green" },
    { catagory: FAVORITES_COLORS, name: "yellow" },

    { catagory: FAVORITES_PLACES, name: "oxnard" },
    { catagory: FAVORITES_PLACES, name: "mexico city" },
    { catagory: FAVORITES_PLACES, name: "beach" },
    { catagory: FAVORITES_PLACES, name: "san francisco" },
    { catagory: FAVORITES_PLACES, name: "okaga" },

]

// function creates favorite item
function createFavoriteItem (name) {
    let newItem = document.createElement("span")
        newItem.innerText = name
        newItem.classList.add("badge", "mr-2", "mb-2")
        return newItem
}

// setting up the select for favorites
const favoritesContainer = document.getElementById("favorites");
let favoritesSelect = favoritesContainer.querySelector("select")
FAVORITES_CATAGORIES.forEach(catagory => {
    let newOption = document.createElement("option")
    newOption.innerText = catagory
    favoritesSelect.appendChild(newOption)
})

// adding favorite items to favorites container
let favoritesItemsContainer = document.getElementById("favorites-items");
FAVORITES.forEach(itemCategory => {
    let newItem = createFavoriteItem(itemCategory.name)
    favoritesItemsContainer.appendChild(newItem)
})

// filtering my favorite items
favoritesSelect.addEventListener("change", event => {
    favoritesItemsContainer.innerHTML = ""
    FAVORITES.forEach(itemCategory => {
        let newItem = createFavoriteItem(itemCategory.name)
        if (itemCategory.catagory === favoritesSelect.value) {
            newItem.classList.add("badge-primary")
        }
        favoritesItemsContainer.appendChild(newItem)
    })
})

// adding new message to message container
let messageContainer = document.getElementById("messages-container")
let messageButton = messageContainer.querySelector("button")
messageButton.addEventListener("click", buttonClicked => {
    let messageSentContainer = messageContainer.querySelector("#messages-sent")
    let messageSent = document.createElement("div")
    let messageInput = messageContainer.querySelector("#message-input")
    messageSent.innerText = messageInput.value
    messageSent.className = "chat-bubble chat-bubble-primary"
    messageSentContainer.appendChild(messageSent)
    messageInput.value = ""
})

// use enter button to send
let messageBox = document.getElementById("message-input")
    messageBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
        let messageSentContainer = messageContainer.querySelector("#messages-sent")
        let messageSent = document.createElement("div")
        let messageInput = messageContainer.querySelector("#message-input")
        if(messageInput.value != "")
        {messageSent.innerText = messageInput.value
        messageSent.className = "chat-bubble chat-bubble-primary"
        messageSentContainer.appendChild(messageSent)
        messageInput.value = ""}
    }
})


// creating images array
const IMG_PHOTO_SHOOT = ["/public/img/img_1.jpg", "/public/img/img_2.jpg", "/public/img/img_3.jpg", "/public/img/img_4.jpg", "/public/img/img_5.jpg"]
const IMG_SELF_PORTRAITS = ["/public/img/img_6.jpg", "/public/img/img_7.jpg", "/public/img/img_8.jpg", "/public/img/img_9.jpg", "/public/img/img_10.jpg"]
const IMG_DRAWINGS = ["/public/img/img_11.jpg", "/public/img/img_12.jpg", "/public/img/img_13.jpg", "/public/img/img_14.jpg", "/public/img/img_15.jpg"]

// function to display images for each array
function setUpCarousel(carousel, imgsArray) {
    const carouselItemTemplate = carousel.querySelector(".carousel-item")
    carousel.innerHTML = ""
    imgsArray.forEach(img => {
        const nextCarouselItem = carouselItemTemplate.cloneNode(true)
        let carouselItemImg = nextCarouselItem.querySelector("img")
        carouselItemImg.src = img
        carousel.appendChild(nextCarouselItem)
        console.log(carouselItemImg)

    })
}

// set up carousels with images
setUpCarousel(document.getElementById("carousel-1"), IMG_PHOTO_SHOOT)
setUpCarousel(document.getElementById("carousel-2"), IMG_SELF_PORTRAITS)
setUpCarousel(document.getElementById("carousel-3"), IMG_DRAWINGS)



