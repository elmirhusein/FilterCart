const data = [
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Orange", price: 40 },
  { id: 3, name: "Kiwi", price: 90 },
  { id: 4, name: "Watermelon", price: 100 },
];

let minFilter = 1;
let maxFilter = 200;

const minInput = document.querySelector(".min");
minInput.value = minFilter;

const maxInput = document.querySelector(".max");
maxInput.value = maxFilter;

const minSpan = document.querySelector(".min-value");
minSpan.innerText = minInput.value;

const maxSpan = document.querySelector(".max-value");
maxSpan.innerText = maxInput.value;

minInput.addEventListener("change", (e) => {
  let value = e.target.value;

  if (parseInt(value) > parseInt(maxInput.value)) {
    value = maxInput.value;
    e.target.value = maxInput.value;
  }

  minSpan.innerText = value;
  minFilter = value

  renderProducts()
});

maxInput.addEventListener("change", (e) => {
  console.log(e.target.value);

  let value = e.target.value;

  if (parseInt(value) < parseInt(minInput.value)) {
    value = minInput.value;
    e.target.value = minInput.value;
  }

  maxSpan.innerText = value;
  maxFilter = value

  renderProducts()
});

function generateCard(product) {
  const div = document.createElement("div");
  div.innerHTML = ` <div class="card">
  <span>Title: <span class="title">${product.name}</span></span>
  <span>Price: <span class="price">${product.price}</span></span>
</div>`;
return div
}

function renderProducts() {
  const container = document.querySelector(".container");
  container.innerHTML = ``

  let _data = [...data];

  _data = _data.filter((x) => x.price >= minFilter && x.price <= maxFilter);
  _data.forEach((x) => {
    const card = generateCard(x);
    container.append(card)
  });
}


renderProducts()