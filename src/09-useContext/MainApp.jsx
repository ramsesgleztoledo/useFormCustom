import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <NavBar></NavBar>
      <hr />

      <Routes>
        <Route
          path="/"
          element={<HomePage></HomePage>}
        />
        <Route
          path="login"
          element={<LoginPage></LoginPage>}
        />
        <Route
          path="about"
          element={<AboutPage></AboutPage>}
        />
        {/* <Route
          path="/*"
          element={<HomePage></HomePage>}
        /> */}
        <Route
          path="/*"
          element={
            <Navigate to="/"></Navigate>
            // <h1>Hello world</h1>
          }
        />
      </Routes>
    </UserProvider>
  );
};
