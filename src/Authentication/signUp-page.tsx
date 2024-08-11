
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Register = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialvalues = {
    firstName: "",
    lastName: '',
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  })

  const handleSubmit = () => {

  }


  return (
    <div>
      <div>
        <Formik
          initialValues={initialvalues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              
            </Form>
            
          )}
        </Formik>
      </div>
   </div>
  );
};

export default Register;
