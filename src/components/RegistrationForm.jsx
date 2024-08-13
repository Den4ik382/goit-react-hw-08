import { Field, Formik, Form, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/auth/operations";

import * as Yup from "yup";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const registrationValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required!")
      .min(3, "Too short!")
      .max(50, "Name must be at most 50 characters!")
      .test(
        "trim",
        "Name cannot be only spaces!",
        (value) => value.trim() !== ""
      ),
    email: Yup.string().email("Invalid email!").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(8, "Password must be at least 8 characters!")
      .max(50, "Password must be at most 50 characters!"),
  });

  return (
    <div>
      <h2>Registration</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={registrationValidationSchema}
      >
        <Form>
          <div>
            <label htmlFor="name">Username</label>
            <div>
              <Field
                name="name"
                id="name"
                type="text"
                placeholder="Type your username"
              />
            </div>
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Type your email"
              />
            </div>
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <Field
                name="password"
                id="password"
                type="password"
                placeholder="Type your password"
              />
            </div>
            <ErrorMessage name="password" component="span" />
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
