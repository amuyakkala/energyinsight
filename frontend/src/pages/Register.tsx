import { useEffect, useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await registerUser(email, password);
      if (res.email) {
        alert("Registered successfully");
        navigate("/");
      } else {
        alert("Registration failed");
      }
    } catch (err) {
      alert("Error registering user");
    }
  };

  useEffect(() => {
    if (token != null) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow"
    >
      <h2 className="text-2xl mb-4 font-semibold">Register</h2>
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
      <button className="bg-green-600 text-white py-2 px-4 rounded w-full">
        Register
      </button>
    </form>
  );
};

export default Register;
