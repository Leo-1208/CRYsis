import cryptohubLogo from "@/public/logo.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex gap-2 px-4 mb-12 justify-center items-center">
      <Image src={cryptohubLogo} width={72} alt="CRYsis" priority />
      <div className="flex flex-col">
      <span className="text-2xl font-extrabold">CRYsis</span>
      <span className="text-[12px] italic">@ Shreyash</span>
      </div>
    </div>
  );
};

export const MobileHeader = () => {
  return (
    <div className="flex px-4">
      <Image src={cryptohubLogo} width={24} alt="CRYsis" priority />
      <span className="text-sm font-extrabold">CRYsis</span>
    </div>
  );
};
