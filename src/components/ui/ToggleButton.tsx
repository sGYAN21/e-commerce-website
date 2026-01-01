"use client";

import { useColorScheme } from "@mui/material/styles";
import MaterialUISwitch from "./MaterialUISwitch";

export default function ColorModeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  return (
    <MaterialUISwitch
      checked={mode === "dark"}
      onChange={() => setMode(mode === "light" ? "dark" : "light")}
    />
  );
}




