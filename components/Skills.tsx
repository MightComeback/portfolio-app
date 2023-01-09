import { Showcase } from "./(reusable)/Showcase";

const Skills = () => {
  return (
    <Showcase title="Soft Skills">
      <div className="flex justify-between items-center">
        <div className="flex flex-col quicksand [&_p]:pl-4 text-white gap-1">
          <div className="relative h-full w-full">
            <p>Teamwork</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <p>Problem-solving</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <p>Self-development</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[85%]"></div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <p>Confidence</p>
            <div className="bg-white absolute left-4 rounded-full h-[0.25rem] w-[8rem]">
              <div className="bg-[var(--blue-neon)] h-[0.25rem] rounded-full w-[80%]"></div>
            </div>
          </div>
          <div className="relative h-full w-full mb-2">
            <p>Learning</p>
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
