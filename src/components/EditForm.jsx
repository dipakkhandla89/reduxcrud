import { useState } from "react";
import { addItem, editItem } from "../Store/Slices/crudSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const EditForm = () => {
  const getAllData = useSelector((state) => {
    return state.crud;
  });
  const paramid = useParams();
  const getresult = getAllData.filter((a) => a.id == paramid.id)[0];

  const [name, setname] = useState(getresult.name);
  const [lastname, setlastname] = useState(getresult.lastname);
  const [mobile, setmobile] = useState(getresult.mobile);
  const [email, setemail] = useState(getresult.email);
  const [address, setaddress] = useState(getresult.address);

  const [date, setdate] = useState(getresult.date);

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editItem({ name, lastname, address, date, email, mobile,id:paramid.id }));
    console.log(name, lastname, address, date, email, mobile);
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
        <button onClick={handleEdit}>Edit</button>
      </form>
    </div>
  );
};

export default EditForm;
