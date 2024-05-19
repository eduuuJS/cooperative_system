import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoutesNamed } from "../../../../routes/app_routes_named";

export default function AuthRouter() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to={AppRoutesNamed.SIGNIN} />} />
            <Route path="/" element={<Navigate to={AppRoutesNamed.SIGNIN} />} />
            <Route path={AppRoutesNamed.SIGNIN} element={<h1>Sign in</h1>} />
            <Route path={AppRoutesNamed.SIGNUP} element={<h1>Sign up</h1>} />
        </Routes>
    )
}