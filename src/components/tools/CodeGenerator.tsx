import React, { useState } from 'react';
import { Code2, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { ResultCard } from '../shared/ResultCard';
import { generateContent } from '../../utils/gemini';

export function CodeGenerator() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateCode = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a description');
      return;
    }

    setLoading(true);
    try {
      const result = await generateContent(
        `Generate code for the following request. Include comments and explanations:\n\n${prompt}`
      );
      setCode(result);
    } catch (error) {
      toast.error('Error generating code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Code Generator</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe what you want to build
          </label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="E.g., Create a function that sorts an array of objects by a specific property..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <button
          onClick={handleGenerateCode}
          disabled={!prompt.trim() || loading}
          className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Generating...
            </>
          ) : (
            <>
              <Code2 className="mr-2 h-5 w-5" />
              Generate Code
            </>
          )}
        </button>

        {code && <ResultCard title="Generated Code" content={code} codeBlock />}
      </div>
    </div>
  );
}