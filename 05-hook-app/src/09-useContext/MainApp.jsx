import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, NavBar } from "./";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <NavBar/>
            <hr />
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="about" element={ <AboutPage/> } />
                <Route path="login" element={ <LoginPage/> } />
                
                {/*Para cualquier ruta no definida */}
                <Route path="/*" element={ <Navigate to="/about"/> }></Route>
            </Routes>
        </UserProvider>
    );
}
