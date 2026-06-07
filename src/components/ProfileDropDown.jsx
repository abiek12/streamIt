import {
  PencilIcon,
  QuestionIcon,
  UserIcon,
  UserSwitchIcon,
} from "@phosphor-icons/react";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { popupNotification, TOAST_TYPE } from "../utils/toastPopups";
import { useTranslation } from "react-i18next";

export const ProfileDropDown = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Abhishek",
    },
    {
      id: 2,
      name: "Arav",
    },
    {
      id: 3,
      name: "Ajay",
    },
  ]);

  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        popupNotification(TOAST_TYPE.SUCCESS, "Log out successfully!");
      })
      .catch((error) => {
        console.log("Error while sign out!", error);
        popupNotification(TOAST_TYPE.SUCCESS, "Error while signout!");
        navigate("/error");
      });
  };

  return (
    <div className="absolute top-14 bg-surface px-2 py-4 w-56 flex flex-col gap-2">
      <div className="proflie-container flex flex-col gap-2">
        {profiles.map((i) => (
          <div key={i.id} className="flex items-center gap-2 cursor-pointer">
            <div className="flex justify-center items-center w-9 h-9">
              <img className="w-full h-full" src="/avatar.svg" alt="avatar" />
            </div>
            <div className="flex justify-center items-center text-text-primary text-sm">
              <p>{i.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex justify-center items-center w-9 h-9">
            <PencilIcon size={28} color="#ffffff" />
          </div>
          <div className="flex justify-center items-center text-text-primary text-sm">
            <p>{t("header.profileOptions.manageProfile")}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex justify-center items-center w-9 h-9">
            <UserSwitchIcon size={28} color="#ffffff" />
          </div>
          <div className="flex justify-center items-center text-text-primary text-sm">
            <p>{t("header.profileOptions.transferProfile")}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex justify-center items-center w-9 h-9">
            <UserIcon size={28} color="#ffffff" />
          </div>
          <div className="flex justify-center items-center text-text-primary text-sm">
            <p>{t("header.profileOptions.account")}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex justify-center items-center w-9 h-9">
            <QuestionIcon size={28} color="#ffffff" />
          </div>
          <div className="flex justify-center items-center text-text-primary text-sm">
            <p>{t("header.profileOptions.helpCenter")}</p>
          </div>
        </div>
      </div>
      <hr className="text-white mt-2" />
      <button
        onClick={handleLogout}
        className="text-text-primary text-sm cursor-pointer"
      >
        {t("header.profileOptions.signOut")}
      </button>
    </div>
  );
};
