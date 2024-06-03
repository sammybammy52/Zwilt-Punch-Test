## React.Js Evaluation - Round 2

Node Version: 18.18.2

### Project Setup

1. Project Initialization:

-   Clone the repository with the code below
    

Bash

`git clone https://github.com/sammybammy52/Zwilt-Punch-Test.git`

  
  

2. Directory Structure:

-   A basic Vite project structure typically includes:
    

-   public: Contains static assets like images, fonts, etc.
    
-   src: Houses the project's source code (HTML, CSS, JavaScript).
    
-   index.html: The main entry point for the application.
    
-   package.json: Manages project dependencies and scripts.
    

### Project Development

1. Development Server:

-   Start the development server using:
    

Bash

`npm run dev`

2. Building for Production:

-   To create an optimized production build:
    

Bash

npm run build

  

-   The built output typically resides in the dist folder.
    

### Landing Page Implementation

-   I used tailwind css for majorly for styling.
    
-   All the static data is located in Constants.jsx
    
-   All assets are in public folder, they are located with the names of their respective components
    

Method:

-   I used arrays to store the data, that will later come from the database to facilitate easy integration with the backend
    
-   I have setup context api for authentication and datafetching to control data flow and storage into the project
    

### Additional Notes

The env that will fit into my authentication context and datafetching context is as follows  

  

VITE_CRYPTO_KEY = yumyumyumtastycookies

  

VITE_SERVER_URL = https://test.server.com/api

  

VITE_FULL_URL = https://test.server.com

  

VITE_IMAGE_URL = storage/images

  

LOCAL_URL = http://localhost:8000/api

  

LIVE_URL = https://test.server.com/api

  

VITE_WORK_ENV = development