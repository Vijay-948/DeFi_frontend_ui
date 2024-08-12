import { Link} from "@mui/icons-material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = () => {};

  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden bg-gray-900">
      <div className="relative w-[420px] bg-opacity-75 border-2 border-white border-opacity-20 backdrop-blur-3xl shadow-lg text-white rounded-lg p-10 z-10">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
              <div className="relative w-full h-12 mb-8">
                <Field
                  type="email"
                  name="email"
                  placeholder="Username"
                  className="w-full h-full bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                />
                <AccountCircleIcon className="absolute right-4 top-3.5" />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-400 text-bold mt-2"
                />
              </div>
              <div className="relative w-full h-12 mb-8">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
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
                  className="text-red-400 text-bold mt-2"
                />
              </div>
              <div className="flex justify-between text-bold mb-8 text-gray-900">
                <button  className="text-white no-underline">
                  Forgot Password?
                </button>
              </div>
              <button
                type="submit"
                className="w-1/2 h-12 bg-white text-gray-800 rounded-full mx-auto block text-lg font-semibold hover:bg-blue-900 hover:text-white"
              >
                Login
              </button>
              <div className="text-center mt-12 text-lg">
                <p>
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-white font-semibold no-underline hover:text-red-600"
                  >
                    Register
                  </a>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
