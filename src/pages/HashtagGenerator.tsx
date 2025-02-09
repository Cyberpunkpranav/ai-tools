import React, { useState } from 'react';
import { Hash, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { GoogleGenerativeAI } from '@google/generative-ai';

export function HashtagGenerator() {
  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateHashtags = async () => {
    if (!content.trim()) {
      toast.error('Please enter some content');
      return;
    }

    setLoading(true);
    try {
      // Initialize Gemini API (you'll need to add your API key)
      const genAI = new GoogleGenerativeAI('YOUR_API_KEY');
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      const prompt = `Generate relevant hashtags for the following content. Return only hashtags separated by spaces:\n\n${content}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const hashtagText = response.text();
      
      setHashtags(hashtagText.split(' ').filter(tag => tag.startsWith('#')));
    } catch (error) {
      toast.error('Error generating hashtags. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Hashtag Generator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your content
            </label>
            <textarea
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your post content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button
            onClick={generateHashtags}
            disabled={!content.trim() || loading}
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Generating...
              </>
            ) : (
              <>
                <Hash className="mr-2 h-5 w-5" />
                Generate Hashtags
              </>
            )}
          </button>

          {hashtags.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Generated Hashtags:</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex flex-wrap gap-2">
                  {hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}