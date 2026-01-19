"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, PencilIcon } from "lucide-react";
import { useState } from "react";
import profileImg from "@/assets/images/adminImg.png";

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "KEREN",
    lastName: "NIX",
    email: "kerennix@gmail.com",
    phone: "+88 1123 125 1234",
    emergencyPhone: "+88 1123 125 1234",
    location: "2972 westheimer rd. santa ana, illinois 85486",
  });

  const handleInputChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex-1 overflow-auto bg-background rounded-2xl">
      <div className="p-3 md:p-6">
        <h1 className="text-xl md:text-2xl font-semibold text-titleColor leading-6 mb-8">
          Admin profile
        </h1>

        <div className="bg-card rounded-lg  md:p-6 ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-3">
              <div className=" flex items-center justify-center flex-shrink-0">
              <img src={profileImg} alt="" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-semibold leading-6 text-primaryColor mb-2.5">
                Keren nix
              </h2>
              <p className="text-titleColor text-sm  font-normal leading-6">Anaesthesia</p>
            </div>
          </div>
            <Button
              variant="outline"
              className="gap-2 bg-transparent text-titleColor hover:bg-muted cursor-pointer w-full md:w-auto"
              onClick={() => setIsEditing(!isEditing)}
            >
              <PencilIcon className="w-4 h-4" />
              {isEditing ? "Cancel" : "Edit"}
            </Button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-normal text-titleColor leading-4 mb-2">
                  First name
                </label>
                <Input
                  value={profile.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  disabled={!isEditing}
                  className="bg-muted/50 text-textColor font-normal text-sm leading-4 uppercase"
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-titleColor leading-4 mb-2">
                  Last name
                </label>
                <Input
                  value={profile.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  disabled={!isEditing}
                  className="bg-muted/50 text-textColor font-normal text-sm leading-4 uppercase"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-normal text-titleColor leading-4 mb-2">
                  E-mail
                </label>
                <Input
                  value={profile.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!isEditing}
                  className="bg-muted/50 text-textColor font-normal text-sm leading-4 uppercase"
                />
              </div>
              <div>
                <label className="block text-sm font-normal text-titleColor leading-4 mb-2">
                  Emergency contact number
                </label>
                <div className="flex gap-2">
                  <select
                    className="px-3 py-2 border border-border rounded-md bg-muted/50"
                    disabled={!isEditing}
                  >
                    <option>🇺🇸 +1</option>
                  </select>
                  <Input
                    value={profile.emergencyPhone}
                    onChange={(e) =>
                      handleInputChange("emergencyPhone", e.target.value)
                    }
                    disabled={!isEditing}
                    className="flex-1 bg-muted/50 text-textColor font-normal text-sm leading-4 uppercase"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-normal text-titleColor leading-4 mb-2">
                Phone
              </label>
              <div className="flex gap-2">
                <select
                  className="px-3 py-2 border border-border rounded-md bg-muted/50"
                  disabled={!isEditing}
                >
                  <option>🇺🇸 +1</option>
                </select>
                <Input
                  value={profile.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  disabled={!isEditing}
                  className="flex-1 bg-muted/50 text-textColor font-normal text-sm leading-4 uppercase"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-normal text-titleColor leading-4 mb-2">
                Location
              </label>
              <div className="relative gap-2">
                <Input
                  value={profile.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  disabled={!isEditing}
                  className="flex-1 bg-muted/50 text-textColor font-normal text-sm leading-4 "
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primaryColor hidden md:block hover:bg-teal-50 absolute top-0 right-0 cursor-pointer"
                >
                  <MapPin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

     {isEditing && (
  <div className="flex justify-end mt-8">
    <Button
      onClick={handleSave}
      className="w-full md:w-[316px] bg-teal-600 hover:bg-teal-700 text-white p-5 cursor-pointer text-base font-semibold"
    >
      Save
    </Button>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
