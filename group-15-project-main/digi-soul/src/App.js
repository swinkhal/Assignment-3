import { Container } from "@mui/system";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter(routes);

  return (
      <Container>
          <NavBar />
          <RouterProvider router={router} />
          <Footer />
      </Container>
  );
}

export default App;
