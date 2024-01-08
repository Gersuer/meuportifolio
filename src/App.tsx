import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

export { router }