import React from "react";

export const OldSign = ({
  label,
  classNameInner,
  classNameOuter,
}: {
  label: string;
  classNameInner?: string;
  classNameOuter?: string;
}) => {
  return (
    <div
      className={`hidden lg:block absolute border-2 border-black z-0 ${classNameInner}`}
    >
      <div className={`flex items-center justify-center ${classNameOuter}`}>
        <h4 className="uppercase press-start">{label}</h4>
      </div>
    </div>
  );
};
