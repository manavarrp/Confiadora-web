import React from "react";
import { NewspaperIcon, DocumenttextIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex mt-2 gap-4">
      <NewspaperIcon className="h-10 w-10" color={"#477EFA"} />
      <p className="text-darkBlue text-3xl mb-8 font-bold flex">
        Formulario Persona Física
      </p>
    </div>
  );
};

export default Header;
