"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, PencilIcon } from "lucide-react";
import { useState } from "react";

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
    <div className="flex-1 overflow-auto bg-background">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-8">
          Admin profile
        </h1>

        <div className="bg-card rounded-lg border border-border p-8 max-w-2xl">
          <div className="flex items-end gap-6 mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">👨‍💼</span>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-teal-600 mb-1">
                Keren nix
              </h2>
              <p className="text-muted-foreground">Anaesthesia</p>
            </div>
            <Button
              variant="outline"
              className="gap-2 bg-transparent"
              onClick={() => setIsEditing(!isEditing)}
            >
              <PencilIcon className="w-4 h-4" />
              {isEditing ? "Cancel" : "Edit"}
            </Button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  First name
                </label>
                <Input
                  value={profile.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Last name
                </label>
                <Input
                  value={profile.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  value={profile.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  disabled={!isEditing}
                  className="bg-muted/50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
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
                    className="flex-1 bg-muted/50"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
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
                  className="flex-1 bg-muted/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Location
              </label>
              <div className="flex gap-2">
                <Input
                  value={profile.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  disabled={!isEditing}
                  className="flex-1 bg-muted/50"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-teal-600 hover:bg-teal-50"
                >
                  <MapPin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {isEditing && (
            <Button
              onClick={handleSave}
              className="w-full mt-8 bg-teal-600 hover:bg-teal-700 text-white py-6 text-base font-semibold"
            >
              Save
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
