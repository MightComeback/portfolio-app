import Image from "next/image";
import { useStateContext } from "../../contexts/ContextProvider";

export default function ImageHolder({
  className,
  image,
}: {
  className: string;
  image: string;
}) {
  return (
    <div className={`lg:block hidden absolute z-0 ${className}`}>
      <Image src={image} alt="retro-image" width={200} height={240} />
    </div>
  );
}
