import React from "react";
import { X } from "lucide-react";
// import { useTranslation } from "react-i18next";

interface Notification {
  id: string;
  name: string;
  desc: string;
  phone: string;
  timeAgo: string;
  date: string;
  avatarUrl: string;
}

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications: Notification[] = [
 { id: 'n1', name: 'Applied fertilizer',  desc: "Applied fertilizer to Green 18", phone: '+88012345678', timeAgo: '1 minutes ago', date: '09-12-2025', avatarUrl: 'https://i.ibb.co.com/mCnzBFVS/Notification1.png' },
  { id: 'n2', name: 'Applied fertilizer', desc: "Applied fertilizer to Green 18", phone: '+88012345678', timeAgo: '1 minutes ago', date: '09-12-2025', avatarUrl: 'https://i.ibb.co.com/pBtSKPS2/Notification2.png' },
  { id: 'n3', name: 'Applied fertilizer', desc: "Applied fertilizer to Green 18", phone: '+88012345678', timeAgo: '1 minutes ago', date: '09-12-2025', avatarUrl: 'https://i.ibb.co.com/4gNkyJWV/otification3.png' },
  { id: 'n4', name: 'Applied fertilizer', desc: "Applied fertilizer to Green 18", phone: '+88012345678', timeAgo: '1 minutes ago', date: '09-12-2025', avatarUrl: 'https://i.ibb.co.com/wh1WjZnW/Notification4.png' },
  { id: 'n5', name: 'Applied fertilizer', desc: "Applied fertilizer to Green 18", phone: '+88012345678', timeAgo: '1 minutes ago', date: '09-12-2025', avatarUrl: 'https://i.ibb.co.com/9mY4JyPm/Notification5.png' },
//   { id: 'n6', name: 'Applied fertilizer', phone: '+88012345678', timeAgo: '1 minutes ago', date: '09-12-2025', avatarUrl: 'https://i.ibb.co.com/DPSYSDwG/Notification6.png' },
//   { id: 'n7', name: 'Applied fertilizer', phone: '+88012345678', timeAgo: '1 minutes ago', date: '09-12-2025', avatarUrl: 'https://i.ibb.co.com/mCnzBFVS/Notification1.png' },
//   { id: 'n8', name: 'Applied fertilizer', phone: '+88012345678', timeAgo: '1 minutes ago', date: '09-12-2025', avatarUrl: 'https://i.ibb.co.com/DPSYSDwG/Notification6.png' }
];

const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  // const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end bg-black/30 p-4 pt-20 sm:pt-24"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-md overflow-hidden relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-2xl font-semibold text-[#171C35]">
            Notifications
            {/* {t("dashboard.mainHeader.notificationModal.title")} */}
          </h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notification List */}
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="flex items-center justify-between px-6 py-5 border-b hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <img
                  src={n.avatarUrl}
                  alt={n.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm text-titleColor font-bold leading-5 mb-2">{n.name}</p>
                  <p className="text-sm font-normal text-textColor leading-snug ">
                    {n.desc}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-normal text-textColor leading-snug">{n.timeAgo}</p>
                <p className="text-sm font-normal text-textColor leading-snug">{n.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
