import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Simulate a login API request
    setTimeout(() => {
      if (formData.email === "test@example.com" && formData.password === "password") {
        setMessage("Login successful! Welcome!");
      } else {
        setMessage("Invalid email or password. Please try again.");
      }
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #ffb6c1, #8ec5fc)",
        
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          marginTop: "50px"
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "1.8rem", color: "#333" }}>Log In</h2>
        {message && (
          <p
            style={{
              color: message.includes("successful") ? "green" : "red",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "0.9rem",
                color: "#555",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="name@example.com"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#6B73FF")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>
          <div style={{ marginBottom: "20px", textAlign: "left" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "0.9rem",
                color: "#555",
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "8px",
                border: "1px solid #ddd",
                outline: "none",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#6B73FF")}
              onBlur={(e) => (e.target.style.borderColor = "#ddd")}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "#6B73FF",
              border: "none",
              borderRadius: "8px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = "#5a63e0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6B73FF")}
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </form>
        <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#555" }}>
          Don't have an account?{" "}
          <a
            href="/SignUpForm"
            style={{
              color: "#6B73FF",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;