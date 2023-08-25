import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/PrivateRoutes.css';
import { useState, useEffect } from "react";

const Home = () => {

  const [joke, setJoke] = useState("");
  const [user, setUser] = useState({});
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();


  useEffect(() => {

    const fetchData = async () => {

      if (!cookies.token) {
        navigate("/login");
      }

      try {

        const { data } = await axios.get("http://localhost:8000/user-data", {withCredentials: true});

        const { success, userData, userJoke } = data;

        if (success) {
          setUser(userData); // Store the user's settings
          setJoke(userJoke); 
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [cookies, navigate]);



  const Logout = () => {
    removeCookie("token");
    navigate('/');
  };

  return (
    <>

      <div id="home-container">

        <div className="joke-container">
          <p>{joke}</p>
        </div>


        <div className="logout">
          <button className="btn btn-primary btn-logout" onClick={Logout}>Logout</button>
        </div>


      </div>


    </>
  )
}

export default Home