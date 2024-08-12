import { Password } from "@mui/icons-material";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const LoginPage = () => {
  const [loader, setLoader] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("password is required"),
  });

  const handleSubmit = () => {};

  return (
    <div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <h1 className="text-4xl text-center font-semibold">Login</h1>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
