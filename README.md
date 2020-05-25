# African Marketplace API Documentation

## Built by Sam Allen December 2019 - Deployed on Heroku

#### **NOTE: All endpoints require an authorization header with a token (except register/login).**

## *REGISTER & LOGIN ENDPOINTS*

### `POST https://african-marketplace-server.herokuapp.com/api/register`
Submit a new username and password. Both MUST be unique for each new registration. 

Example (doesn't exist in seed data):

    { 
        username: "New_User", (required, unique)
        password: "12345678" (required, unique),
        profileImg: "https://fake-profile-image.com" (optional, default to null)
    }

### `POST https://african-marketplace-server.herokuapp.com/api/login`
Login and get a token back.

Example (doesn't exist in seed data):

    {
        username: "New_User", (required, unique)
        password: "12345678" (required, unique)
    }

and the response will be:

    {
        message: "New_User is now logged in"
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRsYXVkYWhsMSIsImlhdCI6MTU3NDEyOD",
        id: 31,
        username: New_User
    }

## *CRUD Operations for Users*

### `GET https://african-marketplace-server.herokuapp.com/api/users`
Returns an array with all the users, response ex:

    {
        id: 1,
        username: "Sam",
        profileImg: "https://fake-profile-image.com"
    },
    {
        id: 2,
        username: "Dorothy",
        profileImg: "https://fake-profile-image.com"
    },
    {
        id: 3,
        username: "Roberta",
        profileImg: "https://fake-profile-image.com"
    }

### `GET https://african-marketplace-server.herokuapp.com/api/users/:id`
Returns a single user object, response ex:

    {
        id: 1,
        username: "Emma",
        profileImg: "https://fake-profile-image.com"
    }

### `GET https://african-marketplace-server.herokuapp.com/api/users/:id/items`
Returns a single user object that includes an array of the user's market items, response ex:

    {
        id: 1,
        username: "Sam",
        items: [
            {
                name: "basket",
                description: "great for carrying produce",
                price: 4,
                category: "home",
                location: "Kampala",
                itemImg: "https://fake-item-image.com"
            },
            {
                name: "necklace",
                description: "handmade, beautiful!",
                price: 88,
                category: "art",
                location: "Dar es Salaam",
                itemImg: "https://fake-item-image.com"
            }
        ]
    } 

### `PUT https://african-marketplace-server.herokuapp.com/api/users/:id`
Update any user by id.  
Request body ex:

    {
        username: "Wayne",
        password: "exc311Ent!"
        profileImg: "https://fake-profile-image.com",
        user_id: 1 (required, must match an existing user's id)
    }

Response will only return the count. 

### `DELETE https://african-marketplace-server.herokuapp.com/api/users/:id`
Deletes a specific user by id. Response will only return the count.

## *CRUD Operations for a Market Item*

### `GET https://african-marketplace-server.herokuapp.com/api/items`
Returns an arry with all the items, response ex:
        
    [
        {
            name: "basket",
            description: "great for carrying produce",
            price: 4,
            category: "home",
            location: "Kampala",
            itemImg: "https://fake-item-image.com",
            owner: "Emma"
        },
        {
            name: "necklace",
            description: "handmade, beautiful!",
            price: 88,
            category: "art",
            location: "Dar es Salaam",
            itemImg: "https://fake-item-image.com",
            owner: "Emma"
        },
        {
            name: "table",
            description: "large for 6 people",
            price: 12,
            category: "home",
            location: "Nairobi",
            itemImg: "https://fake-item-image.com",
            owner: "Dorothy"
        }
    ]

### `GET https://african-marketplace-server.herokuapp.com/api/items/:id`
Returns a single market item by id, response ex:

    {
        name: "basket",
        description: "great for carrying produce",
        price: 4,
        category: "home",
        location: "Kampala",
        itemImg: "https://fake-item-image.com",
        owner: "Emma"
    }

### `POST https://african-marketplace-server.herokuapp.com/api/items`
Add a new market item, user_id is *REQUIRED*. Request body ex:

    {
        name: "orange", (required)
        description: "juicy fruit", (optional, defaults to null)
        price: 2, (optional, defaults null)
        category: "food", (optional, default to null)
        location: "Zanzibar", (optional, default to null)
        itemImg: "https://fake-item-image.com", (optional, default to null)
        user_id: 1 (required, must match an existing user's id)
    }

Response will return the new item.

### `PUT https://african-marketplace-server.herokuapp.com/api/items/:id`
Update any market item value by id.  
user_id is also *REQUIRED*. Request body ex:

    {
        name: "apple",
        description: "crisp fruit",
        price: 3,
        category: "food", 
        location: "Nairobi",
        itemImg: "https://fake-item-image.com",
        user_id: 1 (required, must match an existing user's id)
    }

Response will only return the count.

### `DELETE https://african-marketplace-server.herokuapp.com/api/items/:id`
Deletes a specific item by id. Response will only return the count.