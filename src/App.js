import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Auth />} />
        <Route path="auth" element={<Auth />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
