import NeonSign from "./(reusable)/NeonSign";
import { Showcase } from "./(reusable)/Showcase";

const About = ({ english }: { english: boolean }) => {
  return (
    <Showcase title="About Me">
      <div
        className={`relative text-white font-semibold ${
          english ? "quicksand" : "comfortaa"
        }`}
      >
        <p>
          {english ? "Hi, my name is" : "Привіт, мене звуть"}{" "}
          <span className="font-bold text-main-neon-blue text-lg">
            {english ? "Kuznetsov Ivan" : "Кузнецов Іван"}
          </span>{" "}
          {english ? "and I am a web developer from" : "і я Веб Розробник з"}{" "}
          <span className="font-bold">{english ? "Ukraine" : "України"}</span>.{" "}
          {english
            ? "Currently I'm an unemployed"
            : "На цей момент я не працюю, і являюся"}{" "}
          <span className="text-main-neon-blue">
            {english
              ? "Computer Science student. "
              : "студентом Номп'ютерних Наук. "}
          </span>
          {english
            ? "Seeking for opportunities and job offers."
            : "Шукаю пропозиції."}{" "}
          <br className="block" />
        </p>
        <div className="flex justify-between items-center">
          <div className="[&_li]:font-bold">
            <span className="underline decoration-main-neon-blue">
              {english ? "I am:" : "Я:"}
            </span>
            <ul>
              <li>{english ? "Inquisitive" : "Допитливий"}</li>
              <li>{english ? "Adaptive" : "Адаптивний"}</li>
              <li>{english ? "Self-critical" : "Самокритичний"}</li>
            </ul>
          </div>
          <div className="[&_li]:font-bold">
            <span className="underline decoration-main-neon-blue">
              {english ? "Languages:" : "Мови"}
            </span>
            <ul>
              <li>{english ? "English - Advanced" : "Англійська - Вільна"}</li>
              <li>{english ? "Ukrainian - Native" : "Українська - Рідна"}</li>
              <li>{english ? "Russian - Native" : "Російська - Рідна"}</li>
            </ul>
          </div>
        </div>
        <NeonSign className="text-4xl -top-[30%] right-0" label="dev" />
      </div>
    </Showcase>
  );
};

export default About;
