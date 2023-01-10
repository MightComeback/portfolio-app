import { Showcase } from "./(reusable)/Showcase";

const Education = ({ english }: { english: boolean }) => {
  return (
    <Showcase title="Education">
      <div className={`${english ? "quicksand" : "comfortaa"} text-white`}>
        <p className={`${english ? "quicksand" : "comfortaa"}`}>
          <span className="font-semibold">
            {english ? "Computer Science" : "Комп'ютерні науки"}
          </span>{" "}
          -
          {english
            ? " Zaporizhzhya National Technical University"
            : " Запорізький Національний Технічний Університет"}
          <br />
          {english ? "2021 - Current" : "2021 - Зараз"}
        </p>
      </div>
    </Showcase>
  );
};

export default Education;
