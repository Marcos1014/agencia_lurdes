import React from 'react';
import SlotMachine from './components/SlotMachine';
import DreamWriter from './components/DreamWriter';

function App() {
  return (
    <div className="min-h-screen bg-opacity-90 bg-black flex flex-col justify-center items-center py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-7xl font-bold elegant-text mb-4 floating sparkle">Agencia Lurdes</h1>
        <p className="text-2xl text-gold italic">Donde los sueños se hacen realidad</p>
      </header>
      <main className="w-full max-w-4xl mx-auto">
        <SlotMachine />
        <DreamWriter />
      </main>
      <footer className="mt-12 text-center text-sm text-gold">
        <p>&copy; 2024 Agencia Lurdes. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;