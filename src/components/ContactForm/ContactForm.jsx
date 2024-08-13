import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ClientSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(30, "Too long")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(30, "Too long")
    .required("This field is required"),
});

export default function ContactForm() {
  const name = useSelector((state) => state.contacts.items);
  console.log(name);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ClientSchema}
    >
      <Form>
        <div className={css.box}>
          <div className={css.boxInput}>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.boxInput}>
            <label htmlFor="number">Number</label>
            <Field name="number" type="text" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>

          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
