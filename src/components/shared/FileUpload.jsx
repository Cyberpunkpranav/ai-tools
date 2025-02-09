import React from 'react';
import { Upload } from 'lucide-react';

export function FileUpload({ onFileSelect, accept, icon: Icon = Upload, label = 'Upload a file' }) {
  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
      <div className="space-y-1 text-center">
        <Icon className="mx-auto h-12 w-12 text-gray-400" />
        <div className="flex text-sm text-gray-600">
          <label className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">
            <span>{label}</span>
            <input
              type="file"
              className="sr-only"
              accept={accept}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}