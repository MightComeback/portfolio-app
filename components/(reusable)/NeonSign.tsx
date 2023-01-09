const NeonSign = ({
  className,
  label,
}: {
  className?: string;
  label: string;
}) => {
  return (
    <div className={`absolute z-0 ${className}`}>
      <h1 className="neon-sign">{label}</h1>
    </div>
  );
};

export default NeonSign;
