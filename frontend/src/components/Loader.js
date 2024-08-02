import logo from "../../public/loader.svg";
import symbol from "../../public/equal.svg";
import Image from "next/image";

export default function Loader() {
  return (
    <>
      <Image
        className="m-96 animate-spin h-auto w-auto"
        src={logo}
        alt="New wave storage"
      />
      <Image
        className="absolute m-96 h-auto w-auto"
        src={symbol}
        alt="Main logo"
      />
    </>
  );
}
