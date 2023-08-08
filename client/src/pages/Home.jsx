import UserChoice from "./UserChoice";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import '../css/home.css';

const Home = () => {

  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();



  const Logout = () => {
    removeCookie("token");
    navigate('/');
  };

  return (
    <>
     
        <UserChoice/>

          {/* <div className="logout">
            <button className="btn btn-primary btn-logout" onClick={Logout}>Logout</button>
          </div> */}
    </>
  )
}

export default Home