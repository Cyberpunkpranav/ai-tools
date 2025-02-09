import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'page';
  lastModified: string;
}

export function ContentManager() {
  const [content, setContent] = useState<ContentItem[]>([
    { id: '1', title: 'About Us', type: 'page', lastModified: '2024-03-15' },
    { id: '2', title: 'Welcome Blog Post', type: 'blog', lastModified: '2024-03-14' },
  ]);

  const [editingContent, setEditingContent] = useState<ContentItem | null>(null);
  const [editorContent, setEditorContent] = useState('');

  const handleEdit = (item: ContentItem) => {
    setEditingContent(item);
    setEditorContent('Content for ' + item.title); // In real app, fetch actual content
  };

  const handleSave = () => {
    // Save logic here
    setEditingContent(null);
    setEditorContent('');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Content Management</h1>
        <Link
          to="/admin/content/new"
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          New Content
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Modified
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {content.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{item.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              item.type === 'blog' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.lastModified}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => handleEdit(item)}
                              className="text-indigo-600 hover:text-indigo-900 mr-4"
                            >
                              <Edit className="w-5 h-5" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Modal */}
      {editingContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6">
            <h2 className="text-xl font-bold mb-4">Edit {editingContent.title}</h2>
            <textarea
              value={editorContent}
              onChange={(e) => setEditorContent(e.target.value)}
              className="w-full h-64 p-2 border rounded-md mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setEditingContent(null)}
                className="px-4 py-2 border rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}