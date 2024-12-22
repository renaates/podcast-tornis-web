import React, { useState, forwardRef } from "react";
import classNames from "classnames";

export const InputWrapper = forwardRef(({ component: Component = "input", label, containerClassName, error, ...rest }, ref) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <div
      className={classNames(containerClassName, {
        focus: isFocused,
        error: !!error
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
        className={classNames("input", { error: !!error })}
        ref={ref}
      />
      <label htmlFor="">{label}</label>
      {isFocused ? <span className="spanLabel">{label}</span> : <span>{label}</span>}
    </div>
  );
});
