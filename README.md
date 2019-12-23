# African Marketplace API Documentation

#### **NOTE: All endpoints require an authorization header with a token (except register/login).**

## *REGISTER & LOGIN ENDPOINTS*

### `POST https://african-marketplace-1.herokuapp.com/api/register`
Submit a new username and password. Both MUST be unique for each new registration. 

Example:

    { 
        username: "Santa_Claus", (required, unique)
        password: "merryXmas!" (required, unique)
    }



### `POST https://african-marketplace-1.herokuapp.com/api/login`
Login and get a token back.

Example:

    {
        username: "Santa_Claus", (required, unique)
        password: "merryXmas!" (required, unique)
    }

and the response will be:

    {
        message: "Santa_Claus is now logged in"
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRsYXVkYWhsMSIsImlhdCI6MTU3NDEyOD"
    }

## *CRUD Operations for Users*

### `GET https://african-marketplace-1.herokuapp.com/api/users`
Returns an array with all the users, response ex:

    {
        id: 1,
        username: "Emmanuel"
    },
    {
        id: 2,
        username: "Dorothy"
    },
    {
        id: 3,
        username: "Robert"
    }

### `GET https://african-marketplace-1.herokuapp.com/api/users/:id`
Returns a single user object, response ex:

    {
        id: 1,
        username: "Emmanuel"
    }

### `GET https://african-marketplace-1.herokuapp.com/api/users/:id/items`
Returns a single user object that includes an array of the user's market items, response ex:

    {
        id: 1,
        username: "Emmanuel",
        items: [
            {
                name: "basket",
                description: "great for carrying produce",
                price: 4,
                category: "home",
                location: "Kampala"
            },
            {
                name: "necklace",
                description: "handmade, beautiful!",
                price: 88,
                category: "art",
                location: "Dar es Salaam"
            }
        ]
    } 

### `PUT https://african-marketplace-1.herokuapp.com/api/users/:id`
*NOT BUILT YET* 

### `DELETE https://african-marketplace-1.herokuapp.com/api/users/:id`
Deletes a specific user by id. Response will only return the count.

## **CRUD Operations for a Market Item**

### `GET https://african-marketplace-1.herokuapp.com/api/items`
Returns an arry with all the items, response ex:
        
    [
        {
            name: "basket",
            description: "great for carrying produce",
            price: 4,
            category: "home",
            location: "Kampala",
            owner: "Emmanuel"
        },
        {
            name: "necklace",
            description: "handmade, beautiful!",
            price: 88,
            category: "art",
            location: "Dar es Salaam",
            owner: "Emmanuel"
        },
        {
            name: "table",
            description: "large for 6 people",
            price: 12,
            category: "home",
            location: "Nairobi",
            owner: "Dorothy"
        }
    ]

### `GET https://african-marketplace-1.herokuapp.com/api/items/:id`
Returns a single market item by id, response ex:

    {
        name: "basket",
        description: "great for carrying produce",
        price: 4,
        category: "home",
        location: "Kampala",
        owner: "Emmanuel"
    }

### `POST https://african-marketplace-1.herokuapp.com/api/items`
Add a new market item, user_id is *REQUIRED*. Request body ex:

    {
        name: "orange", (required)
        description: "juicy fruit", (optional, defaults to null)
        price: 2, (optional, defaults null)
        category: "food", (optional, default to null)
        location: "Zanzibar", (optional, default to null)
        user_id: 1 (required, must match an existing user's id)
    }

Response will return the new item.

### `PUT https://african-marketplace-1.herokuapp.com/api/items/:id`
Update any market item value by id.  
user_id is also *REQUIRED*. Request body ex:

    {
        name: "apple",
        description: "crisp fruit",
        price: 3,
        category: "food", 
        location: "Nairobi",
        user_id: 1 (required, must match an existing user's id)
    }

Response will only return the count.

### `DELETE https://african-marketplace-1.herokuapp.com/api/items/:id`
Deletes a specific item by id. Response will only return the count.