/* =======================
   Data
======================= */
const recipes = [
  {
    author: 'Provo High Culinary Students',
    url: '',
    isBasedOn: '',
    cookTime: '30 Min',
    datePublished: '2016-10-16',
    tags: ['Waffles', 'Sweet Potato', 'Side'],
    description: 'Savory waffles made with Sweet potato with a hint of Ginger',
    image: './images/sweet-potato-waffle-md.jpg',
    recipeIngredient: ['2 separated eggs','1/4 C Oil','1/4 tsp salt','1/4 tsp Cayenne pepper','3/4 C milk','1 Tbsp Brown Sugar','2 tsp Shredded Ginger','3/4 C Mashed Sweet Potatoes','1 Tbsp Minced Shallots','1 Tbsp Baking Powder','1 Tbsp Chives','1/4 C Cornmeal','1 C Flour'],
    name: 'Sweet Potato Waffles',
    prepTime: '30 Min',
    recipeInstructions: [
      'Add the egg yolks, oil, salt, cayenne, sugar, ginger, shallots, sweet potatoes (steam and mash before), and milk and mix well.',
      'Next add the cornmeal, chives, and flour and baking powder',
      'Whip the egg whites until stiff and fold in',
      'Cook until golden brown in a waffle iron. Serve with butter and Wilted Greens or Honey.'
    ],
    recipeYield: '6 waffles',
    rating: 4
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '20 min',
    datePublished: '',
    tags: ['Chicken', 'Entree'],
    description: 'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
    image: './images/escalopes-de-poulet-a-la-creme.webp',
    recipeIngredient: ['2 Chicken Tenders, Cubed','4 Mushrooms, Sliced','1/2 C Whipping Cream','1-2 Tbsp Stone Ground Mustard','1 tsp Lemon Juice','Salt and Pepper to taste','1 C Rice, uncooked','4-5 oz Fresh Green Beans'],
    name: 'Escalope de Poulet a la Creme with steamed green beans (Chicken with Cream)',
    prepTime: '10 min',
    recipeInstructions: [
      'Add 1 1/2 cups of water to a pan and bring to a boil.  Add the rice and reduce heat to low and simmer for 10-15 minutes or until all the moisture is gone.',
      'Cube chicken then cook over medium high heat in a fry pan, add the mushrooms about halfway through. (10 minutes). ',
      'Pour in cream, mustard and salt and pepper.  Stir.  On medium heat, simmer until it thickens (5 minutes)',
      'While preparing sauce: wash the beans, then trim the ends and snap (or cut) into 2in lengths.  In a sauce pan with a colander add about 1 cup water and steam the beans (10-15 minutes)',
      'Serve sauce over rice, with the Green beans on the side.'
    ],
    recipeYield: '3 servings',
    rating: 4.5
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '30 min',
    datePublished: '2018-09-19',
    tags: ['Potatoes', 'side'],
    description: 'Easy and delicious oven roasted potatoes that go great with almost anything.',
    image: './images/roasted-potatoes.webp',
    recipeIngredient: ['3-4 Medium Potatoes','1 Tbsp Olive oil','2 tsp Italian Seasoning','1/2 tsp Salt','1/2 tsp Ground Black Pepper','1-2 tsp Hot Sauce (optional)'],
    name: 'Oven Roasted potato slices',
    prepTime: '10 min',
    recipeInstructions: [
      'Preheat oven to 400 deg F',
      'Wash and thinly slice the potatoes',
      'Mix together the oil, salt, pepper, Italian seasoning, and hot sauce.',
      'Toss the potatoes in the spice mixture to evenly coat then spead over a baking sheet',
      'Bake for 30 min or until the desired level of crispyness is achieved.'
    ],
    recipeYield: '',
    rating: 4
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '20 min',
    datePublished: '2018-09-19',
    tags: ['Southwest', 'entree'],
    description: 'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
    image: './images/black-beans-and-rice.jpg',
    recipeIngredient: ['1 Medium Onion, diced','2 Cloves Garlic, minced','1 Tbsp Olive oil','1 Can Black Beans (15oz)','1 Can Diced Tomatoes (15oz)','1/8 tsp Cayenne Pepper (optional)','2 C Brown Rice (uncooked)','Grated Cheese','Tortilla Chips'],
    name: 'Black Beans and Rice',
    prepTime: '10 min',
    recipeInstructions: [
      'Add 4 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low. Cook until moisture is gone. (20-30 minutes)',
      'In another saucepan heat the oil and add the diced onion and garlic. Cook until tender.',
      'Stir in the drained Black beans, Undrained tomatoes, and Cayenne.',
      'Bring to a boil, then reduce heat and simmer uncovered for 15 min.',
      'Serve over rice, topped with grated cheese and Tortilla chips.'
    ],
    recipeYield: '4 servings',
    rating: 3
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '30 min',
    datePublished: '2018-09-19',
    tags: ['chicken', 'entree', 'Indian'],
    description: 'Quick and easy Chicken curry recipe made with easy to find ingredients.',
    image: './images/chicken-curry.webp',
    recipeIngredient: ['4 Slices Bacon','1 clove Garlic','2 Tbsp Flour','1 C water','1 C Milk','3 Tbsp Tomato Paste','1/2 C Apple Sauce','3-4 tsp Curry Powder','2 tsp Chicken Bouillion','3/4 C Sour Cream','1-2 C Chicken, cubed','2 C Rice, uncooked'],
    name: 'Chicken Curry',
    prepTime: '10 min',
    recipeInstructions: [
      'Add 3 cups water to a saucepan and bring to a boil. Add Rice, stir, cover, and reduce heat to low.',
      'Cook bacon until crisp, drain reserving 1 Tbsp drippings. Crumble bacon and set aside.',
      'Cook Chicken and Cube.',
      'Make sauce with flour + milk, then add water, applesauce, tomato paste, curry, bouillon, garlic. Simmer.',
      'Add bacon & chicken; stir in sour cream. Serve over rice.'
    ],
    recipeYield: '5 servings',
    rating: 5
  },
  {
    author: 'Shane Thompson',
    url: '',
    isBasedOn: '',
    cookTime: '11 min',
    datePublished: '2018-09-19',
    tags: ['dessert'],
    description: 'Delicious soft chocolate chip cookies with coconut.',
    image: './images/chocolate-chip-cookies.jpg',
    recipeIngredient: ['1 Lb butter, softened','1 C white sugar','3 Eggs','1 1/2 C Brown sugar','1 tsp Baking soda','1 tsp Vanilla extract','1/4 tsp Salt','5 C Flour','2 C Chocolate Chips','1 C Shredded Coconut'],
    name: 'Chocolate Chip Cookies',
    prepTime: '15 min',
    recipeInstructions: [
      'Preheat oven to 350F.',
      'Cream butter, white sugar, and eggs together.',
      'Add brown sugar, salt, baking soda, and vanilla. Mix well.',
      'Add flour, chocolate chips, and coconut. Mix well.',
      'Place dough balls on sheet; bake 11–12 minutes.'
    ],
    recipeYield: '8 dozen',
    rating: 5
  },
  {
    author: 'Ester Kocht',
    url: 'https://www.esterkocht.com/german-gooseberry-cake-with-vanilla-cream-and-crumble/',
    isBasedOn: '',
    cookTime: '45min',
    datePublished: '2023-10-10',
    tags: ['dessert', 'German'],
    description: "Gooseberry cake with vanilla cream and crumble. Tart, creamy, and not too sweet.",
    image: './images/german-gooseberry-cake.jpg',
    recipeIngredient: ['flour','eggs','butter','vanilla sugar','milk','cornstarch','sour cream','gooseberries'],
    name: 'Gooseberry cake with vanilla cream and crumble',
    prepTime: '30 min',
    recipeInstructions: ['Make base','Cook vanilla cream','Assemble with berries','Top with crumble and bake'],
    recipeYield: '12 servings',
    rating: 5
  },
  {
    author: 'AllRecipes',
    url: 'https://www.allrecipes.com/recipe/12409/apple-crisp-ii/',
    isBasedOn: '',
    cookTime: '45min',
    datePublished: '2023-10-10',
    tags: ['dessert'],
    description: "Simple fall dessert that’s great served warm with vanilla ice cream.",
    image: './images/apple-crisp.jpg',
    recipeIngredient: ['apples','sugar','flour','cinnamon','oats','butter'],
    name: 'Apple Crisp',
    prepTime: '30 min',
    recipeInstructions: ['Prep apples','Mix topping','Assemble','Bake'],
    recipeYield: '12 servings',
    rating: 4
  }
];

// quick sanity log
console.log('recipes length:', Array.isArray(recipes) ? recipes.length : 'NOT AN ARRAY');

/* =======================
   Helpers
======================= */
const $ = (sel, root=document) => root.querySelector(sel);

function slug(str){
  return String(str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g,' ')
    .trim();
}
function searchableText(r){
  return slug([r.name, r.description, (r.tags||[]).join(' ')].join(' '));
}

/* =======================
   Rendering
======================= */
function renderHero(recipe){
  if (!recipe) return;
  const article = $('.recipe');
  if(!article) return;

  const img = article.querySelector('.recipe__media img');
  if(img){
    img.src = recipe.image || './recipe-book.png';
    img.alt = recipe.name;
  }

  const pill = article.querySelector('.pill');
  if(pill) pill.textContent = (recipe.tags && recipe.tags[0]) || 'recipe';

  const title = article.querySelector('.recipe__title');
  if(title) title.textContent = recipe.name;

  const desc = article.querySelector('.recipe__desc');
  if(desc) desc.textContent = recipe.description || '';

  const rating = Math.round(recipe.rating ?? 0);
  const ratingWrap = article.querySelector('.rating');
  if(ratingWrap){
    ratingWrap.setAttribute('aria-label', `Rating: ${rating} out of 5 stars`);
    ratingWrap.textContent = '★★★★★'.slice(0, rating).padEnd(5, '☆');
  }
}

function recipeCard(recipe){
  const li = document.createElement('li');
  li.className = 'card';
  li.innerHTML = `
    <article class="card__inner">
      <img class="card__img" src="${recipe.image || './recipe-book.png'}" alt="${recipe.name}">
      <div class="card__body">
        <h3 class="card__title">${recipe.name}</h3>
        <p class="card__desc">${recipe.description || ''}</p>
        <div class="card__meta">
          <span class="pill">${(recipe.tags && recipe.tags.join(', ')) || 'recipe'}</span>
          <span class="time">⏱ ${recipe.prepTime || ''}${recipe.cookTime? ' • '+recipe.cookTime:''}</span>
        </div>
      </div>
    </article>`;
  return li;
}

function renderResults(list){
  const mount = document.getElementById('results');
  if(!mount) return;
  mount.innerHTML = '';
  const ul = document.createElement('ul');
  ul.className = 'cards';
  list.forEach(r => ul.appendChild(recipeCard(r)));
  mount.appendChild(ul);
}

/* =======================
   Search
======================= */
function filterRecipes(query){
  const q = slug(query);
  if(!q) return [...recipes].sort((a,b)=> a.name.localeCompare(b.name));
  const terms = q.split(/\s+/).filter(Boolean);
  return recipes
    .filter(r => terms.every(t => searchableText(r).includes(t))) // AND match
    .sort((a,b)=> a.name.localeCompare(b.name));
}

/* =======================
   Init
======================= */
document.addEventListener('DOMContentLoaded', () => {
  if (!Array.isArray(recipes) || recipes.length === 0) {
    console.error('No recipes available – check that recipes.js actually contains the array and is loading once.');
    renderHero({ name: 'No recipes found', image: './recipe-book.png', tags: ['info'], description: 'Add recipe data to recipes.js or fix loading path.', rating: 0 });
    renderResults([]);
    return;
  }

  const idx = Math.floor(Math.random() * recipes.length);
  renderHero(recipes[idx] || recipes[0]);

  renderResults(filterRecipes(''));

  const form = document.querySelector('.search');
  const input = document.getElementById('q');
  const run = () => renderResults(filterRecipes(input?.value || ''));

  form?.addEventListener('submit', e => { e.preventDefault(); run(); });
  input?.addEventListener('input', run);
});
