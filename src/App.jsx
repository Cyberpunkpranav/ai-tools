import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { PrescriptionReader } from './pages/PrescriptionReader';
import { HashtagGenerator } from './pages/HashtagGenerator';
import { ImageAnalyzer } from './components/tools/ImageAnalyzer';
import { CodeGenerator } from './components/tools/CodeGenerator';
import { EmailGenerator } from './components/tools/EmailGenerator';
import { DocumentTranslator } from './components/tools/DocumentTranslator';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import Jobs from './pages/jobs';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prescription" element={<PrescriptionReader />} />
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path="/translator" element={<DocumentTranslator />} />
            <Route path="/hashtags" element={<HashtagGenerator />} />
            <Route path="/image-analyzer" element={<ImageAnalyzer />} />
            <Route path="/code-generator" element={<CodeGenerator />} />
            <Route path="/email-generator" element={<EmailGenerator />} />
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </BrowserRouter>
  );
}