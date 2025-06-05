import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [logout, setLogout] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      setLogout(true); // Show logout button after successful login
    }
  };

  const handleLogout = async () => {
    const res = await fetch("http://localhost:5000/api/logout", {
      method: "POST",
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) {
      setLogout(false); // Hide logout button on logout
      setForm({ username: "", password: "" }); // Clear form or reset state as needed
    }
  };

  return (
    <>
      {!logout ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow-md"
        >
          <h2 className="text-xl mb-4">Login</h2>
          <p className="text-gray-600 mb-4">
            Please enter your credentials to login.
          </p>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </>
  );
}
