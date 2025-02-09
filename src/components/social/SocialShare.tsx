import React from 'react';
import { Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface SocialShareProps {
  url: string;
  title: string;
}

export function SocialShare({ url, title }: SocialShareProps) {
  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    }
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="flex items-center space-x-4">
      {shareLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <social.icon className="h-5 w-5 text-gray-600" />
        </a>
      ))}
      <button
        onClick={copyLink}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <Link2 className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
}