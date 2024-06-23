# Zero Meter

Zero Meter is a comprehensive inventory and advertisement management platform designed for vehicle dealerships, users, and administrators. This MERN (MongoDB, Express.js, React.js, Node.js) stack application provides a seamless experience for managing vehicle listings, advertisements, and user interactions with a focus on ease of use, security, and performance.

## Features

### General Features
- **Responsive UI**: Consistent, user-friendly, and responsive design across all pages.
- **Dashboard Access**: Easy access to all features through dedicated dashboards for each user type.
- **Authentication & Security**: Passwords are stored in encrypted form and JWT authentication is used to secure user sessions.
- **Social Media Integration**: Social media icons and links in the footer on all pages.

### Admin Features
- **Account Management**: Approve and block dealership and user accounts.
- **Analytics Dashboard**: View comprehensive analytics for the entire application.
- **Blog Management**: Create and manage blog posts that can be viewed by anyone from the landing page.

### Dealership Features
- **Inventory Management**: Add and manage vehicles in the inventory.
- **Advertisement Publishing**: Publish ads for vehicles added to the inventory.
- **View Other Dealerships**: Explore other dealerships and their listings.
- **Analytics Dashboard**: View analytics specific to their dealership's performance.
- **Profile Management**: Edit dealership profile information.
- **View Ads and Invoices**: Keep track of their own ads and invoices.

### User Features
- **View Advertisements**: Browse ads published by dealerships.
- **Purchase Vehicles**: Buy vehicles directly from ads, creating an invoice that can be paid via Stripe.
- **Invoice Management**: Download PDFs for their invoices.
- **View Dealerships**: Explore dealership profiles and locations.
- **Google Maps Integration**: View routes to dealerships from the user's current location using the Google Maps API.
- **Profile Management**: Manage personal profile information.

### Recommendation System
- **Python-based Recommendations**: Integrated with Node.js, the recommendation system suggests similar cars based on the user’s current view.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Payment Processing**: Stripe API
- **Mapping Services**: Google Maps API
- **Authentication**: JSON Web Tokens (JWT)
- **Data Security**: Encrypted password storage
- **Recommendation System**: Python

## Getting Started
To get started with Zero Meter, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/zerometer.git
    ```
2. **Install dependencies** for both the backend and frontend:
    ```bash
    cd frontend
    npm install
    cd backend
    npm install
    ```
3. **Run the application**:
    - **Backend**:
      ```bash
      cd backend
      npm run server
      ```
    - **Frontend**:
      ```bash
      cd frontend
      npm run dev
      ```
## Acknowledgements
This project was developed collaboratively by the following team members:
- **Abdul Moiz**: Lead Backend
- **Laiba Mirza**: Lead Frontend
- **Numair Imtiaz**: Lead AI

Enjoy managing your vehicle inventory and advertisements with Zero Meter!
