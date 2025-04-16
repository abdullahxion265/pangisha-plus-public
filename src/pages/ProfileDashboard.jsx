import { useState } from 'react';
import { ArrowLeft, Edit, LogOut, Camera, MapPin, Calendar, Mail, Phone,User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfileDashboard = () => {
  const navigate = useNavigate();
  
  // Dummy user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    joinDate: 'January 2023',
    profileImage: null, // No image by default
    favorites: 5,
    listings: 2
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({...userData});

  const handleLogout = () => {
 
    navigate('/');
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setUserData({...editForm});
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({...editForm, [name]: value});
  };

  return (
    <div className="container mx-auto px-4 pb-20 pt-4">
      {/* Back Button */}
      <button 
        className="flex items-center text-primary mb-6" 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back</span>
      </button>

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          <div className="flex space-x-2">
            <button
              className="flex items-center px-4 py-2 text-primary border border-primary rounded-lg hover:bg-gray-50"
              onClick={handleEditToggle}
            >
              <Edit className="w-4 h-4 mr-2" />
              {isEditing ? 'Save' : 'Edit'}
            </button>
            <button
              className="flex items-center px-4 py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Profile Image & Basic Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              {userData.profileImage ? (
                <img src={userData.profileImage} alt={userData.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-12 h-12 text-gray-400" />
              )}
            </div>
            <button className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full">
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1">
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editForm.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={editForm.phone}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={editForm.location}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">{userData.name}</h2>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{userData.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Member since {userData.joinDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{userData.phone}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-gray-500 mb-1">Favorite Properties</h3>
          <p className="text-2xl font-bold text-gray-800">{userData.favorites}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-gray-500 mb-1">Your Listings</h3>
          <p className="text-2xl font-bold text-gray-800">{userData.listings}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full p-4 bg-primary text-white rounded-lg font-medium flex justify-center items-center">
          Manage Your Listings
        </button>
        <button className="w-full p-4 bg-white border border-gray-300 text-gray-800 rounded-lg font-medium flex justify-center items-center">
          View Saved Properties
        </button>
      </div>
    </div>
  );
};

export default ProfileDashboard;