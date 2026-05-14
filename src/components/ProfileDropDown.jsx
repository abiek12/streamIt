import {
  PencilIcon,
  QuestionIcon,
  UserIcon,
  UserSwitchIcon,
} from "@phosphor-icons/react";
import { useState } from "react";

export const ProfileDropDown = () => {
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

  return (
    <div className="absolute top-14 bg-surface px-2 py-4 w-56 flex flex-col gap-2">
      <div className="proflie-container flex flex-col gap-2">
        {profiles.map((i) => (
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex justify-center items-center w-9 h-9">
              <img
                className="w-full h-full"
                src="/avatar.svg"
                alt="avatar"
                srcset=""
              />
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
            <p>Manage Profiles</p>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex justify-center items-center w-9 h-9">
            <UserSwitchIcon size={28} color="#ffffff" />
          </div>
          <div className="flex justify-center items-center text-text-primary text-sm">
            <p>Transfer Profiles</p>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex justify-center items-center w-9 h-9">
            <UserIcon size={28} color="#ffffff" />
          </div>
          <div className="flex justify-center items-center text-text-primary text-sm">
            <p>Account</p>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex justify-center items-center w-9 h-9">
            <QuestionIcon size={28} color="#ffffff" />
          </div>
          <div className="flex justify-center items-center text-text-primary text-sm">
            <p>Help Center</p>
          </div>
        </div>
      </div>
      <hr className="text-white mt-2" />
      <button className="text-text-primary text-sm cursor-pointer">
        Sign out
      </button>
    </div>
  );
};
