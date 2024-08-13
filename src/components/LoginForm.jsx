import { Field, Formik, Form, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../redux/auth/operations";

import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(8, "Password must be at least 8 characters!")
      .max(50, "Password must be at most 50 characters!"),
  });

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        <Form>
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
          <div className="flex flex-col mb-10">
            <label htmlFor="password" className="font-semibold text-sm">
              Password
            </label>
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
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        {`Don't have an account?`} <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
