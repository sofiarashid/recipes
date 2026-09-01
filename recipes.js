const CATEGORIES = {
  frozen: {
    name: "Frozen",
    description: "Cold, creamy, and frozen favorites.",
    color: "blue"
  },

  bakery: {
    name: "Bakery",
    description: "Breads, pastries, cakes, and baked treats.",
    color: "cream"
  },

  meals: {
    name: "Meals",
    description: "Comforting meals and savory favorites.",
    color: "rose"
  },

  meat: {
    name: "Meat",
    description: "Chicken and other savory meat recipes.",
    color: "peach"
  },

  "desi-foods": {
    name: "Desi Foods",
    description: "Comforting foods and recipes inspired by Desi cooking.",
    color: "green"
  },

  "desi-desserts": {
    name: "Desi Desserts",
    description: "Sweet recipes inspired by Desi desserts.",
    color: "lavender"
  },
};


const RECIPES = [
  {
    id: "chocolate-chip-cookies-double",
    title: "Chocolate Chip Cookies",
    category: "bakery",
    description: "A double batch of classic chocolate chip cookies with melted butter and plenty of chocolate chips.",
    image: "",
    time: "",
    servings: "Double batch",

    ingredients: [
      {
        title: "Ingredients",
        items: [
          "340g all-purpose flour",
          "1 tsp baking soda",
          "1 tsp baking powder",
          "1½ tsp salt",
          "200g brown sugar",
          "140g white sugar",
          "1 cup cooled melted butter",
          "4 tsp vanilla extract",
          "2 eggs",
          "400g chocolate chips"
        ]
      }
    ],

    instructions: [
      "In bowl #1, whisk together the flour, baking soda, baking powder, and salt.",
      "In bowl #2, whisk the brown sugar, white sugar, and cooled melted butter together until it forms a paste.",
      "Whisk the vanilla extract and eggs into the butter-sugar mixture.",
      "Mix the dry ingredients from bowl #1 into bowl #2.",
      "Fold in the chocolate chips."
    ]
  },


  {
    id: "biscoff-tres-leches",
    title: "Biscoff Tres Leches",
    category: "bakery",
    description: "A Biscoff tres leches cake with homemade cookie butter and Biscoff whipped cream.",
    image: "images/biscofftl.jpg",
    time: "6+ hrs resting",
    servings: "",

    ingredients: [
      {
        title: "Cake",
        items: [
          "3 large eggs, separated",
          {
            text: "120 g granulated sugar, divided",
            subitems: [
              "30 g for the egg whites",
              "90 g for the egg yolks"
            ]
          },
          "¾ tsp vanilla extract",
          "120 g all-purpose flour",
          "¾ tsp baking powder",
          "¼ tsp salt",
          "1 tsp ground cinnamon",
          "3½ tbsp whole milk",
          "10 Biscoff cookies, finely crushed"
        ]
      },

      {
        title: "Biscoff Cookie Butter",
        items: [
          "10 Biscoff cookies",
          "1 tbsp brown sugar",
          "¼ tsp ground cinnamon",
          "⅓ cup evaporated milk",
          "1–2 tbsp salted butter"
        ]
      },

      {
        title: "Milk Soak",
        items: [
          "14 oz sweetened condensed milk",
          "12 oz evaporated milk",
          "12 oz whole milk",
          "About ½ cup of the homemade Biscoff cookie butter, or enough to give the milk mixture a noticeable Biscoff flavor"
        ]
      },

      {
        title: "Biscoff Whipped Cream",
        items: [
          "2 cups heavy whipping cream",
          "½ cup powdered sugar",
          "½ cup Biscoff cookie butter",
          "1 tsp vanilla extract"
        ]
      },

      {
        title: "Topping",
        items: [
          "10 Biscoff cookies, crushed",
          "Extra Biscoff spread, melted, for drizzling (optional)",
          "A little cinnamon, optional"
        ]
      }
    ],

    instructions: [
      "Make the Biscoff Cookie Butter: Add the 10 Biscoff cookies, brown sugar, cinnamon, evaporated milk, and 1 tbsp salted butter to a blender or food processor. Blend until smooth. If it is too thick, add a tiny bit more evaporated milk. If you want it richer, add the second tablespoon of butter. Set aside.",

      "Make the Cake: Preheat the oven to 350°F (175°C). Grease and line an 8 × 8-inch baking dish with parchment paper.",

      "Separate the 3 eggs into yolks and whites.",

      "Beat the egg whites until foamy and soft peaks begin to form.",

      "Gradually add 30 g sugar, a little at a time, and continue beating until you have glossy stiff peaks.",

      "In a separate bowl, beat the 3 egg yolks, 90 g sugar, and vanilla until light and fluffy, about 2 minutes.",

      "Sift together the flour, baking powder, salt, and cinnamon.",

      "Add the dry ingredients to the yolk mixture.",

      "Add the 3½ tbsp milk and gently mix until combined.",

      "Fold in the crushed Biscoff cookies.",

      "Gently fold the whipped egg whites into the batter in 2–3 additions. Be careful not to overmix.",

      "Pour the batter into the prepared baking dish.",

      "Bake for approximately 30–35 minutes, checking around 30 minutes.",

      "The cake is done when the top springs back when lightly touched and a toothpick comes out clean or with a few moist crumbs.",

      "Let the cake cool completely before adding the milk mixture.",

      "Make the Milk Soak: In a large bowl, whisk together the 14 oz sweetened condensed milk, 12 oz evaporated milk, and 12 oz whole milk.",

      "Add about ½ cup of the homemade Biscoff cookie butter.",

      "Whisk until completely smooth.",

      "Taste it. If you want a stronger Biscoff flavor, add another spoonful of cookie butter.",

      "Soak the Cake: Once the cake is completely cool, poke holes all over it using a fork or skewer.",

      "Slowly pour the milk mixture over the cake, making sure it is distributed evenly.",

      "Don't dump it all in one spot at once. Pour slowly so the cake has time to absorb it.",

      "Cover the cake and refrigerate for at least 6 hours. Overnight is even better.",

      "If there is a little milk mixture left on the surface, that's okay — the cake will continue absorbing it while it chills.",

      "Make the Biscoff Whipped Cream: Chill your mixing bowl and beaters for 5–10 minutes if desired.",

      "Add the 2 cups heavy whipping cream, ½ cup powdered sugar, ½ cup Biscoff cookie butter, and 1 tsp vanilla.",

      "Beat on high speed until thick and fluffy and stiff peaks form.",

      "Don't overbeat once it reaches a spreadable whipped-cream consistency.",

      "Assemble: Spread the Biscoff whipped cream evenly over the chilled, soaked cake.",

      "Crush 10 Biscoff cookies and sprinkle them over the top.",

      "For extra Biscoff flavor, melt some Biscoff spread until runny and drizzle it over the cake.",

      "Add a light sprinkle of cinnamon if you want."
    ]
  },


  {
    id: "small-mac-and-cheese",
    title: "Small Mac & Cheese",
    category: "meals",
    description: "Creamy mac and cheese made with American and Cabot cheddar cheese, butter, and milk.",
    image: "",
    time: "",
    servings: "",

    ingredients: [
      {
        title: "Ingredients",
        items: [
          "½ cup dry pasta",
          "1 tsp butter",
          "¼ cup milk",
          "3 American cheese slices",
          "2 Cabot cheddar slices",
          "Pasta water, as needed"
        ]
      }
    ],

    instructions: [
      "Boil water.",
      "Add ½ cup dry pasta.",
      "Drain pasta.",
      "Cook on low heat.",
      "Add 1 tsp butter.",
      "Add ¼ cup milk.",
      "Add 3 American cheese slices.",
      "Add 2 Cabot cheddar slices.",
      "Stir until the cheese is melted and everything is combined.",
      "Add pasta water if the sauce is too thick."
    ]
  },


  {
    id: "cheesy-garlic-potato-bread",
    title: "Cheesy Garlic Potato Bread",
    category: "meals",
    description: "Soft stuffed bread filled with creamy garlic potato filling and melted mozzarella, finished with garlic butter.",
    image: "",
    time: "About 2 hrs",
    servings: "6 breads",

    ingredients: [
      {
        title: "Dough",
        items: [
          "425 g bread flour",
          "1 cup milk, warmed",
          "1 tbsp sugar",
          "2 tsp instant yeast",
          "1 tsp salt",
          "60 g plain yogurt",
          "2 tbsp oil"
        ]
      },

      {
        title: "Potato Filling",
        items: [
          "4 medium gold potatoes, peeled and roughly chopped",
          "2 tbsp mayo",
          "1 tbsp butter",
          "½ tsp salt, adjust to taste",
          "½ tsp garlic powder"
        ]
      },

      {
        title: "Cheese",
        items: [
          "8 oz block mozzarella, freshly shredded"
        ]
      },

      {
        title: "Garlic Butter",
        items: [
          "¼ cup unsalted butter, melted",
          "½ tsp garlic powder",
          "2 tbsp fresh parsley or cilantro, finely chopped"
        ]
      }
    ],

    instructions: [
      "Make the dough: In a large bowl combine bread flour, warm milk, sugar, instant yeast, salt, yogurt, and oil. Mix until a shaggy dough forms then turn out onto a lightly floured surface and knead for 8–10 minutes until the dough is smooth, soft, and slightly tacky but not sticky. If using a stand mixer knead on medium speed for 5–6 minutes. Place in a lightly oiled bowl, cover with plastic wrap or a damp towel, and let rise in a warm place until doubled in size, about 1 hour.",

      "Cook the potatoes: While the dough rises, peel and roughly chop the gold potatoes into even chunks. Place in a pot and cover with cold water. Bring to a boil over high heat and cook until completely fork tender, about 15–20 minutes. Drain thoroughly and let steam dry for a few minutes to remove excess moisture.",

      "Make the potato filling: Transfer drained potatoes to a large bowl and mash until completely smooth with no lumps. Add mayo, butter, salt, and garlic powder and mix until fully combined and creamy. Taste and adjust salt as needed. Set aside to cool slightly.",

      "Portion the dough: Once the dough has doubled, punch it down to release the gas. Turn it out onto a lightly floured surface and divide into 6 equal pieces. Roll each piece into a smooth tight ball, place on a floured surface, cover with a towel, and let rest for 15 minutes.",

      "Fill the dough: Working one ball at a time, use a rolling pin to roll each ball into a flat circle about 6–7 inches in diameter. Place a layer of shredded mozzarella in the center leaving a 1–2 inch border around the edge. Add a generous spoonful of potato filling on top of the cheese, then add another layer of shredded mozzarella on top of the potato.",

      "Seal the bread: Carefully bring the edges of the dough up and over the filling toward the center, pleating and pinching as you go to seal completely with no gaps or seams. Press firmly to make sure it is completely sealed. Flip the sealed ball over so the seam side is down.",

      "Roll it out: Using your rolling pin, gently and carefully flatten the stuffed dough ball into a circle about ½ inch thick. Be gentle and use even pressure. Work slowly from the center outward.",

      "Pan fry: Heat a non-stick pan over medium heat and spray or brush lightly with oil. Place the stuffed flatbread in the pan and cook for 3–4 minutes until the bottom is deeply golden brown. Flip carefully and cook the other side for another 3–4 minutes until equally golden. The cheese inside should be fully melted.",

      "Brush with garlic butter: While the bread is still hot, generously brush with melted garlic butter. Make sure to get it all the way to the edges.",

      "Serve immediately while the cheese is still melty and the bread is hot. Repeat with remaining dough balls."
    ]
  },


  {
    id: "mango-ice-cream",
    title: "Mango Ice Cream",
    category: "frozen",
    description: "Creamy mango ice cream made with mango puree, heavy cream, and sweetened condensed milk.",
    image: "",
    time: "",
    servings: "",

    ingredients: [
      {
        title: "Ingredients",
        items: [
          "2 cups mango puree",
          "2 cups (1 pint) heavy cream",
          "1 can (14 oz) sweetened condensed milk",
          "Lime juice, to taste",
          "Saffron, to taste"
        ]
      }
    ],

    instructions: [
      "Whip the heavy cream until stiff peaks form",  
      "Combine the mango puree and sweetened condensed milk",
      "Combine the mango and milk mixture with the whipped cream",
      "Mix saffron with an ice cube and add to the ice cream mixture",
      "Mix until smooth and well combined",
      "Chill or freeze according to your preferred ice cream method"
    ]
  },


  {
    id: "banana-bread-chocolate-chip-muffins",
    title: "Banana Bread Chocolate Chip Muffins",
    category: "bakery",
    description: "Soft banana bread muffins with cinnamon and chocolate chips.",
    image: "",
    time: "20 mins",
    servings: "10 muffins",

    ingredients: [
      {
        title: "Bowl #1",
        items: [
          "2 bananas, mashed",
          "2 eggs",
          "¼ cup vegetable oil",
          "½ cup brown sugar"
        ]
      },

      {
        title: "Bowl #2",
        items: [
          "1½ cups all-purpose flour",
          "1 tsp baking soda",
          "1 tsp ground cinnamon",
          "½ tsp salt"
        ]
      },

      {
        title: "After Making Both Bowls",
        items: [
          "6 tbsp chocolate chips"
        ]
      }
    ],

    instructions: [
      "Add the mashed bananas, eggs, vegetable oil, and brown sugar into bowl #1.",
      "Add the all-purpose flour, baking soda, cinnamon, and salt into bowl #2.",
      "Add bowl #2 into bowl #1.",
      "Add 6 tbsp chocolate chips.",
      "Divide the batter into 10 muffins.",
      "Bake at 350°F for 20 minutes."
    ]
  },


  {
    id: "dairy-free-brownies",
    title: "Dairy-Free Brownies",
    category: "bakery",
    description: "Fudgy brownies made with cocoa powder instead of chocolate bars and without butter.",
    image: "",
    time: "20–25 mins",
    servings: "",

    ingredients: [
      {
        title: "Ingredients",
        items: [
          "1 cup sugar",
          "½ cup oil",
          "2 eggs",
          "⅓ cup cocoa powder",
          "½ cup flour",
          "¼ tsp salt",
          "1 tsp vanilla, optional"
        ]
      }
    ],

    instructions: [
      "Mix wet ingredients first, then add the dry ingredients.",
      "Pour into a small pan.",
      "Bake at 350°F for about 20–25 minutes.",
      "Let cool before serving."
    ]
  },


  {
    id: "chocolate-mug-cake",
    title: "Chocolate Mug Cake",
    category: "bakery",
    description: "A quick chocolate mug cake with hazelnut chocolate spread or mini chocolate chips.",
    image: "",
    time: "About 2 mins",
    servings: "1 mug cake",

    ingredients: [
      {
        title: "Dry Ingredients",
        items: [
          "¼ cup (31 g) all-purpose flour",
          "2 tbsp unsweetened cocoa powder",
          "¼ tsp baking powder",
          "2 tbsp granulated sugar",
          "⅛ tsp kosher salt"
        ]
      },

      {
        title: "Wet Ingredients",
        items: [
          "¼ cup (59 ml) + 1 tbsp milk",
          "2 tbsp vegetable oil"
        ]
      },

      {
        title: "Filling",
        items: [
          "1 tbsp hazelnut chocolate spread or mini chocolate chips"
        ]
      }
    ],

    instructions: [
      "In a medium bowl, whisk together the flour, cocoa powder, baking powder, sugar, and salt.",
      "Whisk in the milk and vegetable oil until all ingredients are combined and the batter has no clumps.",
      "Pour the batter into a microwave-safe mug.",
      "Add hazelnut chocolate spread or mini chocolate chips to the middle of the batter. Just drop it in the middle; there is no need to push it down.",
      "Place a paper towel into the microwave and set the mug on top to catch any batter if the mug cake overflows.",
      "Microwave until cooked through."
    ]
  },


  {
    id: "chicken-cutlets",
    title: "Chicken Cutlets",
    category: "meat",
    description: "Crispy chicken cutlets coated in a seasoned egg wash and panko breadcrumbs.",
    image: "",
    time: "",
    servings: "",

    ingredients: [
      {
        title: "Chicken",
        items: [
          "Chicken cutlets",
          "Oil, for cooking"
        ]
      },

      {
        title: "Egg Wash",
        items: [
          "2 eggs",
          "Salt",
          "Pepper",
          "Garlic powder",
          "Frank's Buffalo Hot Sauce"
        ]
      },

      {
        title: "Breading",
        items: [
          "Panko breadcrumbs",
          "Dried parsley"
        ]
      }
    ],

    instructions: [
      "Heat oil over medium heat.",
      "Make the egg wash by whisking together the eggs, salt, pepper, garlic powder, and Frank's Buffalo Hot Sauce.",
      "Dip each chicken cutlet into the egg wash.",
      "Coat the chicken in panko breadcrumbs mixed with dried parsley.",
      "Cook the chicken cutlets in the heated oil until fully cooked and golden brown."
    ]
  },


  {
    id: "crumbl-jimmy-fallon-brownie",
    title: "Crumbl Jimmy Fallon Brownie",
    category: "bakery",
    description: "Dense, fudgy chocolate brownies topped with peppermint buttercream, chocolate ganache, and crushed candy canes.",
    image: "",
    time: "15 min prep + 20–22 min bake",
    servings: "9 large brownies",

    ingredients: [
      {
        title: "Brownie Base",
        items: [
          "½ cup (1 stick) unsalted butter",
          "½ cup Dutch-process cocoa powder",
          "½–1 tsp espresso powder, optional but recommended",
          "¾ cup brown sugar",
          "¼ cup granulated sugar",
          "1 large egg",
          "1 extra egg yolk",
          "1 tsp vanilla extract",
          "¾ cup all-purpose flour",
          "1 tsp cornstarch",
          "¼ tsp salt",
          "½ tsp baking powder",
          "¾ cup semi-sweet chocolate chips"
        ]
      },

      {
        title: "Peppermint Buttercream",
        items: [
          "½ cup unsalted butter, softened",
          "2½ cups powdered sugar",
          "1–2 tbsp heavy cream",
          "¼–½ tsp peppermint extract",
          "Pink food coloring, optional"
        ]
      },

      {
        title: "Chocolate Ganache",
        items: [
          "½ cup semi-sweet chocolate chips",
          "2 tbsp heavy cream"
        ]
      },

      {
        title: "Topping",
        items: [
          "¼ cup crushed candy canes"
        ]
      }
    ],

    instructions: [
      "Preheat the oven to 350°F (175°C). Line an 8×8-inch pan with parchment paper.",

      "Melt the butter. While hot, whisk in the cocoa powder and espresso powder. Let sit for 30–60 seconds.",

      "Mix in the brown sugar and granulated sugar.",

      "Add the egg, extra egg yolk, and vanilla. Whisk for 30–45 seconds until the batter becomes smooth and glossy.",

      "Stir together the flour, cornstarch, baking powder, and salt. Fold into the batter.",

      "Add the chocolate chips and mix until just combined.",

      "Spread the batter evenly in the pan and bake for 20–22 minutes. The center should look slightly underbaked with moist crumbs.",

      "Right after removing from the oven, tap the pan lightly on the counter once or twice.",

      "Cool completely, then refrigerate for 45–60 minutes.",

      "Make the peppermint buttercream: Beat butter until creamy. Add powdered sugar gradually. Mix in peppermint extract and heavy cream. Beat until fluffy and spreadable. Add pink coloring if desired.",

      "Spread a thick layer of buttercream over the cold brownies.",

      "Make the ganache: Microwave chocolate chips and cream in 15-second intervals, stirring until smooth.",

      "Drizzle the ganache over the frosting.",

      "Sprinkle crushed candy canes on top.",

      "Chill for 10–15 minutes to set.",

      "Cut into 9 large bakery-style squares."
    ]
  },
  {
  id: "baked-mac-and-cheese",
  title: "Baked Mac & Cheese",
  category: "meals",
  description: "Creamy, cheesy baked cavatappi mac and cheese with mozzarella, Colby Jack, and sharp cheddar.",
  image: "",
  time: "About 1 hr",
  servings: "",

  ingredients: [
    {
      title: "Pasta",
      items: [
        "1 pound cavatappi pasta",
        "Water, for boiling"
      ]
    },

    {
      title: "Cheese",
      items: [
        "1 pound mozzarella, shredded",
        "1 pound Colby Jack, shredded",
        "8 oz sharp cheddar, shredded",
        "Divide the shredded cheese in half"
      ]
    },

    {
      title: "Seasonings",
      items: [
        "Salt",
        "Pepper",
        "Garlic powder",
        "Paprika"
      ]
    },

    {
      title: "Cheese Sauce",
      items: [
        "3 tbsp butter",
        "3 tbsp all-purpose flour",
        "1 can (12 oz) evaporated milk",
        "2 cups heavy cream"
      ]
    }
  ],

  instructions: [
    "Cook the cavatappi pasta until al dente. Drain and set aside.",

    "Shred the mozzarella, Colby Jack, and sharp cheddar. Divide the shredded cheese in half.",

    "Mix together the salt, pepper, garlic powder, and paprika to make the seasoning mix.",

    "In a pan over medium heat, melt 3 tbsp butter.",

    "Add half of the seasoning mix and let it cook for about 30 seconds.",

    "Add 3 tbsp all-purpose flour and stir to combine.",

    "Add 1 can (12 oz) evaporated milk and 2 cups heavy cream. Stir until combined.",

    "Turn the heat to low.",

    "Add half of the shredded cheese and stir until melted and smooth.",

    "Add the remaining half of the seasoning mix and stir.",

    "Add the cooked cavatappi pasta and mix until the pasta is coated in the cheese sauce.",

    "Preheat the oven to 350°F.",

    "Transfer half of the mac and cheese to a baking dish.",

    "Layer half of the remaining shredded cheese over the mac and cheese.",

    "Add the rest of the mac and cheese.",

    "Layer the remaining shredded cheese over the top.",

    "Bake at 350°F for 25–30 minutes.",

    "Broil for up to 10 minutes MAX, watching closely so the top does not burn."
  ]
},
{
  id: "chocolate-chip-cookies-four-batches",
  title: "Chocolate Chip Cookies — 4 Batches",
  category: "bakery",
  description: "A four-batch recipe for classic chocolate chip cookies with melted butter and plenty of chocolate chips.",
  image: "",
  time: "",
  servings: "4 batches",

  ingredients: [
    {
      title: "Bowl #1",
      items: [
        "680g all-purpose flour",
        "2 tsp baking soda",
        "2 tsp baking powder",
        "3 tsp salt"
      ]
    },

    {
      title: "Bowl #2",
      items: [
        "400g brown sugar",
        "280g white sugar",
        "2 cups cooled melted butter",
        "4 unsalted sticks or 2 salted sticks of butter",
        "8 tsp vanilla extract",
        "4 eggs"
      ]
    },

    {
      title: "Add After Mixing",
      items: [
        "800g chocolate chips"
      ]
    }
  ],

  instructions: [
    "In bowl #1, whisk together the all-purpose flour, baking soda, baking powder, and salt.",

    "In bowl #2, whisk together the brown sugar, white sugar, and cooled melted butter until it forms a paste.",

    "Whisk the vanilla extract and eggs into the butter and sugar mixture.",

    "Mix bowl #1 into bowl #2 until combined.",

    "Add 800g chocolate chips and mix until evenly distributed."
  ]
}, {
  id: "fluffy-almond-flour-cake",
  title: "Fluffy Almond Flour Cake",
  category: "bakery",
  description: "A light and fluffy almond flour cake sweetened with honey and flavored with vanilla.",
  image: "",
  time: "1 hr 10 mins",
  servings: "8 slices",

  ingredients: [
    {
      title: "Ingredients",
      items: [
        "½ tbsp butter, for greasing the pan",
        "4 large eggs",
        "½ cup honey, sugar-free honey, or maple syrup",
        "1 tbsp vanilla extract",
        "1½ cups superfine almond flour (6 oz)",
        "Pinch of salt",
        "½ tsp baking soda OR 2 tsp gluten-free baking powder"
      ]
    }
  ],

  instructions: [
    "Generously grease an 8-inch nonstick cake pan with ½ tbsp softened butter.",

    "Preheat the oven to 350°F.",

    "In a large bowl, lightly whisk the eggs.",

    "Gradually whisk in the honey, vanilla, almond flour, salt, and baking soda. Do not over-mix the batter, as an overworked batter can cause the middle of the cake to collapse as it cools.",

    "Use a spatula to transfer the batter into the prepared pan.",

    "Bake until the cake is fragrant and set and a toothpick inserted in the center comes out clean, about 22–25 minutes.",

    "Cool the cake in the pan on a cooling rack for 10 minutes.",

    "Invert the cake onto the cooling rack and cool for another 20 minutes.",

    "Slice and serve."
  ]
},  {
    id: "aloo-tikki",
    title: "Aloo Tikki",
    category: "desi-foods",
    description: "Crispy, seasoned potato patties with onion, green chillies, coriander, and warm spices.",
    image: "",
    time: "",
    servings: "",

    ingredients: [
      {
        title: "Potatoes",
        items: [
          "1 kg potatoes"
        ]
      },

      {
        title: "Seasonings",
        items: [
          "1 medium red onion, finely chopped",
          "2–3 green chillies, finely chopped (adjust to taste)",
          "3 tbsp fresh coriander, finely chopped",
          "½ tsp black pepper, or to taste",
          "1½ tsp chaat masala",
          "OR 1 tsp fresh lemon/lime juice",
          "OR 1 tsp anardana (pomegranate seed powder)",
          "1–2 tsp roasted cumin powder, to taste"
        ]
      },

      {
        title: "For Frying",
        items: [
          "1 raw egg, for dipping",
          "Oil, for frying"
        ]
      }
    ],

    instructions: [
      "Boil 1 kg potatoes until completely soft.",
      "Peel and mash the potatoes until smooth with no large lumps.",
      "Let the mashed potatoes cool.",
      "Add the red onion, green chillies, fresh coriander, black pepper, chaat masala, and roasted cumin powder to the potatoes. If using lemon/lime juice or anardana instead of chaat masala, add that instead.",
      "Mix everything together until evenly combined.",
      "Shape the aloo tikki into small round patties, about 25 g each. A red circles silicone mold can be used to help shape them.",
      "For the crispiest aloo tikki, chill the shaped patties for 15–20 minutes.",
      "Dip each aloo tikki into the raw egg, making sure it is lightly coated.",
      "Heat oil in a pan over medium heat.",
      "Fry the tikkis until golden and crispy on both sides and cooked through.",
      "Serve hot."
    ]
  },
];

RECIPES.sort((a, b) =>
  a.title.localeCompare(b.title, undefined, {
    sensitivity: "base"
  })
);