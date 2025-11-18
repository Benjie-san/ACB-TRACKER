import { useState } from "react";
import { login } from "../api";

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        console.log(password)
        const res = await login(username, password);

        if (!res.success) {
        setError(res.message);
        return;
        }

        // save user to localStorage
        localStorage.setItem("user", JSON.stringify(res.user));

        // notify app
        onLogin(res.user);
    }

    return (
        <div style={{ maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
        <h2>Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
            />

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", margin: "10px 0" }}
            />

            <button
            type="submit"
            style={{
                width: "100%",
                padding: "10px",
                background: "blue",
                color: "white",
                border: "none",
            }}
            >
            Login
            </button>
        </form>
        </div>
    );
}
