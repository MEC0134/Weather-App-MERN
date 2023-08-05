// private page
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import '../css/home.css';

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {

    // not authorized
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }

      const { data } = await axios.post("http://localhost:8000/home",
        {},
        { withCredentials: true });

      const { status, user } = data;
      setUsername(user);

      return status ? toast(`Hello ${user}`, { position: "top-right" }) : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // const Logout = () => {
  //   removeCookie("token");
  //   navigate('/');
  // };

  return (
    <>
      <div id="home-page">
        <div className="home-wrapper">
          <h4 className="home-title">Hi {username}</h4>
          <h5>Lets set up your app settings, please choose your location and other details for your app.</h5>
          <div className="row align-items-center" style={{ height: "60vh" }}>
            <div className="mx-auto col-8 col-md-6 col-lg-4 form-frame" style={{ height: "410px" }}>
              <label>Country</label>
              <input className="form-control"></input>
              <label>City</label>
              <input className="form-control"></input>
              <label>Joke Type</label>
              <input className="form-control"></input>
            </div>
          </div>


          {/* <div className="logout">
            <button className="btn btn-primary btn-logout" onClick={Logout}>Logout</button>
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Home