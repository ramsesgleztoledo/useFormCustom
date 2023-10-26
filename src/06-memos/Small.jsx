import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log(" I pain my self again :(");

  return <small>{value}</small>;
});

Small.displayName = "Small";
