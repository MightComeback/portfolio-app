import { Showcase } from "./(reusable)/Showcase";

const About = () => {
  return (
    <Showcase title="About Me">
      <div className="text-white font-semibold quicksand">
        <p>
          Hi, my name is{" "}
          <span className="font-bold text-main-neon-blue text-lg">
            Kuznetsov Ivan
          </span>{" "}
          and I am a junior web developer from{" "}
          <span className="font-bold">Ukraine</span>. Currently I'm an
          unemployed{" "}
          <span className="text-main-neon-blue">Computer Science</span> student.
          Seeking for opportunities and job offers. <br className="block" />
        </p>
        <div className="flex justify-between items-center">
          <div className="[&_li]:font-bold">
            <span className="underline decoration-main-neon-blue">I am:</span>
            <ul>
              <li>Inquisitive</li>
              <li>Creative</li>
              <li>Self-conscious</li>
            </ul>
          </div>
          <div className="[&_li]:font-bold">
            <span className="underline decoration-main-neon-blue">
              Languages:
            </span>
            <ul>
              <li>English - Advanced</li>
              <li>Russian - Native</li>
              <li>Ukrainian - Native</li>
            </ul>
          </div>
        </div>
      </div>
    </Showcase>
  );
};

export default About;
