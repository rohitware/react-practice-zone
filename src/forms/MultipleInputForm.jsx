import React, { useState } from "react";

function MultipleInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submited", formData);
  };

  return (
    <>
      <h3> Multiple input form</h3>

      <form onSubmit={HandleSubmit}>
        <label> Name:</label>
        <input
          type=" text"
          name="name"
          value={formData.name}
          onChange={HandleChange}
        />
        <br />
        <label>Email</label>
        <input
          type=" email"
          name="email"
          value={formData.email}
          onChange={HandleChange}
        />
        <br />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={HandleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MultipleInputForm;
