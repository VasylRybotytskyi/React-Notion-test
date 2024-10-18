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
          status: {
            name: "",
            value: "",
          },
          department: {
            name: "",
            value: "",
          },
          country: {
            name: "",
            value: "",
          },
        }}
        onSubmit={(values) => {
          console.log(values);
          dispatch(addUser(values));
          closeModal();
        }}
      >
        {({ setFieldValue }) => (
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
              <Field
                name="department.value"
                as="select"
                className={styles.field}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  const selectedDepartment = departments.find(
                    (dep) => dep.value === selectedValue
                  );
                  setFieldValue("department", {
                    name: selectedDepartment?.name || "",
                    value: selectedValue,
                  });
                }}
              >
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
              <Field
                name="country.value"
                as="select"
                className={styles.field}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  const selectedCountry = countries.find(
                    (country) => country.value === selectedValue
                  );
                  setFieldValue("country", {
                    name: selectedCountry?.name || "",
                    value: selectedValue,
                  });
                }}
              >
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
              <Field
                name="status.value"
                as="select"
                className={styles.field}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  const selectedStatus = statuses.find(
                    (status) => status.value === selectedValue
                  );
                  setFieldValue("status", {
                    name: selectedStatus?.name || "",
                    value: selectedValue,
                  });
                }}
              >
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
        )}
      </Formik>
    </>
  );
};

export default ModalForm;
