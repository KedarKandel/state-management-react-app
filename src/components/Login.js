import { useDispatch } from "react-redux";
import { login, logout } from "../components/redux/reducers/userReducer";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: "salin", age: 2222, email: "sal@gmail.com" }))
        }
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
