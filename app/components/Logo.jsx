import Image from "next/image";

const Logo = () => (
  <div className="w-50 h-50">
    <Image src="/polaroid-logo.svg" alt="Logo" width={300} height={300} />
  </div>
);

export default Logo;
