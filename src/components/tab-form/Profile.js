const Profile = ({ data, setData, errors}) => {
    const {name, age, email} = data;
    const handleInputChange = (e, key) => {
        setData((prev) => ({
            ...prev,
            [key]: e.target.value
        }))
    }
    
  return (
    <div className="profile">
      <div className="input">
        <label>Name: </label>
        <input type="text" onChange={(e) => handleInputChange(e, 'name')} value={name} placeholder="Name" />
        <span className="error-text">{errors.name}</span>
      </div>
      <div className="input">
        <label>Age: </label>
        <input type="number" onChange={(e) => handleInputChange(e, 'age')} value={age} placeholder="Age" />
        <span className="error-text">{errors.age}</span>
      </div>
      <div className="input">
        <label>Email: </label>
        <input type="text" onChange={(e) => handleInputChange(e, 'email')} value={email} placeholder="Email" />
        <span className="error-text">{errors.email}</span>
      </div>
    </div>
  );
};

export default Profile;
