import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username.trim() !== "" && password !== "";

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    localStorage.setItem("isAuthenticated", "true");
    navigate("/table");
  };

  return (
    <div className="flex-1 flex items-center justify-center px-3">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-gray-100 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900">Login</h1>
        <div>
          <label
            htmlFor="username-input"
            className="text-sm font-medium text-gray-700 mb-1.5"
          >
            Username
          </label>
          <input
            id="username-input"
            required
            type="text"
            value={username}
            name="username"
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all [webkit-text-fill-color:theme(colors.gray.900)] autofill:shadow-[0_0_0_1000px_white_inset]"
          />
        </div>

        <div>
          <label
            htmlFor="password-input"
            className="text-sm font-medium text-gray-700 mb-1.5"
          >
            Password
          </label>
          <input
            id="password-input"
            required
            type="password"
            value={password}
            name="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all [webkit-text-fill-color:theme(colors.gray.900)] autofill:shadow-[0_0_0_1000px_white_inset]"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" disabled={!isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
