import Image from "next/image";
const Logo = () => {
    return ( 
        <Image
          height={130}
          width={130}
          alt="Logo"
          src="next.svg"
        />
     );
}
 
export default Logo;