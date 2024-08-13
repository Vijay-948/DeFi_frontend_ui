import { Link } from "@mui/icons-material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const LoginPage = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [openEmailDialog, setOpenEamilDialog] = useState(false);
  const [openOtpDailog, setOpenDialog] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const emailDialogValues = {
    email: "",
  };

  const OtpDialogValues = {
    otp: "",
  };

  const updatePasswordValues = {
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const validationEmailSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const validationOtpSchema = Yup.object({
    otp: Yup.string().required("OTP is required"),
  });

  const validationUpdatePasswordSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("newPassword")],
        "New password and confirm password must be the same"
      )
      .required("Confirm password is required"),
  });

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {};

  const handleEmailSumbit = () => {};

  const handleOtpVerifySumbit = () => {};

  const handleUpdatePassswordSubmit = () => {};

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
                <button
                  className="text-white no-underline"
                  onClick={() => setOpenEamilDialog(true)}
                >
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
      <Dialog open={openEmailDialog} onClose={() => setOpenEamilDialog(false)}>
        <div className="bg-gray-900">
          <DialogTitle className="text-4xl text-center font-semibold mb-8">
            Enter Your Email
          </DialogTitle>
          <DialogContent className="relative w-[420px] bg-opacity-75 border-2 border-white border-opacity-20 backdrop-blur-3xl shadow-lg text-white rounded-lg p-10 z-10">
            <Formik
              initialValues={emailDialogValues}
              validationSchema={validationEmailSchema}
              onSubmit={handleEmailSumbit}
            >
              {() => (
                <Form>
                  <div className="relative w-full h-full mb-8">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Username"
                      className="w-full h-12 bg-gray-800 bg-opacity-75 border-2 border-white border-opacity-20 rounded-full pl-4 pr-10 text-white placeholder-gray-300"
                    />
                    <AccountCircleIcon className="absolute right-4 top-3.5" />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-red-400 text-bold mt-2"
                    />
                    <DialogActions className="flex justify-between w-full mt-4">
                      <Button onClick={() => setOpenEamilDialog(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Submit</Button>
                    </DialogActions>
                  </div>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default LoginPage;
