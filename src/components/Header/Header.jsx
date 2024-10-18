import { NavLink } from "react-router-dom";
import styles from "../Header/header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.button} ${styles.active}` : styles.button
          }
          end
          to="/"
        >
          Edit Users
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.button} ${styles.active}` : styles.button
          }
          to="/users"
        >
          Users
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
