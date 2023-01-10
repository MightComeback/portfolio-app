import { Showcase } from "./(reusable)/Showcase";

const Skills = ({ english }: { english: boolean }) => {
  return (
    <Showcase title="Soft Skills">
      <div className="flex justify-between items-center">
        <div
          className={`flex flex-col ${
            english ? "quicksand" : "comfortaa"
          } [&_p]:pl-4 text-white gap-1`}
        >
          <div className="relative h-full w-full">
            <p>{english ? "Teamwork" : "Робота в команді"}</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <p>{english ? "Problem-solving" : "Вирішення задач"}</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <p>{english ? "Self-development" : "Саморозвиток"}</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <p>{english ? "Confidence" : "Впевненість"}</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="relative h-full w-full mb-2">
            <p>{english ? "Flexibility" : "Гнучкість"}</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[80%]"></div>
            </div>
          </div>
        </div>
      </div>
    </Showcase>
  );
};

export default Skills;
