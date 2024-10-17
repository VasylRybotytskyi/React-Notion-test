import { useState } from "react";
import countries from "../../data/countries.json";
import departments from "../../data/departments.json";
import statuses from "../../data/statuses.json";
import styles from "../UserModal/userModal.module.css";

const UserModal = ({ usersData, setUsersData }) => {
  const [input, setInput] = useState("");
  const [department, setDepartment] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: input,
      department,
      country,
      status,
    };
    setUsersData([...usersData, newUser]);
    setInput("");
    setDepartment("");
    setCountry("");
    setStatus("");
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Full Name"
            required
            className={styles.input}
          />
          <select
            value={department}
            onChange={handleDepartmentChange}
            className={styles.select}
          >
            <option value="">Select Department</option>
            {departments.map(({ value, name }, index) => (
              <option key={index} value={value}>
                {name}
              </option>
            ))}
          </select>
          <select
            value={country}
            onChange={handleCountryChange}
            className={styles.select}
          >
            <option value="">Select Country</option>
            {countries.map(({ value, name }, index) => (
              <option key={index} value={value}>
                {name}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={handleStatusChange}
            className={styles.select}
          >
            {statuses.map(({ name, value }, index) => (
              <option value={value} key={index}>
                {name}
              </option>
            ))}
          </select>
          <button type="submit" className={styles.button}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
