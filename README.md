# Express Products API

A simple RESTful API for managing products using Express.js.

## 📁 Project Structure

```
express-api-products/
│
├── controllers/
│   └── productController.js
├── data/
│   └── products.js
├── middleware/
│   ├── auth.js
│   ├── errorHandler.js
│   ├── logger.js
│   ├── validateProduct.js    
├── routes/
│   └── products.js
├── utils/
│   └── error.js
├── .env.example
├── README.md
└── server.js
```  
## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-Emmaculate-M.git
cd week-2-express-js-assignment-Emmaculate-M
```

### 2. Install dependencies

```bash
npm install express body-parser uuid dotenv
```

### 3. Setup environment variables

Create a `.env` file and configure it using `.env.example`:

```bash
copy .env.example .env
```

### 4. Run the server

```bash
npm start
```

Server running at http://localhost:3000

##  API Endpoints

### Base URL: `/api/products`

#### GET /api/products
Description: Get all products
Query Parameters:
    category (optional) – filter PRoducts by category
Example Request:
GET http://localhost:3000/api/products
Response:
{
    "page": 1,
    "limit": 10,
    "total": 6,
    "products": [
        {
            "id": "1",
            "name": "Laptop",
            "description": "High-performance laptop with 16GB RAM",
            "price": 1200,
            "category": "electronics",
            "inStock": true
        },
        {
            "id": "2",
            "name": "Smartphone",
            "description": "Latest model with 128GB storage",
            "price": 800,
            "category": "electronics",
            "inStock": true
        },
        {
            "id": "3",
            "name": "Coffee Maker",
            "description": "Programmable coffee maker with timer",
            "price": 50,
            "category": "kitchen",
            "inStock": false
        },
        {
            "id": "4",
            "name": "Tesla Model X",
            "description": "Electric luxury SUV",
            "price": 85000,
            "category": "automotive",
            "inStock": true
        },
        {
            "id": "5",
            "name": "Jaguar XF",
            "description": "Luxury sedan",
            "price": 55000,
            "category": "automotive",
            "inStock": true
        },
        {
            "id": "6",
            "name": "Land Rover Discovery",
            "description": "Premium off-road SUV",
            "price": 60000,
            "category": "automotive",
            "inStock": false
        }
    ]
}

#### GET /api/products/:id
Description: Get product by ID
Example Request:
GET http://localhost:3000/api/products/1
Response:
{
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
}

#### POST /api/products
Description: Create new product
Example Request: POST http://localhost:3000/api/products
Body: JSON
{
  "name": "Jaguar F-Pace",
  "description": "Luxury performance SUV",
  "price": 85000,
  "category": "automotive",
  "inStock": true
}
Response:
{
    "id": "03685455-d367-4897-a0db-653fb6c76d0c",
    "name": "Jaguar F-Pace",
    "description": "Luxury performance SUV",
    "price": 85000,
    "category": "automotive",
    "inStock": true
}

#### PUT /api/products/:id
Description: Update a product
Request: PUT http://localhost:3000/api/products/4
Body: JSON
{
  "name": "Jaguar F-Pace",
  "description": "Luxury performance SUV",
  "price": 85000,
  "category": "automotive",
  "inStock": true
}
Response: 
{
    "id": "4",
    "name": "Jaguar F-Pace",
    "description": "Luxury performance SUV",
    "price": 85000,
    "category": "automotive",
    "inStock": true
}

#### DELETE /api/products/:id 
Description: Delete a product
Example Request: DELETE http://localhost:3000/api/products/3

Response: 
{
    "message": "Product deleted",
    "deleted": {
        "id": "3",
        "name": "Coffee Maker",
        "description": "Programmable coffee maker with timer",
        "price": 50,
        "category": "kitchen",
        "inStock": false
    }
}

#### GET /api/products/stats 
Description: View count of products by category
Example Request: GET http://localhost:3000/api/products/stats
Response:
{
    "totalProducts": 6,
    "countByCategory": {
        "electronics": 2,
        "automotive": 4
    }
}

## Testing

Used Postman

## License

MIT

## Author

Emmaculate Mwania
