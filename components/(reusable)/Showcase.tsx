export const Showcase = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="glitched-blue-shadow w-full p-2">
      <div className="glitched-pink-shadow w-fit p-1 m-2 mb-4">
        <p className="smoky-pink-text">{title}:</p>
      </div>
      {children}
    </div>
  );
};
