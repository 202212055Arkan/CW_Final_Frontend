import React, { useState } from "react";
import "../CSS/forgetPassword.css";
import emailjs from "emailjs-com";

const ForgetPasswordPage = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const submitData = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="contactus-section1">
        <div className="container1">
          <div className="row">
            <div className="contact-leftside1 col-12 col-md-6">
              <div className="background-image">
                {/* <img
                  src="https://res.cloudinary.com/dofftzsmf/image/upload/v1689516021/Untitled_design_mnezki.svg"
                  alt="contactUsImg"
                /> */}
              </div>
            </div>
            <div className="contact-rightside1 col-12 col-md-6">
              <form onSubmit={submitData}>
                <div className="row">
                  <h1 className="mb-6 contact-heading1">Forget Password?</h1>
                  <div className="col-12 contact-input-feild1">
                    <input
                      type="text"
                      name="forgetPassword"
                      id="firstName"
                      className="form-control contact-input"
                      placeholder="Enter Your Email ID"
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        margin: "50px auto",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        border: "1px solid #000",
                        borderRadius: "4px",
                        padding: "12px 20px",
                        resize: "vertical",
                      }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="mt-5 btn btn-style1"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "20px auto",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                        cursor: "pointer",
                        width: "200px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPasswordPage;
