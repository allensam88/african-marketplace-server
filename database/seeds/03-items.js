exports.seed = function (knex) {
    return knex('items').insert([
        { name: 'basket', description: 'great for carrying produce', price: 4, category: 'home', location: 'Kampala', itemImg: 'https://tinyurl.com/tl2rhmo', user_id: 1 },
        { name: 'necklace', description: 'handmade, beautiful!', price: 88, category: 'art', location: 'Dar es Salaam', itemImg: 'https://tinyurl.com/yg678gow', user_id: 1 },
        { name: 'table', description: 'large for 6 people', price: 12, category: 'home', location: 'Nairobi', itemImg: 'https://tinyurl.com/yfcnbn9g', user_id: 2 },
        { name: 'chair', description: 'white oak', price: 85, category: 'home', location: 'Mombasa', itemImg: 'https://tinyurl.com/sm9ayfp', user_id: 2 },
        { name: 'doll', description: 'hand stitched', price: 7, category: 'toys', location: 'Zanzibar', itemImg: 'https://tinyurl.com/yjkuae2e', user_id: 3 },
        { name: 'painting', description: 'kilimanjaro landscape', price: 49, category: 'art', location: 'Mbale', itemImg: 'https://tinyurl.com/yhcwrrvr', user_id: 3 },
        { name: 'sculpture', description: 'wildlife art', price: 56, category: 'art', location: 'Jinja', itemImg: 'https://tinyurl.com/uafq6da', user_id: 4 },
        { name: 'tomatoes', description: 'delicious 2 lb bag', price: 47, category: 'food', location: 'Dodoma', itemImg: 'https://tinyurl.com/yetvtsoz', user_id: 4 },
        { name: 'potatoes', description: '5 lbs', price: 42, category: 'food', location: 'Kigali', itemImg: 'https://tinyurl.com/yfg5laph', user_id: 5 },
        { name: 'papaya', description: 'ripe in season', price: 33, category: 'food', location: 'Bujumbura', itemImg: 'https://tinyurl.com/ydocfx85', user_id: 5 },
        { name: 'oranges', description: '50 lb sack', price: 9, category: 'home', location: 'Kampala', itemImg: 'https://tinyurl.com/rngaq26', user_id: 6 },
        { name: 'apples', description: '50 lb sack', price: 16, category: 'garden', location: 'Dar es Salaam', itemImg: 'https://tinyurl.com/szlkyly', user_id: 6 },
        { name: 'shirt', description: 'colorful designs, all sizes', price: 24, category: 'clothes', location: 'Nairobi', itemImg: 'https://tinyurl.com/yfec9ofk', user_id: 7 },
        { name: 'skirt', description: 'handmade, long and short', price: 64, category: 'clothes', location: 'Mombasa', itemImg: 'https://tinyurl.com/yjmn7dur', user_id: 7 },
        { name: 'dress', description: 'formal gown', price: 100, category: 'clothes', location: 'Zanzibar', itemImg: 'https://tinyurl.com/yfbucuwb', user_id: 8 },
        { name: 'pants', description: 'cotton, many sizes', price: 50, category: 'clothes', location: 'Mbale', itemImg: 'https://tinyurl.com/yhvrpyfp', user_id: 8 },
        { name: 'hat', description: 'block the sun and look good too', price: 20, category: 'clothes', location: 'Jinja', itemImg: 'https://tinyurl.com/yf8scaw4', user_id: 9 },
        { name: 'sandals', description: 'leather hand crafted', price: 30, category: 'clothes', location: 'Dodoma', itemImg: 'https://tinyurl.com/yh68btbr', user_id: 9 },
        { name: 'shoes', description: 'many sizes and colors', price: 25, category: 'clothes', location: 'Kigali', itemImg: 'https://tinyurl.com/yztusace', user_id: 10 },
        { name: 'toy blocks', description: 'great for your kids', price: 10, category: 'toys', location: 'Bujumbura', itemImg: 'https://tinyurl.com/yezwnp4p', user_id: 10 },
        { name: 'jerry can', description: 'great for carrying water', price: 7, category: 'home', location: 'Kampala', itemImg: 'https://tinyurl.com/yf5wg4v6', user_id: 11 },
        { name: 'ring', description: 'ruby and gold band', price: 400, category: 'jewelry', location: 'Dar es Salaam', itemImg: 'https://tinyurl.com/yjhesmav', user_id: 11 },
        { name: 'pillow', description: 'cool!', price: 41, category: 'home', location: 'Nairobi', itemImg: 'https://tinyurl.com/ykxcvmow', user_id: 12 },
        { name: 'blanket', description: 'awesome!', price: 53, category: 'home', location: 'Mombasa', itemImg: 'https://tinyurl.com/yeh2en25',  user_id: 12 },
        { name: 'plates', description: 'excellent!', price: 24, category: 'home', location: 'Zanzibar', itemImg: 'https://tinyurl.com/yz6lx29l', user_id: 13 },
        { name: 'cups', description: 'fantastic!', price: 26, category: 'home', location: 'Mbale', itemImg: 'https://tinyurl.com/yeq6gsjw', user_id: 13 },
        { name: 'frying pan', description: 'amazing!', price: 78, category: 'home', location: 'Jinja', itemImg: 'https://tinyurl.com/yfx2olmp', user_id: 14 },
        { name: 'fire wood', description: 'perfect!', price: 94, category: 'home', location: 'Dodoma', itemImg: 'https://tinyurl.com/ydncblef', user_id: 14 },
        { name: 'bicycle', description: 'cool beanz', price: 34, category: 'toys', location: 'Kigali', itemImg: 'https://tinyurl.com/ye7qddaq', user_id: 15 },
        { name: 'maize', description: 'outstanding!', price: 37, category: 'food', location: 'Bujumbura', itemImg: 'https://tinyurl.com/ye2h7axr', user_id: 15 },
        { name: 'chipati', description: 'delicious!', price: 17, category: 'food', location: 'Kampala', itemImg: 'https://tinyurl.com/yfuub2sp', user_id: 16 },
        { name: 'eggs', description: 'a dozen', price: 12, category: 'food', location: 'Dar es Salaam', itemImg: 'https://tinyurl.com/ydn7r3me', user_id: 16 },
        { name: 'grain', description: '50 lb sack', price: 4, category: 'food', location: 'Nairobi', itemImg: 'https://tinyurl.com/yh5pnqdw', user_id: 17 },
        { name: 'solar panel', description: 'awesome!', price: 500, category: 'electronics', location: 'Mombasa', itemImg: 'https://tinyurl.com/ydkrtvlw', user_id: 17 },
        { name: 'tilapia', description: 'amazing!', price: 9, category: 'food', location: 'Zanzibar', itemImg: 'https://tinyurl.com/ydu4j7fl', user_id: 18 },
        { name: 'bricks', description: 'excellent!', price: 65, category: 'tools', location: 'Mbale', itemImg: 'https://tinyurl.com/yecfpo3g', user_id: 18 },
        { name: 'avocado', description: 'fantastic!', price: 27, category: 'food', location: 'Jinja', itemImg: 'https://tinyurl.com/yz3u7zu3', user_id: 19 },
        { name: 'lamp', description: 'perfect!', price: 32, category: 'electronics', location: 'Dodoma', itemImg: 'https://tinyurl.com/yds2csce', user_id: 19 },
        { name: 'bottle', description: 'outstanding!', price: 3, category: 'home', location: 'Kigali', itemImg: 'https://tinyurl.com/ygdr9nky', user_id: 20 },
        { name: 'lumber', description: 'teak and ebony', price: 74, category: 'tools', location: 'Bujumbura', itemImg: 'https://tinyurl.com/yhmn96jd', user_id: 20 },
        { name: 'motorbike', description: 'go fast', price: 850, category: 'toys', location: 'Kampala', itemImg: 'https://tinyurl.com/tytsk5u', user_id: 21 },
        { name: 'kayiso rice', description: 'yessss', price: 270, category: 'food', location: 'Dar es Salaam', itemImg: 'https://tinyurl.com/yf2csnk9', user_id: 21 },
        { name: 'cassava', description: 'go nuts!', price: 390, category: 'food', location: 'Nairobi', itemImg: 'https://tinyurl.com/yhpuwl4c', user_id: 22 },
        { name: 'pineapple', description: 'delicious!', price: 44, category: 'food', location: 'Mombasa', itemImg: 'https://tinyurl.com/yj2xjvnf', user_id: 22 },
        { name: 'wind turbine', description: '10 amps', price: 210, category: 'electronics', location: 'Zanzibar', itemImg: 'https://tinyurl.com/ygs3gsa8', user_id: 23 },
        { name: 'pencils', description: '10 pack', price: 5, category: 'home', location: 'Mbale', itemImg: 'https://tinyurl.com/ygqnw6x6', user_id: 23 },
        { name: 'paper', description: '100 pack', price: 46, category: 'home', location: 'Jinja', itemImg: 'https://tinyurl.com/zrff36v', user_id: 24 },
        { name: 'bookshelf', description: 'handmade, medium size', price: 47, category: 'home', location: 'Dodoma', itemImg: 'https://tinyurl.com/yk55uz7o', user_id: 24 },
        { name: 'wardrobe', description: 'handmade, very large', price: 80, category: 'home', location: 'Kigali', itemImg: 'https://tinyurl.com/yht2z4dq', user_id: 25 },
        { name: 'rug', description: 'big size for living space', price: 60, category: 'home', location: 'Bujumbura', itemImg: 'https://tinyurl.com/yeap4gkk', user_id: 25 },
        { name: 'hammer', description: 'awesome!', price: 50, category: 'tools', location: 'Kampala', itemImg: 'https://tinyurl.com/yhgrnx3n', user_id: 26 },
        { name: 'saw', description: 'amazing!', price: 70, category: 'tools', location: 'Dar es Salaam', itemImg: 'https://tinyurl.com/ygaqswr2', user_id: 26 },
        { name: 'shovel', description: 'fantastic!', price: 18, category: 'tools', location: 'Nairobi', itemImg: 'https://tinyurl.com/yfkuprz6', user_id: 27 },
        { name: 'carrots', description: 'excellent!', price: 13, category: 'food', location: 'Mombasa', itemImg: 'https://tinyurl.com/yhwldg9y', user_id: 27 },
        { name: 'goat cheese', description: 'outstanding!', price: 11, category: 'food', location: 'Zanzibar', itemImg: 'https://tinyurl.com/yekb928d', user_id: 28 },
        { name: 'ball', description: 'for playing football', price: 7, category: 'toys', location: 'Mbale', itemImg: 'https://tinyurl.com/yhjq78o8', user_id: 28 },
        { name: 'cucumber', description: 'fresh!', price: 99, category: 'food', location: 'Jinja', itemImg: 'https://tinyurl.com/yg4rhb2x', user_id: 29 },
        { name: 'axe', description: 'chop that wood!', price: 22, category: 'tools', location: 'Dodoma', itemImg: 'https://tinyurl.com/yghbeht5', user_id: 29 },
        { name: 'kale', description: 'nutritious', price: 6, category: 'food', location: 'Kigali', itemImg: 'https://tinyurl.com/yefkz226', user_id: 30 },
        { name: 'wheelbarrow', description: 'haul stuff on the farm', price: 73, category: 'tools', location: 'Bujumbura', itemImg: 'https://tinyurl.com/yhqozblo', user_id: 30 },
    ]);
};