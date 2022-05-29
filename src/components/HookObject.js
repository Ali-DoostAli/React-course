import { useState } from "react";

const HookObject = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const firstNameHandler = (e) => {
    setUser({ ...user, firstName: e.target.value });
  };

  const lastNameHandler = (e) => {
    setUser({ ...user, lastName: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        onChange={firstNameHandler}
        placeholder="FirstName"
        value={user.firstName}
      />
      <input
        type="text"
        onChange={lastNameHandler}
        placeholder="FirstName"
        value={user.lastName}
      />
      <h2>my FirstName is {user.firstName}</h2>
      <h2>my LastName is {user.lastName}</h2>
    </div>
  );
};

export default HookObject;
