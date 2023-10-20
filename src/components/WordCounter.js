// WordCounter.js

import React, { useState } from 'react';
import './WordCounter.css';

const WordCounter = () => {
  const [paragraph, setParagraph] = useState('');

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  const wordCount = paragraph.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="word-counter-container">
      <textarea
        placeholder="Enter your paragraph here..."
        value={paragraph}
        onChange={handleParagraphChange}
        className="paragraph-input"
      />
      <div className="word-count">
        Word Count: {wordCount}
      </div>
    </div>
  );
};

export default WordCounter;
