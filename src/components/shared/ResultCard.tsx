import React from 'react';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

interface ResultCardProps {
  title: string;
  content: string;
  codeBlock?: boolean;
}

export function ResultCard({ title, content, codeBlock }: ResultCardProps) {
  const copyContent = () => {
    navigator.clipboard.writeText(content);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <button
          onClick={copyContent}
          className="flex items-center text-sm text-indigo-600 hover:text-indigo-500"
        >
          <Copy className="h-4 w-4 mr-1" />
          Copy
        </button>
      </div>
      <div className={`rounded-lg p-4 ${codeBlock ? 'bg-gray-900 text-white font-mono' : 'bg-gray-50'}`}>
        <pre className="whitespace-pre-wrap">{content}</pre>
      </div>
    </div>
  );
}