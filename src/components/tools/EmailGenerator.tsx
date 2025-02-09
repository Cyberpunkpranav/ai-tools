import React, { useState } from 'react';
import { Mail, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { ResultCard } from '../shared/ResultCard';
import { generateContent } from '../../utils/gemini';

const EMAIL_TYPES = [
  { value: 'professional', label: 'Professional Business' },
  { value: 'formal', label: 'Formal Request' },
  { value: 'friendly', label: 'Friendly Business' },
  { value: 'followup', label: 'Follow-up' },
  { value: 'complaint', label: 'Complaint Resolution' },
  { value: 'thank-you', label: 'Thank You Note' }
];

export function EmailGenerator() {
  const [emailType, setEmailType] = useState('professional');
  const [subject, setSubject] = useState('');
  const [points, setPoints] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generateEmail = async () => {
    if (!subject.trim() || !points.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const prompt = `Generate a ${emailType} email with the following details:
        Subject: ${subject}
        Key Points: ${points}
        
        Please format the email with proper greeting, body, and closing.`;
      
      const result = await generateContent(prompt);
      setResult(result);
    } catch (error) {
      toast.error('Error generating email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">AI Email Generator</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Type
            </label>
            <select
              value={emailType}
              onChange={(e) => setEmailType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              {EMAIL_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter email subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Key Points
            </label>
            <textarea
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter the main points to include in the email (one per line)"
            />
          </div>

          <button
            onClick={generateEmail}
            disabled={loading || !subject.trim() || !points.trim()}
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Generating...
              </>
            ) : (
              <>
                <Mail className="mr-2 h-5 w-5" />
                Generate Email
              </>
            )}
          </button>

          {result && <ResultCard title="Generated Email" content={result} />}
        </div>
      </div>
    </div>
  );
}