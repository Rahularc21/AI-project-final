import React, { useEffect, useState } from 'react';

interface MarkdownFormatterProps {
  content: string;
}

/**
 * Component for rendering formatted content with styling for eco-friendly product recommendations
 */
export const MarkdownFormatter: React.FC<MarkdownFormatterProps> = ({ content }) => {
  const [formattedContent, setFormattedContent] = useState('');
  
  useEffect(() => {
    // Process the content when it changes
    if (content) {
      setFormattedContent(processContent(content));
    }
  }, [content]);

  // Process the content to convert markdown-style formatting to HTML
  const processContent = (text: string): string => {
    if (!text) return '';
    
    // Handle different formatting cases
    let processed = text
      // Convert ** bold text ** to HTML with class for styling
      .replace(/\*\*([^*]+)\*\*/g, '<span class="text-green-400 font-bold">$1</span>')
      // Convert * italic text * to HTML
      .replace(/\*([^*]+)\*/g, '<span class="italic">$1</span>')
      // Handle numbered lists (1. Item, 2. Item)
      .replace(/^\d+\.\s+(.+)$/gm, '<li class="my-1">$1</li>')
      // Handle bullet points (* Item, - Item)
      .replace(/^[\*\-]\s+(.+)$/gm, '<li class="my-1">$1</li>')
      // Handle product names with green highlighting
      .replace(/\[([^\]]+)\]/g, '<span class="text-green-500 font-semibold">$1</span>')
      // Handle links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-400 underline hover:text-green-300" target="_blank">$1</a>');

    // Wrap lists in appropriate tags
    // First find all sequences of <li> tags
    const listPattern = /(<li[^>]*>.*?<\/li>[\s\n]*)+/gs;
    processed = processed.replace(listPattern, (match) => {
      // If the list contains numbered items, it's an ordered list
      if (/\d+\./.test(match)) {
        return `<ol class="list-decimal pl-5 my-3 space-y-1">${match}</ol>`;
      }
      return `<ul class="list-disc pl-5 my-3 space-y-1">${match}</ul>`;
    });

    // Handle paragraphs (split by newlines and wrap non-tag lines)
    const lines = processed.split('\n');
    processed = lines.map(line => {
      // Skip lines that are already wrapped in HTML tags
      if (line.trim().startsWith('<') && line.trim().endsWith('>')) {
        return line;
      }
      // Wrap other non-empty lines in paragraph tags
      if (line.trim()) {
        return `<p class="mb-2">${line}</p>`;
      }
      return '';
    }).join('');
    
    return processed;
  };

  // Render the processed HTML
  return (
    <div className="markdown-content text-gray-800 text-sm sm:text-base">
      <div 
        className="prose prose-sm sm:prose max-w-none"
        dangerouslySetInnerHTML={{ __html: formattedContent }}
      />
    </div>
  );
};

export default MarkdownFormatter;
