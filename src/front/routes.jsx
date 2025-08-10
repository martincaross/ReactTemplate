import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Feed } from "./pages/Feed";

// import { Loader } from "./components/Loader";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="home" element={<Home />} />
      {/* <Route path="home" element={<Home />} />         */}
    </Route>
  )
);

