1 ) Download the Code
Clone the repository from GitHub and navigate into the project directory:
git clone <repository-url>
cd project-directory

2 ) Install Dependencies
Install the required packages using npm:
npm install

3 ) Run the Project
Start the development server to open the project:
npm start
The project will be accessible at http://localhost:3000.

Technologies Used
**Frontend Framework: React
**Data Source: Product data is fetched from the DummyJSON API.
**Styling: Tailwind CSS is used for responsive and utility-based styling.

State Management
**Redux Toolkit: Used for managing global state, with separate slices for cart and wishlist functionalities.
***Data Persistence:
   **Local Storage: Cart and wishlist data are stored in localStorage for persistence across sessions.
   **Redux Persist: Integrated with redux-persist to automatically save and restore Redux state.

File Structure
Pages: Separate pages for products, cart, and wishlist.
Components: Reusable components for layout and UI elements.
Store: Configures Redux slices and integrates redux-persist.
This setup ensures a modular, persistent, and responsive frontend application.






