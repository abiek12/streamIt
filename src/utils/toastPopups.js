import { toast } from "react-toastify";

export const popupNotification = (messageType, content) => {
  toast.info(content, {
    position: "top-center",
    theme: "dark",
    type: messageType,
    hideProgressBar: true,
    autoClose: 2000,
  });
};

export const TOAST_TYPE = {
  INFO: "info",
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  DEFAULT: "default",
};
