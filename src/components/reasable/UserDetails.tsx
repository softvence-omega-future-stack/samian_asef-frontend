import { useState } from "react";
import usflagImg from '../../assets/images/usFlag.png';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  emergencyContact: string;
  phone: string;
  location: string;
}

interface UserData {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  emergencyContact: string;
  phone: string;
  location: string;
}

interface UserDetailsProps {
  user: UserData;
  readOnly?: boolean;
  onChange?: (data: Partial<UserData>) => void;
}


const UserDetails: React.FC<UserDetailsProps> = ({
  user,
  readOnly = false,
  
}) => {

     const [formData, setFormData] = useState<FormData>({
         firstName: user.firstName,
         lastName: user.lastName,
         email: user.email,
         emergencyContact: user.emergencyContact,
         phone: user.phone,
         location: user.location,
       });
     
       const handleInputChange = (field: keyof FormData, value: string) => {
         setFormData(prev => ({ ...prev, [field]: value }));
       };
  return (
    <div>
       <div className="space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-normal leading-[100%] text-titleColor mb-2">
                First name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                disabled={readOnly}
                className="w-full px-4 py-2.5 border text-sm text-textColor font-normal uppercase border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed "
                placeholder="KEREN"
              />
            </div>
            <div>
              <label className="block text-sm font-normal leading-[100%] text-titleColor mb-2">
                Last name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                disabled={readOnly}
                className="w-full px-4 py-2.5 text-sm text-textColor font-normal uppercase border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed "
                placeholder="NIX"
              />
            </div>
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-normal leading-[100%] text-titleColor mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={readOnly}
                className="w-full px-4 py-2.5 text-sm text-textColor font-normal uppercase border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed "
                placeholder="kerennix@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-normal leading-[100%] text-titleColor mb-2">
                Emergency contact number
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-2.5  border border-gray-200 rounded-lg bg-gray-50">
                  {/* <span className="text-lg">🇺🇸</span> */}
                  <img src={usflagImg} alt="" className='h-5  w-8' />
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input
                  type="tel"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  disabled={readOnly}
                  className="flex-1 px-4 py-2.5 text-sm text-textColor font-normal uppercase border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed "
                  placeholder="+88 1123 125 1234"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-normal leading-[100%] text-titleColor mb-2">
                Phone
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50">
                  {/* <span className="text-lg">🇺🇸</span> */}
                  <img src={usflagImg} alt="" className='h-5  w-8' />
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={readOnly}
                  className="flex-1 px-4 py-2.5  text-sm text-textColor font-normal uppercase border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed "
                  placeholder="+88 1123 125 1234"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-normal leading-[100%] text-titleColor mb-2">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                disabled={readOnly}
                className="w-full px-4 py-2.5 pr-10 text-sm text-textColor font-normal uppercase border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed "
                placeholder="2972 westheimer rd. santa ana, illinois 85486"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-600 hover:text-teal-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Save Button */}
          {/* {!readOnly && (
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSave}
                className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 active:bg-teal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          )} */}
        </div>
    </div>
  )
}

export default UserDetails
