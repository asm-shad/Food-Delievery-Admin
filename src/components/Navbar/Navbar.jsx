import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1 className="logo">DelishDoor</h1>
        <p className="admin">Admin Panel</p>
      </div>
      <img src={assets.profile_image} className="profile" alt="" />
    </div>
  );
};

export default Navbar;
