import React, { useState } from 'react';
import { Image, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { FileUpload } from '../shared/FileUpload';
import { ResultCard } from '../shared/ResultCard';
import { generateContent } from '../../utils/gemini';

export function ImageAnalyzer() {
  const [image, setImage] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeImage = async () => {
    if (!image) return;

    setLoading(true);
    try {
      const result = await generateContent(
        'Analyze this image in detail, describing its contents, style, and notable elements:',
        image
      );
      setAnalysis(result);
    } catch (error) {
      toast.error('Error analyzing image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Image Analyzer</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <FileUpload
          icon={Image}
          accept="image/*"
          onFileSelect={setImage}
          label="Upload Image for Analysis"
        />

        {image && (
          <div className="mt-4">
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        )}

        <button
          onClick={analyzeImage}
          disabled={!image || loading}
          className="w-full mt-4 flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Analyzing...
            </>
          ) : (
            'Analyze Image'
          )}
        </button>

        {analysis && <ResultCard title="Analysis Result" content={analysis} />}
      </div>
    </div>
  );
}