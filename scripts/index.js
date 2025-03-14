const categoriesContainer = document.getElementById("categories-container");
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCats(data.categories));
};

const displayCats = (categories) => {
  for (let cat of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
            <button class="btn btn-sm rounded-md hover:text-white hover:bg-red-600">${cat.category}</button>
        `;
    categoriesContainer.appendChild(div);
  }
};
loadCategories();
