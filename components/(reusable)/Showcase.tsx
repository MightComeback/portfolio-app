export const Showcase = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="glitched-blue-shadow w-full p-2 overflow-hidden">
      <div className="glitched-pink-shadow w-fit p-1 m-2 mb-4">
        <h2 className="smoky-pink-text">{title}:</h2>
      </div>
      {children}
    </div>
  );
};
