import Toastify from "toastify-js";

export const toast = (text, mode = "error") => {
  Toastify({
    text,
    duration: 3000,
    close: true,
    style: {
      background: mode === "success" ? "green" : "red",
      fontSize: "18px",
      fontWeight: "600",
      borderRadius: "10px",
    },
  }).showToast();
};
