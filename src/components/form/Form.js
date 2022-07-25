import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";

const Form = ({ inputs, handleChange, createUser }) => {
  console.log(inputs);
  return (
    <div className="container col-3">
      <div className="d-flex flex-column">
        <h2 className="w-100 mb-4 display-6 bg-white text-primary">
          Cerenity Design
        </h2>
        <h3 className="bg-white">Add Contact</h3>
        <div className=" bg-white p-2">
          <div className="d-flex flex-start m-2 align-items-center border border-dark">
            <FaUserAlt className="mx-2" />
            <input
              className="w-100 m-1 border-0 outline-0 "
              type="text"
              name="name"
              value={inputs.name}
              placeholder="Name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="d-flex flex-start m-2 align-items-center border border-dark">
            <AiOutlinePhone className="mx-2" />
            <input
              className="w-100 m-1 border-0 outline-0"
              type="text"
              name="pnumber"
              value={inputs.pnumber}
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="m-2">
            <select
              className="w-100"
              name="gender"
              id="gender"
              value={inputs.gender}
              onChange={handleChange}
            >
              <option disabled selected defaultValue="Gender">
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="m-2">
            <button className="w-100" type="submit" onClick={createUser}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
