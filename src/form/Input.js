import React, { useState } from "react";
import classNames from "classnames";

export const Input = ({
  component: Component = "input",
  label,
  containerClassName,
  ...rest
}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={classNames(containerClassName, {
        focus: isFocused,
      })}
    >
      <Component
        {...rest}
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          if (event.target.value === "") {
            setFocused(false);
          }
        }}
      />
      <label htmlFor="">{label}</label>
      {isFocused ? (
        <span className="spanLabel">{label}</span>
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
};
