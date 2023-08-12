import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/VerifiedUser.css';
import { useState, useEffect } from "react";

const Home = () => {

  const [joke, setJoke] = useState("");
  const [userChoice, setUserChoice] = useState({});
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();


  useEffect(() => {

    const fetchData = async () => {

      if (!cookies.token) {
        navigate("/login");
      }

      try {
        const { data } = await axios.post("http://localhost:8000/login",
          {},
          { withCredentials: true });

        const { success, appSettings } = data;
        console.log(data);


        // if (success) {
        //   setJoke(app);
        //   setUserChoice(user.UserChoice); // Store the user's settings
        // }

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