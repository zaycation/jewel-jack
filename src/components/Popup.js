import React, { useEffect } from "react";
import Swal from "sweetalert2";

export default function Popup() {
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    let pop_status = localStorage.getItem("pop_status");
    if (!pop_status) {
      setVisible(true);
      localStorage.setItem("pop_status", 1);
    }
  }, []);
  if (!visible) return null;
  Swal.fire({
    title: "Instructions",
    text: "Popup",
    showDenyButton: false,
    confirmButtonText: `Play!`,
  });
  return null;
}
