import React, { useState } from 'react';
import { FileText, Languages, Download, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { FileUpload } from '../shared/FileUpload';
import { ResultCard } from '../shared/ResultCard';
import { generateContent } from '../../utils/gemini';

const LANGUAGES = [
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
];

export function DocumentTranslator() {
  const [file, setFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState('');
  const [targetLang, setTargetLang] = useState('es');
  const [outputFormat, setOutputFormat] = useState('txt');
  const [translatedContent, setTranslatedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);
    
    // Read file content
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      setFileContent(text);
    };

    if (selectedFile.type === 'application/pdf') {
      // For PDF files, we'll extract text using AI
      try {
        setLoading(true);
        const result = await generateContent('Extract and return only the text content from this PDF:', selectedFile);
        setFileContent(result);
      } catch (error) {
        toast.error('Error reading PDF file');
      } finally {
        setLoading(false);
      }
    } else {
      // For text files, read directly
      reader.readAsText(selectedFile);
    }
  };

  const handleTranslate = async () => {
    if (!fileContent) {
      toast.error('Please upload a document first');
      return;
    }

    setLoading(true);
    try {
      const targetLanguage = LANGUAGES.find(lang => lang.code === targetLang)?.name;
      const prompt = `Translate the following text to ${targetLanguage}. Return only the translated text:\n\n${fileContent}`;
      
      const result = await generateContent(prompt);
      setTranslatedContent(result);
      toast.success('Translation completed!');
    } catch (error) {
      toast.error('Error translating document');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!translatedContent) return;

    const blob = new Blob([translatedContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `translated-document.${outputFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Document Translator</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <FileUpload
            icon={FileText}
            accept=".txt,.pdf"
            onFileSelect={handleFileSelect}
            label="Upload Document (TXT, PDF)"
          />

          {file && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">File Preview:</h3>
              <div className="max-h-48 overflow-y-auto whitespace-pre-wrap">
                {fileContent}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Language
              </label>
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Output Format
              </label>
              <select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="txt">Text File</option>
                <option value="pdf">PDF</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleTranslate}
            disabled={!fileContent || loading}
            className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                {file && !fileContent ? 'Reading file...' : 'Translating...'}
              </>
            ) : (
              <>
                <Languages className="mr-2 h-5 w-5" />
                Translate Document
              </>
            )}
          </button>

          {translatedContent && (
            <div className="space-y-4">
              <ResultCard
                title="Translation Preview"
                content={translatedContent}
              />
              <button
                onClick={handleDownload}
                className="w-full flex justify-center items-center px-4 py-2 border border-indigo-600 rounded-md text-indigo-600 hover:bg-indigo-50"
              >
                <Download className="mr-2 h-5 w-5" />
                Download {outputFormat.toUpperCase()}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}