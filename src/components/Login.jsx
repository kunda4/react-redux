import { useDispatch } from "react-redux";
import { login, logout } from "../features/User";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Aggy", age: 20, email: "kundaaggy@gmail" }));
        }}
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
}

export default Login;
