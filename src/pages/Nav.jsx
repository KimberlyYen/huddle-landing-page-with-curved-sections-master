import { ReactComponent as Logo } from "../assets/logo.svg";

import Button from "../components/Button";

function Nav() {
  return (
    <div className="flex">
      <div className=" w-24 text-[#FF51BF] lg:w-48">
        <Logo />
      </div>

      <div className="ml-auto">
        <Button />
      </div>
    </div>
  );
}

export default Nav;
