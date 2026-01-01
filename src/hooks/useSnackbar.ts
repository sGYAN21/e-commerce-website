// /hooks/useSnackbar.ts
"use client";

import { useState } from "react";

export default function useSnackbar() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "info" | "warning" | "error"
  >("success");

  const showSnackbar = (
    text: string,
    type: "success" | "info" | "warning" | "error" = "success"
  ) => {
    setMessage(text);
    setSeverity(type);
    setOpen(true);
  };
  const closeSnackbar = () => setOpen(false);

  return { open, message, severity, showSnackbar, closeSnackbar };
}
