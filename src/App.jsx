import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import Faq from "./pages/Faq";
import Contact, { contactAction } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layout/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careerDetails } from "./pages/CareersDetails";
import CareerError from "./pages/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Home></Home>}></Route>

      <Route path="about" element={<About></About>}></Route>

      <Route path="help" element={<HelpLayout></HelpLayout>}>
        <Route path="faq" element={<Faq></Faq>}></Route>
        <Route
          path="contact"
          element={<Contact></Contact>}
          action={contactAction}
        ></Route>
      </Route>

      <Route
        path="careers"
        element={<CareersLayout></CareersLayout>}
        errorElement={<CareerError></CareerError>}
      >
        <Route
          index
          element={<Careers></Careers>}
          loader={careersLoader}
        ></Route>
        <Route
          path=":id"
          element={<CareerDetails></CareerDetails>}
          loader={careerDetails}
        ></Route>
      </Route>

      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
