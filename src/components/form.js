import { useState } from "react";
import React from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [staff, setStaff] = useState("");
  const [bio, setBio] = useState("");
  const [checked, setSignup] = useState("");
  //   const [errors, setErrors] = useState([]);
  //   const [submitted, setSubmit] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    // setSubmit(true);
    // if (errors.length > 0) alert("There is an error!");
    //   if (name.length === 0) errors.push("Name must be present")
    console.log("submited");
    const registedInfo = {
      name,
      email,
      number,
      phoneType,
      staff,
      bio,
      checked,
    };

    console.log(registedInfo);

    setName("");
    setEmail("");
    setNumber("");
    setPhoneType("");
    setStaff("");
    setBio("");
    setSignup("");
    // setErrors([]);
    // setSubmit(false);
  };

  //   useEffect(() => {
  //     const errors = [];
  //     if (name.length === 0) errors.push("Name must be present");
  //     if (!email.includes("@") || email.length === 0)
  //       errors.push("Email must be present and should be properly formatted");
  //     if (number.length > 0 && phoneType.length === 0)
  //       errors.push("Phone type should be selected");
  //     if (bio.length > 280)
  //       errors.push("Bio should have a character limit of 280 characters");

  //     setErrors(errors);
  //   }, [name, email, number, phoneType, bio]);
  return (
    <div>
      <h1>Registration Form</h1>
      {/* {submitted && errors.length > 0 && (
        <div>The following errors were found:</div>
      )} */}
      <form onSubmit={submit}>
        <div className="row">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            // required={true}
          />
        </div>
        <div className="row">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="row">
          <label htmlFor="number">Phone Number: </label>
          <input
            id="number"
            type="text"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>
        <div className="row">
          <label htmlFor="phoneType">Phone Type: </label>
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div className="row">
          <label htmlFor="staff">Staff: </label>
          {/* <div> */}
          {/* <div> */}
          <input
            type="radio"
            id="instructor"
            name="staff"
            onChange={(e) => setStaff(e.target.value)}
            value="instructor"
          />
          <label htmlFor="instructor">Instructor</label>
          {/* </div> */}
          {/* <div> */}
          <input
            type="radio"
            id="student"
            name="staff"
            onChange={(e) => setStaff(e.target.value)}
            value="student"
          />
          <label htmlFor="student">Student</label>
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="row">
          <label
            htmlFor="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          >
            Bio:
          </label>
          <textarea id="bio" />
        </div>
        <div className="row">
          <input
            type="checkbox"
            id="signup"
            value="yes"
            onChange={({ target: { value, checked } }) => {
              setSignup(checked ? value : "");
            }}
            checked={checked === "" ? "" : checked}
            // onChange={(e) => setSignup(e.target.value)}
          />
          <label htmlFor="signup">Sign up for email notification</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
