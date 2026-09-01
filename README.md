# Sofía's Kitchen

A minimalist recipe website for Sofía. It is a plain static site — no framework, no database, and no coding is needed to use the finished site once the recipes are added.

## Pages

- `index.html` — homepage, search, category cards
- `category.html` — recipe list for each category
- `recipe.html` — individual recipe page
- `recipes.js` — the recipe collection
- `styles.css` — all visual styling
- `images/` — put recipe photos here

## Current categories

- Frozen
- Fruit
- Bakery
- Desi Foods
- Desi Desserts
- Savory
- Meat
- Meals
- Other

## Current recipes

### Bakery

- Chocolate Chip Cookies
- Biscoff Tres Leches
- Banana Bread Chocolate Chip Muffins
- Dairy-Free Brownies
- Chocolate Mug Cake
- Crumbl Jimmy Fallon Brownie

### Meals

- Chicken Mac & Cheese
- Cheesy Garlic Potato Bread

### Meat

- Chicken Cutlets

### Frozen

- Mango Ice Cream

## Adding a recipe

Open `recipes.js` and add a recipe object to `RECIPES`.

Each recipe needs:

- `id`
- `title`
- `category`
- `description`
- `image`
- `time`
- `servings`
- `ingredients`
- `instructions`

The `category` must match one of the category IDs inside `CATEGORIES`.

For photos, put the image in `images/` and set the `image` value to its filename.

## Recipe pages

Recipe pages show the full ingredient list on the left and the recipe/instructions on the right, using the wording entered in `recipes.js`.

## Publishing

This can be hosted as a static website. A custom domain can be connected later.