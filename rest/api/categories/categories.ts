type TCategory = {
  id: Number,
  count: Number,
  name: String,
  slug: String,
  parent: Number,
  description: Number,
  link: String,
  image: String
}


const categories = {
    categories:[
      {
        id: 55,
        count: 66,
        name: "Adobo Recipes",
        slug: "adobo-recipes",
        parent: 24,
        description:
          "This legendary dish has become a favorite not just among Filipinos, but also to people from around the world who have had a taste of the ever-savory and mouthwatering Adobo. We just can’t get enough of the perfectly balanced set of flavors we get from Adobo like the subtle sourness from vinegar, and the satisfying saltiness of soy sauce. But even if it seems like such a familiar recipe, it won’t hurt to brush up on the techniques and seasonings involved in creating this dish. Pick your Adobo recipe of choice, and cook it right here with me step by step!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/adobo-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/03/Pork-Adobo-266x160.jpg?x39166",
      },
      {
        id: 6722,
        count: 16,
        name: "Ampalaya Recipes",
        slug: "ampalaya-recipes",
        parent: 24,
        description:
          "If you happen to be someone who has yet to appreciate the great, unique taste of bitter gourd, there’s a chance that you just haven’t found the recipe for you! Here are a couple of sensationally savory Ampalaya recipes for you to look through. There are some options with meat like Ampalaya con Carne, as well as vegetarian choices like Ampalaya Salad. These dishes can show you how this famed bitter vegetable surely shouldn’t be ignored. There are also some guides as to how you can lessen the bitterness if you prefer the ampalaya with less of that strong flavor. \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/ampalaya-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2009/07/Ginisang-Ampalaya-with-Eggs-266x160.jpg?x39166",
      },
      {
        id: 56,
        count: 49,
        name: "Appetizer and Pulutan Recipes",
        slug: "tagay-muna-appetizers",
        parent: 24,
        description:
          "Nothing beats a good pulutan dish to get everyone in the mood to celebrate with some drinks and fun. And so it truly helps to have your fair share of knowledge on how to make the classic dishes served in hangouts like these. Now if you’re looking for smaller types of dishes to have before your main course, you also went to the right place. Panlasang Pinoy has all the types of appetizers you’re looking for to get your appetite going, and have everyone ready to chow down! From meat to seafood to vegetarian options, we’ve got it for you so you and all of your guests can enjoy this time to eat, and have a good time.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/tagay-muna-appetizers/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/11/bopis-recipe-266x160.jpg?x39166",
      },
      {
        id: 57,
        count: 56,
        name: "Appetizer Recipes",
        slug: "appetizer-recipes",
        parent: 24,
        description:
          "Not sure what to serve in your next dinner party before the entrees eventually make their way to the table? I’ve got you covered! I have a wide range of appetizer dishes you can turn to so your party can get in the mood for eating. We have the likes of the classic Pork Siomai, as well as the flavorful and exciting Chicken Dynamite Lumpia right here for you to recreate at home. You can simply adjust the ingredients based on the same ratio to cook enough for yourself or your guests. No need to order in— simply make these irresistible appetizers hot and fresh from the oven or the pan to get the party going!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/appetizer-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/01/How-to-Cook-Coconut-Shrimp-Appetizer-266x160.jpg?x39166",
      },
      {
        id: 58,
        count: 17,
        name: "Banana Recipes",
        slug: "banana-recipes",
        parent: 24,
        description:
          "In search of a great dish for your sweet, vibrant bananas? You came to the right place! A terrific thing about this fruit is that it is truly able to blend with a variety of recipes. From bread to stews to, of course, the beloved Bananacue, this ingredient really gives you all the room to decide what kind of food you would like to whip it up with. Go ahead and scroll through your options right here on Panlasang Pinoy by clicking on the links provided. And if you have any questions, the comments section in these recipes is always open for you.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/banana-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2009/10/Banana-Bread-1-266x160.jpg?x39166",
      },
      {
        id: 59,
        count: 7,
        name: "BBQ Chicken Recipes",
        slug: "bbq-chicken-recipes",
        parent: 24,
        description:
          "If I must say so myself, Filipinos definitely have a way of making the most succulent, satisfying barbecue chicken dishes to get your mouth watering, and leave you reaching for more. We can boast of recipes like Chicken Inasal BBQ to show that we really know how to bring the best out of a piece of poultry. Should you run out of ideas on how to marinate your chicken at home, let these recipes speak for themselves, and try them out! BBQ Chicken is one of the most popular dishes in the country, and learning these recipes by heart can really help out when you want to impress the next set of people who come over for a hearty meal.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/bbq-chicken-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/08/Filipino-Chicken-Barbecue-266x160.jpg?x39166",
      },
      {
        id: 60,
        count: 200,
        name: "Beef Recipes",
        slug: "beef-recipes",
        parent: 24,
        description:
          "Need some brushing up on how to make some of the best and most tempting beef dishes? I’ve got the list you need right here. Rich, flavorful, and satisfyingly smooth, beef truly is a component Filipino cooks love to work with. Learn how to make classics like Caldereta, as well as some recipes you have yet to try out like Beef Pares Lomi. Discover some more you can integrate into your menu at home by looking at some of our delectable beef recipes! Watch some of the videos as well so you can cook along with me, and pocket some fun tips along the way.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/beef-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/04/kare-kare-Recipe-Using-Ox-tongue-3-266x160.jpg?x39166",
      },
      {
        id: 6708,
        count: 8,
        name: "Beef Shank Recipes",
        slug: "beef-shank-recipes",
        parent: 24,
        description:
          "As a cook, you definitely should not miss out on making Filipino recipes that make use of the gloriously succulent beef shank. This beef cut works amazingly with stews like the crowd favorite Beef Bulalo, and more popular recipes like Beef Pares. And while some may seem too intimidating to learn on your own, there’s no need to worry! The instructions are clearly laid out for you, and we have videos as well for you to get a visual of every step of the process. Head on to the kitchen for a perfect meal with the tempting and filling beef shank.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/beef-shank-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2009/03/Bulalo-Recipe-Panlasang-Pinoy-266x160.jpg?x39166",
      },
      {
        id: 61,
        count: 6,
        name: "Beverage Recipes",
        slug: "beverage-recipes",
        parent: 24,
        description:
          "Experiencing one of those hot days wherein all you really need is a refreshing, cool drink to give you a boost? Why not create your own delicious beverage at home? Here are a couple of my favorite recipes for tasty, sweet drinks that can provide a great deal of energy as well. Some of these can also be pretty nutritious and ideal for those wanting to try a healthier lifestyle, but still want to enjoy something yummy and satisfying. I’ve got all the steps to making drinks like a Blueberry Greek Yogurt Smoothie, as well as, of course, the Filipino favorite— Sago at Gulaman.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/beverage-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/07/Melon-Juice-266x160.jpg?x39166",
      },
      {
        id: 6735,
        count: 7,
        name: "Bicol Express Recipes",
        slug: "bicol-express-recipes",
        parent: 24,
        description:
          "Don’t be mistaken— Filipino cuisine can also handle its fair share of spice. And when you think of local recipes with a particular bite, one of the first things to come to mind surely is the beloved Bicol Express!  Peppered with chili and bagoong, this recipe is so popular because of its unique taste that still holds a sense of familiarity and comfort in its mix of coconut cream and milk. And due to how famous it is, you will find many interesting and fun variants of this spicy dish. Let me introduce you to a couple right here on Panlasang Pinoy!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/bicol-express-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/04/Pork-Bicol-Express-Recipe-266x160.jpg?x39166",
      },
      {
        id: 62,
        count: 12,
        name: "Bread Recipes",
        slug: "bread-recipes",
        parent: 24,
        description:
          "Are you ready to start kneading, and put that oven to good use? Here’s a great array of bread recipes for you to try making! For some, baking has become a very relaxing and therapeutic way to spend time, while also being productive. And this comes as no surprise, considering how fun it can be to shape dough, and have your hands be coated in flour. Try it for yourself so that the next time you pass by a particularly fragrant bakery, and find yourself tempted to spend on a pandesal or two, you know you can make some of those delicious breads right in your own kitchen!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/bread-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2009/10/Banana-Bread-1-266x160.jpg?x39166",
      },
      {
        id: 63,
        count: 85,
        name: "Breakfast Recipes",
        slug: "breakfast-recipes",
        parent: 24,
        description:
          "If you disagree that this is the best meal of the day, this might be because you haven’t tried some of the best breakfast dishes out there. And Filipino breakfast, in particular, is one that’s hard to say no to. Tapsilog, anyone? How about some of the simple, but definitely flavorful Corned Beef Omelet? Refine your morning cooking skills by taking a look at these recipes! I also have some handy videos to help you as you follow the steps one by one. Rest assured a lot of these dishes are quick and easy enough to cook on the go as you start your day.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/breakfast-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/07/tapa-and-egg-fried-rice-recipe_-266x160.jpg?x39166",
      },
      {
        id: 6415,
        count: 15,
        name: "Broccoli Recipes",
        slug: "broccoli-recipes",
        parent: 24,
        description:
          "Filled with plenty of nutrients, broccoli is one of the best ingredients you can incorporate in your meal. This green vegetable has just the right amount of semi-bitter and sweet flavor to add a unique taste to your dish. And of course, the mix of vitamins like Vitamin K and Vitamin C can help give you a longer life, healthier life. It also goes great with beef recipes. But there’s plenty more you can mix in with this valuable ingredient. Keep scrolling to find your next cooking adventure! And the answers to any questions you might have about these dishes is just one comment away. I’ll be sure to answer your queries. \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/broccoli-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2019/01/Beef-with-Broccoli-Panlasang-Pinoy-266x160.jpg?x39166",
      },
      {
        id: 6670,
        count: 10,
        name: "Burger Recipes",
        slug: "burger-recipes",
        parent: 24,
        description:
          "A delicious, juicy burger is often enough to put all those worries away what with a hefty amount of meat, cheese and tasty seasonings like black pepper. But assembling a delectable burger dish can come in a variety of ways. You can go the classic route by sandwiching yout patty between two buns, or partner your burger steak with some rice or any other side dish. Burger as a viand is yet another terrific way of having this delightful dish. But however you might like it, I probably have all the steps to making it happen! Simply scroll through your options right here.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/burger-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/06/burger-steak-1-266x160.jpg?x39166",
      },
      {
        id: 64,
        count: 17,
        name: "Cake Recipes",
        slug: "cake-recipes",
        parent: 24,
        description:
          "Ready to indulge in your sweet tooth? Having your cake and eating it too is definitely one of the best ways to go about it! Take a look at all of these sugary, appetizing cake recipes on Panlasang Pinoy, which can range from your classic celebratory Vanilla Chiffon Cake to merienda favorites like Puto Cake. Whether you’re looking to bake something special for a gathering, or are in need of a good recipe for your next afternoon snack, I have the options lined up for you. And should you get a bit confused with some of the steps, I also have videos ready to clue you in on how I got to the sweet end results!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/cake-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2017/10/Bibingkang-Galapong-recipe-266x160.jpg?x39166",
      },
      {
        id: 6568,
        count: 1,
        name: "Cassava Recipes",
        slug: "cassava-recipes",
        parent: 24,
        description:
          "When you think of root vegetables, the first kind of recipe to come to mind might not be a dessert. But as a Filipino, you must be aware of how one particular starchy root vegetable is essential to many of our sugary favorites. Plenty of local treats make use of cassava for its nutty flavor that adds a lot of excitement to a dish. For starters, you have the delightful Cassava Cake, and Ube Pichi Pichi. But there is so much more to discover, and have a hand at making at home. Such dishes will truly remind you of your favorite merienda moments.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/cassava-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2017/06/Ube-Pichi-Pichi-266x160.jpg?x39166",
      },
      {
        id: 65,
        count: 17,
        name: "Chef",
        slug: "chef-culinary-arts",
        parent: 2,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/chef-culinary-arts/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/09/saucier-chef-266x160.jpg?x39166",
      },
      {
        id: 6713,
        count: 19,
        name: "Chicken Adobo Recipes",
        slug: "chicken-adobo-recipes",
        parent: 55,
        description:
          "Rich, tender, and absolutely loaded with some of the best flavors there are, Chicken Adobo is a dish you must really know how to make. But even if you already have some familiarity with the making of this dish, it might shock you to find out there are more ways than one to go about it! We have a pretty good variety of Chicken Adobo recipes that should satisfy your every craving— from a dish that integrates a bit of a breakfast taste to the dish by incorporating bacon and egg to a particularly creamy kind enriched with coconut milk. Why not try these out with me?\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/adobo-recipes/chicken-adobo-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2020/08/killer-chicken-adobo-266x160.jpg?x39166",
      },
      {
        id: 66,
        count: 270,
        name: "Chicken Recipes",
        slug: "chicken-recipes",
        parent: 24,
        description:
          "Who doesn’t love a nice, hearty chunk of chicken? Whether you fry it, steam it, bake it, or whatever else you want to do with it, this protein is an undeniable favorite. If just the sight of chicken is enough to make your mouth water, what more its smell—or, better yet, its taste? Here are some of the best chicken recipes out there, ranging from some good old classics to something new. Tried and tested not just by me but in households across the world, these recipes will ensure you’re not letting that chicken go to waste. Believe us; there’s a chicken recipe for everyone!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/chicken-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/pork-and-chicken-sinigang-266x160.jpg?x39166",
      },
      {
        id: 6421,
        count: 39,
        name: "Chicken Soup Recipes",
        slug: "chicken-soup-recipes",
        parent: 24,
        description:
          "Ever heard the saying “chicken soup for the soul”? We can’t think of anything more accurate! Nothing gives us comfort, peace, and warmth like a bowl of delicious chicken soup can. And the best part about it is that there are so many different kinds to enjoy! From chicken sotanghon soup to chicken sopas, chicken mami to even classics like tinolang manok, any one of these recipes can be true embodiments of relaxation and comfort—ready to warm you up! With extra tips and tricks to bring out those flavors you love, find your new favorite comfort food among these chicken soup recipes!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/chicken-soup-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/pork-and-chicken-sinigang-266x160.jpg?x39166",
      },
      {
        id: 6368,
        count: 0,
        name: "Chinese Recipes",
        slug: "chinese-recipes",
        parent: 24,
        description: "",
        link: "https://panlasangpinoy.com/categories/recipes/chinese-recipes/",
      },
      {
        id: 67,
        count: 15,
        name: "Chocolate Recipes",
        slug: "chocolate-recipes",
        parent: 24,
        description:
          "I’m sure many people would agree with me when I say there aren’t a lot of things in this world that can make you happier than chocolate. Give more dishes with this luscious, velvety ingredient a try because as you may already be aware of, there are plenty of great ones you could learn! It doesn’t just end in cake or crinkles. There are the Filipino classics you must surely learn how to make like Champorado and Chocolate Biko. Get to know the value of some good, ol’ chocolate in your kitchen by adding these delectable treats to your cooking repertoire.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/chocolate-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2019/10/mayo-brownies-266x160.jpg?x39166",
      },
      {
        id: 6633,
        count: 4,
        name: "Chop Suey Recipes",
        slug: "chop-suey-recipes",
        parent: 24,
        description:
          "An assortment of crunchy and tasty vegetables, quickly tossed together with a hearty protein, await you with every bite of chop suey! It goes without saying that our country is incredibly rich in natural and agricultural resources, rich in both the quantity and quality of our vegetables. There are few ways that you can utilize vegetables as perfectly as in a nice, steaming bowl of chop suey. In this category, you’ll find a large number of chop suey recipes, differing in the proteins used, sauces combined, and flavors enjoyed. Regardless of your preference, you and your family are sure to find a chop suey recipe here that will doubtlessly satisfy!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/chop-suey-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2018/03/Chop-Suey-266x160.jpg?x39166",
      },
      {
        id: 6641,
        count: 13,
        name: "Christmas Recipes",
        slug: "christmas-recipes",
        parent: 24,
        description:
          "It’s the most wonderful time of the year—what better way to celebrate it than with good food? Beyond the quality time we get to spend with loved ones, the beautiful holiday decorations, and even the heartwarming gifts, Christmas just wouldn’t be Christmas without the appearance of a delicious feast for all. From incredibly filling main courses, small plates perfect for sharing, to desserts that sweetly and decadently wrap up your celebrations, these Christmas recipes are surely welcome in any home. And better yet? With the amount of cooking you’re doing, you’re guaranteed to have some delicious leftovers you and your family can still enjoy the next day! You can make any and every day feel like Christmas with delightful dishes!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/christmas-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/12/Crispy-Mini-Lechon-Belly-Roll-266x160.jpg?x39166",
      },
      {
        id: 6692,
        count: 2,
        name: "Congee Recipes",
        slug: "congee-recipes",
        parent: 24,
        description:
          "One of the most classic and comforting dishes, congee is a rice porridge that has been a part of so many people’s childhoods—including my own! Whether it’s because you’re feeling under the weather or simply having a bad day, there’s nothing a warm bowl of congee can’t fix. This Asian staple has become a worldwide favorite, with different countries creating their own iterations of this very simple but hearty and homey food. And the Philippines is no different; from classic chicken congee to the bold and flavorful arroz caldo, a bowl of any of these congee recipes will put a smile on your face!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/congee-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2020/09/arroz-palabok-266x160.jpg?x39166",
      },
      {
        id: 68,
        count: 7,
        name: "Cookie Recipes",
        slug: "cookie-recipes",
        parent: 24,
        description:
          "A cookie is the prime example of pocket-sized yumminess. From dough so delicious you want to practically lick your spatula clean to whatever toppings and additional ingredients you’ve added that make it extra delightful, it’s no wonder the cookie is such a beloved dessert around the world. Cookies come in many different forms, ranging from the classic chocolate chip to a healthier oatmeal, to other equally enjoyable variants like snickerdoodles and crinkles. Regardless of your cookie preference, we know that this list of cookie recipes may list not only some oldie but goodies but also new, potential favorites! You won’t feel too guilty getting your hand stuck in a cookie jar now!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/cookie-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/11/Oat-Bran-Chocolate-Chip-Cookie-Recipe-266x160.jpg?x39166",
      },
      {
        id: 69,
        count: 9,
        name: "Cooking Classes",
        slug: "cooking-classes-culinary-arts",
        parent: 2,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/cooking-classes-culinary-arts/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2013/12/Cooking-Classes-in-Atlanta-266x160.jpg?x39166",
      },
      {
        id: 70,
        count: 18,
        name: "Crab Recipes",
        slug: "crab-recipes",
        parent: 24,
        description:
          "There are a lot of things you can make with this tasty, meaty component from the sea. Crab dishes can come in different varieties— some with a mix of spice like Chili Crab with Snake Beans, and others with a uniquely savory flavor like Tortang Talong with Crab Meat. One thing I can say is that you will never run out of options once you’ve purchased this delectable seafood option from the market. And if you ever struggle to find more to make, just know the Panlasang Pinoy is only further extending its menu of options for you. Come and have a look! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/crab-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/02/ginataang-alimasag-with-sitaw-at-kalabasa-266x160.jpg?x39166",
      },
      {
        id: 2,
        count: 243,
        name: "Culinary Arts",
        slug: "culinary-arts",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/5-filipino-food-yummy-266x160.jpg?x39166",
      },
      {
        id: 3,
        count: 6,
        name: "Culinary Programs",
        slug: "culinary-programs",
        parent: 2,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/culinary-programs/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2011/06/Culinary-Degree-266x160.jpg?x39166",
      },
      {
        id: 4,
        count: 68,
        name: "Culinary Schools",
        slug: "culinary-schools",
        parent: 2,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/culinary-schools/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/04/find-the-best-culinary-schools-in-colorado-266x160.jpg?x39166",
      },
      {
        id: 71,
        count: 8,
        name: "Cupcake Recipes",
        slug: "cupcake-recipes-recipes",
        parent: 24,
        description:
          "The only thing better than a cake slice is one you don’t have to share—and that’s where these divine cupcake recipes come in! With a myriad of flavors and colors, these petite pastries do more than just brighten up your kitchen. Are you a chocolate lover, or do you prefer your cupcakes on the fruitier side? Worry not; under this list of recipes, there’s a cupcake recipe for each and every member of your family! Whether you’re making these for an intimate gathering or a large celebration, your loved ones will crave your cupcakes like there’s no tomorrow. \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/cupcake-recipes-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2013/01/Cupcake-266x160.jpg?x39166",
      },
      {
        id: 72,
        count: 130,
        name: "Dessert Recipes",
        slug: "dessert-and-pastry-recipes",
        parent: 24,
        description:
          "It doesn’t feel right to end an incredibly satisfying meal without including the absolutely delicious dessert that often comes with it. From sweet cakes and pies to healthier favorites to those that are just downright sinful, these dessert recipes are a reminder not to hesitate: don’t be afraid to give into your sweet tooth! With all the tips and tricks you’ll need to make the perfect dessert, you and your family can enjoy both local and international favorites. Trust us; it’s never “just” desserts with this range of sweet treats! Try one out for size today!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/dessert-and-pastry-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/12/Christmas-Macaroni-Salad-266x160.jpg?x39166",
      },
      {
        id: 6362,
        count: 0,
        name: "did you know",
        slug: "did-you-know",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/did-you-know/",
      },
      {
        id: 6,
        count: 73,
        name: "Diet and Weight Loss",
        slug: "diet-and-weight-loss",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/diet-and-weight-loss/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/12/paleodietvs-266x160.jpg?x39166",
      },
      {
        id: 73,
        count: 6,
        name: "Dimsum and Dumpling Recipes",
        slug: "dimsum-and-dumplings",
        parent: 24,
        description:
          "Your Chinese takeout favorite just got a little bit closer to home! Indulge in this wide array of dimsum and dumpling recipes that will absolutely, for sure satisfy your cravings. These filling dimsum and dumpling recipes will have you ditching the takeout menu, guaranteed. After all, who needs to eat out when your favorites like pork siomai and shrimp wontons are as easy to make as they are to enjoy? Armed with these tips and tricks to cook these tasty treats from the comfort of your own kitchen, wow your family with these delectable restaurant dupes!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/dimsum-and-dumplings/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2009/08/Siopao-266x160.jpg?x39166",
      },
      {
        id: 74,
        count: 12,
        name: "Dip Recipes",
        slug: "dip-recipes",
        parent: 24,
        description:
          "From salsa to ranch, gravy to vinegar—what’s life without a little more flavor? These dip recipes are all you need to add that much needed burst of flavor to accompany some of your favorite dishes. Whether you’re hankering for something sweet, spicy, or savory, you’re sure to find the perfect partner in this never ending list of dressings! Have them with salads, enjoy them with steak, or even dunk a whole piece of fried chicken into them! Whatever you’re using these dips for is sure to become even tastier; your meals afterwards will surely never be the same without them!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/dip-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/11/How-to-Make-Creamy-Dill-Dip_-266x160.jpg?x39166",
      },
      {
        id: 75,
        count: 4,
        name: "Drinks",
        slug: "drinks-recipes",
        parent: 24,
        description: "",
        link: "https://panlasangpinoy.com/categories/recipes/drinks-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2019/03/Homemade-Taho-266x160.jpg?x39166",
      },
      {
        id: 76,
        count: 9,
        name: "Easy Casserole Recipes",
        slug: "easy-casserole-recipes",
        parent: 24,
        description:
          "A large, deep pan can house even larger, deeper flavors. If you’re looking for something new to cook in your wide casserole pan, you’ve come to the right place! From filling breakfast casseroles to more filling and meaty dishes, cooking your food in a casserole dish will make any meal that much more interesting! Is it your first time taking that pan out for a spin? Don’t worry! Under this category, you’ll not only have a grand time making any of these meals—you’ll be having an easy one, too! Who knew so much could go on in just one pot of deliciousness?\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/easy-casserole-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/07/Sausage-and-Egg-Casserole-with-Hash-Brown-266x160.jpg?x39166",
      },
      {
        id: 77,
        count: 35,
        name: "easy chicken recipes",
        slug: "easy-chicken-recipes",
        parent: 24,
        description:
          "When you’re a protein that’s enjoyed around the world, you’re bound to chalk up an insane repertoire of recipes. Whether it’s crunchy fried chicken you’re after or something homier and more local like adobo, these chicken recipes could not be any easier! Local and international favorites all come together here to celebrate the tender, juicy protein we all know and love. First time and novice cooks need not shy away from trying these recipes out in their kitchen; we guarantee you a smooth and easy time, and an end result that you and your family won’t hesitate to dig into! Try out these easy chicken recipes today!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/easy-chicken-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/Pineapple-Chicken-Filipino-Version-266x160.jpg?x39166",
      },
      {
        id: 7,
        count: 6,
        name: "Easy Dinner Recipes",
        slug: "easy-dinner-recipes",
        parent: 0,
        description:
          "I know it can be difficult at times to come up with your meal at the end of the day. Just thinking about the preparation may be tiring in itself. But all that is part of the process of getting better at cooking! And so if you are not necessarily feeling like extending a ton of effort for your dinner, don’t worry because there’s a great deal of recipes you can take on for this. Scroll through some of these dishes that will make for a quick and easy dinner, but won’t cut back on great flavor and satisfaction either.\r\n",
        link: "https://panlasangpinoy.com/categories/easy-dinner-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/fish-escabeche-recipe-266x160.jpg?x39166",
      },
      {
        id: 78,
        count: 52,
        name: "Egg Recipes",
        slug: "eggs",
        parent: 24,
        description:
          "Sure, it makes for a valuable and rather essential component in baking. But there are plenty of truly memorable and delicious dishes with egg as the hero you should have a go at making as well. Local recipes really have a way of making eggs shine in a dish, and you can see it in dishes like Tortang Talong or Chicken Adobo with Egg. And of course, some of the sugary recipes like Egg Pie also show off how much we can make with this mildly salty and light ingredient. Feel free to incorporate these yummy recipes into your daily meals to also get the several health benefits of eggs, such as having more nutrients that help with repairing muscle tissue.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/eggs/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/04/egg-fried-rice-266x160.jpg?x39166",
      },
      {
        id: 8,
        count: 9,
        name: "Events",
        slug: "events",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/events/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2011/10/tastechi-266x160.jpg?x39166",
      },
      {
        id: 9,
        count: 1,
        name: "Experiments",
        slug: "experiments",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/experiments/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/04/adoboquesadilla-on-pan1-266x160.jpg?x39166",
      },
      {
        id: 10,
        count: 9,
        name: "Featured Recipes",
        slug: "featured-recipes",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/featured-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/08/Pinoy-Style-Chicken-Curry-266x160.jpg?x39166",
      },
      {
        id: 6367,
        count: 14,
        name: "Filipino Recipes",
        slug: "filipino-recipes",
        parent: 24,
        description:
          "The Philippines boasts not only beautiful islands, rich agricultural resources, and some of the most resourceful and innovative people on the planet—we also house some of the most incredible dishes across the world! Dynamic and ever-changing, Filipino food varies by the household, by the family, and even by the region! Whether it’s the national dish sinigang you’re hankering for or a good old pulutan you can’t say no to, this list of Filipino recipes will make your favorite meals even easier to attain. Alongside tips and tricks that will make your cooking experience even more enjoyable, what more could you possibly want? Kain na!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/filipino-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2009/03/Bulalo-Recipe-Panlasang-Pinoy-266x160.jpg?x39166",
      },
      {
        id: 79,
        count: 174,
        name: "Fish Recipes",
        slug: "fish-recipes-recipes",
        parent: 24,
        description:
          "Packed with vitamins and minerals, fish is the kind of ingredient that can be truly beneficial to your health. Maybe that is also the reason behind the colorful, tasty array of fish recipes you can find in Filipino cooking. From mixing with a sweet and sour sauce to simply seasoning and frying it to a crisp, we have found so many ways to create a good meal with this treasure from the sea. Learn how to whip up your own Inihaw na Bangus, or Sinigang na Isda right at home here on Panlasang Pinoy! I also have some advice for you on how to prepare your fish when it comes to some recipes.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/fish-recipes-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/fish-escabeche-recipe-266x160.jpg?x39166",
      },
      {
        id: 11,
        count: 201,
        name: "Food and Health",
        slug: "health-and-wellness",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/health-and-wellness/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/09/Aloe-Vera-Benefits-to-Health-266x160.jpg?x39166",
      },
      {
        id: 12,
        count: 23,
        name: "Food Ideas",
        slug: "food-ideas",
        parent: 2,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/food-ideas/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/5-filipino-food-yummy-266x160.jpg?x39166",
      },
      {
        id: 13,
        count: 8,
        name: "Food Reviews",
        slug: "food-reviews",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/food-reviews/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2011/10/superdawgfront-266x160.jpg?x39166",
      },
      {
        id: 80,
        count: 27,
        name: "Fried Chicken Recipes",
        slug: "fried-chicken-recipes-recipes",
        parent: 24,
        description:
          "What do children’s birthday parties, comfort food, and fast food favorites have in common? Most of them involve the scrumptious, juicy fried chicken we all know and love! The sight alone of that delicious golden brown skin makes way for an even more satisfying crrrrunch when you bite into it! Fried chicken recipes are a staple in any home, and whether you’re having it the fast food or Filipino way, these tips and tricks will ensure you have enough of that crispy and yummy chicken to go around! Skip your usual takeout and enjoy your fried chicken with your loved ones from the comfort of your own home!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/fried-chicken-recipes-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/01/easy-crispy-fried-chicken-recipe-266x160.jpg?x39166",
      },
      {
        id: 6285,
        count: 30,
        name: "Fried Rice Recipes",
        slug: "fried-rice-recipes",
        parent: 24,
        description:
          "It goes without saying that Filipinos love rice—and in its many forms, too! Breakfasts, lunches, and dinners simply wouldn’t be the same without the presence of this hearty and filling carb that makes up a large portion, too, of our natural resources. Truly, Filipino cuisine wouldn’t be Filipino cuisine without rice—and one of the best things you can do to it is, inarguably, to fry it! Whether you’re having the classic sinangag or want something out of town like a tasty egg fried rice, these recipes are sure to fill your tummy up and keep you both energized and satisfied! The only thing missing now is to make an equally tasty main dish to pair perfectly alongside it!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/fried-rice-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/04/egg-fried-rice-266x160.jpg?x39166",
      },
      {
        id: 81,
        count: 65,
        name: "Ginataan Recipes",
        slug: "ginataan-recipes",
        parent: 24,
        description:
          "Filipinos go nuts for coconuts, it’s true! The tropical fruit is all too good at lending its unique bursts of flavor to some of our own Filipino classics. After all, who doesn’t want something that is sweet, nutty, and creamy, intermingled with some of our own savory delights? These ginataan dishes provide a distinct sense of comfort and warmth one can only get from this fantastic liquid. If you’re looking for something that will satisfy both your sweet tooth and hankering for spice, you need not look any further. From pork binagoongan to shrimp, squash and string beans, from main courses to sweet desserts, this section has it all. You’ve gata try them—pun intended!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/ginataan-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/07/Chicken-Gising-Gising-266x160.jpg?x39166",
      },
      {
        id: 82,
        count: 9,
        name: "Goat Meat and Lamb Recipes",
        slug: "goat-meat",
        parent: 24,
        description:
          "Some people tend to avoid cooking with less common types of meat, such as lamb and goat meat. But the unfamiliarity shouldn’t stop you from picking up your spatulas and knives to cook with such delicious ingredients! Lamb holds quite a unique, pleasant taste, which can be similar to goat meat. It is very tender, and can take on a very rich flavor when mixed with the right set of spices. And goat meat can be somewhat gamey, and is known to be a healthier alternative to the likes of beef and pork. But most importantly, both components work great with a variety of dishes. Come take a look! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/goat-meat/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/07/kilawing-kambing-266x160.jpg?x39166",
      },
      {
        id: 14,
        count: 11,
        name: "Good Reads",
        slug: "good-reads",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/good-reads/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/08/Lye-Water-266x160.jpg?x39166",
      },
      {
        id: 6408,
        count: 4,
        name: "Green Bean Recipes",
        slug: "green-bean-recipes",
        parent: 24,
        description:
          "The familiarity of sitaw as an ingredient in Filipino cuisine manifests not just in the classic “Bahay Kubo” song, but also in just how easy it is to incorporate into many of our favorite recipes. You have dishes like Gising gising, Lumpiang Sariwa and even the very popular Pancit Canton at Bihon all using this deliciously nutritious vegetable! The distinct crunch and refreshing taste green beans provide really help make a dish more appealing, and exciting texture-wise. Have a look at all the different recipes you can craft with your sitaw at home. You can also start a conversation in the comments section if you want to exchange tips and tricks.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/green-bean-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/01/Ginisang-Baguio-Beans-with-Pork-Recipe-266x160.jpg?x39166",
      },
      {
        id: 83,
        count: 42,
        name: "Ground Meat Recipes",
        slug: "ground-meat-recipes",
        parent: 24,
        description:
          "There is generally so much you can make with a pound of ground meat. This is probably why it can be really tempting to pick up some in the market when you pass by the meat section. With this ingredient, you can work on any dish requiring meatballs, You also have an abundance of meatloaf recipes to try out. And of course, the classic spaghetti is also amazing with a good amount of ground meat. You definitely ended up in the right place if you’re looking for a variety of options for your next delectable meal. Go ahead and explore all the possibilities with this filling and savory component!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/ground-meat-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/07/pork-giniling-with-oyster-sauce-and-potato-266x160.jpg?x39166",
      },
      {
        id: 84,
        count: 2,
        name: "Halloween Recipes",
        slug: "halloween-recipes",
        parent: 24,
        description:
          "Trick or treat! With the Halloween season upon us, there’s no better excuse to try out these delectable delicacies that are oh so scary delicious! Face your kitchen fears and browse this array of recipes that are perfect for both large crowds and your favorite trick or treaters at home. These recipes range from the most indulgent finds to the different ways you can use the old, reliable pumpkin—you’ll be spooked by just how many different ways you can enjoy this special night. Regardless of what costume you’ll be donning for Halloween night, trust us; these treats are definitely no trick! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/halloween-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/04/roasted-pumpkin-seeds1-266x160.jpg?x39166",
      },
      {
        id: 15,
        count: 88,
        name: "Health Benefits of Food",
        slug: "health-benefits-of-food",
        parent: 11,
        description: "",
        link: "https://panlasangpinoy.com/categories/health-and-wellness/health-benefits-of-food/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/09/Aloe-Vera-Benefits-to-Health-266x160.jpg?x39166",
      },
      {
        id: 16,
        count: 2,
        name: "Healthy Dinner Recipes",
        slug: "healthy-dinner-recipes",
        parent: 0,
        description:
          "Beginning to feel like you should incorporate more nutritious components to your diet, or simply in need for healthier eating habits? Panlasang Pinoy is ready to present you with all kinds of healthy dinner recipes to help give you a longer life, and give you that sustainable energy for the rest of your day! We have options like vegetable stir-fry recipes, as well as soups that can warm you up inside for a comforting meal too. It’s perfectly okay to indulge in less healthy dishes every once in a while, but it would definitely be great to consume more dishes with a good deal of vitamins and minerals in the long run too.\r\n",
        link: "https://panlasangpinoy.com/categories/healthy-dinner-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/fish-escabeche-recipe-266x160.jpg?x39166",
      },
      {
        id: 6640,
        count: 3,
        name: "Holiday Recipes",
        slug: "holiday-recipes",
        parent: 24,
        description:
          "Holidays are a time of good cheer and family fun—and they’re made even more enjoyable by the presence of good food! Under this category, you’ll find a series of different meals and offerings that are sure to make any special day even more memorable! Start off with some tasty, tantalizing appetizers, not to be outdone by even yummier and more generous portions of your main courses—and don’t forget your sweet desserts to cap the whole thing off! Whether it’s Christmas, Easter, Father’s or Mother’s Day, or anything in between, families big and small will surely love coming together over these dishes worth feasting on. Enjoy! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/holiday-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/12/Crispy-Mini-Lechon-Belly-Roll-266x160.jpg?x39166",
      },
      {
        id: 18,
        count: 132,
        name: "How To Cook",
        slug: "how-to-cook",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/how-to-cook/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/08/HOW-TO-COOK-ADOBO-266x160.jpg?x39166",
      },
      {
        id: 17,
        count: 0,
        name: "How to Start a Food Blog",
        slug: "how-to-start-a-food-blog",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/how-to-start-a-food-blog/",
      },
      {
        id: 19,
        count: 0,
        name: "How&#039;d they do that?",
        slug: "howd-they-do-that",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/howd-they-do-that/",
      },
      {
        id: 20,
        count: 81,
        name: "Ingredients",
        slug: "ingredients",
        parent: 2,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/ingredients/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/02/Pork-Belly-266x160.jpg?x39166",
      },
      {
        id: 6369,
        count: 0,
        name: "Japanese Recipes",
        slug: "japanese-recipes",
        parent: 24,
        description: "",
        link: "https://panlasangpinoy.com/categories/recipes/japanese-recipes/",
      },
      {
        id: 6417,
        count: 13,
        name: "Kaldereta Recipes",
        slug: "kaldereta-caldereta-recipes",
        parent: 24,
        description:
          "Of the many tomato-based stews and dishes the Philippines has to offer, there is no doubt in my mind that kaldereta remains one of the most popular and beloved. Brimming with flavor and a beautiful marriage of different ingredients, it comes as no surprise that this dish is a favorite in many Filipino family kitchens and households. From its original protein of goat to variations like beef, pork, and chicken, this section will show you the many ways by which you can enjoy this classic kaldereta, as well as some tips and tricks to make your cooking experience even better. Wow your family and friends by upping the ante on a Filipino classic!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/kaldereta-caldereta-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/01/Beef-Caldereta-266x160.jpg?x39166",
      },
      {
        id: 6403,
        count: 7,
        name: "Kangkong Recipes",
        slug: "kangkong-recipes",
        parent: 24,
        description:
          "A leafy vegetable that’s as versatile in its use as it is abundant in its health benefits, kangkong has come a long way from its very humble roots! Also known as water spinach, this ingredient has had international prominence, with its usage common in select American states and other countries around the world. This trusty and inexpensive vegetable makes for the perfect partner in the kitchen, with its assortment of recipes that range from crispy starters to side dishes to some of our own favorite meals. If you’re looking for a new way to try out this vegetable, this category is the place for you! Enjoy everything this tasty vegetable has to offer!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/kangkong-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/07/adobong-kangkong-1-266x160.jpg?x39166",
      },
      {
        id: 6777,
        count: 1,
        name: "Ketogenic Recipes",
        slug: "ketogenic-recipes",
        parent: 24,
        description:
          "A low-carb high-fat diet, the ketogenic lifestyle is one that has taken the world by storm, not only because of the many that have endorsed it but because of its tried and trusted results! The health benefits one may accrue from a ketogenic (or “keto” for short) diet include a lowering of blood sugar levels and a quicker, more concentrated metabolism. Keto diets not only aid in weight loss, but they actually make your body a lot healthier and faster to wash out fats from your system! For those starting on their keto journey, these ketogenic recipes are sure to aid in just that; delicious and guilt free, eating healthy will have never tasted so good!\r\n\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/ketogenic-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2018/07/ketogenic-bacon-and-egg-salad-recipe-266x160.jpg?x39166",
      },
      {
        id: 6284,
        count: 2,
        name: "Kielbasa Recipes",
        slug: "kielbasa-recipes",
        parent: 24,
        description:
          "This Polish gourmet sausage is the type of ingredient that really goes a long way in heightening up the taste of your dish. Kielbasa is tender, flavorful and ultimately a fantastic addition to any meal to give it more of an x-factor. I often like to chop this up into pieces to really distribute the taste throughout the stew or dish. Take a look at the process of making some of my favorite kielbasa dishes by watching the videos, and following along with your ingredients in the kitchen! And if you happen to think of any questions as you cook, don’t hesitate to leave a comment so you can have it answered. \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/kielbasa-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/12/Kielbasa-Fried-Rice-266x160.jpg?x39166",
      },
      {
        id: 6395,
        count: 11,
        name: "Kilawin Recipes",
        slug: "kilawin-recipes",
        parent: 24,
        description:
          "Since time immemorial, kinilaw has been one of the main methods Filipinos have used in cooking and preparing their food. This historical cooking process includes the use of vinegar and other acidic souring agents—though while in history it was often used to help preserve food, now we tend to focus on its delicious nature! Our own response to the Latin American ceviche is a product of such a cooking method, alongside other recipes and proteins like goat, beef, and chicken that are no stranger to this means of food prep! Browse through our collection of kilawin recipes for something that’s a beautiful mix of sweet, sour, and savory all at the same time.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/kilawin-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2017/08/Kilawing-Tuna-with-Coconut-Cream-266x160.jpg?x39166",
      },
      {
        id: 21,
        count: 9,
        name: "Kitchen Tools and Equipment",
        slug: "kitchen-tools-and-equipment",
        parent: 2,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/kitchen-tools-and-equipment/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2013/12/Kitchen-Twine-220x160.jpg?x39166",
      },
      {
        id: 6370,
        count: 0,
        name: "Korean Recipes",
        slug: "korean-recipes",
        parent: 24,
        description: "",
        link: "https://panlasangpinoy.com/categories/recipes/korean-recipes/",
      },
      {
        id: 6730,
        count: 7,
        name: "Lasagna Recipes",
        slug: "lasagna-recipes",
        parent: 24,
        description:
          "Seemingly endless layers of meat, cheese, and pasta come together in a beautiful union we know (and love) as lasagna! This classic Italian pasta is a feast for friends and family, young and old alike. Potentially one of the oldest kinds of pasta in the world, it has spawned a number of different variations across cities, provinces, and even countries! Here, you’ll find a number of different lasagna recipes, from the classic no-frills dish to those that give it a little twist! For celebrations and even ordinary days made special, lasagna, in its many ways, shapes, and forms, is the way to go!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/lasagna-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/12/Beef-Lasagna-Recipe-266x160.jpg?x39166",
      },
      {
        id: 6252,
        count: 1,
        name: "List Article",
        slug: "list-article",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/list-article/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/10/Culinary-Schools-in-California1-266x160.jpg?x39166",
      },
      {
        id: 85,
        count: 4,
        name: "Lobster Recipes",
        slug: "lobster-recipes",
        parent: 24,
        description:
          "What is it about lobster dishes that make them so irresistible? When you go to a restaurant, and come across one on the menu, isn’t it always so tempting to add it to your list of orders? Well, there’s no need to spend too much on such meals because there are plenty of ways to go about making a good lobster dish right at home! Come cook some of these dishes with me to discover the best and truest flavors of the sea coming from this light, and somewhat sweet shellfish component. You can also have any questions about making these dishes answered through the comments section on each article.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/lobster-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2017/06/Panlasang-Pinoy-Lobster-Pasta-Recipe-266x160.jpg?x39166",
      },
      {
        id: 86,
        count: 3,
        name: "Low Fat Recipes",
        slug: "low-fat-recipes",
        parent: 24,
        description:
          "Was your New Year’s resolution to eat a little healthier? Sure, treating yourself when it comes to food is far from a bad thing—but on days when you’re a little more conscious about your health, and you want to take more active steps towards a better lifestyle, there’s no better place to go than to check out these low fat recipes! Learn how you can make food that’s better for you without skimping on the delicious and flavorful tastes you love! From the easiest recipes to some that will be a little more exciting a challenge, you’ll finish cooking and enjoying these meals with not only a happier, but healthier stomach!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/low-fat-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/06/Turkey-Embutido1-266x160.jpg?x39166",
      },
      {
        id: 87,
        count: 425,
        name: "Lunch Recipes",
        slug: "lunch-recipes",
        parent: 24,
        description:
          "Whether you have a break during a busy work day or all the time in the world to prep and cook, you’ll be able to find yourself the perfect lunch recipe right here! Browse through our never ending collection of dishes that you can make, both for yourself and your loved ones. Not only do our lunch recipes come with the required time that’s needed so you can plan your day accordingly; many of them also consist of ingredients that are accessible, inexpensive, and more often than quite common in your kitchen and local groceries! Looking for something simple or special? Treat yourself to lunch either way with any of these tantalizing, mouthwatering recipes!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/lunch-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/fish-escabeche-recipe-266x160.jpg?x39166",
      },
      {
        id: 6759,
        count: 17,
        name: "Macaroni Salad Recipes",
        slug: "macaroni-salad-recipes",
        parent: 24,
        description:
          "Sweet and satisfying, there are few ways to enjoy the summer quite like sitting down and cooling off with a tasty bowl of macaroni salad! Macaroni salad is an umbrella term for a variety of dishes that use the same base—elbow macaroni and mayonnaise—yet switch it up when it comes to the other ingredients, that range from the sweetest pineapples to the more savory onions and ham. Macaroni salad can make for the perfect side dish to rich and tasty mains, or even the most charming yet still filling dessert to end what is already a delicious meal. Creamy, thick, and oh so yummy, macaroni salad in any and all of its forms is sure to be the star of your summer!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/macaroni-salad-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/01/Creamy-Macaroni-Salad-Recipe-266x160.jpg?x39166",
      },
      {
        id: 88,
        count: 308,
        name: "Main Dish Recipes",
        slug: "main-dish-recipes",
        parent: 24,
        description:
          "What makes the perfect main course? Could it be the hearty protein that you use? That mouthwatering seasoning? Or maybe that special, secret ingredient? The answer, most likely, is a combination of all of the above! Here you can find hundreds of different entrees and main dishes that you can serve to your family, friends, and other loved ones. Ranging in cost efficiency, time, and even difficulty (though new home cooks need not be afraid!), this list of main recipes is sure to give you an idea or two for what to cook next. Stick to the classics or try something new—whatever it is you choose, we’re sure to have a recipe for it! Just don’t forget to whip up some tasty sides while you’re at it.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/main-dish-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/02/Ginataang-Hipon-Sitaw-at-Kalabasa-266x160.jpg?x39166",
      },
      {
        id: 89,
        count: 11,
        name: "Meatloaf Recipes",
        slug: "meatloaf-recipes",
        parent: 24,
        description:
          "A perfect union of flavors truly comes alive like no other in a timeless and delicious meatloaf. The best meatloaf recipes have it all: juicy and tender meat of your choosing; bright and bold seasonings and flavorings; and some eggs and breadcrumbs to tie them all together. Under this category, learn how to make all kinds of meatloaf—from the classic lunchbox staple to the beloved Filipino rendition, embutido. Different meats, different methods of cooking, and different flavors abound in this list of recipes, but no matter which one you choose, you’re bound to get similarly mouthwatering results! Don’t forget your ketchup on the side before you dig in!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/meatloaf-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/06/Hardinera-Recipe-2-266x160.jpg?x39166",
      },
      {
        id: 6725,
        count: 1,
        name: "Meryenda Recipes",
        slug: "meryenda-recipes",
        parent: 24,
        description:
          "Mid-day treats can often be even more rewarding and refreshing than the three heavier meals we’re supposed to have on the daily. Little snacks, whether on the lighter or heavier side, can serve as just the pick me up in the middle of a hectic work or school schedule. Thankfully, then, these snack—or, as we know them as, meryenda—recipes are able to do just that! From the crispy and light turon to the heavier pancit and siopao recipes, there are different meryenda recipes for different preferences—all equally tasty! A feast for the senses (sight, smell, and taste alike), these snacks are sure to give you a boost and finish your day off with the same energy you had when you started!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/meryenda-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2018/03/puto-cake-2-266x160.jpg?x39166",
      },
      {
        id: 6707,
        count: 6,
        name: "Misua Recipes",
        slug: "misua-recipes",
        parent: 24,
        description:
          "What kinds of food come to mind when you think of days wherein you just need to tuck yourself in, and feel some comfort through your meal? In the Philippines, a ton of the best, most comforting soups are made with misua. This is a very thin type of noodle that is made of wheat. And this would probably best ring a bell when you think of soup dishes made with meatballs. But you can actually make several other recipes with this delightful ingredient. Let me guide you through recreating ones like Chicken Soup with Misua and Patola, and far more dishes! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/misua-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2017/12/Sardinas-with-Miswa-and-Patola-Recipe-266x160.jpg?x39166",
      },
      {
        id: 6241,
        count: 16,
        name: "Most Recommended Articles",
        slug: "most-recommended-articles",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/most-recommended-articles/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/12/30-Ways-to-Make-Pancit-266x160-1.jpg?x39166",
      },
      {
        id: 90,
        count: 8,
        name: "Muffin Recipes",
        slug: "muffin-recipes",
        parent: 24,
        description:
          "Rarely do you find something more welcoming than the sight and smell of freshly baked goods, straight from the oven! There’s just something so incredibly heartwarming and delightful about homemade pastries—especially when said pastries are muffins! Quick to pop into your mouth whether during the morning, noon, or night, muffins, and the many spins you can put on them, are always a welcome treat in any household! So, instead of buying them from your local bakery, why not try to make them from your household, too? Surprise your loved ones with the sweet smell and buttery goodness of these baked goods, and add ingredients and elements you know you’ll all love!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/muffin-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2017/12/Bibingka-Muffins-266x160.jpg?x39166",
      },
      {
        id: 6388,
        count: 16,
        name: "Mung Bean Recipes",
        slug: "mung-bean-recipes",
        parent: 24,
        description:
          "What is your favorite munggo dish? You can check out our wide selection of healthy, delicious mung bean recipes here. We have the likes of Ginisang Munggo Pork Monggo with Kangkong, and Ginataang Monggo for you to take a look at. And you can decide how you want to learn to cook with these nutritious green beans. We have all of these easy, step-by-step guides in both text and video form. This is definitely one of the most popular and well-loved ingredients in Filipino cooking so I would highly suggest giving at least one of these yummy recipes a shot! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/mung-bean-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/03/Ginataang-Monggo-with-Tofu-and-Malunggay-266x160.jpg?x39166",
      },
      {
        id: 6419,
        count: 13,
        name: "Mussel Recipes",
        slug: "mussel-recipes",
        parent: 24,
        description:
          "If you hope to make yourself familiar with more mussel dishes, this should be right up your lane! Panlasang Pinoy has all sorts of dishes that make use of this tasty type of shellfish, which has a great deal of protein. You might already have heard of some of them, but I can assure you there is a whole world of recipes out there that is still worth discovering! I would definitely recommend the likes of Relyenong Tahong and Seafood Bicol Express for your next meals. But if these don’t appeal to you all that much, there’s a bunch more to choose from here.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/mussel-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2011/04/Tinolang-Tahong-Recipe-266x160.jpg?x39166",
      },
      {
        id: 6520,
        count: 3,
        name: "New Year's Eve Dinner",
        slug: "new-years-eve-dinner",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/new-years-eve-dinner/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2017/01/New-Year-2017-Meal-Panlasang-Pinoy-266x160.jpg?x39166",
      },
      {
        id: 91,
        count: 45,
        name: "Noodle and Pasta Recipes",
        slug: "noodles-and-pasta",
        parent: 24,
        description:
          "Should you be in the hunt for recipes that are altogether filling and rich with a variety of flavor, you came to the right place! Noodle and pasta recipes really tick off a lot of boxes when it comes to an ideal meal. Pasta, in general, is rich with carbohydrates to provide you with much energy for all of your activities ahead. Plus, this contains nutrients like B vitamins to help with how well your brain operates, as well as maintaining the health of your cells. You also have the option of picking the kind of pasta or noodle you would like because this list contains those both of the stronger, firmer type, as well as those that are softer.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/noodles-and-pasta/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2009/09/Pancit-Palabok-266x160.jpg?x39166",
      },
      {
        id: 92,
        count: 69,
        name: "Noodle Recipes",
        slug: "noodle-recipes",
        parent: 24,
        description:
          "In the mood for a celebration? When it comes to the food, I definitely got your back! We, Filipinos, know that a party is incomplete without a fresh plate of long, delicious noodles. That’s why we also have lots of recipes to depend on for when we’re in need of a new dish to introduce to these gatherings. But that doesn’t mean we’re restricting noodles to eating with large groups either. After all, is there anything more satisfying than dining on some goopy, savory noodles filled with meaty toppings and vegetables on your own? Come and give some of these recipes a try!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/noodle-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/07/bagnet-pancit-266x160.jpg?x39166",
      },
      {
        id: 6664,
        count: 5,
        name: "Paella Recipes",
        slug: "paella-recipes",
        parent: 24,
        description:
          "One reason Filipinos (and nearly the rest of the world, really) love rice so much is because there are simply so many different ways we can enjoy it! Of the many iterations and dishes countries have concocted using this beloved grain, paella remains to be one of the most revered, not only from its country of origin, Spain, but around the world! The mix of rice with a myriad of ingredients, whether it be seafood, meat, or other vegetables, tossed together in a wobbly pan, produces a feast for all senses. All senses truly come alive with this bright and beautiful dish with bold flavors—and with so many variations of this Valencia native, everyone is bound to enjoy it! One bite of this dish alone will prove why it’s one of the best dishes in Spanish cuisine of all time!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/paella-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2018/01/Paella-Negra-Arroz-Negre-Recipe-Panlasang-Pinoy_-266x160.jpg?x39166",
      },
      {
        id: 6228,
        count: 3,
        name: "Paleo Diet",
        slug: "paleo-diet",
        parent: 6,
        description: "",
        link: "https://panlasangpinoy.com/categories/diet-and-weight-loss/paleo-diet/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/12/paleodietvs-266x160.jpg?x39166",
      },
      {
        id: 93,
        count: 3,
        name: "Pancake Recipes",
        slug: "pancake-recipes",
        parent: 24,
        description:
          "Buttery and golden brown with the most delectable maple syrup spilling off on the sides—nothing says good morning like an absolutely enchanting and eye-catching stack of pancake! Delicious and fluffy, these breakfast delights have been around since time immemorial, ultimately resulting in variations around the world that range from the insanely sweet to the indulgently savory. Call them flapjacks, hotcakes, or even griddlecakes; the image of golden brown yumminess remains the same! Learn how to make all sorts of pancakes through this list of recipes and make your mornings (or even your evenings; breakfast for dinner, anyone?) even more worth waking up for! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/pancake-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/02/whole-wheat-pancakes-recipe-266x160.jpg?x39166",
      },
      {
        id: 6432,
        count: 11,
        name: "Pancit Recipes",
        slug: "pancit-recipes",
        parent: 24,
        description:
          "A symbol of long life and celebration, it feels all too blasphemous to have a party and not have pancit as one of the main stars of the show. Everyone has their favorite kind of pancit: are you a bihon fan? Or do your tastes fall squarely within the canton camp? Whether it’s sotanghon, palabok, or anything in between, you’re sure to find your favorite noodles somewhere under these pancit recipes. No matter which kind it is you enjoy best, there’s no denying that the Filipino love for pancit is as large and as long as the life it’s meant to symbolize. Make every day feel like a special day with these pancit recipes!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/pancit-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/07/bagnet-pancit-266x160.jpg?x39166",
      },
      {
        id: 94,
        count: 81,
        name: "Pasta Recipes",
        slug: "pasta-recipes",
        parent: 24,
        description:
          "Looking for new types of pasta dishes you can work with? There are plenty of choices you can look through here on Panlasang Pinoy! Should you be in the mood for a classic recipe, we have the Pinoy Style Carbonara. But if you maybe want to try out a different kind of pasta like that of the bow-tie variety or farfalle, there’s also Tuna Pasta Alfredo. Let your imagination run free with such recipes by experimenting with ones you’re not familiar with too! I can guide you through making these pasta dishes through helpful videos, as well as the steps listed on articles.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/pasta-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/01/Pasta-Carbonara-Filipino-Style-266x160.jpg?x39166",
      },
      {
        id: 95,
        count: 0,
        name: "Philippine Fruits",
        slug: "philippine-fruits",
        parent: 22,
        description: "",
        link: "https://panlasangpinoy.com/categories/philippines-did-you-know/philippine-fruits/",
      },
      {
        id: 96,
        count: 17,
        name: "Philippine Street Foods",
        slug: "pinoy-street-foods-philippines",
        parent: 22,
        description: "",
        link: "https://panlasangpinoy.com/categories/philippines-did-you-know/pinoy-street-foods-philippines/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/04/Pinoy-Pork-Barbeque-266x160.jpg?x39166",
      },
      {
        id: 22,
        count: 23,
        name: "Philippines",
        slug: "philippines-did-you-know",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/philippines-did-you-know/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/04/Pinoy-Pork-Barbeque-266x160.jpg?x39166",
      },
      {
        id: 97,
        count: 12,
        name: "Pie Recipes",
        slug: "pie-recipes-2",
        parent: 24,
        description:
          "Without a doubt, pie is simply one of those dishes that is universally beloved. It’s an umbrella term for all sorts of adaptable and versatile recipes, ranging from some sweet favorites like apple pie and cream pie to other savory classics, like quiche and pot pie. Regardless of your preference, there’s no denying that a slice of pie can bring about a homey and charming comfort unlike no other. From its flaky and buttery crust to its absolutely delicious filling, whatever it may be, pie is a dish that you can enjoy either on your own or in the company of your loved ones. Learn how to make this classic and its many renditions with these handy, easy to follow recipes—and don’t hesitate to dig in!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/pie-recipes-2/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2009/06/Chicken-Pastel-Recipe-266x160.jpg?x39166",
      },
      {
        id: 98,
        count: 5,
        name: "Pizza Recipes",
        slug: "pizza-recipes",
        parent: 24,
        description:
          "It’s a Friday night in with your family; what’s for dinner? For many, the answer is obvious: reach for the telephone and dial up your local favorite pizza parlor! After all, who doesn’t love the stretch of cheese and assortment of toppings that come with every 9 to 12 inch yummy dough? Thankfully, with these pizza recipes on hand, you won’t need that pizza place’s number anymore! Learn how easy it is to make pizza from the comfort of your own kitchen—perfectly customized and tailor fit to your loved ones’ preferences. Pair it with your drink of choice and other side dishes, and you’re in for a fun night! How do you like your pizza? Go through these recipes and you might just find out!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/pizza-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2018/01/Pandesal-and-Sardines-Pizza-Panlasang-Pinoy-266x160.jpg?x39166",
      },
      {
        id: 6712,
        count: 29,
        name: "Pork Adobo Recipes",
        slug: "pork-adobo-recipes",
        parent: 55,
        description:
          "Want a warm, meaty and flavorful dish that’s sure to remind you of your Filipino roots? Whip up your own plate of delicious Pork Adobo! There are actually different types you could try out. If you want the kind that gives a satisfying kick, I have a recipe for Extremely Spicy Pork Adobo na Tuyo. But of course, I also swear by the classic Pork Adobo with its share of vinegar, garlic and dried bay leaves to leave an unforgettable, savory taste. Discover some more by scrolling through these recipes. You can also expect some fun facts and tips on Adobo as you read through the fun steps of making your chosen dish.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/adobo-recipes/pork-adobo-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/07/Pork-Adobo-Recipe-266x160.jpg?x39166",
      },
      {
        id: 99,
        count: 38,
        name: "Pork Chop Recipes",
        slug: "pork-chop-recipes-recipes",
        parent: 24,
        description:
          "Some types of meat are truly a cut above the rest, and I’d say that pork chop is among them. This delicious ingredient can be grilled, coated and fried, and it would likely end up tasting satisfyingly good. The key truly is in the spices and other elements we mix in with our pork chop. And that’s where I come in! Let Panlasang Pinoy introduce you to various ways of heightening the flavor level of classic ingredients like this. Make sure to watch the videos as well to get a closer look at how we get to our delectable final product.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/pork-chop-recipes-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/08/Java-Rice-and-Pork-Chop-266x160.jpg?x39166",
      },
      {
        id: 100,
        count: 362,
        name: "Pork Recipes",
        slug: "pork-recipes",
        parent: 24,
        description:
          "There actually are so many things you could make with a good serving of pork. This type of meat can accommodate such a large variety of flavors because initially, it has a sense of saltiness and sweetness on its own. Of course, when you blend that with the likes of soy sauce or chili powder or most seasonings you like, you are able to come up with a more sophisticated taste for your dish. But you don’t have to listen to me— simply let the recipes speak for themselves! We have the ever beloved dishes like Sinigang na Baboy or Pork Humba with Tofu to boast of when it comes to great Filipino cuisine using this type of meat.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/pork-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/pork-and-chicken-sinigang-266x160.jpg?x39166",
      },
      {
        id: 101,
        count: 8,
        name: "Porridge and Congee Recipes",
        slug: "porridgecongee",
        parent: 24,
        description:
          "Soothe weary bones and speak to the soul with these utterly relaxing and delightful porridge recipes! Congee and porridge go hand in hand during long days, rainy days—even days when you feel like you just miss some homemade comfort food! If you’re looking for lugaw or arroz caldo or something different entirely, you’re sure to satisfy your cravings by going through one of the many recipes here that are as quick and easy to make as they are to enjoy! Sit down after a long day, take a sip of some gingery, flavorful broth, and don’t forget to take some time off for yourself with this bowl of porridge; you deserve it!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/porridgecongee/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2019/03/arroz-caldo-266x160.jpg?x39166",
      },
      {
        id: 102,
        count: 105,
        name: "Potato Recipes",
        slug: "potato-recipes-recipes",
        parent: 24,
        description:
          "This carbohydrate-rich ingredient is truly something that would be great to add to your diet! Potatoes give you plenty of fiber, and help energize you for the rest of your day with all of its nutrients and benefits. Of course, it isn’t tough on the taste buds either with its slightly neutral, salty flavor that goes well with most savory recipes. Pinoy Chicken Curry, anyone? It works scrumptiously well with several other stew dishes, but it is also delicious as the hero of a meal. Take a look at some of my tips and steps for recipes like that, ranging from from Mashed Potatoes to Potato Salads. \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/potato-recipes-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/01/easy-crispy-fried-chicken-recipe-266x160.jpg?x39166",
      },
      {
        id: 54,
        count: 19,
        name: "Product Review",
        slug: "affiliate",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/affiliate/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/05/nilagang-pata-recipe-266x160.jpg?x39166",
      },
      {
        id: 23,
        count: 10,
        name: "Product Reviews",
        slug: "product-reviews",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/product-reviews/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/05/instant-pot-IPDUO60-266x160.jpg?x39166",
      },
      {
        id: 103,
        count: 60,
        name: "Pulutan Recipes",
        slug: "pulutan-recipes",
        parent: 24,
        description:
          "Filipinos love to spend time with family and friends, often over a hearty and fun drinking session. But what would a drinking session be without the presence of all sorts of pulutan? Pulutan is the general term used to refer to the small plates or snacks served over drinks. These range from those that sizzle over the classic metal plates, like sisig or pusit, to grilled meats like barbecue and isaw, to even bite sized food like kropek you can eat and enjoy by hand! Whatever you and your barkada fancy, you’re sure to find under this extensive list of pulutan recipes! Grab a cold one and get ready to toast over plates on plates of these tasty and perfect food partners!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/pulutan-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/11/bopis-recipe-266x160.jpg?x39166",
      },
      {
        id: 6726,
        count: 2,
        name: "Puto Recipes",
        slug: "puto-recipes",
        parent: 24,
        description:
          "If you’ve heard of kakanin, then surely you’ve heard of one of its most popular subtypes—the ever classic, ever timeless puto! Puto is a native Filipino delicacy, and yet another umbrella term for many other indigenous cakes; in fact, though it may be the general term used for steamed rice cakes, some variations of puto don’t even use rice at all! Whether they use ube, cassava, or other bases, you know puto from its enjoyably chewy texture and mild yet delicious taste. Coming in all sorts of shapes, sizes, and colors, puto abounds in both versatility and yumminess! Special occasions simply would not be complete without your rice cake of choice, enjoyed with a steaming hot cup of coffee. Dig in!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/puto-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2020/09/Puto-Pao-266x160.jpg?x39166",
      },
      {
        id: 24,
        count: 1758,
        name: "Recipes",
        slug: "recipes",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/fish-escabeche-recipe-266x160.jpg?x39166",
      },
      {
        id: 25,
        count: 4,
        name: "Reuben Sandwich",
        slug: "reuben-sandwich",
        parent: 24,
        description: "",
        link: "https://panlasangpinoy.com/categories/recipes/reuben-sandwich/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/02/Reuben-Sandwich-2-266x160.jpg?x39166",
      },
      {
        id: 26,
        count: 27,
        name: "Rice Cake Recipes",
        slug: "rice-cake-recipes",
        parent: 24,
        description:
          "One thing that has to be said about Filipinos is that we really know how to use our rice! Just take a look at the many rice cake recipes we have under this category! Lovingly referred to and adored as kakanin by every Pinoy, Filipino celebrations and special occasions simply would not be complete without a whole tray or two of various forms of rice cakes that range from puto to kutsinta to sapin-sapin and beyond! Who knew rice could come in so many different colors—and flavors? Browse through our array of rice cake recipes to find your kakanin of choice, and learn just how easy it is to make these beloved treats from scratch—wowing your family in the process!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/rice-cake-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/03/How-to-Make-Rice-Cake-Bibingka-266x160.jpg?x39166",
      },
      {
        id: 27,
        count: 57,
        name: "Rice Recipes",
        slug: "rice-recipes",
        parent: 24,
        description:
          "The Filipino language has several words just for rice, which only goes to show how essential it is to our country and cuisine. How about learning different ways to get creative with your kanin, and mixing this up with the best and meatiest toppings? From Adobo Fried Rice to the classic, well-loved Sinangag, we’ve got all the choices you would want for your rice dish! Because after all, what meal is complete without this famous and absolutely delicious side dish? Don’t worry because a lot of these recipes can also fly solo, and serve as a meal in itself! ",
        link: "https://panlasangpinoy.com/categories/recipes/rice-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/07/tapa-and-egg-fried-rice-recipe_-266x160.jpg?x39166",
      },
      {
        id: 28,
        count: 3,
        name: "Roast Beef Sandwich Recipes",
        slug: "roast-beef-sandwich-recipes",
        parent: 24,
        description:
          "Good old slices of bread piled high with thin slices of juicy, flavorful beef, and topped off with some fresh pieces of lettuce, cheese, and condiments of choice; can you get any better than a roast beef sandwich? Of all the potential sandwiches you could whip up in your kitchen, a roast beef sandwich has arguably got to be one of the most filling and satisfying. The mix of flavors and textures that you can get from just one bite? Absolutely unparalleled! It certainly doesn’t hurt that these sandwiches are just so easy to make, too. Decadent, salty, and sweet rolled into one, you’ll be able to whip up this deli favorite in no time!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/roast-beef-sandwich-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/02/roast-beef-sandwich-266x160.jpg?x39166",
      },
      {
        id: 29,
        count: 47,
        name: "Salad Recipes",
        slug: "salads-recipes",
        parent: 24,
        description:
          "Looking for something light and healthy to start your day? Or perhaps searching for the perfect side to an already heavy main dish? Well, look no further! You’ll find all that and more in a tasty, nourishing salad! Refreshing and mostly all-natural, nothing says healthy more than a tossed bowl of greens and other assorted ingredients! You can choose to add proteins to your salad, like tuna or chicken, or even other common carbs like beans; even cheese can find its way onto a salad if you like! Versatile and plentiful, these recipes break the stigma surrounding salads as bland and dry food options; in fact, the simplest of recipes, combined with your dressing of choice, may be enough to bring all these delicious flavors to life!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/salads-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2018/11/Filipino-Chicken-Macaroni-Salad-Recipe-1-266x160.jpg?x39166",
      },
      {
        id: 6418,
        count: 15,
        name: "Salmon Recipes",
        slug: "salmon-recipes",
        parent: 24,
        description:
          "Undeniably smooth and rich in flavor, there is a reason why adding salmon to any dish can make it look and taste more sophisticated. It is a fish component of great quality, and blends well with various savory seasonings and spices. But of course, it is also essential that you cook your salmon right to bring the best flavors out of it. That’s why you have Panlasang Pinoy giving you all of the tips and guides needed to navigate your way around great ingredients like salmon. Check out some of the videos and recipes I have for this crowd favorite seafood ingredient! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/salmon-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2020/06/salmon-sisig-266x160.jpg?x39166",
      },
      {
        id: 30,
        count: 37,
        name: "Sandwich Recipes",
        slug: "sandwiches",
        parent: 24,
        description:
          "On days that feel a little bit too long, a good old, ever reliable sandwich can give us just the comfort we need. From the simplest offerings of ham and cheese to those that are a little more complex when it comes to preparation, sandwiches are the perfect and easiest comfort food around, with an unending list of recipes that’s bound to please everyone. No need to drive over to your closest cafe and order a sandwich that you can make from the comfort of your own kitchen for half the time, effort, and money. Pick your protein, your veggies, even your cheese! For no fuss and no frills enjoyment, these sandwich recipes are surely the way to go.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/sandwiches/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/09/Shrimp-Bisque-266x160.jpg?x39166",
      },
      {
        id: 6706,
        count: 10,
        name: "Sardines Recipes",
        slug: "sardines-recipes",
        parent: 24,
        description:
          "Some people tend to underestimate the power of sardines in sprucing up any dish. It has a simply delicious salty taste that speaks for itself. But adding a bunch of complementary herbs and spices can also give it a more comforting, delectable flavor. Take it from recipes like Ginisang Sardines or Spanish Sardines Pasta with Sun Dried Tomatoes and Chopped Olives. The taste of these dishes resembles home best, plus they mostly make use of very accessible ingredients you likely already have at home. Keep scrolling to find the sardine dish you’re looking for! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/sardines-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2020/07/Eggplant-and-Sardines-Omelet-266x160.jpg?x39166",
      },
      {
        id: 31,
        count: 20,
        name: "Sauces Recipes",
        slug: "sauces-recipes",
        parent: 24,
        description:
          "Whatever a meal may be, when you catch the sight of it doused in sauce you know that a burst of flavor is about to meet you with every bite! Even the best of dishes wouldn’t be deemed complete without a fragrant and tasty sauce to accompany them! For instance, what is fried chicken without gravy? Fish and chips without tartar sauce? Or sweet and sour pork without the sweet and sour layer from which it gets its name? From spaghetti to teriyaki, there’s truly nothing wrong with making your life a little, well — saucier!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/sauces-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/04/Gravy-1-266x160.jpg?x39166",
      },
      {
        id: 32,
        count: 5,
        name: "School Lunch Ideas",
        slug: "school-lunch-ideas",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/school-lunch-ideas/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2011/10/Crispy-Chicken-Sandwich-266x160.jpg?x39166",
      },
      {
        id: 33,
        count: 120,
        name: "Seafood Recipes",
        slug: "seafood",
        parent: 24,
        description:
          "Refreshing, delicious, and filled with all kinds of nutrients, you truly cannot go wrong with a seafood dish. And as Filipinos, we have our fair share of expertise in working with these scrumptious ingredients as we are greatly surrounded by seas. Widen your choices in Filipino seafood dishes by scrolling through Panlasang Pinoy’s list of recipes. This should also introduce you to other meals you can whip up in the place of meat dishes.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/seafood/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/03/chili-crab-and-shrimp-recipe-266x160.jpg?x39166",
      },
      {
        id: 34,
        count: 43,
        name: "Shared Recipes",
        slug: "shared-recipes",
        parent: 0,
        description:
          "Cooking when done collaboratively can open up so many pathways, and create the most surprisingly rich and tasty dishes. This is why I also have a couple of shared recipes here on Panlasang Pinoy, a lot of which are the works as well of the talented cooks who read about my cooking on this website— just like you! Feel free to scroll through these creative, delicious dishes that show off the skills of our viewers and readers for various parts of the world. And keep the conversation going by commenting your own thoughts and feedback in the comments on each article.\r\n",
        link: "https://panlasangpinoy.com/categories/shared-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/03/chicken-parm-250x160.jpg?x39166",
      },
      {
        id: 35,
        count: 25,
        name: "Shellfish Recipes",
        slug: "shellfish-recipes",
        parent: 24,
        description:
          "A fantastic perk to living in an archipelago is just how close we are to bodies of water like oceans. Of course, this means great views and tourist destinations, but a benefit we never forget about is the amazing seafood. And so if you haven’t tried some classic shellfish dishes in the Philippines, this is definitely your chance to do so, and make them fresh from your own kitchen. From warm, delicious soups to baked, cheesy recipes, you have an abundance of choices right here on Panlasang Pinoy for your next cooking venture. What I would suggest is watching some of the videos as well to give you a closer look at the entire process of dealing with shellfish like tahong and crabs.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/shellfish-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2011/04/Tinolang-Tahong-Recipe-266x160.jpg?x39166",
      },
      {
        id: 36,
        count: 73,
        name: "Shrimp Recipes",
        slug: "shrimp-recipes",
        parent: 24,
        description:
          "It isn’t called the fruit of the sea for nothing! Shrimp is a perfect go-to ingredient for when you want a seafood dish that can go both the sweet and savory side. Its lightly sweet flavor blends well with a variety of spices and sauces. And this fact has given birth to many great Pinoy shrimp dishes like Sinigang na Hipon and Shrimp Laing. Curious to find more of these glorious recipes? Take a look at our wide variety of meals to try cooking that come with helpful videos to give you all the steps you need to complete your seafood feast.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/shrimp-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/03/Healthy-Ginataang-Gulay-with-Tofu-and-Shrimp-266x160.jpg?x39166",
      },
      {
        id: 37,
        count: 34,
        name: "Side Dish Recipes",
        slug: "sidedish-recipes",
        parent: 24,
        description:
          "Burgers and fries, steak and mashed potatoes, fried chicken and cornbread—some of the best dishes of all time just wouldn’t be as timeless without these perfect partners-in-crime to complete them! Contrary to what others may think, a good side dish may be the very thing that makes or breaks an entire dish! Here, you can browse through our catalog of side orders, ranging from some familiar faces (macaroni salad, anyone?) to those that you might not have even thought to try! Easy, inexpensive, and full of accessible ingredients, these side dishes will be just as much a winner at your dining table as your main meal, guaranteed! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/sidedish-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/05/Chili-Garlic-Oil-Recipe-266x160.jpg?x39166",
      },
      {
        id: 6443,
        count: 13,
        name: "Silog Recipes",
        slug: "silog-recipes",
        parent: 24,
        description:
          "They say that breakfast is the most important meal of the day, as it gives you the best boost of energy you need to power through your mornings. Like any Filipino meal, breakfast just wouldn’t be complete without a heaping bowl of rice—so why not give it a little twist and make it sinangag, while you’re at it? Top it with your egg and protein of choice and you have yourself a perfect silog meal! Bright, tasty, and oh so filling, these silog recipes are the perfect way to start off your mornings. These dishes prove that you don’t need that many ingredients to produce something absolutely brilliant; silog recipes are no-fail dishes and guaranteed to be a wonderful start to anyone’s day! Which silog is your favorite?\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/silog-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/12/Tapsilog-1-266x160.jpg?x39166",
      },
      {
        id: 38,
        count: 41,
        name: "Sinigang Recipes",
        slug: "sinigang-recipes",
        parent: 24,
        description:
          "Unofficially hailed as the national dish of the Philippines, if you haven’t had sinigang you might need to get your Filipino card reevaluated. Who hasn’t heard of this tart, piping hot broth, filled to the brim with your favorite vegetables and protein? Sinigang comes in many different forms, with many different ingredients that bring out that sour taste we all know and love. Kamias, guava, and sampaloc are just some of the different souring agents we use in this dish, each with their own unique flavor profiles and target audiences! With differing proteins like chicken, pork, and salmon, among others, a browse through this collection will show you that there truly is a sinigang recipe for everyone!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/sinigang-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/pork-and-chicken-sinigang-266x160.jpg?x39166",
      },
      {
        id: 39,
        count: 3,
        name: "Smoothie Recipes",
        slug: "smoothie-recipes",
        parent: 24,
        description:
          "When you live in a tropical country like ours, you tend to come up with many different and creative ways to quench your thirst and beat the heat. Smoothies are just one example of how we manage to not only do just that, but also make use of the rich variety of fruits (and sometimes even vegetables) that come with our climate! Whether it’s because you’re craving a cool way to cool down or trying to find newer, healthier drinks to try out, these smoothie recipes are a great way to make your drinks even more exciting. Stick to a favorite or try out a new combination; whatever it is you’re looking for, there’s sure to be a smoothie recipe for it!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/smoothie-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/02/Blueberry-Greek-Yogurt-Smoothie02042543-266x160.jpg?x39166",
      },
      {
        id: 40,
        count: 66,
        name: "Snack Recipes",
        slug: "snacks-recipes",
        parent: 24,
        description:
          "Who doesn’t enjoy a good snack every now and again? Our usual go-tos and easy fixes for sudden cravings would include bags of chips or cookies; after all, in the middle of a work day, who has the time to really put in the effort? Luckily for you, these snack recipes don’t require that much effort at all! Expect the same tastiness you get from your heavy breakfasts, lunches, and dinners, but at a more expedited pace! These snack recipes are (for the most part) light and easy ways to satisfy your cravings even on the busiest of days! Plus, they’re a lot healthier than those potato chips you’re eyeing, too!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/snacks-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2019/03/arroz-caldo-266x160.jpg?x39166",
      },
      {
        id: 41,
        count: 147,
        name: "Soup Recipes",
        slug: "soup-recipes",
        parent: 24,
        description:
          "There are so many different ways to make soup—and nearly all of them are delicious! This category is home to hundreds of soup recipes, all tried and tested and proven to be absolutely mouthwatering. Try out foreign classics, like shrimp bisque and mushroom soup, that will have you forgoing any canned substitutes from this day forward. Even better, enjoy some local delicacies that bring a distinct spice and flavor to every spoonful of their tasty broths! Whether it’s a familiar favorite you’re looking for or a hankering for something new, these easy, breezy soup recipes are sure to warm you up in the best way possible.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/soup-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/pork-and-chicken-sinigang-266x160.jpg?x39166",
      },
      {
        id: 6591,
        count: 1,
        name: "Sous Vide Recipes",
        slug: "sous-vide-recipes",
        parent: 24,
        description:
          "The direct translation of sous vide in English is “under vacuum”—a fitting term for this cooking process that aims to get the main protein of your dish to the exact doneness you’d prefer. Whether you’re cooking steak, chicken, or even pork, cooking your meat sous vide is an excellent way to bring out all the tender textures of a perfectly cooked piece of meat. Submerging your vacuum bag-sealed meat in a water bath for hours on end leads you to a perfect doneness, and when you follow it with a quick grill on either side of your chosen protein, you have for yourself the perfect hearty meal! If this is your first time attempting a sous vide recipe, no need to stress; these recipes come with tips and tricks that will make this foreign cooking process a lot easier, and a lot more fun!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/sous-vide-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2017/08/Sous-Vide-Strip-Steak-Recipe-266x160.jpg?x39166",
      },
      {
        id: 42,
        count: 20,
        name: "Squid Recipes",
        slug: "squid-recipes",
        parent: 24,
        description:
          "We have a large variety of ways to go about cooking squid. But for some, the fear comes from ending up with a rubbery, unpleasant hero ingredient because of overcooking. However, I have some of the tips that can help you overcome the challenge, and dive straight into making the most delightful, smokey, savory squid dishes! Your long list of options contains grilled recipes, as well as fried dishes that can help expand your kitchen experience. Let’s give these squid recipes a go! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/squid-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2021/04/sizzling-pusit-266x160.jpg?x39166",
      },
      {
        id: 43,
        count: 22,
        name: "Steak Recipes",
        slug: "steak-recipes",
        parent: 24,
        description:
          "Can you say no to a beautiful, perfectly cooked and seasoned steak? This meat ingredient is a crowd favorite that we usually go for during special occasions. That might be because it can be intimidating to make it as juicy and savory as we see it done in the restaurants. But there’s no need to let that stop you because I’ve got all the ways to whip up a gorgeous, succulent steak dish right from home. Feel free to look through the choices of recipes on the website for your steak meal of choice! \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/steak-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2011/02/Pork-Steak-Bistek-266x160.jpg?x39166",
      },
      {
        id: 44,
        count: 34,
        name: "Stew Recipes",
        slug: "stew-recipes",
        parent: 24,
        description:
          "In a stew, vegetables, seasonings, and even stock accompany tender, fall-off-the-bone pieces of meat in a large pot that soon brims with heat and flavor. Varying in consistency, thickness, and major components, stews have been around since ancient times and have since grown in variety across the centuries and around the world! The Philippines itself is home to many different renditions of this classic dish, each with their own unique points that set them apart from the other. Under this category you’ll find a multitude of different stew recipes—some old and timeless (think pochero or kare-kare), and others that may just broaden your horizons in the best way possible!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/stew-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/Pineapple-Chicken-Filipino-Version-266x160.jpg?x39166",
      },
      {
        id: 6420,
        count: 24,
        name: "Stir Fry Recipes",
        slug: "stir-fry-recipes",
        parent: 24,
        description:
          "Are you looking for something quick and easy to make for dinner? Why not a stir fried dish! To stir fry something means to cook a number of ingredients together in a wide pan or wok on high heat with little oil. Filipino and Asian cuisines, as a whole, have a multitude of different stir fry recipes—each with their own unique ingredients and seasonings that can satisfy any craving. Here you’ll find hundreds of stir fry recipes, from vegetables to pork to even chicken! For those looking for a quick fix that results in a delicious meal, these recipes, along with the many tips and helpful points that accompany them, are sure to give you the best value for your time—it certainly doesn’t hurt that they taste delicious, too!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/stir-fry-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/01/Beef-and-Baby-Corn-Stir-Fry-Recipe-266x160.jpg?x39166",
      },
      {
        id: 45,
        count: 5,
        name: "Sushi Recipes",
        slug: "sushi-recipes",
        parent: 24,
        description:
          "The pride of Japanese cuisine and adored by people around the world, sushi may be one of the most compact and delicious dishes to ever exist! Like much of Asian cuisine, rice proves to be one of the main ingredients and stars of the show—and coupled with fresh, juicy seafood of your choice, the result is an unstoppable, killer combo! There are many types of sushi, each making use of different primary ingredients and additional toppings and fillings. Luckily for you, with these sushi recipes, this Japanese classic may be a lot closer to home than you think! Get your soy sauce and wasabi ready for the burst of flavors to come with each roll!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/sushi-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/01/Sushi-Bake-Recipe-266x160.jpg?x39166",
      },
      {
        id: 46,
        count: 3,
        name: "Sweet Potato Recipes",
        slug: "sweet-potato-recipes",
        parent: 24,
        description:
          "Rich, tasty, and filling, sweet potatoes make for quite the worthy substitute when you don’t have any regular potatoes in your pantry. Beyond just being beloved for its incredibly adaptable and versatile uses, sweet potato, or as we know and love it as, kamote, comes with an abundance of health benefits that make it not only satisfying for our taste buds but the rest of our bodies! They’re a healthy staple for any diet, and it surely doesn’t hurt that there are so many different ways to extract its many important nutrients! Bake it, steam it, or make them into fries; however you enjoy sweet potatoes, you’re guaranteed to find your next favorite among these recipes!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/sweet-potato-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2014/06/Sweet-Potato-Casserole_1-266x160.jpg?x39166",
      },
      {
        id: 6426,
        count: 10,
        name: "Teriyaki Recipes",
        slug: "teriyaki-recipes",
        parent: 24,
        description:
          "A showstopping combination of sweet, salty, and umami is what sets teriyaki apart, with its uniquely delicious flavor palate! A cooking technique native to Japan, teriyaki refers to broiling or grilling different proteins, be it fish, chicken, pork, or beef, with a glaze that consists of combined soy sauce, sugar, and mirin, or rice wine. If you’ve ever been to any Japanese restaurant, chicken teriyaki is one of the most popular food offerings—and for good reason! Loved by eaters young and old alike, teriyaki is a treat for anyone’s taste buds … and now, you can have it at home, too! This classic dish is a lot easier to make than one might think; what are you waiting for? Let’s make some teriyaki recipes today!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/teriyaki-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/02/beef-teriyaki-tapa-with-fried-rice-and-egg-recipe-266x160.jpg?x39166",
      },
      {
        id: 6719,
        count: 19,
        name: "Tinola Recipes",
        slug: "tinola-recipes",
        parent: 24,
        description:
          "Tinola is a soup dish composed of a ginger and onion-based broth, alongside your meat of choice—either chicken or fish—and wedges of either papaya or chayote plus malunggay leaves. Though the soup itself may be clear, make no mistake about it; the flavor of this dish is far from bland, radiating the same gingery components that make up a large part of the soup! Tinola is hailed by many as an ultimate comfort food; just a sip of the soup and a portion of the tender meat is enough to make anyone’s day better. Follow these recipes to find out how to cook this Filipino kitchen mainstay, as well as ways you can spice up an already lauded Filipino classic.\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/tinola-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/03/Pork-Curry-Tinola-Recipe-266x160.jpg?x39166",
      },
      {
        id: 47,
        count: 35,
        name: "Tofu Recipes",
        slug: "tofu-recipes-recipes",
        parent: 24,
        description:
          "Tofu has become a staple of vegan and vegetarian dishes, and for a good reason. This classic ingredient made of condensed soy milk can bring a unique, tasty texture to your dish. Whether you would want something smooth or crunchy, tofu can do it both! And an amazing part about this component is that it essentially starts like a blank canvas because of its initially neutral taste, which is great for absorbing the flavor of its surrounding ingredients. This is why it is so fun to play with, and make the most out of in the kitchen. Discover more delectable tofu dishes you can try out— from Filipino recipes to fusion ones that show just how versatile this ingredient can be!",
        link: "https://panlasangpinoy.com/categories/recipes/tofu-recipes-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/08/Baked-salmon-2-266x160.jpg?x39166",
      },
      {
        id: 48,
        count: 0,
        name: "Top Recipes",
        slug: "top-recipes",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/top-recipes/",
      },
      {
        id: 6422,
        count: 15,
        name: "Tuna Recipes",
        slug: "tuna-recipes",
        parent: 24,
        description:
          "It can be difficult at times to choose which fish to go with when shopping at the market. But a nearly always ideal option is the trusty tune with its tender, meaty taste that goes with most everything. This is why we have choices ranging from Grilled Tuna Belly to Tuna Macaroni Salad to work with when it comes to this seafood. Take a look at the videos and step-by-step instructions to recreate these tuna favorites for sharing with family and friends. \r\n",
        link: "https://panlasangpinoy.com/categories/recipes/tuna-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2019/07/Grilled-Tuna-Belly-266x160.jpg?x39166",
      },
      {
        id: 49,
        count: 10,
        name: "Turkey Recipes",
        slug: "turkey-recipes-2",
        parent: 24,
        description:
          "How familiar are you with cooking this flavorful and rich type of meat? Turkey is not used so often in classic Filipino recipes, but making food with this component is definitely worth a try. It can be juicier and more tender than chicken, which is appealing to many, and can truly help boost the taste of a dish. You can start with appetizers like Turkey and Cranberry Sandwich with Cream Cheese, or you could go with a crowd favorite, which is the Classic Roast Turkey. We have a ton of choices for you to become more comfortable with creating the most sophisticated, delicious turkey dishes!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/turkey-recipes-2/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2015/11/Turkey-and-Ham-Sopas_-266x160.jpg?x39166",
      },
      {
        id: 1,
        count: 8,
        name: "Uncategorized",
        slug: "uncategorized",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/uncategorized/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/02/Pinoy-Kimchi-Fried-Rice-266x160.jpg?x39166",
      },
      {
        id: 50,
        count: 29,
        name: "Useful Tips",
        slug: "useful-tips",
        parent: 2,
        description: "",
        link: "https://panlasangpinoy.com/categories/culinary-arts/useful-tips/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2016/12/how-to-cook-a-lobster-266x160.jpg?x39166",
      },
      {
        id: 51,
        count: 244,
        name: "Vegetable Recipes",
        slug: "vegetable-recipes",
        parent: 24,
        description:
          "Some say that it can be hard to try a vegetarian lifestyle when you’re used to eating Filipino cuisine. However, there is actually a large abundance of irresistibly tasty local dishes that make use of greens and other components that are most beneficial for your body. Have a look at some of the vegetable recipes here at Panlasang Pinoy— from Vegetable Fried Rice to Tortang Talong. There are also several options if you want dishes that still have meat but have tasty, savory vegetables as the hero of the meal. And if you have any suggestions for more dishes you want me to make, the comments section is always open!\r\n",
        link: "https://panlasangpinoy.com/categories/recipes/vegetable-recipes/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2022/07/ginataang-langka-with-bago-leaves-266x160.jpg?x39166",
      },
      {
        id: 52,
        count: 4,
        name: "Weight Loss",
        slug: "weight-loss-did-you-know",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/weight-loss-did-you-know/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2011/10/Health-Benefits-of-Green-Tea-266x160.jpg?x39166",
      },
      {
        id: 53,
        count: 34,
        name: "What's Cooking?",
        slug: "whats-cookin",
        parent: 0,
        description: "",
        link: "https://panlasangpinoy.com/categories/whats-cookin/",
        image:
          "https://panlasangpinoy.com/wp-content/uploads/2010/02/Fried-Fish-Tilapia-266x160.jpg?x39166",
      },
    ],
};

export default categories;
