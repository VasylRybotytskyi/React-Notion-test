import { Formik, Field, Form } from "formik";
import departments from "../../data/departments.json";
import countries from "../../data/countries.json";
import statuses from "../../data/statuses.json";
import styles from "./ModalForm.module.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

const ModalForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={styles.heading}>User Add</h2>
      <Formik
        initialValues={{
          name: "",
          status: "",
          department: "",
          country: "",
        }}
        onSubmit={(values) => {
          dispatch(addUser(values));
        }}
      >
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>
              First Name
            </label>
            <Field
              id="firstName"
              name="name"
              placeholder="Jane"
              className={styles.field}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="department" className={styles.label}>
              Department
            </label>
            <Field name="department" as="select" className={styles.field}>
              <option value="">Select Department</option>
              {departments.map(({ id, name, value }) => (
                <option key={id} value={value}>
                  {name}
                </option>
              ))}
            </Field>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="country" className={styles.label}>
              Country
            </label>
            <Field name="country" as="select" className={styles.field}>
              <option value="">Select Country</option>
              {countries.map(({ id, name, value }) => (
                <option key={id} value={value}>
                  {name}
                </option>
              ))}
            </Field>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="status" className={styles.label}>
              Status
            </label>
            <Field name="status" as="select" className={styles.field}>
              {statuses.map(({ id, name, value }) => (
                <option key={id} value={value}>
                  {name}
                </option>
              ))}
            </Field>
          </div>

          <div className={styles.buttonContainer}>
            <button
              onClick={closeModal}
              type="button"
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button type="submit" className={styles.button}>
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default ModalForm;
