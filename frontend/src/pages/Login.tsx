import { useEffect, useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, token } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      if (res.access_token) {
        login(res.access_token);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  useEffect(() => {
    if (token != null) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow"
    >
      <h2 className="text-2xl mb-4 font-semibold">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 p-2 border"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-2 border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded w-full">
        Login
      </button>
    </form>
  );
};

export default Login;
