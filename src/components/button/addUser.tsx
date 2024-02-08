import { addUser, userIsLegal } from "../../service/questionnaire";
import { useEffect } from "react";

function AddUserButton() {
    useEffect(() => {
        userIsLegal("09123").then((res) => {
            console.log(res);
        })
    })
  const handleClick = async () => {
    const phoneNumber = ["09123", "09456"]
    await addUser(phoneNumber);
  };
  return <button className="btn btn-primary" onClick={handleClick}>Add User</button>;
}

export default AddUserButton;
