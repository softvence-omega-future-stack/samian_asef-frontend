
import React, { useState } from 'react';

// Type definitions
interface RiderData {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  emergencyContact: string;
  phone: string;
  location: string;
  avatar?: string;
  lastRide: string;
  registeredOn: string;
}

interface RiderDetailsProps {
  rider: RiderData;
  onSave: (data: Partial<RiderData>) => void;
  onBlock?: () => void;
  readOnly?: boolean;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  emergencyContact: string;
  phone: string;
  location: string;
}

// Reusable RiderDetails Component
export const RiderDetails: React.FC<RiderDetailsProps> = ({ 
  rider, 
  onSave, 
  onBlock,
  readOnly = false 
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'ride-history' | 'transactions'>('details');
  const [formData, setFormData] = useState<FormData>({
    firstName: rider.firstName,
    lastName: rider.lastName,
    email: rider.email,
    emergencyContact: rider.emergencyContact,
    phone: rider.phone,
    location: rider.location,
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Riders Details</h2>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-300 flex items-center justify-center overflow-hidden">
            {rider.avatar ? (
              <img src={rider.avatar} alt={rider.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-white text-xl sm:text-2xl font-semibold">
                {rider.name.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{rider.name}</h3>
            <p className="text-sm text-gray-500">Mobile No: {rider.mobile}</p>
          </div>
        </div>
        <div className="flex flex-col sm:items-end gap-1 w-full sm:w-auto">
          <p className="text-xs sm:text-sm text-gray-500">Last Ride: {rider.lastRide}</p>
          <p className="text-xs sm:text-sm text-gray-500">Registered on: {rider.registeredOn}</p>
          {onBlock && (
            <button 
              onClick={onBlock}
              className="mt-2 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              Block
            </button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b overflow-x-auto">
        <button
          onClick={() => setActiveTab('details')}
          className={`pb-3 px-1 text-sm sm:text-base font-medium whitespace-nowrap transition-colors ${
            activeTab === 'details'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab('ride-history')}
          className={`pb-3 px-1 text-sm sm:text-base font-medium whitespace-nowrap transition-colors ${
            activeTab === 'ride-history'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Ride History
        </button>
        <button
          onClick={() => setActiveTab('transactions')}
          className={`pb-3 px-1 text-sm sm:text-base font-medium whitespace-nowrap transition-colors ${
            activeTab === 'transactions'
              ? 'text-teal-600 border-b-2 border-teal-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Transactions
        </button>
      </div>

      {/* Form Content */}
      {activeTab === 'details' && (
        <div className="space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                disabled={readOnly}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                placeholder="KEREN"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                disabled={readOnly}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                placeholder="NIX"
              />
            </div>
          </div>

          {/* Contact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={readOnly}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                placeholder="kerennix@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Emergency contact number
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="text-lg">🇺🇸</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input
                  type="tel"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  disabled={readOnly}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  placeholder="+88 1123 125 1234"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-200 rounded-lg bg-gray-50">
                  <span className="text-lg">🇺🇸</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={readOnly}
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  placeholder="+88 1123 125 1234"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                disabled={readOnly}
                className="w-full px-4 py-2.5 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed text-sm sm:text-base"
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
          {!readOnly && (
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSave}
                className="w-full sm:w-auto px-8 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 active:bg-teal-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'ride-history' && (
        <div className="py-12 text-center text-gray-500">
          <p>Ride history will be displayed here</p>
        </div>
      )}

      {activeTab === 'transactions' && (
        <div className="py-12 text-center text-gray-500">
          <p>Transaction history will be displayed here</p>
        </div>
      )}
    </div>
  );
};