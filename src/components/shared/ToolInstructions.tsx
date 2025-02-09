import React from 'react';
import { AlertTriangle, HelpCircle, MessageSquare } from 'lucide-react';

interface ToolInstructionsProps {
  title: string;
  disclaimer: string;
  instructions: string[];
  feedback: string;
}

export function ToolInstructions({ title, disclaimer, instructions, feedback }: ToolInstructionsProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Disclaimer</h3>
            <p className="text-gray-600">{disclaimer}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <HelpCircle className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Usage Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MessageSquare className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Feedback & Support</h3>
            <p className="text-gray-600">{feedback}</p>
          </div>
        </div>
      </div>
    </div>
  );
}