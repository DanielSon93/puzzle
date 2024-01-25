import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Make from "./pages/Make";
import Play from "./pages/Play";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/make",
        element: <Make />,
      },
      {
        path: "/play/:title",
        element: <Play />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
