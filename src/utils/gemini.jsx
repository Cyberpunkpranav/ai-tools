import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyDJi-ay4cc3cjwJTZ2eO0feCxYsa6-m1pM';
const MODEL = "gemini-1.5-pro";

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL });

export async function generateContent(prompt, image){
  try {
    if (image) {
      const imageData = await fileToGenerativePart(image);
      console.log(imageData);
    
      // const result = await model.generateContent([prompt, imageData]);
      // const response = await result.response;
      // return response.text();
    }
    
    // const result = await model.generateContent(prompt);
    // const response = await result.response;
    // return response.text();
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result?.toString().split(',')[1]);
    reader.readAsDataURL(file);
  });

  return {
    inlineData: { 
      data: await base64EncodedDataPromise,
      mimeType: file.type
    }
  };
}