import { Formik, Field, Form } from "formik";
import countries from "../../data/countries.json";
import departments from "../../data/departments.json";
import statuses from "../../data/statuses.json";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice";

const EditForm = ({ selectedUser }) => {
  const { id, name, department, country, status } = selectedUser;
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: name,
        department: department.value,
        country: country.value,
        status: status.value,
      }}
      enableReinitialize
      onSubmit={(values) => {
        dispatch(updateUser({ id: id, ...values }));
      }}
    >
      {({ resetForm }) => (
        <Form>
          <div>
            <label htmlFor="name">Full Name</label>
            <Field id="name" name="name" placeholder="Jane Doe" />
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <Field name="department" as="select">
              {departments.map(({ id, name, value }) => (
                <option key={id} value={value}>
                  {name}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <Field name="country" as="select">
              {countries.map(({ id, name, value }) => (
                <option key={id} value={value}>
                  {name}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <Field name="status" as="select">
              {statuses.map(({ id, name, value }) => (
                <option key={id} value={value}>
                  {name}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <button type="button" onClick={() => resetForm()}>
              Undo
            </button>
            <button type="submit">Save</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
