import { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    car: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="UserName"
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />{" "}
        <br />
        <select name="car" value={formData.car} onChange={handleChange}>
          <option value="">Select a car</option>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default SimpleForm;
