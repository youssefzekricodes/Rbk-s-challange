import * as React from "react";
import  { ReactElement } from "react";

export default function LayoutFragment({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return <>{children}</>;
}
