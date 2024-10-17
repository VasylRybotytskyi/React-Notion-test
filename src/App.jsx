import { Route, Routes } from "react-router-dom";
import EditUser from "./pages/EditUser";
import Users from "./pages/Users";
import Layout from "./Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<EditUser />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default App;
