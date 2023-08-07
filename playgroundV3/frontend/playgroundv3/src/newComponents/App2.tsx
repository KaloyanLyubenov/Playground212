import NavBar from "./navigation/Navbar";
import HomePage from "./homePage/HomePage";
import LogoProvider from "./LogoContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectsPage from "./portfolio/photography/ProjectsPage";
import NavbarStatic from "./navigation/NavbarStatic";
import AuthProvider from "./AuthContext";
import AuthContainer from "./auth/AuthContainer";
import UploadForm from "./imageUpload/UploadForm";
import CreateContainer from "./create/CreateContainer";
import LocationAdd from "./locationAdding/LocationAdd";
import AccountContainer from "./accountPage/AccountContainer";
import PaymentSuccess from "./PaymentSuccess";

function App() {
  return (
    <div>
      <AuthProvider>
        <AuthContainer />
        <LogoProvider>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <NavBar />
                    <HomePage />
                  </>
                }
              />
              <Route
                path="/portfolio/photography"
                element={
                  <>
                    <NavbarStatic />
                    <ProjectsPage />
                  </>
                }
              />
              <Route
                path="/upload"
                element={
                  <>
                    <NavbarStatic />
                    <UploadForm />
                  </>
                }
              />
              <Route
                path="/create"
                element={
                  <>
                    <NavbarStatic />
                    <CreateContainer />
                  </>
                }
              />
              <Route
                path="/location-add"
                element={
                  <>
                    <NavbarStatic />
                    <LocationAdd />
                  </>
                }
              />
              <Route
                path="/account"
                element={
                  <>
                    <NavbarStatic />
                    <AccountContainer />
                  </>
                }
              />
              <Route
                path="/payment-success/:orderID"
                element={
                  <>
                    <NavbarStatic />
                    <PaymentSuccess />
                  </>
                }
              />
            </Routes>
          </Router>
        </LogoProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
