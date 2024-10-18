import { Formik, Field, Form } from "formik";
import countries from "../../data/countries.json";
import departments from "../../data/departments.json";
import statuses from "../../data/statuses.json";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice";
import styles from "./editForm.module.css"; // Імпорт стилів

const EditForm = ({ selectedUser }) => {
  const { id, name, department, country, status } = selectedUser;

  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: name,
        department: {
          name: department.name,
          value: department.value,
        },
        country: {
          name: country.name,
          value: country.value,
        },
        status: {
          name: status.name,
          value: status.value,
        },
      }}
      enableReinitialize
      onSubmit={(values) => {
        console.log(values);
        dispatch(updateUser({ id: id, ...values }));
      }}
    >
      {({ resetForm, setFieldValue }) => (
        <Form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Full Name
            </label>
            <Field
              className={styles.field}
              id="name"
              name="name"
              placeholder="Jane Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="department">
              Department
            </label>
            <Field
              className={styles.field}
              name="department.value"
              as="select"
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
              {departments.map(({ id, name, value }) => (
                <option key={id} value={value}>
                  {name}
                </option>
              ))}
            </Field>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="country">
              Country
            </label>
            <Field
              className={styles.field}
              name="country.value"
              as="select"
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
              {countries.map(({ id, name, value }) => (
                <option key={id} value={value}>
                  {name}
                </option>
              ))}
            </Field>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="status">
              Status
            </label>
            <Field
              className={styles.field}
              name="status.value"
              as="select"
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
              type="button"
              className={styles.cancelButton}
              onClick={() => resetForm()}
            >
              Undo
            </button>
            <button type="submit" className={styles.button}>
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
