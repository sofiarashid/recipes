const $ = (s) => document.querySelector(s);

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[c]));
}


/* =========================
   DARK MODE
========================= */

function setupTheme() {

  const themeToggle = $("#theme-toggle");

  // Keep the user's choice between pages
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (!themeToggle) return;

  themeToggle.textContent =
    document.body.classList.contains("dark-mode") ? "☀" : "◐";

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    themeToggle.textContent = isDark ? "☀" : "◐";
  });
}


/* =========================
   RECIPE CARDS
========================= */

function recipeCard(recipe) {

  return `
    <a
      class="recipe-card"
      href="recipe.html?id=${encodeURIComponent(recipe.id)}"
    >

      <div class="card-body">

        <p class="card-category">
          ${escapeHTML(CATEGORIES[recipe.category]?.name || "")}
        </p>

        <h3>${escapeHTML(recipe.title)}</h3>

        ${
          recipe.description
            ? `<p>${escapeHTML(recipe.description)}</p>`
            : ""
        }

      </div>

    </a>
  `;
}


/* =========================
   CATEGORY CARDS
========================= */

function categoryCard(key, data) {

  const count = RECIPES.filter(
    r => r.category === key
  ).length;

  return `
    <a
      class="category-card ${data.color}"
      href="category.html?category=${encodeURIComponent(key)}"
    >

      <div>

        <h3>${escapeHTML(data.name)}</h3>

        <p>${escapeHTML(data.description)}</p>

        <small>
          ${count} ${count === 1 ? "recipe" : "recipes"}
        </small>

      </div>

    </a>
  `;
}


/* =========================
   MENU
========================= */

function setupMenu() {

  const button = $(".menu-button");
  const nav = $(".nav");

  if (!button || !nav) return;

  button.addEventListener("click", () => {

    const open = nav.classList.toggle("open");

    button.setAttribute("aria-expanded", open);
  });
}


/* =========================
   SEARCH
========================= */

function setupSearch() {

  const search = $("#search");
  const results = $("#search-results");
  const categoryGrid = $("#category-grid");

  if (!search || !results) return;

  search.addEventListener("input", () => {

    const q = search.value.trim().toLowerCase();

    // If search is empty, clear results
    // and show the normal homepage categories again
    if (!q) {

      results.innerHTML = "";

      if (categoryGrid) {
        categoryGrid.style.display = "";
      }

      return;
    }

    const matches = RECIPES.filter(recipe =>
      [
        recipe.title,
        recipe.description,
        CATEGORIES[recipe.category]?.name
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );

    // On the homepage, hide categories while searching
    if (categoryGrid) {
      categoryGrid.style.display = "none";
    }

    results.innerHTML = matches.length
      ? matches.map(recipeCard).join("")
      : `
          <p class="empty">
            No recipes found yet. Try another search.
          </p>
        `;
  });
}


/* =========================
   HOME PAGE
========================= */

function setupHome() {

  const grid = $("#category-grid");

  if (!grid) return;

  grid.innerHTML = Object.entries(CATEGORIES)
    .map(([key, data]) => categoryCard(key, data))
    .join("");
}


/* =========================
   CATEGORY PAGE
========================= */

function setupCategory() {

  const grid = $("#recipe-grid");

  if (!grid) return;

  const key = new URLSearchParams(location.search).get("category");

  const data = CATEGORIES[key];

  if (!data) {
    location.href = "index.html";
    return;
  }

  $("#category-eyebrow").textContent = "Recipes";

  $("#category-name").textContent = data.name;

  $("#category-description").textContent = data.description;

  const recipes = RECIPES.filter(
    r => r.category === key
  );

  grid.innerHTML = recipes.length
    ? recipes.map(recipeCard).join("")
    : `
      <div class="empty-state">

        <h2>Recipes coming soon.</h2>

        <p>
          Add your first recipe to this category and it will appear here.
        </p>

      </div>
    `;
}


/* =========================
   INGREDIENTS
========================= */

function renderIngredients(groups) {

  return groups.map(group => `

    <div class="ingredient-group">

      <h3>${escapeHTML(group.title)}</h3>

      <ul>

        ${group.items.map(item => {

          if (typeof item === "string") {

            return `
              <li>
                ${escapeHTML(item)}
              </li>
            `;
          }

          return `
            <li>

              ${escapeHTML(item.text)}

              <ul>

                ${item.subitems.map(subitem =>
                  `<li>${escapeHTML(subitem)}</li>`
                ).join("")}

              </ul>

            </li>
          `;

        }).join("")}

      </ul>

    </div>

  `).join("");
}


/* =========================
   RECIPE PAGE
========================= */

function setupRecipe() {

  const target = $("#recipe");

  if (!target) return;

  const id = new URLSearchParams(location.search).get("id");

  const recipe = RECIPES.find(
    r => r.id === id
  );

  if (!recipe) {

    target.innerHTML = `
      <div class="empty-state">

        <h2>Recipe not found.</h2>

        <a class="button" href="index.html">
          Back home
        </a>

      </div>
    `;

    return;
  }

  document.title = `${recipe.title} — Sofia's Kitchen`;

  const cat = CATEGORIES[recipe.category];

  target.innerHTML = `

    <div class="recipe-top">

      <div class="recipe-intro">

        <p class="eyebrow">
          ${escapeHTML(cat?.name || "Recipe")}
        </p>

        <h1>
          ${escapeHTML(recipe.title)}
        </h1>

        ${
          recipe.description
            ? `
              <p class="recipe-description">
                ${escapeHTML(recipe.description)}
              </p>
            `
            : ""
        }

        <div class="recipe-meta">

          ${
            recipe.time
              ? `
                <span>

                  <b>Time</b>

                  ${escapeHTML(recipe.time)}

                </span>
              `
              : ""
          }

          ${
            recipe.servings
              ? `
                <span>

                  <b>Serves</b>

                  ${escapeHTML(recipe.servings)}

                </span>
              `
              : ""
          }

        </div>

      </div>

    </div>


    <div class="recipe-content">

      <section>

        <h2>Ingredients</h2>

        <div class="ingredients">

          ${renderIngredients(recipe.ingredients || [])}

        </div>

      </section>


      <section>

        <h2>Recipe</h2>

        <ol class="instructions">

          ${(recipe.instructions || [])
            .map(x => `<li>${escapeHTML(x)}</li>`)
            .join("")
          }

        </ol>

      </section>

    </div>

  `;
}


/* =========================
   YEAR
========================= */

if ($("#year")) {
  $("#year").textContent = new Date().getFullYear();
}


/* =========================
   START EVERYTHING
========================= */

setupTheme();
setupMenu();
setupSearch();
setupHome();
setupCategory();
setupRecipe();