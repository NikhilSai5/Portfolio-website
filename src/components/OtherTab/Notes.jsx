import React, { useState, useEffect } from "react";

const Notes = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Retrieve saved content from localStorage on component mount
    const savedContent = localStorage.getItem("notepadContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleChange = (e) => {
    setContent(e.target.value);
    localStorage.setItem("notepadContent", e.target.value); // Save content to localStorage
  };

  return (
    <div className="notepad-container p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">NotePad</h2>
      <textarea
        value={content}
        onChange={handleChange}
        placeholder="Start typing..."
        className="notepad-typingarea w-full h-96 border rounded shadow-md focus:outline-none "
      ></textarea>
    </div>
  );
};

export default Notes;
