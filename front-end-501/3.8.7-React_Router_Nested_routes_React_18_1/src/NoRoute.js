import { useLocation } from "react-router-dom";

function NoRoute() {
    const location = useLocation();

    return (
        <h3>
        No route for <code>{location.pathname}</code>
        </h3>
    );
}

export default NoRoute;