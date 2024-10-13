import React, { useState } from 'react';

const DreamWriter: React.FC = () => {
  const [dream, setDream] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dream submitted:', dream);
    alert('¡Tu sueño ha sido compartido con el universo!');
    setDream('');
  };

  return (
    <div className="bg-black bg-opacity-70 p-8 rounded-lg neon-border mt-12">
      <h2 className="text-5xl font-bold mb-6 text-center elegant-text">Comparte Tus Sueños</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={dream}
          onChange={(e) => setDream(e.target.value)}
          className="w-full h-40 p-4 rounded dream-input resize-none text-lg"
          placeholder="Escribe tu sueño aquí..."
        />
        <div className="text-center mt-6">
          <button
            type="submit"
            className="casino-button px-10 py-4 rounded-full text-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            Compartir Sueño
          </button>
        </div>
      </form>
    </div>
  );
};

export default DreamWriter;