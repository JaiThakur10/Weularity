import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    hobbies: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        hobbies: checked
          ? [...prevData.hobbies, value]
          : prevData.hobbies.filter((hobby) => hobby !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error:", error);
      alert("errrrrrrro. Please try again.");
    }
  };

  return (
    <div className="App">
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              required
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              required
            />{" "}
            Female
          </label>
        </label>
        <label>
          Hobbies:
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Reading"
              onChange={handleChange}
            />{" "}
            Reading
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Traveling"
              onChange={handleChange}
            />{" "}
            Traveling
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Gaming"
              onChange={handleChange}
            />{" "}
            Gaming
          </label>
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
