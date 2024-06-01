import  { useState } from 'react';
import { OtpVerifyRequest } from '../API/Api';
import { getEmail } from '../Helper/SessionHepler';
import { useNavigate } from 'react-router-dom';
import VerificationInput from "react-verification-input";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if(otp.length == 6){
      OtpVerifyRequest(getEmail(),otp)
      .then((result) => {
          if(result === true) {
            navigate("/create-new-password")
          }
          else {
            setOtpError("Invalid OTP")
          }
        })
    }else{
      setOtpError("please enter 6 digits otp")
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm">
        <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <h2 className="block text-gray-700 text-lg font-bold mb-2 text-center">OTP Verification</h2>
          </div>
          <div className="w-[500px] mb-5">

            <VerificationInput onChange={(e)=> setOtp(e)} validChars="0-9"  />
            <p className="text-red-500">{otpError}</p>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerify;