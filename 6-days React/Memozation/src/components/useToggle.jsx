import React from "react";
export function useToggle(init) {
  const [value, setValue] = React.useState(init);

  function toggle() {
    setValue(!value);
  }
  return [value, toggle];
}
