import React from "react";
import Input from "./input";

export const Checkbox = ({ children, error, label, ...props }) => {
  return (
    <>
      <div className="flex gap-0 items-center">
        <Input {...props} />
        {label ? <label>{label}</label> : children}
      </div>
      {Boolean(error) && <span className="text-red">{error}</span>}
    </>
  );
};
