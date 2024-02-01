export const testingUrl = 'http://172.16.16.26:8000/api/';
export const isTesting = true;
export const AuthToken = 'Bearer ';

export const GET_API_DATA = 'GET_API_DATA';
export const API_DATA_LOADING = 'API_DATA_LOADING';
export const API_DATA_ERROR = 'API_DATA_ERROR';
export const API_DATA_RECEIVED = 'API_DATA_RECEIVED';
export const RECEIVED_API_DATA = 'RECEIVED_API_DATA';
export const RESET_REDUX_STORE = 'RESET_REDUX_STORE';

export const ActionConstants = {
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  RESET_PASSWORD: 'RESET_PASSWORD',
  GET_ALL_RECIPES: 'GET_ALL_RECIPES',
  GET_USER_IMAGE: 'GET_USER_IMAGE',
  UPLOAD_USER_IMAGE: 'UPLOAD_USER_IMAGE',
  GET_CATEGORIES: 'GET_CATEGORIES',
  PRODUCT_RATING: 'PRODUCT_RATING',
  GET_RATING: 'GET_RATING',
  GET_CATEGORIES2: 'GET_CATEGORIES2',
  GET_ALL_REVIEW: 'GET_ALL_REVIEW',
  RECOMMENDATION_RATING: 'RECOMMENDATION_RATING',
  GET_SINGLE_RECIPE: 'GET_SINGLE_RECIPE',
};
/**
|----------------------------------------------------
| Once initiate this using action init spinner in api action
| Then Close properly using  spinnerStop action in api action or 
| in api reducer by setting customSpinner false;
|
| Another method is use another key like custom spinner in your reducer 
| and action to enable it then you can disable it using the reducer return state
|----------------------------------------------------
*/
export const CUSTOM_SPINNER_ENABLE = 'CUSTOM_SPINNER_ENABLE';
export const CUSTOM_SPINNER_DISABLE = 'CUSTOM_SPINNER_DISABLE';

export const HTTP = {
  signUp: testingUrl + 'signup',
  signIn: testingUrl + 'signin',
  forgotPassword: testingUrl + 'forgot-password',
  resetPassword: testingUrl + 'reset-password',
  getAllRecipes: testingUrl + 'getAll-recipes',
  getUserImage: testingUrl + 'getUser-image',
  uploadUserImage: testingUrl + 'upload-image',
  getCategories: testingUrl + 'getAll-categories-recipes',
  productRating: testingUrl + 'updateRating',
  getRatings: testingUrl + 'getRatings',
  getAllReview: testingUrl + 'getAllReview',
  getRecommendationRating: testingUrl + 'getRecommendedRating',
  getSingleRecipe: testingUrl + 'getSingleRecipe',

  //urls'

  //Authorized URl's
  // Header For Api Call Without Authorization.
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  // Header For Api Call With Authorization.
  AuthHeader: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    Authorization: AuthToken,
  },

  /** For Multipart Form data add fileUpload = true in action.js
   * Before hitting form data please update the Http.Authorization it will not contain token*/
  // Form Data Header with Authorization
  FormDataHeader: {
    'Content-Type': 'multipart/form-data',
    Accept: '*/*',
    Authorization: AuthToken,
  },
};

//handling expire token
const breakfastData = [
  {
    name: 'Classic Pancakes',
    description: 'Fluffy pancakes served with maple syrup and butter.',
    ingredients: [
      '1 cup all-purpose flour',
      '2 tablespoons sugar',
      '1 teaspoon baking powder',
      '1/2 teaspoon baking soda',
      '1/2 teaspoon salt',
      '1 cup buttermilk',
      '1 egg',
      '2 tablespoons melted butter',
      'Maple syrup and butter for serving',
    ],
    image: '',
    routine: 'Breakfast',
  },
  {
    name: 'Greek Yogurt Parfait',
    description: 'Creamy Greek yogurt layered with fresh berries and granola.',
    ingredients: [
      '1 cup Greek yogurt',
      '1/2 cup mixed berries (strawberries, blueberries, raspberries)',
      '1/4 cup granola',
      'Honey for drizzling (optional)',
    ],
    image: '',
    routine: 'Breakfast',
  },
  {
    name: 'Vegetable Omelette',
    description: 'Fluffy omelette filled with sautéed vegetables and cheese.',
    ingredients: [
      '2 large eggs',
      '2 tablespoons milk',
      'Salt and pepper to taste',
      '1/4 cup diced bell peppers',
      '1/4 cup diced onions',
      '1/4 cup diced tomatoes',
      '1/4 cup shredded cheddar cheese',
      '1 tablespoon olive oil',
    ],
    image: '',
    routine: 'Breakfast',
  },
  {
    name: 'Avocado Toast',
    description:
      'Sliced avocado on toasted whole-grain bread with a sprinkle of sea salt and red pepper flakes.',
    ingredients: [
      '1 ripe avocado',
      '2 slices whole-grain bread, toasted',
      'Sea salt to taste',
      'Red pepper flakes to taste',
    ],
    image: '',
    routine: 'Breakfast',
  },
  {
    name: 'Fruit Smoothie',
    description:
      'A refreshing and nutritious fruit smoothie with a variety of fruits and yogurt.',
    ingredients: [
      '1/2 cup strawberries',
      '1/2 cup blueberries',
      '1/2 banana',
      '1/2 cup plain yogurt',
      '1/2 cup orange juice',
      '1 tablespoon honey (optional)',
      'Ice cubes',
    ],
    image: '',
    routine: 'Breakfast',
  },

  {
    name: 'Chicken Caesar Salad',
    description: 'A classic Caesar salad with grilled chicken breast.',
    ingredients: [
      '2 boneless, skinless chicken breasts',
      'Romaine lettuce',
      'Croutons',
      'Parmesan cheese',
      'Caesar salad dressing',
    ],
    image: '',
    routine: 'Lunch',
  },
  {
    name: 'Caprese Sandwich',
    description:
      'A delicious sandwich with fresh mozzarella, tomatoes, basil, and balsamic glaze.',
    ingredients: [
      'Ciabatta bread',
      'Fresh mozzarella cheese',
      'Tomato slices',
      'Fresh basil leaves',
      'Balsamic glaze',
    ],
    image: '',
    routine: 'Lunch',
  },
  {
    name: 'Vegetable Stir-Fry',
    description:
      'A healthy stir-fry with a mix of colorful vegetables and tofu in a savory sauce.',
    ingredients: [
      'Tofu cubes',
      'Broccoli florets',
      'Bell peppers',
      'Carrot strips',
      'Soy sauce',
      'Sesame oil',
      'Garlic and ginger',
    ],
    image: '',
    routine: 'Lunch',
  },
  {
    name: 'Quinoa Salad',
    description:
      'A refreshing salad with cooked quinoa, cucumber, cherry tomatoes, and a lemon vinaigrette.',
    ingredients: [
      'Cooked quinoa',
      'Cucumber slices',
      'Cherry tomatoes',
      'Red onion',
      'Fresh parsley',
      'Lemon vinaigrette dressing',
    ],
    image: '',
    routine: 'Lunch',
  },
  {
    name: 'Mushroom Risotto',
    description:
      'Creamy risotto with sautéed mushrooms, Arborio rice, and Parmesan cheese.',
    ingredients: [
      'Arborio rice',
      'Mushrooms',
      'Onion',
      'Chicken or vegetable broth',
      'White wine',
      'Parmesan cheese',
    ],
    image: '',
    routine: 'Lunch',
  },

  {
    name: 'Grilled Salmon with Asparagus',
    description:
      'Flavorful grilled salmon served with roasted asparagus and lemon butter sauce.',
    ingredients: [
      'Salmon fillets',
      'Fresh asparagus spears',
      'Olive oil',
      'Lemon juice',
      'Butter',
      'Garlic',
    ],
    image: '',
    routine: 'Dinner',
  },
  {
    name: 'Spaghetti Bolognese',
    description:
      'Classic Italian pasta dish with ground beef, tomato sauce, and Parmesan cheese.',
    ingredients: [
      'Ground beef',
      'Spaghetti pasta',
      'Tomato sauce',
      'Onions',
      'Garlic',
      'Parmesan cheese',
    ],
    image: '',
    routine: 'Dinner',
  },
  {
    name: 'Vegetable Curry',
    description:
      'A vegetarian curry with a mix of colorful vegetables in a rich and spicy sauce.',
    ingredients: [
      'Mixed vegetables (e.g., potatoes, carrots, peas)',
      'Onion',
      'Tomatoes',
      'Coconut milk',
      'Curry spices',
    ],
    image: '',
    routine: 'Dinner',
  },
  {
    name: 'Grilled Chicken with Quinoa',
    description:
      'Grilled chicken breasts paired with quinoa cooked with herbs and vegetables.',
    ingredients: [
      'Chicken breasts',
      'Quinoa',
      'Bell peppers',
      'Zucchini',
      'Fresh herbs (e.g., basil, parsley)',
    ],
    image: '',
    routine: 'Dinner',
  },
  {
    name: 'Beef Stir-Fry',
    description:
      'Tender strips of beef stir-fried with colorful vegetables in a savory soy-based sauce.',
    ingredients: [
      'Beef sirloin strips',
      'Broccoli florets',
      'Bell peppers',
      'Soy sauce',
      'Sesame oil',
      'Ginger',
    ],
    image: '',
    routine: 'Dinner',
  },
];

export const Recipes = [
  {
    title: 'Chicken Tikka Masala',
    ingredients: [
      '500g chicken breast',
      '1 cup yogurt',
      '2 tbsp ginger-garlic paste',
      '1 tbsp garam masala',
      '1 tbsp chili powder',
    ],
    instructions:
      'Marinate chicken in yogurt and spices, grill or cook in a sauce.',
    country: 'Indian',
    image:
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80',
  },

  {
    title: 'Paneer Tikka',
    ingredients: [
      '250g paneer (cottage cheese)',
      '1 cup yogurt',
      '1 tbsp ginger-garlic paste',
      '1 tbsp tandoori masala',
      'Bell peppers and onions (for skewers)',
    ],
    instructions: 'Marinate paneer in yogurt and spices, skewer and grill.',
    country: 'Indian',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    title: 'Butter Chicken (Murgh Makhani)',
    ingredients: [
      '500g chicken thighs',
      '1 cup tomato puree',
      '1/2 cup heavy cream',
      '1 tbsp butter',
      '1 tsp fenugreek leaves',
    ],
    instructions: 'Cook chicken in tomato sauce, add cream, and butter.',
    country: 'Indian',
    image:
      'https://plus.unsplash.com/premium_photo-1675864532835-6e47099cca6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80',
  },
  {
    title: 'Biryani',
    ingredients: [
      '2 cups basmati rice',
      '500g chicken or vegetables',
      '1/2 cup yogurt',
      'Biryani spices',
    ],
    instructions: 'Layer rice and cooked chicken/veggies, cook on low heat.',
    country: 'Indian',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    title: 'Chana Masala',
    ingredients: [
      '2 cups chickpeas',
      '1 cup tomato puree',
      '1 onion, finely chopped',
      '1 tsp cumin seeds',
    ],
    instructions: 'Sauté onions and spices, add chickpeas and tomatoes.',
    country: 'Indian',
    image:
      'https://images.unsplash.com/photo-1634234498505-51b316832b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    title: 'Palak Paneer',
    ingredients: [
      '250g paneer (cottage cheese)',
      '2 cups spinach puree',
      '1/2 cup cream',
      '1 tsp garam masala',
    ],
    instructions: 'Cook paneer in spinach sauce, add cream and spices.',
    country: 'Indian',
    image:
      'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
  },
  {
    title: 'Aloo Gobi',
    ingredients: [
      '2 cups cauliflower florets',
      '2 potatoes, diced',
      '1 tsp cumin seeds',
      '1/2 tsp turmeric powder',
    ],
    instructions: 'Sauté potatoes and cauliflower with spices.',
    country: 'Indian',
    image:
      'https://images.unsplash.com/photo-1652545296893-ff9227b3512e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
  },
  {
    title: 'Tandoori Chicken',
    ingredients: [
      '500g chicken drumsticks',
      '1 cup yogurt',
      '2 tbsp tandoori masala',
      '1 tbsp lemon juice',
    ],
    instructions: 'Marinate chicken in yogurt and spices, grill or bake.',
    country: 'Indian',
    image:
      'https://images.unsplash.com/photo-1517984055083-fd6e1e788e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    title: 'Dal Makhani',
    ingredients: [
      '1 cup black lentils (urad dal)',
      '1/4 cup red kidney beans (rajma)',
      '1/2 cup cream',
      '1 tsp cumin seeds',
    ],
    instructions: 'Cook lentils and beans, add cream and spices.',
    country: 'Indian',
    image:
      'https://images.unsplash.com/photo-1626500155537-93690c24099e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  },
  {
    title: 'Mutton Rogan Josh',
    ingredients: [
      '500g mutton',
      '1 cup yogurt',
      '1 tsp ginger-garlic paste',
      '1 tbsp red chili powder',
    ],
    instructions: 'Marinate mutton in yogurt and spices, slow-cook in gravy.',
    country: 'Indian',
    image:
      'https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370903.jpg?w=360&t=st=1695199626~exp=1695200226~hmac=4e24878ab12b40cecf0c9cede289a73d05adb9e77ca78f7bf5830ff494978404',
  },

  {
    title: 'Classic Hamburger',
    ingredients: [
      '1/2 lb ground beef',
      '1 hamburger bun',
      'Lettuce, tomato, onion (for toppings)',
      'Ketchup and mustard (optional)',
    ],
    instructions:
      'Form beef into patties, grill or pan-fry, assemble with toppings.',
    country: 'american',
    image:
      'https://images.unsplash.com/photo-1554998171-7e599bc95ccd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    title: 'Macaroni and Cheese',
    ingredients: [
      '2 cups elbow macaroni',
      '2 cups shredded cheddar cheese',
      '1 cup milk',
      '2 tbsp butter',
    ],
    instructions:
      'Cook macaroni, mix with cheese, milk, and butter, bake until bubbly.',
    country: 'american',
    image:
      'https://img.freepik.com/premium-photo/macaroni-full-melted-cheese-sprinkled-with-savory-herbs-black-blurred-background_358001-16904.jpg?w=826',
  },
  {
    title: 'Chicken Pot Pie',
    ingredients: [
      '2 cups cooked chicken',
      '1 cup frozen mixed vegetables',
      '1 cup chicken broth',
      '1 pie crust',
    ],
    instructions:
      'Combine chicken, veggies, and broth, top with pie crust, bake until golden.',
    country: 'american',
    image:
      'https://img.freepik.com/free-photo/plate-with-delicious-italian-lasagne_23-2149460204.jpg?w=360&t=st=1695199860~exp=1695200460~hmac=3f39bed0d05b9153c895a2173ba8a012e58b39e9e2cbac8b51c950791eaca3b1',
  },
  {
    title: 'BLT Sandwich',
    ingredients: [
      'Bacon strips',
      'Lettuce leaves',
      'Sliced tomato',
      'Mayonnaise',
      'Sliced bread',
    ],
    instructions:
      'Cook bacon, assemble sandwich with lettuce, tomato, and mayo.',
    country: 'american',
    image:
      'https://images.unsplash.com/photo-1532903460337-0d1b9a71b2c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  },
  {
    title: 'Pancakes',
    ingredients: [
      '1 cup all-purpose flour',
      '2 tbsp sugar',
      '1 tsp baking powder',
      '1 egg',
      '1 cup milk',
    ],
    instructions: 'Mix dry ingredients, add egg and milk, cook in a hot pan.',
    country: 'american',
    image:
      'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  },

  {
    title: 'Chicken Enchiladas',
    ingredients: [
      '2 cups cooked chicken, shredded',
      '1 cup grated cheddar cheese',
      '1/2 cup diced onions',
      '8 tortillas',
      'Enchilada sauce',
    ],
    instructions:
      'Fill tortillas with chicken, onions, and cheese, roll up, top with sauce, and bake.',
    image:
      'https://images.unsplash.com/photo-1570461226513-e08b58a52c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80',
    country: 'mexican',
  },
  {
    title: 'Guacamole',
    ingredients: [
      '3 ripe avocados',
      '1/2 cup diced tomatoes',
      '1/4 cup diced onions',
      '1/4 cup chopped cilantro',
      '1 lime, juiced',
    ],
    instructions:
      'Mash avocados, add tomatoes, onions, cilantro, and lime juice, mix well.',
    image:
      'https://img.freepik.com/free-photo/guacamole-dip_144627-26998.jpg?w=740&t=st=1695199949~exp=1695200549~hmac=cc2736a3dde78b5f7c595af686f78708e984c94dccd14c23f9ba55c0b7e44a8f',
    country: 'mexican',
  },
  {
    title: 'Tacos al Pastor',
    ingredients: [
      '500g pork shoulder, thinly sliced',
      '2 tbsp achiote paste',
      '1/2 cup pineapple chunks',
      'Corn tortillas',
    ],
    instructions:
      'Marinate pork in achiote paste, grill, serve in tortillas with pineapple.',
    image:
      'https://img.freepik.com/free-photo/high-angle-beer-tacos-arrangement_23-2148764336.jpg?w=360&t=st=1695200045~exp=1695200645~hmac=947d348a35d4c23d27b51f249d1bbaa2a6cfbb1d0e3424978fa3a09135f9de5a',
    country: 'mexican',
  },
  {
    title: 'Chiles Rellenos',
    ingredients: [
      '4 poblano peppers',
      '1 cup grated Monterey Jack cheese',
      '1/2 cup flour',
      '2 eggs',
    ],
    instructions:
      'Roast peppers, stuff with cheese, coat with flour and egg, fry until golden.',
    image:
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    country: 'mexican',
  },
  {
    title: 'Salsa Verde',
    ingredients: [
      '10 tomatillos, husked and boiled',
      '2 jalapeño peppers, roasted',
      '1/2 cup chopped onion',
      '1/4 cup chopped cilantro',
    ],
    instructions:
      'Blend tomatillos, jalapeños, onion, and cilantro, season with salt.',
    image:
      'https://images.unsplash.com/photo-1613514967307-d5b3471b2453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    country: 'mexican',
  },
];
