import { toast } from "react-toastify";

export const popupNotification = (messageType, content) => {
  toast.info(content, {
    position: "top-center",
    theme: "dark",
    type: messageType,
  });
};

export const TOAST_TYPE = {
  INFO: "info",
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
  DEFAULT: "default",
};
