import React from 'react';
import { Wrench, Settings, Activity } from 'lucide-react';

export function ToolManager() {
  const tools = [
    { id: 1, name: 'Prescription Reader', status: 'active', usage: 1234 },
    { id: 2, name: 'Code Generator', status: 'active', usage: 987 },
    { id: 3, name: 'Hashtag Generator', status: 'active', usage: 756 },
    { id: 4, name: 'Image Analyzer', status: 'active', usage: 432 },
    { id: 5, name: 'Email Generator', status: 'active', usage: 321 }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tool Management</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tool</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tools.map((tool) => (
                <tr key={tool.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Wrench className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="text-sm font-medium text-gray-900">{tool.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {tool.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Activity className="h-5 w-5 text-gray-400 mr-3" />
                      <div className="text-sm text-gray-500">{tool.usage} uses</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      <Settings className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}