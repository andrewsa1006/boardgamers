import "./Auth.css";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { useSelector } from "react-redux";

const Auth = () => {
  const authType = useSelector((state) => state.authtype.login);
  return <div className="authtype">{authType ? <Login /> : <Register />}</div>;
};

export default Auth;
