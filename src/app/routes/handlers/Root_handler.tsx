import { useEffect, useState } from "react";
import { RouteHandlerState } from "../../shared/domain/router_handler_state";
import { AppRoutesNamed } from "../app_routes_named";
import { Navigate } from "react-router-dom";
import { AuthService } from "../../shared/application/auth_service";

export default function RootHandler() {

    let [authState, setAuthState] = useState(RouteHandlerState.LOADING);

    useEffect(() => {
        const state = AuthService.getAuthState();
        setAuthState(state ? RouteHandlerState.MATCH : RouteHandlerState.NOMATCH);
    }, [])

    return (
        (() => {
            switch (authState) {
                case RouteHandlerState.LOADING:
                    return <div>Loading...</div>;
                case RouteHandlerState.NOMATCH:
                    return <Navigate to={AppRoutesNamed.AUTH} replace={true} />;
                case RouteHandlerState.MATCH:
                    return <Navigate to={AppRoutesNamed.DASHBOARD} replace={true} />;
            }
        })()
    );
}