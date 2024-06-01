import { useState } from "react";
import { EmailVerifyRequest } from "../API/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!email) {
      toast.error("Email is required");
    } else {
      EmailVerifyRequest(email)
        .then((result) => {
          if (result === true) {
            toast.success("OTP sent successfully");
            navigate('/otp-verify'); // Navigate to OTP verification page
          } else {
            toast.error("User not found");
          }
        })
        .catch((error) => {
          toast.error("An error occurred");
        });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-40 pt-10 pb-8 mb-4"
        onSubmit={handleSubmit} // Attach handleSubmit to form's onSubmit event
      >
        <h2 className="text-2xl mb-4 text-center font-bold">Forgot Password</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email" // Change the input type to email for better validation
            placeholder="Enter your email"
            value={email} // Bind the input value to the email state
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" // Ensure the button type is submit
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
