import { useState } from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;
  const [settingList, setSettingList] = useState(["dark", "light"]);

  const handleSettingsChange = (e) => {
    setData((prev) => ({
        ...prev,
        theme: e.target.name
    }))
  };

  return (
    <div className="settings">
      {settingList.map((item, index) => (
        <div className="input" key={index}>
          <label>{item}</label>
          <input
            type="radio"
            name={item}
            checked={theme === item}
            onChange={handleSettingsChange}
          />
        </div>
      ))}
    </div>
  );
};

export default Settings;
