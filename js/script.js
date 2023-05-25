const mealContainer = document.getElementById("meal-container");
const showAllButton = document.getElementById("show-button");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
  const searchInput = document.getElementById("search-input");
  const searchInputValue = searchInput.value;
  mealContainer.innerText = "";
  loadData(searchInputValue);
});
const loadData = (mealName) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => { searchMeal(data.meals)
      gettingDetailsByMealId(data.meals)})
    .catch((error) => {
      console.log("OOPS! Something went wrong");
      console.log(error);
    });
};

const searchMeal = (data) => {
  console.log(data);
  // gettingDetailsByMealId(dat)

  for (let i = 0; i < 6; i++) {
    if (data[i] == null) {
      showAllButton.classList.replace("d-block", "d-none");
      continue;
    } else {
      showAllButton.classList.replace("d-none", "d-block");
    }

    const columnDiv = document.createElement("div");
    columnDiv.classList.add("col");
    columnDiv.innerHTML = `
      <div class="card" style="max-width: 540px;">
      <div class="row g-0">
          <div class="col-md-4">
              <img src="${data[i].strMealThumb}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">${data[i].strMeal}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</p>
                      <a class="text-warning" href="#" data-bs-toggle="modal" data-bs-target="#mealDetailsModal">
                       View Details
                     </a>
              </div>
          </div>
      </div>
  </div>`;

    mealContainer.appendChild(columnDiv);
  }

  showAllButton.addEventListener("click", function () {
    mealContainer.innerText = "";
    for (meal of data) {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("col");
      columnDiv.innerHTML = `
      <div class="card" style="max-width: 540px;">
      <div class="row g-0">
          <div class="col-md-4">
              <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</p>
                      <a class="text-warning" href="#" data-bs-toggle="modal" data-bs-target="#mealDetailsModal">
                       View Details  
                     </a>
              </div>
          </div>
      </div>
  </div>`;

      mealContainer.appendChild(columnDiv);
    }
  });
};



loadData('fish');