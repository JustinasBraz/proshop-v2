# Koffiehuis — MERN eCommerce Store

Koffiehuis is a full-stack eCommerce web application for a Dutch coffee house, built with the MERN stack. Customers can browse and review coffee products, manage a shopping cart and pay for orders with PayPal, while administrators manage products, users and orders from a dedicated admin panel.

> **Note:** This is a demo/portfolio project. Payments run through PayPal Sandbox - no real transactions occur.

## Tech Stack

**Backend**
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) 4 — REST API
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) 8 — data modelling
- [JSON Web Tokens](https://github.com/auth0/node-jsonwebtoken) stored in HTTP-only cookies (`cookie-parser`) — authentication
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) — password hashing
- [Multer](https://github.com/expressjs/multer) — product image uploads

**Frontend**
- [React](https://react.dev/) 18 (Create React App)
- [Redux Toolkit](https://redux-toolkit.js.org/) 2 & [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) — state management and data fetching
- [React Router](https://reactrouter.com/) 6 — client-side routing with protected and admin-only routes
- [React Bootstrap](https://react-bootstrap.github.io/) & Bootstrap 5 — UI components
- [@paypal/react-paypal-js](https://github.com/paypal/react-paypal-js) — PayPal checkout
- react-helmet-async, react-toastify, react-icons

**Tooling**
- nodemon, concurrently, dotenv

## Features

- **User authentication** — registration, login and logout with JWT stored in an HTTP-only cookie; user profile with order history
- **Product catalog** — product listing with keyword search, pagination, a top-rated products carousel and detailed product pages
- **Product reviews** — signed-in users can rate and review products
- **Shopping cart** — persisted in the browser, with automatic tax and shipping calculation
- **Order system** — multi-step checkout (shipping → payment → place order) and order details page
- **PayPal integration** — pay for orders via PayPal (Sandbox)
- **Admin panel**
  - Users: list, edit, delete and grant admin rights
  - Products: create, edit (including image upload), delete
  - Orders: view all orders and mark them as delivered

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- A PayPal Developer account for a Sandbox client ID ([developer.paypal.com](https://developer.paypal.com/))

### 1. Clone and install dependencies

```bash
git clone https://github.com/JustinasBraz/proshop-v2.git
cd proshop-v2

# Backend dependencies (project root)
npm install

# Frontend dependencies
npm install --prefix frontend
```

### 2. Configure environment variables

Copy the example file and fill in your own values:

```bash
cp .env.example .env
```

| Variable           | Description                                               |
| ------------------ | --------------------------------------------------------- |
| `PORT`             | Port for the API server (default `5000`)                  |
| `MONGO_URI`        | MongoDB connection string                                 |
| `JWT_SECRET`       | Secret used to sign JWTs (use a long random string)       |
| `PAYPAL_CLIENT_ID` | PayPal **Sandbox** client ID                              |
| `PAGINATION_LIMIT` | Number of products shown per page (e.g. `8`)              |
| `NODE_ENV`         | `development` for local work, `production` for deployment |

### 3. Seed the database (optional)

Load sample products and users:

```bash
npm run data:import
```

To remove all data:

```bash
npm run data:destroy
```

### 4. Run the app

Run the backend and frontend together:

```bash
npm run dev
```

Or run them separately in two terminals:

```bash
npm run server   # API on http://localhost:5000 (nodemon)
npm run client   # React app on http://localhost:3000
```

The React dev server proxies `/api` requests to the backend on port 5000.

### Production build

```bash
npm run build          # installs dependencies and builds the React app
NODE_ENV=production npm start
```

With `NODE_ENV=production`, Express serves the built frontend from `frontend/build`.

## Project Structure

```
proshop-v2/
├── backend/
│   ├── config/         # Database connection
│   ├── controllers/    # Route handlers
│   ├── data/           # Seed data
│   ├── middleware/     # Auth, error handling
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── utils/
│   ├── seeder.js
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── screens/    # Pages, including admin/
│       ├── slices/     # Redux Toolkit & RTK Query slices
│       └── utils/
└── uploads/            # Uploaded product images
```

## Author

**Justinas Brazauskas**

- GitHub: [@JustinasBraz](https://github.com/JustinasBraz)
- Portfolio: [justinas-portfolio-mainn.vercel.app](https://justinas-portfolio-mainn.vercel.app/)

## License

This project is licensed under the MIT License.
