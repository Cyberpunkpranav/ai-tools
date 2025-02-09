import React, { useState } from 'react';
import { FileText, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { FileUpload } from '../components/shared/FileUpload';
import { ResultCard } from '../components/shared/ResultCard';
import { ToolInstructions } from '../components/shared/ToolInstructions';
import { PrescriptionFeatures } from '../components/tools/prescription/PrescriptionFeatures';
import { PrescriptionStats } from '../components/tools/prescription/PrescriptionStats';
import { generateContent } from '../utils/gemini';
import { updateMetadata } from '../utils/seo';
import axios from 'axios';
import { fileToGenerativePart } from '../utils/imageTostring';

export function PrescriptionReader() {
  const [prompt,setprompt] = useState('')
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    updateMetadata(
      'Prescription Reader - AI Tools Hub',
      'Convert handwritten prescriptions to clear, readable text using AI technology.'
    );
  }, []);

  const analyzePrescription = async () => {
    if (!image) return;
    
    setLoading(true);
    try {
      // const imageData = await fileToGenerativePart(image);
      // console.log(result);
      const formData = new FormData();
      formData.append("prompt", prompt);
      formData.append("image", image);
      const response = await axios.post('http://localhost:8080/api/prescriptions',formData,{
        headers: { "Content-Type": "multipart/form-data" }
      }
      )
      console.log(response);
      
      setResult(response.data.response);
    } catch (error) {
      toast.error('Error analyzing prescription. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Prescription Reader</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Convert handwritten prescriptions into clear, digital text using advanced AI technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <FileUpload
              icon={FileText}
              accept="image/*"
              onFileSelect={setImage}
              label="Upload Prescription Image"
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
              onClick={analyzePrescription}
              disabled={!image || loading}
              className="w-full mt-4 flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Analyzing...
                </>
              ) : (
                'Analyze Prescription'
              )}
            </button>

            {result && <ResultCard title="Analysis Result" content={result} />}
          </div>

          <div className="space-y-6">
            <PrescriptionStats />
            <PrescriptionFeatures />
          </div>
        </div>

        <ToolInstructions
          title="Prescription Reader"
          disclaimer="This tool is designed to assist in reading prescriptions but should not be used as the sole source for medical information. Always consult with healthcare professionals to verify prescription details."
          instructions={[
            "Upload a clear, well-lit image of the prescription",
            "Ensure the handwriting is visible and not obscured",
            "Wait for the AI to process and analyze the image",
            "Review the generated text carefully",
            "Always verify the results with your healthcare provider"
          ]}
          feedback="We're constantly improving our prescription reading capabilities. If you encounter any issues or have suggestions, please contact our support team."
        />
      </div>
    </div>
  );
}