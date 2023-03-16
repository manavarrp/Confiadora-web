import Image from "next/image";
import confiadora from "../../public/confiadora.png";

function logo() {
  return (
    <div className="flex justify-center pb-2 gap-1">
      <picture>
        <Image width={30} height={30} src={confiadora} alt="confiadora" />
      </picture>
      <span className="text-darkBlue text-3xl font-bold text-center">
        {" "}
        confiadora
      </span>
    </div>
  );
}

export default logo;
