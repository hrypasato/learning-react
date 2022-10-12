import {  Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes} from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <div className="">
                <Routes>
                    <Route 
                        path="login"
                        element={
                            <PublicRoute>
                                <LoginPage/>
                            </PublicRoute>
                        } 
                    />
                    <Route
                        path="/*"
                        element={
                            <PrivateRouter>
                                <HeroesRoutes/>
                            </PrivateRouter>
                        }
                    />
                </Routes>
            </div>
        </>
    );
}
