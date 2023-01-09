import { Icons } from "../utils/icons";
import Image from "next/image";
import { Showcase } from "./(reusable)/Showcase";

const Technologies = () => {
  return (
    <Showcase title="Technologies">
      <section className="grid grid-cols-5 gap-4 p-2">
        {Icons.map((icon, id) => (
          <div key={id} className="flex flex-col items-center">
            <div className="h-[3rem] w-[3rem]">
              <Image
                className=""
                src={icon.image}
                alt={icon.name}
                width={48}
                height={48}
              />
            </div>
            <p className="text-white font-light quicksand">{icon.name}</p>
          </div>
        ))}
      </section>
    </Showcase>
  );
};

export default Technologies;
