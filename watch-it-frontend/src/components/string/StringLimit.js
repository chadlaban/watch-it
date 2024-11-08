import React, { useState } from "react";
import DOMPurify from "dompurify";

const StringLimit = ({ review, limit }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleContent = () => {
    setExpanded(!isExpanded);
  };

  const sanitizedContent = DOMPurify.sanitize(review);
  const displayContent = isExpanded
    ? sanitizedContent
    : `${sanitizedContent.slice(0, limit)}...`;

  return (
    <div>
      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: displayContent }}
      />
      <button onClick={toggleContent} className="text-blue-500 hover:underline">
        {isExpanded ? "See less" : "See more"}
      </button>
    </div>
  );
};

export default StringLimit;
