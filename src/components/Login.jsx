import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import imgLogo from "../images/logoo.2f5c9baf.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("خطأ في كتابة الايميل")
      .required("هذا الحقل مطلوب"),
    password: Yup.string()
      .min(3, "أعد كتابة الرقم السري")
      .required("هذا الحقل مطلوب"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // Your login logic here
    console.log("Login data:", values);
    resetForm();
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between gap-5 bg-no-repeat p-4 md:bg-[url('../public/auth-bg.22907c93.png')] md:p-12 formSection">
        <nav className="flex w-full">
          <img src={imgLogo} alt="Logo" className="me-auto" />
        </nav>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex w-full flex-col items-center rounded-[10px] bg-transparent pb-8 pe-8 ps-3 pt-8 shadow-[0_0_10px_0_rgba(8,143,196,0.25)] md:w-[500px] md:px-12 md:pb-12 md:pt-16 mx-auto space-y-3">
              <h1 className="md:mb-16 mb-10 text-center text-[27px] font-bold text-[#088FC4] md:text-[40px]">
                تسجيل الدخول
              </h1>
              <div className="flex flex-col w-full">
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`border-[#088FC4] placeholder:text-[#98A2B3] min-h-[50px] w-full rounded-[10px] border px-3 text-[16px] outline-none md:min-h-[60px] md:text-[20px] ${
                    touched.email && errors.email ? "border-red-500" : ""
                  }`}
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col w-full relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className={`border-[#088FC4] placeholder:text-[#98A2B3] min-h-[50px] w-full rounded-[10px] border px-3 text-[16px] outline-none md:min-h-[60px] md:text-[20px] ${
                    touched.password && errors.password ? "border-red-500" : ""
                  }`}
                  placeholder="أدخل كلمة المرور"
                />
                <i
                  id="passwordIcon"
                  onClick={togglePasswordVisibility}
                  className={`fa-solid fa-${
                    showPassword ? "eye-slash" : "eye"
                  } text-[#088FC4] absolute translate-y-[140%] left-5 cursor-pointer`}
                ></i>
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>

              <div className="flex w-full">
                <a className="w-fit text-[#088FC4] underline me-auto mb-20">
                  هل نسيت كلمة المرور؟
                </a>
              </div>
              
              <div className="w-full">
                <Link to="/homeservices">
                  <button
                    type="submit"
                    className="false min-h-[50px] w-full rounded-[10px] bg-[#088FC4] text-center text-[16px] text-white disabled:cursor-not-allowed disabled:opacity-50 md:min-h-[60px] md:text-[20px]"
                  >
                    تسجيل الدخول
                  </button>
                </Link>
                <div className="mt-3 flex items-center justify-center">
                  <a className="text-[#088FC4] underline">إنشاء حساب جديد</a>
                  <span>ليس لديك حساب؟</span>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <Footer />
      </div>
    </>
  );
};

export default Login;
