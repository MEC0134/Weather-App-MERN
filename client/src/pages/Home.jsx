import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../css/VerifiedUser.css';
import { useState, useEffect } from "react";

const Home = () => {

  const [joke, setJoke] = useState("");
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();


  useEffect(() => {
    const getJoke = async () => {

      if (!cookies.token) {
        navigate("/login");
      }

        const { data } = await axios.post("http://localhost:8000/home",
          {},
          { withCredentials: true });

        const { success, user, userJoke } = data;

        console.log(data);
        setJoke(userJoke);
    }
    getJoke();
  }, []);



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