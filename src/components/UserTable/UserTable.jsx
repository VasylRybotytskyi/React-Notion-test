import { useDispatch } from "react-redux";
import styles from "../UserTable/userTable.module.css";
import { MdDelete } from "react-icons/md";
import { deleteUser } from "../../redux/userSlice";

const UserTable = ({ users }) => {
  const dispatch = useDispatch();

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
        {users?.map(({ id, name, department, country, status }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{department?.name}</td>
            <td>{country.name}</td>
            <td>{status.name}</td>
            <td>
              <button onClick={() => dispatch(deleteUser(id))}>
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
