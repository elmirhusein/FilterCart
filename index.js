let minPriceFilter = 1;
let maxPriceFilter = 1000;

let minRoomsFilter = 1;
let maxRoomsFilter = 10;

let minAreaFilter = 1;
let maxAreaFilter = 100;

const minPriceInput = document.querySelector(".minPrice");
minPriceInput.value = minPriceFilter;

const maxPriceInput = document.querySelector(".maxPrice");
maxPriceInput.value = maxPriceFilter;

const minRoomsInput = document.querySelector(".minRooms");
minRoomsInput.value = minRoomsFilter;

const maxRoomsInput = document.querySelector(".maxRooms");
maxRoomsInput.value = maxRoomsFilter;

const minAreaInput = document.querySelector(".minArea");
minAreaInput.value = minAreaFilter;

const maxAreaInput = document.querySelector(".maxArea");
maxAreaInput.value = maxAreaFilter;

const minPriceSpan = document.querySelector(".min-price");
minPriceSpan.innerText = minPriceInput.value;

const maxPriceSpan = document.querySelector(".max-price");
maxPriceSpan.innerText = maxPriceInput.value;

const minRoomsSpan = document.querySelector(".min-rooms");
minRoomsSpan.innerText = minRoomsInput.value;

const maxRoomsSpan = document.querySelector(".max-rooms");
maxRoomsSpan.innerText = maxRoomsInput.value;

const minAreaSpan = document.querySelector(".min-area");
minAreaSpan.innerText = minAreaInput.value;

const maxAreaSpan = document.querySelector(".max-area");
maxAreaSpan.innerText = maxAreaInput.value;

minPriceInput.addEventListener("change", (e) => {
    let value = e.target.value;

    if (parseInt(value) > parseInt(maxPriceInput.value)) {
        value = maxPriceInput.value;
        e.target.value = maxPriceInput.value;
    }

    minPriceSpan.innerText = value;
    minPriceFilter = value

    renderProducts()
});

maxPriceInput.addEventListener("change", (e) => {
    console.log(e.target.value);

    let value = e.target.value;

    if (parseInt(value) < parseInt(minPriceInput.value)) {
        value = minPriceInput.value;
        e.target.value = minPriceInput.value;
    }

    maxPriceSpan.innerText = value;
    maxPriceFilter = value

    renderProducts()
});

minRoomsInput.addEventListener("change", (e) => {
    let value = e.target.value;

    if (parseInt(value) > parseInt(maxRoomsInput.value)) {
        value = maxRoomsInput.value;
        e.target.value = maxRoomsInput.value;
    }

    minRoomsSpan.innerText = value;
    minRoomsFilter = value

    renderProducts()
});

maxRoomsInput.addEventListener("change", (e) => {
    console.log(e.target.value);

    let value = e.target.value;

    if (parseInt(value) < parseInt(minRoomsInput.value)) {
        value = minRoomsInput.value;
        e.target.value = minRoomsInput.value;
    }

    maxRoomsSpan.innerText = value;
    maxRoomsFilter = value

    renderProducts()
});

minAreaInput.addEventListener("change", (e) => {
    let value = e.target.value;

    if (parseInt(value) > parseInt(maxAreaInput.value)) {
        value = maxAreaInput.value;
        e.target.value = maxAreaInput.value;
    }

    minAreaSpan.innerText = value;
    minAreaFilter = value

    renderProducts()
});

maxAreaInput.addEventListener("change", (e) => {
    console.log(e.target.value);

    let value = e.target.value;

    if (parseInt(value) < parseInt(minAreaInput.value)) {
        value = minAreaInput.value;
        e.target.value = minAreaInput.value;
    }

    maxAreaSpan.innerText = value;
    maxAreaFilter = value

    renderProducts()
});

function generateCard(product) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="card">
    <span> <span class="price">${product.price}AZN</span></span>
    <span> <span class="rooms">${product.rooms}rooms</span></span>
    <span> <span class="area">${product.area}kv</span></span>
  </div>`;
    return div
}

function renderProducts() {
    const container = document.querySelector(".container");
    container.innerHTML = ``

    let _data = [...data];

    _data = _data.filter((x) => x.price >= minPriceFilter && x.price <= maxPriceFilter);
    _data = _data.filter((x) => x.rooms >= minRoomsFilter && x.rooms <= maxRoomsFilter);
    _data = _data.filter((x) => x.area >= minAreaFilter && x.area <= maxAreaFilter);
    _data.forEach((x) => {
        const card = generateCard(x);
        container.append(card)
    });
}


renderProducts()