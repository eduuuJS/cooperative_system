import { useEffect, useState } from "react";
import { RouteHandlerState } from "../../../shared/domain/router_handler_state";
import { Navigate } from "react-router-dom";
import { AppRoutesNamed } from "../../app_routes_named";
import { AuthService } from "../../../shared/application/auth_service";
import AuthRootView from "../../../features/authentication/presentation/root/Auth_root_view";

export default function AuthHandler() {

    let [authState, setAuthState] = useState(RouteHandlerState.LOADING);

    useEffect(() => {
        const state = AuthService.getAuthState();
        setAuthState(state ? RouteHandlerState.NOMATCH : RouteHandlerState.MATCH);
    }, [])

    return (
        (() => {
            switch (authState) {
                case RouteHandlerState.LOADING:
                    return <div>Loading...</div>;
                case RouteHandlerState.NOMATCH:
                    return <Navigate to={AppRoutesNamed.DASHBOARD} replace={true} />;
                case RouteHandlerState.MATCH:
                    return <AuthRootView />;
            }
        })()
    );
}