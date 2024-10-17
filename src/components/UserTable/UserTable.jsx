import styles from "../UserTable/userTable.module.css";
import { MdDelete } from "react-icons/md";

const UserTable = ({ usersData, deleteUser }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">FullName</th>
          <th scope="col">Department</th>
          <th scope="col">Country</th>
          <th scope="col">Status</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {usersData?.map(({ name, department, country, status }, index) => (
          <tr key={index}>
            <td>{name}</td>
            <td>{department.name}</td>
            <td>{country.name}</td>
            <td>{status.name}</td>
            <td>
              <button onClick={() => deleteUser(index)}>
                <MdDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
