import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();

  const initialvalues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
  });

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = () => {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gray-900">
      <div className="w-96 bg-transparent border-2 border-white border-opacity-20 backdrop-blur-md shadow-lg text-white rounded-lg p-8">
        <Formik
          initialValues={initialvalues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <h1 className="text-3xl text-center font-bold mb-6">Sign Up</h1>
              <div className="relative w-full h-12 mb-8">
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <AccountCircleIcon className="absolute right-4 top-3.5" />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  name={showPassword ? "text" : "password"}
                  type="password"
                  placeholder="Password"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                {showPassword ? (
                  <VisibilityOff
                    className="absolute right-4 top-3.5 cursor-pointer"
                    onClick={passwordVisibility}
                  />
                ) : (
                    <Visibility
                      className="absolute right-4 top-3.5 cursor-pointer"
                      onClick={passwordVisibility}
                    />
                )}
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-1/2 h-12 flex bg-red-900 justify-center items-center mx-auto bg-whtie text-white-800 font-bold rounded-full hover:bg-blue-900 hover:text-white"
              >
                sign Up
              </button>
              <div className="text-center mt-6">
                <p>
                  Already have an account?
                  {/* <Link to="/login">Login</Link> */}
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {loading && (
        <div className="fixed bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
          <RotatingLines
            strokeColor="gray"
            strokeWidth="6"
            animationDuration="0.47"
            width="96"
          />
        </div>

      )}
    </div>
  );
};

export default Register;
