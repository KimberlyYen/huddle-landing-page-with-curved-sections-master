import logo from "../assets/logo.svg";
import Button from "../components/Button";

function Nav() {
  return (
    <div className="grid grid-cols-2 py-16 ">
      <img src={logo} alt="logo" className="w-8 h-8" />
      <Button />
    </div>
  );
}

export default Nav;
