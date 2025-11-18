import { useEffect, useState } from "react";
import { testConnection } from "./api";
import Login from "./pages/Login";

function App() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  // load saved session
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  
  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
      <div>
        <h1>Welcome {user.username}</h1>
        <p>Role: {user.role}</p>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            setUser(null);
          }}
        >
          Logout
        </button>
    </div>
  );
  
}

export default App;
