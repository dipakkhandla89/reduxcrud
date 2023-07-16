import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Homepage from "./components/Homepage";
import EditForm from "./components/EditForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add" element={<Form />} />
      <Route path="/edit/:id" element={<EditForm />} />
    </Routes>
  );
};

export default App;
