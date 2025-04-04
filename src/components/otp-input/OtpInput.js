import './otpinput.css';
import { useEffect, useRef, useState } from "react";

const OtpInput = () => {
  const OTP_SIZE = 5;
  const [inputsArr, setinputsArr] = useState(new Array(OTP_SIZE).fill(''));
  const inputRefArr = useRef([]);

  const handleOTPChange = (value, index) => {
    if (isNaN(value)) return;
    const newArr = [...inputsArr];
    const newValue = value.trim();
    newArr[index] = newValue.slice(-1);
    setinputsArr(newArr);
    newValue && inputRefArr.current[index + 1]?.focus();
  };

  const handleOTPKeyDown = (e, index) => {
    if(!e.target.value && e.key == "Backspace") {
        inputRefArr.current[index -1]?.focus();
    }
  }

  useEffect(()=>{
    inputRefArr.current[0].focus();
  }, [])

  return (
    <div className="otp-input-container">
      <h1>Validate OTP</h1>
      {inputsArr.map((item, index) => (
        <input
        className="input-item"
          ref={(currentInput) => (inputRefArr.current[index] = currentInput)}
          key={index}
          value={item}
          onChange={(e) => handleOTPChange(e.target.value, index)}
          onKeyDown={(e) => handleOTPKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
