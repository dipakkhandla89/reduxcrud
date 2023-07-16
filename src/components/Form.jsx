import { useState } from "react";
import { addItem } from "../Store/Slices/crudSlice";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");

  const [date, setdate] = useState("");

  const [edit, setedit] = useState(false);
  // const [active, setactive] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleAddItem = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      lastname: lastname,
      mobile: mobile,
      email: email,
      address: address,
      date: date,
      id: Date.now(),
    };
    dispatch(addItem(userData));
    navigate("/")
  };
  return (
    <div>
      <Link to="/">
        <button> Home Page</button>
      </Link>
      <form>
        FirstName :{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter a your FirstName"
          required
          maxLength="50"
        />
        <br />
        <br />
        LastName :{" "}
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          placeholder="Enter a your lastname"
          required
          maxLength="50"
        />
        <br />
        <br />
        Birth Date:{" "}
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setdate(e.target.value)}
          placeholder="Enter a your lastname"
          required
        />
        <br />
        <br />
        Mobile No:{" "}
        <input
          type="number"
          name="mobile"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
          placeholder="Enter a your Mobile Number"
          minLength="10"
          required
        />
        <br />
        <br />
        Email Id :{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter a your Email Id"
          required
        />
        <br />
        <br />
        Address :{" "}
        <textarea
          type="texfield"
          name="address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          placeholder="Enter a your Address"
          required
          maxLength="200"
        />
        <br />
        <br />
        <button onClick={handleAddItem}>Add to list</button>
      </form>
    </div>
  );
};

export default Form;
