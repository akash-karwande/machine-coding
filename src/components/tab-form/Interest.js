import { useState } from "react";

const Interest = ({ data, setData, errors }) => {
  const { interest } = data;
  const [interestList, setInterestList] = useState([
    "coding",
    "music",
    "reading",
    "gaming",
  ]);

  const handleInterestChange = (e) => {
    setData((prev) => ({
      ...prev,
      interest: e.target.checked
        ? [...prev.interest, e.target.name]
        : prev.interest.filter((i) => i !== e.target.name)
    }));
  };
  return (
    <div className="interest">
      {interestList.map((item, index) => (
        <div key={index} className="input">
          <label>{item}</label>
          <input
            type="checkbox"
            name={item}
            checked={interest.includes(item)}
            onChange={handleInterestChange}
          />
        </div>
      ))}
      <span className="error-text">{errors.interest}</span>
    </div>
  );
};

export default Interest;
