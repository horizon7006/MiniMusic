import React from 'react';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">MiniMusic</h1>
      {/* UI goes here */}
    </div>
  );
  import React, { useState, useRef, useEffect } from 'react';

export default function AudioPlayer() {
  const [fileUrl, setFileUrl] = useState(null);
  const audioRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  useEffect(() => {
    if (audioRef.current && fileUrl) {
      audioRef.current.load();
      audioRef.current.play();
    }
    return () => {
      if (fileUrl) URL.revokeObjectURL(fileUrl);
    };
  }, [fileUrl]);

  return (
    <div className="p-4">
      <input type="file" accept=".mp3,.wav" onChange={handleFileChange} />
      {fileUrl && (
        <audio ref={audioRef} controls>
          <source src={fileUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}
}
