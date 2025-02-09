import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart, 
  Wrench,
  MessageSquare,
  FileText,
  Menu
} from 'lucide-react';
import { Overview } from './Overview';
import { ContentManager } from './ContentManager';
import { UserManager } from './UserManager';
import { ToolManager } from './ToolManager';
import { Analytics } from './Analytics';
import { AdminSettings } from './AdminSettings';

export function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const location = useLocation();

  const navigation = [
    { name: 'Overview', icon: LayoutDashboard, to: '/admin' },
    { name: 'Content', icon: FileText, to: '/admin/content' },
    { name: 'Users', icon: Users, to: '/admin/users' },
    { name: 'Tools', icon: Wrench, to: '/admin/tools' },
    { name: 'Analytics', icon: BarChart, to: '/admin/analytics' },
    { name: 'Settings', icon: Settings, to: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50">
        <div className={`flex h-full transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
          <div className="flex flex-col flex-1 min-h-0 bg-white border-r border-gray-200">
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <span className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>Admin Panel</span>
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-md hover:bg-gray-100">
                <Menu className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`flex items-center px-3 py-2 rounded-md ${
                      isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-6 h-6 mr-3" />
                    <span className={!isSidebarOpen ? 'hidden' : ''}>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <div className="p-6">
          <Routes>
            <Route index element={<Overview />} />
            <Route path="content/*" element={<ContentManager />} />
            <Route path="users" element={<UserManager />} />
            <Route path="tools" element={<ToolManager />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}