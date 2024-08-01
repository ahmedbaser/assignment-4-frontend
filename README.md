# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



                            E-Commerce Sporting Goods Website 


This project is an e-commerce website specializing in sporting goods, designed to provide a seamless shopping experience. The website allows users to browse products, manage their shopping cart, and complete purchases.

# Technologies and Libraries Used

React:  A JavaScript library for building interactive user interfaces.
Redux:  A state management library for managing application state globally.
TypeScript:  A typed superset of JavaScript that helps catch errors at compile-time.
Tailwind CSS:  A utility-first CSS framework used for styling the application.
react-rating:  A library for adding star rating components to the UI.
react-photo-view:  A library for creating image lightbox views.
shadcn/ui:  A UI component library used for building the design elements of the site.
RTK Query:  A data-fetching library from Redux Toolkit for managing server-side data.
Axios:  A promise-based HTTP client used for making API requests.


# Key Features
Product Browsing: View a list of available products with details such as name, category, brand, price, and stock.
Product Details: View detailed information about a single product, including an image, description, and rating.
Shopping Cart: Add products to the cart, update quantities, and remove items.
Product Management: Add, update, and delete products (admin feature).
User Feedback: Display modals and toasts for user notifications.
Responsive Design: Adaptable UI for various screen sizes using Tailwind CSS.








Project Structure and File Descriptions
Pages
1. src/pages/AboutPage.tsx
Purpose: Displays information about the company, including its mission, team members, and store locations.

2. src/pages/CartPage.tsx
Purpose: Allows users to view and manage items in their shopping cart.
Features:
Displays cart items with details like name, price, category, and stock quantity.
Users can increase or decrease the quantity of each item or remove items from the cart.
Calculates and displays the total price, including VAT.
Provides a button to proceed to the checkout page.

3. src/pages/CheckoutPage.tsx
Purpose: Collects user details and processes orders during checkout.
Features:
Collects user information such as name, email, phone, and delivery address.
Allows users to select a payment method (Cash on Delivery or Stripe).
Submits order data to the server and clears the cart after a successful order.

4. src/pages/ProductsPage.tsx
Purpose: Displays a list of all available products for browsing.
Features:
Implements search, filter, and sorting functionality for products.
Allows users to view product details and add items to the cart.
Uses the react-rating library to display product ratings.
Utilizes the react-photo-view library for viewing product images in a lightbox.

5. src/pages/ManageProducts.tsx
Purpose: Provides an interface for managing product inventory, including adding, updating, and deleting products.
Features:
Displays a list of products with options to edit or delete each one.
Allows adding new products through a modal form.
Uses RTK Query for fetching, adding, updating, and deleting product data.
Shows feedback via modals and toast messages for actions like adding, updating, and deleting products.

6. src/pages/OrderSuccessPage.tsx
Technology Used: React, React Router, Tailwind CSS
Purpose: This file contains the OrderSuccessPage component, which displays a confirmation message when an order is placed successfully. It includes a button that navigates the user back to the home page.

7.src/pages/ProductDetails.tsx
Technology Used: React, React Router, Axios, Redux, React Rating, React Photo View, Tailwind CSS
Purpose: This file contains the ProductDetails component, which provides a detailed view of a single product. It fetches product data from the API, displays the product image, name, description, category, brand, stock quantity, rating, and price, and allows users to add the product to their cart. The react-photo-view package is used to display product images in an overlay, and the react-rating package is used to show product ratings. The "Add to Cart" button is disabled when the product's stock quantity is reached.

#Components
1. src/components/Header.tsx
Purpose: Provides the navigation header for the website.
Features:
Displays links to different pages like Home, Products, About, and Cart.
Shows the total number of items in the cart.
2. src/components/ProductCard.tsx
Purpose: Represents an individual product item in the products list.
Features:
Displays product information, including image, name, price, and rating.
Provides an "Add to Cart" button to add products to the shopping cart.
Redux Store
1. src/redux/store.ts
Purpose: Configures and initializes the Redux store for the application.
Features:
Combines different slices of state and applies middleware.

2. src/redux/slices/cartSlice.ts
Purpose: Manages the state of the shopping cart.
Features:
Defines actions and reducers for adding, removing, and updating cart items.
Contains selectors for accessing cart items and calculating totals.

3. src/redux/selectors.ts
Purpose: Provides functions to select and derive specific pieces of state from the Redux store.
Features:
Includes selectors for getting cart items and the total cart value.
Utilities

1. src/utils/api.ts
Purpose: Contains functions for making API requests to the backend.
Features:
Utilizes Axios for sending HTTP requests and handling responses.
This README.md file provides an overview of the technology 

so this is project overview of frontend section.