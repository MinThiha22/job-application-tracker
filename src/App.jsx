import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Analytics from "./pages/Analytics";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
// import DonutChart from "./components/DonutChart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/applications" element={<Applications />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
