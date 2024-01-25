import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Make from "./components/Make";
import Play from "./components/Play";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        path: "/play",
        element: <Play />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
