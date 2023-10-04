import { useMemo } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const PrivateRoute = ({ children }) => {
    const [cookies, removeCookie] = useCookies([]);
    const navigate = useNavigate();

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-right",
        });

    const verifyCookie = useMemo(async () => {
        if (!cookies.token) {
            navigate("/login");
        }

        const { data } = await axios.post(
            "https://clima-api.onrender.com/private-request",
            {},
            { withCredentials: true }
        );

        const { status } = data;

        if (!status) {
            removeCookie("token");
            handleError("Please login first!");
            navigate("/login");
        }
    }, [cookies, navigate, removeCookie]);

    return children;
};

export default PrivateRoute;
