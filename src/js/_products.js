/* products.json */
const productsData = @@include('../json/products.json')

/* products - get products data from json */
const productsList = document.querySelector(".products__list");
const productsDataFile = "../json/products.json";
const productsTitles = document.querySelectorAll(".products__title");
const discountList = document.querySelector(".discount__list");

if (productsTitles.length > 0) {
  productsTitles.forEach((productsTitle) => {
    productsTitle.addEventListener("click", (e) => {
      e.preventDefault();
      productsTitles.forEach((elem) => elem.classList.remove("btn--active"));
      productsTitle.classList.add("btn--active");
      productsList.textContent = "";
      loadProductsData(productsTitle, productsData);
    });
  });
}

function loadProductsData(btn, data) {
  
  for (let i = 0; i < data.length; i++) {
    let product = `
      <li data-prodid="${data[i].id}" class="products__item">
      <img class="products__img" src="${data[i].img}" alt="${data[i].title}" width="260" height="300" />
      <h3 class="products__subtitle">${data[i].title}</h3>
      <p class="products__text">${data[i].text}</p>
      <p class="products__price">
        <span class="products__price--new">${data[i].newprice}</span>`;
    if (data[i].oldprice) {
      product += `<span class="products__price--old">${data[i].oldprice}</span>`;
    }
    product += `
      </p>
    </li>`;

    if (btn.classList.contains("products__title")) {
      if (btn.firstChild.nodeValue == data[i].group) {
        productsList.insertAdjacentHTML("beforeend", product);
      }
    }

    if (btn.classList.contains("discount__title")) {
      if (data[i].discount == "yes") {
        discountList.insertAdjacentHTML("beforeend", product);
      }
    }
  }
}
