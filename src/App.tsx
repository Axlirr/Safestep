import React, { useState } from 'react';
import { 
  Heart, 
  Shield, 
  Users, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  MessageCircle, 
  Minimize2, 
  Maximize2,
  BarChart3,
  Activity,
  Target,
  Award,
  Bell,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Calendar,
  TrendingUp,
  UserPlus,
  Database,
  HelpCircle,
  Star,
  Zap,
  Globe,
  Lock,
  Smartphone,
  Wifi
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userType, setUserType] = useState<'user' | 'staff' | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Project SAFE-Step</h1>
                <p className="text-sm text-gray-600">PWID Epilepsy Support Platform</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => {setCurrentPage('user-login'); setUserType('user');}}
                className="px-4 py-2 border-2 border-dashed border-blue-400 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                User Login
              </button>
              <button 
                onClick={() => {setCurrentPage('staff-login'); setUserType('staff');}}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors"
              >
                Staff Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Empowering <span className="text-blue-600">PWID</span> with Epilepsy Support
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive platform providing safety monitoring, training resources, and community support for People with Intellectual Disabilities living with epilepsy.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => {setCurrentPage('user-register'); setUserType('user');}}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors text-lg"
            >
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-dashed border-blue-400 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border-2 border-dashed border-blue-300 rounded-lg">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health Monitoring</h3>
              <p className="text-gray-600">Real-time seizure tracking and health status monitoring with emergency response protocols.</p>
            </div>
            <div className="text-center p-6 border-2 border-dashed border-blue-300 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safety Zones</h3>
              <p className="text-gray-600">Geofenced safe areas with automatic alerts and location-based safety protocols.</p>
            </div>
            <div className="text-center p-6 border-2 border-dashed border-blue-300 rounded-lg">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Training Resources</h3>
              <p className="text-gray-600">Comprehensive educational materials and certification programs for caregivers and staff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="border-2 border-dashed border-blue-400 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div className="border-2 border-dashed border-blue-400 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Safety Response Rate</div>
            </div>
            <div className="border-2 border-dashed border-blue-400 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Healthcare Partners</div>
            </div>
            <div className="border-2 border-dashed border-blue-400 p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">SAFE-Step</span>
              </div>
              <p className="text-gray-400">Empowering PWID with comprehensive epilepsy support and safety solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Safety Zones</a></li>
                <li><a href="#" className="hover:text-white">Training</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>1-800-SAFE-STEP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>support@safestep.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Healthcare District, Medical Center</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Project SAFE-Step. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );

  // User Login Page
  const UserLoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg border-2 border-dashed border-blue-300 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">User Portal Login</h2>
          <p className="text-gray-600">Access your SAFE-Step account</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button 
            type="button"
            onClick={() => setCurrentPage('user-dashboard')}
            className="w-full py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account? 
            <button 
              onClick={() => setCurrentPage('user-register')}
              className="text-blue-600 hover:underline ml-1"
            >
              Register here
            </button>
          </p>
        </div>
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => setCurrentPage('landing')}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  // User Registration Page
  const UserRegisterPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg border-2 border-dashed border-blue-300 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Create Your Account</h2>
          <p className="text-gray-600">Join the SAFE-Step community</p>
        </div>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Enter last name"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="Enter email address"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Relationship to PWID</label>
            <select className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
              <option>Select relationship</option>
              <option>Self (I am the PWID)</option>
              <option>Parent/Guardian</option>
              <option>Caregiver</option>
              <option>Family Member</option>
              <option>Healthcare Provider</option>
            </select>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Create password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input 
                type="password" 
                className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Confirm password"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="flex items-start">
              <input type="checkbox" className="mr-3 mt-1" />
              <span className="text-sm text-gray-600">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>
            <label className="flex items-start">
              <input type="checkbox" className="mr-3 mt-1" />
              <span className="text-sm text-gray-600">
                I consent to emergency contact notifications and location tracking for safety purposes
              </span>
            </label>
          </div>
          
          <button 
            type="button"
            onClick={() => setCurrentPage('user-dashboard')}
            className="w-full py-3 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors"
          >
            Create Account
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account? 
            <button 
              onClick={() => setCurrentPage('user-login')}
              className="text-blue-600 hover:underline ml-1"
            >
              Sign in here
            </button>
          </p>
        </div>
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => setCurrentPage('landing')}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  // User Dashboard
  const UserDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('user-dashboard')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('user-monitoring')}
                className="text-gray-600 hover:text-blue-600"
              >
                Monitoring
              </button>
              <button 
                onClick={() => setCurrentPage('user-safety-zones')}
                className="text-gray-600 hover:text-blue-600"
              >
                Safety Zones
              </button>
              <button 
                onClick={() => setCurrentPage('user-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training
              </button>
              <button 
                onClick={() => setCurrentPage('user-profile')}
                className="text-gray-600 hover:text-blue-600"
              >
                Profile
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="flex items-center space-x-2">
                <User className="w-8 h-8 text-gray-600" />
                <span className="text-sm text-gray-700">John Doe</span>
              </div>
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600">Here's your health and safety overview</p>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-green-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Health Status</p>
                <p className="text-2xl font-bold text-green-600">Good</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Safety Zone</p>
                <p className="text-2xl font-bold text-blue-600">Active</p>
              </div>
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-yellow-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Last Seizure</p>
                <p className="text-2xl font-bold text-yellow-600">7 days</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-purple-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Training Progress</p>
                <p className="text-2xl font-bold text-purple-600">75%</p>
              </div>
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setCurrentPage('user-monitoring')}
                className="w-full p-3 text-left border-2 border-dashed border-red-300 rounded-lg hover:bg-red-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Report Emergency</span>
                </div>
              </button>
              <button 
                onClick={() => setCurrentPage('user-monitoring')}
                className="w-full p-3 text-left border-2 border-dashed border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Log Seizure Activity</span>
                </div>
              </button>
              <button 
                onClick={() => setCurrentPage('user-safety-zones')}
                className="w-full p-3 text-left border-2 border-dashed border-green-300 rounded-lg hover:bg-green-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Check Safety Zones</span>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Medication taken</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <Shield className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Entered safe zone</p>
                  <p className="text-sm text-gray-600">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <BookOpen className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium">Completed training module</p>
                  <p className="text-sm text-gray-600">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-red-300">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Emergency Contacts</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-600" />
                <div>
                  <p className="font-medium">Emergency Services</p>
                  <p className="text-sm text-gray-600">911</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Primary Caregiver</p>
                  <p className="text-sm text-gray-600">(555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Healthcare Provider</p>
                  <p className="text-sm text-gray-600">(555) 987-6543</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // User Monitoring Page
  const UserMonitoring = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('user-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('user-monitoring')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Monitoring
              </button>
              <button 
                onClick={() => setCurrentPage('user-safety-zones')}
                className="text-gray-600 hover:text-blue-600"
              >
                Safety Zones
              </button>
              <button 
                onClick={() => setCurrentPage('user-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training
              </button>
              <button 
                onClick={() => setCurrentPage('user-profile')}
                className="text-gray-600 hover:text-blue-600"
              >
                Profile
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Health Monitoring</h1>
          <p className="text-gray-600">Track your health status and seizure activity</p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border-2 border-dashed border-red-300 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Emergency Response</h3>
                <p className="text-red-600">Immediate assistance available 24/7</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg border-2 border-dashed border-red-700 hover:bg-red-700 transition-colors font-semibold">
              EMERGENCY ALERT
            </button>
          </div>
        </div>

        {/* Current Status */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-green-300">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-semibold">Current Status</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Health:</span>
                <span className="font-medium text-green-600">Good</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Check:</span>
                <span className="font-medium">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium text-blue-600">Safe Zone</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <div className="flex items-center space-x-3 mb-4">
              <Activity className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold">Seizure Activity</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Last Seizure:</span>
                <span className="font-medium">7 days ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">This Month:</span>
                <span className="font-medium">2 episodes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Severity:</span>
                <span className="font-medium text-yellow-600">Mild</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-purple-300">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-semibold">Medication</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Last Dose:</span>
                <span className="font-medium">2 hours ago</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Next Dose:</span>
                <span className="font-medium text-blue-600">6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Adherence:</span>
                <span className="font-medium text-green-600">95%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Log Activity</h3>
            <div className="space-y-3">
              <button className="w-full p-3 text-left border-2 border-dashed border-red-300 rounded-lg hover:bg-red-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span className="font-medium">Report Seizure</span>
                </div>
              </button>
              <button className="w-full p-3 text-left border-2 border-dashed border-green-300 rounded-lg hover:bg-green-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Log Medication</span>
                </div>
              </button>
              <button className="w-full p-3 text-left border-2 border-dashed border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Record Symptoms</span>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Recent Logs</h3>
            <div className="space-y-3">
              <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Medication taken</span>
                  </div>
                  <span className="text-sm text-gray-600">2h ago</span>
                </div>
              </div>
              <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">Mild symptoms</span>
                  </div>
                  <span className="text-sm text-gray-600">6h ago</span>
                </div>
              </div>
              <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-red-600" />
                    <span className="font-medium">Seizure episode</span>
                  </div>
                  <span className="text-sm text-gray-600">7d ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring Chart Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
          <h3 className="text-lg font-semibold mb-4">Activity Timeline</h3>
          <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-2" />
              <p>Interactive monitoring chart would be displayed here</p>
              <p className="text-sm">Showing seizure frequency, medication adherence, and health trends</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // User Safety Zones Page
  const UserSafetyZones = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('user-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('user-monitoring')}
                className="text-gray-600 hover:text-blue-600"
              >
                Monitoring
              </button>
              <button 
                onClick={() => setCurrentPage('user-safety-zones')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Safety Zones
              </button>
              <button 
                onClick={() => setCurrentPage('user-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training
              </button>
              <button 
                onClick={() => setCurrentPage('user-profile')}
                className="text-gray-600 hover:text-blue-600"
              >
                Profile
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Safety Zones</h1>
          <p className="text-gray-600">Manage your safe areas and location-based alerts</p>
        </div>

        {/* Current Location Status */}
        <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">Currently in Safe Zone</h3>
              <p className="text-green-600">Home - 123 Main Street, Anytown</p>
            </div>
          </div>
        </div>

        {/* Map View */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300 mb-8">
          <h3 className="text-lg font-semibold mb-4">Zone Map View</h3>
          <div className="h-96 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map Interface</p>
              <p>Showing safety zones, current location, and zone boundaries</p>
              <div className="mt-4 flex justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Safe Zones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Monitored Areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Current Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safety Zones List */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Your Safety Zones</h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-dashed border-green-300 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Home</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">123 Main Street, Anytown</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Radius: 100m</span>
                  <span>24/7 Monitoring</span>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-blue-300 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Workplace</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Active</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">456 Business Ave, Downtown</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Radius: 50m</span>
                  <span>Mon-Fri 9AM-5PM</span>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-yellow-300 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Community Center</h4>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Scheduled</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">789 Community Blvd</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Radius: 75m</span>
                  <span>Weekends Only</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Zone Settings</h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <h4 className="font-medium mb-2">Notification Preferences</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Zone entry/exit alerts</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Emergency contact notifications</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">Daily location summary</span>
                  </label>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <h4 className="font-medium mb-2">Emergency Contacts</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span>Primary Caregiver</span>
                    <span className="text-blue-600">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Healthcare Provider</span>
                    <span className="text-blue-600">(555) 987-6543</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Emergency Services</span>
                    <span className="text-red-600">911</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                Add New Zone
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // User Training Page
  const UserTraining = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('user-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('user-monitoring')}
                className="text-gray-600 hover:text-blue-600"
              >
                Monitoring
              </button>
              <button 
                onClick={() => setCurrentPage('user-safety-zones')}
                className="text-gray-600 hover:text-blue-600"
              >
                Safety Zones
              </button>
              <button 
                onClick={() => setCurrentPage('user-training')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Training
              </button>
              <button 
                onClick={() => setCurrentPage('user-profile')}
                className="text-gray-600 hover:text-blue-600"
              >
                Profile
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Training & Education</h1>
          <p className="text-gray-600">Learn about epilepsy management and safety protocols</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300 mb-8">
          <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 border-4 border-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-blue-600">75%</span>
              </div>
              <p className="font-medium">Overall Progress</p>
              <p className="text-sm text-gray-600">6 of 8 modules completed</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 border-4 border-green-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <p className="font-medium">Certificates Earned</p>
              <p className="text-sm text-gray-600">3 certifications</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 border-4 border-purple-600 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <p className="font-medium">Study Time</p>
              <p className="text-sm text-gray-600">12.5 hours total</p>
            </div>
          </div>
        </div>

        {/* Training Modules */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Available Modules</h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-dashed border-green-300 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Epilepsy Basics</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completed</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Understanding epilepsy and seizure types</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 45 min</span>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-green-300 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Medication Management</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completed</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Proper medication adherence and tracking</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 30 min</span>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-blue-300 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Emergency Response</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">In Progress</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">What to do during a seizure emergency</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 60 min</span>
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Safety Planning</h4>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">Not Started</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Creating personal safety protocols</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: 40 min</span>
                  <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded border-2 border-dashed border-blue-700">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-dashed border-green-300 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="font-medium">Epilepsy Awareness</h4>
                    <p className="text-sm text-gray-600">Earned: March 15, 2024</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-green-300 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="font-medium">Medication Safety</h4>
                    <p className="text-sm text-gray-600">Earned: March 20, 2024</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-blue-300 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium">Emergency Response</h4>
                    <p className="text-sm text-gray-600">In Progress - 60% complete</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Lock className="w-8 h-8 text-gray-400" />
                  <div>
                    <h4 className="font-medium text-gray-500">Advanced Safety</h4>
                    <p className="text-sm text-gray-500">Complete Emergency Response to unlock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
          <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg text-center">
              <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-medium mb-2">Resource Library</h4>
              <p className="text-sm text-gray-600 mb-3">Access guides, articles, and research</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded border-2 border-dashed border-blue-700 text-sm">
                Browse Library
              </button>
            </div>
            
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-medium mb-2">Community Forum</h4>
              <p className="text-sm text-gray-600 mb-3">Connect with other PWID and caregivers</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded border-2 border-dashed border-green-700 text-sm">
                Join Discussion
              </button>
            </div>
            
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg text-center">
              <Phone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-medium mb-2">Expert Support</h4>
              <p className="text-sm text-gray-600 mb-3">Schedule consultation with specialists</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded border-2 border-dashed border-purple-700 text-sm">
                Book Session
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // User Profile Page
  const UserProfile = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('user-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('user-monitoring')}
                className="text-gray-600 hover:text-blue-600"
              >
                Monitoring
              </button>
              <button 
                onClick={() => setCurrentPage('user-safety-zones')}
                className="text-gray-600 hover:text-blue-600"
              >
                Safety Zones
              </button>
              <button 
                onClick={() => setCurrentPage('user-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training
              </button>
              <button 
                onClick={() => setCurrentPage('user-profile')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Profile
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      defaultValue="John"
                      className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      defaultValue="Doe"
                      className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="john.doe@email.com"
                    className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    defaultValue="(555) 123-4567"
                    className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input 
                    type="date" 
                    defaultValue="1990-01-15"
                    className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                  Update Information
                </button>
              </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-semibold mb-4">Emergency Contacts</h3>
              <div className="space-y-4">
                <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Primary Caregiver</h4>
                    <button className="text-blue-600 hover:underline text-sm">Edit</button>
                  </div>
                  <p className="text-sm text-gray-600">Jane Doe - Mother</p>
                  <p className="text-sm text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-600">jane.doe@email.com</p>
                </div>
                
                <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Healthcare Provider</h4>
                    <button className="text-blue-600 hover:underline text-sm">Edit</button>
                  </div>
                  <p className="text-sm text-gray-600">Dr. Smith - Neurologist</p>
                  <p className="text-sm text-gray-600">(555) 987-6543</p>
                  <p className="text-sm text-gray-600">Epilepsy Care Center</p>
                </div>
                
                <button className="w-full py-2 border-2 border-dashed border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Add Emergency Contact
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-semibold mb-4">Medical Information</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Epilepsy Type</label>
                  <select className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                    <option>Focal Seizures</option>
                    <option>Generalized Seizures</option>
                    <option>Unknown Onset</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                  <textarea 
                    className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    rows={3}
                    defaultValue="Levetiracetam 500mg twice daily"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seizure Triggers</label>
                  <textarea 
                    className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                    rows={3}
                    defaultValue="Stress, lack of sleep, flashing lights"
                  />
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                  Update Medical Info
                </button>
              </form>
            </div>
          </div>

          {/* Settings Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm">Medication reminders</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Safety zone alerts</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Training notifications</span>
                  <input type="checkbox" className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Emergency alerts</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-semibold mb-4">Privacy Settings</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-sm">Location tracking</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Data sharing</span>
                  <input type="checkbox" className="toggle" />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-sm">Analytics</span>
                  <input type="checkbox" defaultChecked className="toggle" />
                </label>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
              <div className="space-y-3">
                <button className="w-full py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                  Change Password
                </button>
                <button className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Export Data
                </button>
                <button className="w-full py-2 border-2 border-dashed border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Staff Login Page
  const StaffLoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg border-2 border-dashed border-blue-300 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Staff Portal Login</h2>
          <p className="text-gray-600">Access administrative dashboard</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Staff ID / Email</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="Enter staff ID or email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button 
            type="button"
            onClick={() => setCurrentPage('staff-dashboard')}
            className="w-full py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Need access? Contact your system administrator
          </p>
        </div>
        
        <div className="mt-6 text-center">
          <button 
            onClick={() => setCurrentPage('landing')}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  // Staff Dashboard
  const StaffDashboard = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step Staff Portal</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('staff-dashboard')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('staff-profiles')}
                className="text-gray-600 hover:text-blue-600"
              >
                PWID Profiles
              </button>
              <button 
                onClick={() => setCurrentPage('staff-analytics')}
                className="text-gray-600 hover:text-blue-600"
              >
                Analytics
              </button>
              <button 
                onClick={() => setCurrentPage('staff-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-chatbot')}
                className="text-gray-600 hover:text-blue-600"
              >
                Chatbot Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-support')}
                className="text-gray-600 hover:text-blue-600"
              >
                Support
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <div className="flex items-center space-x-2">
                <User className="w-8 h-8 text-gray-600" />
                <span className="text-sm text-gray-700">Dr. Sarah Wilson</span>
              </div>
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Staff Dashboard</h1>
          <p className="text-gray-600">Overview of PWID management and system status</p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total PWID</p>
                <p className="text-2xl font-bold text-blue-600">247</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-green-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Monitoring</p>
                <p className="text-2xl font-bold text-green-600">189</p>
              </div>
              <Activity className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-yellow-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Alerts Today</p>
                <p className="text-2xl font-bold text-yellow-600">12</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-purple-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Training Completion</p>
                <p className="text-2xl font-bold text-purple-600">78%</p>
              </div>
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Recent Incidents</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border-2 border-dashed border-red-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <div className="flex-1">
                  <p className="font-medium">Emergency Alert - John D.</p>
                  <p className="text-sm text-gray-600">Seizure reported at Home Zone</p>
                </div>
                <span className="text-sm text-gray-500">15 min ago</span>
              </div>
              <div className="flex items-center space-x-3 p-3 border-2 border-dashed border-yellow-200 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-600" />
                <div className="flex-1">
                  <p className="font-medium">Medication Missed - Sarah M.</p>
                  <p className="text-sm text-gray-600">Evening dose not taken</p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-3 p-3 border-2 border-dashed border-blue-200 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium">Zone Exit - Mike R.</p>
                  <p className="text-sm text-gray-600">Left workplace safety zone</p>
                </div>
                <span className="text-sm text-gray-500">4 hours ago</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => setCurrentPage('staff-profiles')}
                className="w-full p-3 text-left border-2 border-dashed border-blue-300 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Manage PWID Profiles</span>
                </div>
              </button>
              <button 
                onClick={() => setCurrentPage('staff-analytics')}
                className="w-full p-3 text-left border-2 border-dashed border-green-300 rounded-lg hover:bg-green-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  <span className="font-medium">View Analytics Report</span>
                </div>
              </button>
              <button 
                onClick={() => setCurrentPage('staff-training')}
                className="w-full p-3 text-left border-2 border-dashed border-purple-300 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">Training Administration</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
          <h3 className="text-lg font-semibold mb-4">System Status</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-medium">Monitoring System</p>
              <p className="text-sm text-green-600">Operational</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Wifi className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-medium">Network Status</p>
              <p className="text-sm text-green-600">Connected</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Database className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="font-medium">Database</p>
              <p className="text-sm text-yellow-600">Maintenance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-medium">Mobile App</p>
              <p className="text-sm text-green-600">Active</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Staff PWID Profiles Page
  const StaffProfiles = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step Staff Portal</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('staff-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('staff-profiles')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                PWID Profiles
              </button>
              <button 
                onClick={() => setCurrentPage('staff-analytics')}
                className="text-gray-600 hover:text-blue-600"
              >
                Analytics
              </button>
              <button 
                onClick={() => setCurrentPage('staff-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-chatbot')}
                className="text-gray-600 hover:text-blue-600"
              >
                Chatbot Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-support')}
                className="text-gray-600 hover:text-blue-600"
              >
                Support
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">PWID Profile Management</h1>
          <p className="text-gray-600">Manage individual profiles and care plans</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by name, ID, or condition..."
                  className="w-full pl-10 pr-4 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <select className="px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
              <option>All Status</option>
              <option>Active Monitoring</option>
              <option>Inactive</option>
              <option>Emergency</option>
            </select>
            <select className="px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
              <option>All Locations</option>
              <option>Home Zone</option>
              <option>Workplace</option>
              <option>Community</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4 inline mr-2" />
              Add New PWID
            </button>
          </div>
        </div>

        {/* Profiles Table */}
        <div className="bg-white rounded-lg shadow border-2 border-dashed border-blue-300 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">PWID Profiles (247 total)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">John Doe</div>
                        <div className="text-sm text-gray-500">Age: 28</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PWD-001</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Home Zone</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 border border-dashed border-blue-300 px-2 py-1 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 border border-dashed border-green-300 px-2 py-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Sarah Miller</div>
                        <div className="text-sm text-gray-500">Age: 34</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PWD-002</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Alert</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6 hours ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Workplace</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 border border-dashed border-blue-300 px-2 py-1 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 border border-dashed border-green-300 px-2 py-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Mike Rodriguez</div>
                        <div className="text-sm text-gray-500">Age: 25</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PWD-003</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Active</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 hour ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Community</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 border border-dashed border-blue-300 px-2 py-1 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 border border-dashed border-green-300 px-2 py-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Emma Thompson</div>
                        <div className="text-sm text-gray-500">Age: 31</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">PWD-004</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Emergency</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 min ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unknown</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 border border-dashed border-blue-300 px-2 py-1 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-900 border border-dashed border-green-300 px-2 py-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing 1-4 of 247 profiles
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border-2 border-dashed border-gray-300 rounded text-sm hover:bg-gray-50">Previous</button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">1</button>
              <button className="px-3 py-1 border-2 border-dashed border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
              <button className="px-3 py-1 border-2 border-dashed border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
              <button className="px-3 py-1 border-2 border-dashed border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Staff Analytics Page
  const StaffAnalytics = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step Staff Portal</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('staff-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('staff-profiles')}
                className="text-gray-600 hover:text-blue-600"
              >
                PWID Profiles
              </button>
              <button 
                onClick={() => setCurrentPage('staff-analytics')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Analytics
              </button>
              <button 
                onClick={() => setCurrentPage('staff-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-chatbot')}
                className="text-gray-600 hover:text-blue-600"
              >
                Chatbot Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-support')}
                className="text-gray-600 hover:text-blue-600"
              >
                Support
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics & Reporting</h1>
          <p className="text-gray-600">Comprehensive insights and performance metrics</p>
        </div>

        {/* Time Period Selector */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300 mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Report Period</h3>
            <div className="flex space-x-4">
              <select className="px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Last Year</option>
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4 inline mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-green-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Response Time</p>
                <p className="text-2xl font-bold text-green-600">2.3 min</p>
                <p className="text-sm text-green-600">↓ 15% from last month</p>
              </div>
              <Clock className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Safety Incidents</p>
                <p className="text-2xl font-bold text-blue-600">23</p>
                <p className="text-sm text-blue-600">↓ 8% from last month</p>
              </div>
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-purple-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Training Completion</p>
                <p className="text-2xl font-bold text-purple-600">78%</p>
                <p className="text-sm text-purple-600">↑ 12% from last month</p>
              </div>
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-yellow-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Medication Adherence</p>
                <p className="text-2xl font-bold text-yellow-600">92%</p>
                <p className="text-sm text-yellow-600">↑ 3% from last month</p>
              </div>
              <Heart className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Incident Trends</h3>
            <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                <p>Line chart showing incident trends over time</p>
                <p className="text-sm">Seizure events, medication alerts, zone violations</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Safety Zone Activity</h3>
            <div className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                <p>Bar chart showing zone usage patterns</p>
                <p className="text-sm">Entry/exit frequency, duration, coverage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Reports */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Top Alerts by Type</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <span>Seizure Events</span>
                </div>
                <span className="font-bold text-red-600">45</span>
              </div>
              <div className="flex items-center justify-between p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600" />
                  <span>Medication Missed</span>
                </div>
                <span className="font-bold text-yellow-600">32</span>
              </div>
              <div className="flex items-center justify-between p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Zone Violations</span>
                </div>
                <span className="font-bold text-blue-600">18</span>
              </div>
              <div className="flex items-center justify-between p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>Emergency Calls</span>
                </div>
                <span className="font-bold text-green-600">12</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">System Uptime</span>
                  <span className="text-sm font-medium">99.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '99.8%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Alert Response Rate</span>
                  <span className="text-sm font-medium">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '94%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">User Satisfaction</span>
                  <span className="text-sm font-medium">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Training Completion</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Staff Training Admin Page
  const StaffTraining = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step Staff Portal</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('staff-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('staff-profiles')}
                className="text-gray-600 hover:text-blue-600"
              >
                PWID Profiles
              </button>
              <button 
                onClick={() => setCurrentPage('staff-analytics')}
                className="text-gray-600 hover:text-blue-600"
              >
                Analytics
              </button>
              <button 
                onClick={() => setCurrentPage('staff-training')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Training Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-chatbot')}
                className="text-gray-600 hover:text-blue-600"
              >
                Chatbot Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-support')}
                className="text-gray-600 hover:text-blue-600"
              >
                Support
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Training Administration</h1>
          <p className="text-gray-600">Manage training modules and track learner progress</p>
        </div>

        {/* Training Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Modules</p>
                <p className="text-2xl font-bold text-blue-600">12</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-green-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Learners</p>
                <p className="text-2xl font-bold text-green-600">189</p>
              </div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-purple-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold text-purple-600">78%</p>
              </div>
              <Award className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-yellow-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Certificates Issued</p>
                <p className="text-2xl font-bold text-yellow-600">456</p>
              </div>
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Module Management */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Training Modules</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4 inline mr-2" />
                Add Module
              </button>
            </div>
            <div className="space-y-3">
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Epilepsy Basics</h4>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Understanding epilepsy and seizure types</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Duration: 45 min</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Emergency Response</h4>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Crisis intervention and emergency protocols</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Duration: 60 min</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Medication Management</h4>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Proper medication adherence and tracking</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Duration: 30 min</span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Draft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Learner Progress</h3>
            <div className="space-y-4">
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">John Doe</h4>
                  <span className="text-sm text-gray-500">PWD-001</span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">3 of 4 modules completed</p>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Sarah Miller</h4>
                  <span className="text-sm text-gray-500">PWD-002</span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">All modules completed</p>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Mike Rodriguez</h4>
                  <span className="text-sm text-gray-500">PWD-003</span>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">1 of 4 modules completed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Management */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
          <h3 className="text-lg font-semibold mb-4">Content Library</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg text-center">
              <Upload className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-medium mb-2">Upload Content</h4>
              <p className="text-sm text-gray-600 mb-3">Add videos, documents, and interactive materials</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded border-2 border-dashed border-blue-700 text-sm">
                Upload Files
              </button>
            </div>
            
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg text-center">
              <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-medium mb-2">Create Assessment</h4>
              <p className="text-sm text-gray-600 mb-3">Build quizzes and certification tests</p>
              <button className="px-4 py-2 bg-green-600 text-white rounded border-2 border-dashed border-green-700 text-sm">
                Create Quiz
              </button>
            </div>
            
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg text-center">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-medium mb-2">Manage Certificates</h4>
              <p className="text-sm text-gray-600 mb-3">Design and issue completion certificates</p>
              <button className="px-4 py-2 bg-purple-600 text-white rounded border-2 border-dashed border-purple-700 text-sm">
                Certificate Builder
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Staff Chatbot Admin Page
  const StaffChatbot = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step Staff Portal</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('staff-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('staff-profiles')}
                className="text-gray-600 hover:text-blue-600"
              >
                PWID Profiles
              </button>
              <button 
                onClick={() => setCurrentPage('staff-analytics')}
                className="text-gray-600 hover:text-blue-600"
              >
                Analytics
              </button>
              <button 
                onClick={() => setCurrentPage('staff-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-chatbot')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Chatbot Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-support')}
                className="text-gray-600 hover:text-blue-600"
              >
                Support
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Chatbot Administration</h1>
          <p className="text-gray-600">Manage AI assistant knowledge base and responses</p>
        </div>

        {/* Chatbot Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Conversations</p>
                <p className="text-2xl font-bold text-blue-600">1,247</p>
              </div>
              <MessageCircle className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-green-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Resolution Rate</p>
                <p className="text-2xl font-bold text-green-600">87%</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-purple-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Knowledge Base Items</p>
                <p className="text-2xl font-bold text-purple-600">342</p>
              </div>
              <Database className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-yellow-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold text-yellow-600">1.2s</p>
              </div>
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Knowledge Base Management */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Knowledge Base</h3>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4 inline mr-2" />
                Add Entry
              </button>
            </div>
            <div className="space-y-3">
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Emergency Procedures</h4>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">What to do during a seizure emergency</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Emergency</span>
                  <span className="text-gray-500">Updated 2 days ago</span>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Safety Zone Information</h4>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">How safety zones work and their benefits</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Safety</span>
                  <span className="text-gray-500">Updated 1 week ago</span>
                </div>
              </div>
              
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Training Resources</h4>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">Available training modules and how to access them</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Education</span>
                  <span className="text-gray-500">Updated 3 days ago</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Recent Conversations</h3>
            <div className="space-y-3">
              <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">User: John D.</span>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">"What should I do if I feel a seizure coming?"</p>
                <p className="text-xs text-green-600">✓ Resolved automatically</p>
              </div>
              
              <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">User: Sarah M.</span>
                  <span className="text-xs text-gray-500">4 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">"How do I update my safety zone settings?"</p>
                <p className="text-xs text-green-600">✓ Resolved automatically</p>
              </div>
              
              <div className="p-3 border-2 border-dashed border-yellow-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">User: Mike R.</span>
                  <span className="text-xs text-gray-500">6 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">"I need help with medication reminders"</p>
                <p className="text-xs text-yellow-600">⚠ Escalated to staff</p>
              </div>
              
              <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">User: Emma T.</span>
                  <span className="text-xs text-gray-500">8 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">"Where can I find training materials?"</p>
                <p className="text-xs text-green-600">✓ Resolved automatically</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chatbot Configuration */}
        <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
          <h3 className="text-lg font-semibold mb-4">Chatbot Configuration</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
              <h4 className="font-medium mb-3">Response Categories</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Emergency</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">45 responses</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Safety</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">78 responses</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Education</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">123 responses</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Authentication</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">32 responses</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
              <h4 className="font-medium mb-3">Keywords Management</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Seizure triggers</span>
                  <button className="text-blue-600 hover:underline">Edit</button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Emergency help</span>
                  <button className="text-blue-600 hover:underline">Edit</button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Safety zones</span>
                  <button className="text-blue-600 hover:underline">Edit</button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Medication</span>
                  <button className="text-blue-600 hover:underline">Edit</button>
                </div>
              </div>
              <button className="w-full mt-3 py-2 border-2 border-dashed border-blue-300 text-blue-600 rounded hover:bg-blue-50 text-sm">
                Add Keywords
              </button>
            </div>
            
            <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg">
              <h4 className="font-medium mb-3">Analytics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Response Time</span>
                  <span className="font-medium">1.2s</span>
                </div>
                <div className="flex justify-between">
                  <span>Escalations</span>
                  <span className="font-medium">13%</span>
                </div>
                <div className="flex justify-between">
                  <span>User Satisfaction</span>
                  <span className="font-medium">4.2/5</span>
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded border-2 border-dashed border-blue-700 text-sm">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Staff Support Page
  const StaffSupport = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-dashed border-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SAFE-Step Staff Portal</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => setCurrentPage('staff-dashboard')}
                className="text-gray-600 hover:text-blue-600"
              >
                Dashboard
              </button>
              <button 
                onClick={() => setCurrentPage('staff-profiles')}
                className="text-gray-600 hover:text-blue-600"
              >
                PWID Profiles
              </button>
              <button 
                onClick={() => setCurrentPage('staff-analytics')}
                className="text-gray-600 hover:text-blue-600"
              >
                Analytics
              </button>
              <button 
                onClick={() => setCurrentPage('staff-training')}
                className="text-gray-600 hover:text-blue-600"
              >
                Training Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-chatbot')}
                className="text-gray-600 hover:text-blue-600"
              >
                Chatbot Admin
              </button>
              <button 
                onClick={() => setCurrentPage('staff-support')}
                className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
              >
                Support
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600" />
              <User className="w-8 h-8 text-gray-600" />
              <button 
                onClick={() => setCurrentPage('landing')}
                className="text-gray-600 hover:text-red-600"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="text-gray-600">Get help and submit technical support requests</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
            <h3 className="text-lg font-semibold mb-4">Submit Support Request</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Request Type</label>
                <select className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Technical Issue</option>
                  <option>Feature Request</option>
                  <option>Training Support</option>
                  <option>Account Access</option>
                  <option>Emergency Protocol</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                <select className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Brief description of the issue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  rows={4}
                  placeholder="Detailed description of the issue or request"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Click to upload files or drag and drop</p>
                  <p className="text-xs text-gray-500">Screenshots, logs, or relevant documents</p>
                </div>
              </div>
              <button className="w-full py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                Submit Request
              </button>
            </form>
          </div>

          {/* Quick Help & Resources */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-semibold mb-4">Quick Help</h3>
              <div className="space-y-3">
                <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">System Status</h4>
                      <p className="text-sm text-gray-600">Check current system status and known issues</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <div>
                      <h4 className="font-medium">User Manual</h4>
                      <p className="text-sm text-gray-600">Complete guide to using the SAFE-Step platform</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 border-2 border-dashed border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <div>
                      <h4 className="font-medium">Emergency Contacts</h4>
                      <p className="text-sm text-gray-600">24/7 emergency support and escalation procedures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border-2 border-dashed border-blue-300">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Technical Support</p>
                    <p className="text-sm text-gray-600">1-800-SAFE-TECH</p>
                    <p className="text-xs text-gray-500">Available 24/7 for critical issues</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-gray-600">support@safestep.org</p>
                    <p className="text-xs text-gray-500">Response within 4 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Knowledge Base</p>
                    <p className="text-sm text-gray-600">help.safestep.org</p>
                    <p className="text-xs text-gray-500">Self-service articles and tutorials</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="font-medium">Emergency Escalation</p>
                    <p className="text-sm text-gray-600">1-800-EMERGENCY</p>
                    <p className="text-xs text-gray-500">For critical system failures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Chatbot Component
  const ChatbotWidget = () => {
    if (!userType) return null;

    return (
      <>
        {/* Floating Chat Button */}
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors z-50 flex items-center justify-center"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div className={`fixed bottom-6 right-6 bg-white rounded-lg shadow-xl border-2 border-dashed border-blue-300 z-50 transition-all duration-300 ${
            isChatMinimized ? 'w-80 h-12' : 'w-80 h-96'
          }`}>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-600 text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">SAFE-Step Assistant</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsChatMinimized(!isChatMinimized)}
                  className="text-white hover:text-gray-200"
                >
                  {isChatMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isChatMinimized && (
              <>
                <div className="flex-1 p-4 h-64 overflow-y-auto">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {userType === 'user' 
                            ? "Hi! I'm here to help with your epilepsy management. How can I assist you today?"
                            : "Hello! I can help you with platform administration, user management, and system queries. What do you need help with?"
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {userType === 'user' 
                            ? "How do I update my safety zones?"
                            : "Show me the latest system analytics"
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">
                          {userType === 'user' 
                            ? "To update your safety zones, go to the Safety Zones page and click 'Add New Zone' or edit existing zones. You can set custom radius, notification preferences, and emergency contacts for each zone."
                            : "I can show you the analytics dashboard. Current metrics show 247 active PWID users, 87% resolution rate, and 12 alerts today. Would you like detailed reports on any specific area?"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg border-2 border-dashed border-blue-700 hover:bg-blue-700 transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </>
    );
  };

  // Main render logic
  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage />;
      case 'user-login':
        return <UserLoginPage />;
      case 'user-register':
        return <UserRegisterPage />;
      case 'user-dashboard':
        return <UserDashboard />;
      case 'user-monitoring':
        return <UserMonitoring />;
      case 'user-safety-zones':
        return <UserSafetyZones />;
      case 'user-training':
        return <UserTraining />;
      case 'user-profile':
        return <UserProfile />;
      case 'staff-login':
        return <StaffLoginPage />;
      case 'staff-dashboard':
        return <StaffDashboard />;
      case 'staff-profiles':
        return <StaffProfiles />;
      case 'staff-analytics':
        return <StaffAnalytics />;
      case 'staff-training':
        return <StaffTraining />;
      case 'staff-chatbot':
        return <StaffChatbot />;
      case 'staff-support':
        return <StaffSupport />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
      <ChatbotWidget />
    </div>
  );
}

export default App;