# LetaFoodApp

LetaFoodApp is a dynamic food delivery application built with React. It allows users to browse meal categories, manage their cart, and authenticate their accounts. This application is designed to enhance the food ordering experience by providing an intuitive user interface and seamless navigation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Meal Categories:** Filter meals based on selected categories.
- **Cart Management:** Add, remove, and clear items in the cart.
- **User Authentication:** Login and logout functionality.
- **Responsive Design:** Optimized for various devices.
- **Router Integration:** Navigable pages using React Router.

# Cart Component 
 The Cart component is an essential part of the LetaFoodApp, enabling users to manage their meal orders, view prices, and proceed to checkout. It provides an intuitive interface for handling cart items and confirming orders.
  ## Overview 
 The Cart component allows users to:
  - View a list of selected meal items.
  - See the total cost of the items in the cart.
  - Remove items from the cart.
  - Open a checkout summary for order confirmation.
  - Confirm orders and clear the cart after checkout.
  ## Features- 
**Display Cart Items:
**List of meals added to the cart with their prices. -
**Total Amount Calculation
:** Calculates the total price of items in the cart. -
**Remove Items:** Option to remove individual meal items from the cart. - **Checkout Process:** - 
Opens a summary of items for final confirmation.
  - Alerts the user with an order confirmation message.
  - Clears the cart upon successful order confirmation and redirects to the meal list.
  ## Usage 
 To use the Cart component, ensure the following props are passed: - **cartItems**:
 An array of meal objects is currently in the cart. Each meal object should have at least a `name` and a `price`. -
**removeFromCart**: A function to handle the removal of a meal from the cart. -
**clearCart**: A function to clear all items from the cart.  

# NavBar Component 
 The NavBar component is a crucial part of the LetaFoodApp, providing user navigation and authentication controls. It allows users to access different application sections and manage their authentication status easily.   
## Technologies Used

   The NavBar component includes: -

**Logo:** Displays the application logo or name. -

**Navigation Links:**Provides links to key sections of the app, including Home and Our Services. -
**Authentication Controls:** Displays a Logout button when the user is authenticated, or a Login link when they are not.

  ## Features -
**Dynamic Navigation:** The links in the NavBar adapt based on the user's authentication status. -
**Logout Functionality:** Users can log out, which will trigger the provided `handleLogout` function. - 
**Responsive Design:** The NavBar is designed to be user-friendly and responsive.   

# Footer Component 

 The Footer component of the LetaFoodApp provides essential information about the application and its management team. It is designed to enhance the user experience by presenting copyright information and details about the team behind the application.
  ## Overview
The Footer component includes: - 
**Copyright Notice:** Displays the copyright information for the application. - **Management Team Information:
** Lists the key members of the management team along with their roles.

  ## Features - 
**Copyright Information:** Clearly states the ownership and rights for the application. -
**Team Introduction:** Introduces the management team members with their respective roles, fostering transparency and trust.
  ## Usage 
 The Footer component does not require any props and can be directly included in your application layout.   

# MealCard Component 

 The MealCard component is a key part of the LetaFoodApp that displays individual meal items, allowing users to view details and add meals to their cart. This component enhances the user experience by providing a clear and interactive way to browse meal options
. ## Overview
The MealCard component includes: -
**Meal Image:** Displays a visual representation of the meal. -
**Meal Name:**
Shows the name of the meal. -
**Meal Description:** Provides a brief description of the meal. -
**Price Information:** Displays the price of the meal. -
**Add to Cart Button:** Allows users to add the meal to their shopping cart.
  ## Features - 
**Dynamic Meal Display:** Presents meal information dynamically based on the data passed to the component. -
**Interactive Cart Functionality:** Users can easily add meals to their cart with a single click.
   ## Usage 
 To use the MealCard component, ensure the following props are passed: - **meal**: An object containing the meal's details, including `image`, `name`, `description`, `price`, and `id`. -
**addToCart**: A function that handles the addition of the meal to the cart.   

# MealCategory Component

The MealCategory component is an integral part of the LetaFoodApp, allowing users to filter meals based on categories such as Breakfast, Lunch, and Dinner. This component also provides a link to the cart, enabling users to view their selected items easily.
  ## Overview
The MealCategory component includes: - 
**Category Buttons:** Three buttons for filtering meals by category: Breakfast, Lunch, and Dinner. - 
**Cart Link:** A link that directs users to the cart page, displaying the number of items currently in the cart. 

  ## Features - 
**Dynamic Meal Filtering:** Users can filter meals by selecting different categories. -
**Cart Overview:** Displays the total number of items in the cart, making it easy for users to access their selections.

  ## Usage 
 To use the MealCategory component, ensure the following props are passed: - **filterMeals**: A function that handles filtering meals based on the selected category. -
**cartItems**: An array representing the items currently in the cart. The length of this array is displayed on the cart link.   

# MealList Component 

 The MealList component is a core part of the LetaFoodApp that displays a list of meals based on selected categories. It fetches meal data from an external API and dynamically filters the meals based on user selection

. ## Overview 
 The MealList component includes: -
**Meal Fetching:** Fetches meal data from three categories: Breakfast, Lunch, and Dinner. -
**Dynamic Filtering:** Filters meals based on the selected category, displaying them accordingly. - 
**Meal Display:** Uses the MealCard component to display each meal's details and provide an option to add meals to the cart.

  ## Features - 
**API Integration:** Fetches meal data from a remote server using the Fetch API. -
**Category Filtering:** Filters the meals based on the selected category, allowing users to see only the meals they are interested in. -
**User Interaction:** Each meal is displayed as a card, enabling users to add items to their cart easily.

  ## Usage 
 To use the MealList component, ensure the following props are passed: - **category**: A string representing the currently selected meal category (e.g., 'Breakfast', 'Lunch', 'Dinner'). - 
**addToCart**: A function that handles adding a meal to the cart.  

- **Frontend:**
  - React.js
  - React Router
  - CSS 

- **Backend:** 
-API
  - Node.js. 

- **Deployment:**
[-  Vercel the project is hosted on this platform and can be accessed using this link](https://leta-food-app.vercel.app/home)

Thank you!
