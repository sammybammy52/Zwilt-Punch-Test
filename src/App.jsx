import "./App.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoutes from "./utils/PrivateRoutes";
// import Loading from "./components/General/Loading";
const Home = lazy(() => import('./pages/Home/Home'));



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        {/**Public Routes */}
        <Route index element={<Home />} />

        {/*Protected Routes */}

        <Route element={<PrivateRoutes />}>

        </Route>
       
      </Route>
    ),
    { basename: "/" }
  );
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
