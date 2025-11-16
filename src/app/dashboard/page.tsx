import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { FaChartLine, FaUsers, FaShoppingCart, FaDollarSign } from 'react-icons/fa';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // Datos de ejemplo para las tarjetas
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      icon: FaDollarSign,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Total Users',
      value: '2,340',
      change: '+15.3%',
      icon: FaUsers,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8.2%',
      icon: FaShoppingCart,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Growth Rate',
      value: '34.5%',
      change: '+12.5%',
      icon: FaChartLine,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 pt-8 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, {session?.user?.name}! 👋
            </h1>
            <p className="text-indigo-100 text-lg">
              Here's what's happening with your account today.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`text-2xl ${stat.iconColor}`} />
                </div>
                <span className="text-green-600 text-sm font-semibold bg-green-50 px-3 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-500 text-sm font-medium mb-1">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Recent Activity
              </h2>
              <button className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                { action: 'New user registered', time: '2 minutes ago', type: 'user' },
                { action: 'Order #1234 completed', time: '15 minutes ago', type: 'order' },
                { action: 'Payment received', time: '1 hour ago', type: 'payment' },
                { action: 'New product added', time: '2 hours ago', type: 'product' }
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">{activity.action}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="space-y-3">
              {[
                { label: 'Create New Project', color: 'indigo' },
                { label: 'Add New User', color: 'blue' },
                { label: 'Generate Report', color: 'purple' },
                { label: 'Settings', color: 'gray' }
              ].map((action, index) => (
                <button
                  key={index}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 
                    ${action.color === 'indigo' ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg' :
                    action.color === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
                    action.color === 'purple' ? 'bg-purple-50 text-purple-700 hover:bg-purple-100' :
                    'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                Ready to get started?
              </h3>
              <p className="text-indigo-100">
                Explore our features and take your business to the next level.
              </p>
            </div>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}