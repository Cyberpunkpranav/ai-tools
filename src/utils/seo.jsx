// SEO metadata management
export const defaultMetadata = {
  title: 'AI Tools Hub - Powerful AI Tools for Everyone',
  description: 'Access powerful AI tools including prescription reader, hashtag generator, image analyzer, and more. Make your work easier with our AI-powered solutions.',
  keywords: 'AI tools, prescription reader, hashtag generator, image analysis, AI solutions',
};

export function updateMetadata(title, description) {
  document.title = title ? `${title} - AI Tools Hub` : defaultMetadata.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description || defaultMetadata.description);
}