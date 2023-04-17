import logo from "../assets/logo.svg";
import Button from "../components/Button";

function Nav() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>

      <div className="">
        <Button />
      </div>
    </div>
  );
}

export default Nav;
