import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDeleted } from "../Store/Slices/crudSlice";

const Homepage = () => {
  const data = useSelector((state) => {
    return state.crud;
  });
  console.log(data);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(userDeleted(id));
  };

  return (
    <div>
      <Link to="/add">
        <button>Add Item</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>lastname</th>
            <th>Date</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Address</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.date}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                  <Link to={"/edit/" + item.id}>
                    <button>Edit</button>
                  </Link>
                  {"  "}

                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
