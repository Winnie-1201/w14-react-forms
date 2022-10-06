// import { useState, useEffect } from "react";

function Form() {
  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();
  //   const [number, setNumber] = useState();
  //   const [phoneType, setPhoneType] = useState();
  //   const [staff, setStaff] = useState();
  //   const [bio, setBio] = useState();
  //   const [signup, setSignup] = useState();
  //   const [errors, setErrors] = useState([]);

  //   const submit = (e) => {
  //     e.ppreventDefault();

  //     if (errors.length > 0) alert("There is an error!");
  //   };

  return (
    <div>
      <h1>Registration Form</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" />
        </div>
        <div>
          <label htmlFor="number">Phone Number:</label>
          <input id="number" type="text" />
        </div>
        <div>
          <select name="phoneType">
            <option value="" disabled>
              Select a phone type
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor="staff">Staff:</label>
          <div>
            <div>
              <input
                type="radio"
                id="instructor"
                value="instructor"
                name="staff"
                checked
              />
              <label for="instructor">Instructor</label>
            </div>
            <div>
              <input type="radio" id="student" name="staff" value="student" />
              <label for="student">Student</label>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <input id="bio" type="textarea" />
        </div>
        <div>
          <input type="checkbox" id="signup" checked />
          <label for="signup">Sign up for email notification</label>
        </div>
      </form>
    </div>
  );
}

export default Form;
