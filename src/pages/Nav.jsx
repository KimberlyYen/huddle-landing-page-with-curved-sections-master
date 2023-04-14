import logo from "../assets/logo.svg";
import Button from "../components/Button";

function Nav() {
  return (
    <div className="grid grid-cols-2 py-8 ">
      <img src={logo} alt="logo w-4" />
      <Button />
    </div>
  );
}

export default Nav;
