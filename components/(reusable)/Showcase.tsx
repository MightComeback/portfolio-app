export const Showcase = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="glitched-blue-shadow w-full p-2 overflow-hidden z-20">
      <div className="bg-main-neon-pink glitched-pink-shadow w-fit p-1 m-2 mb-4 z-20">
        <h2 className="smoky-pink-text">{title}:</h2>
      </div>
      {children}
    </div>
  );
};
