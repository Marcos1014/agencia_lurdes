import React, { useState } from 'react';

const SlotMachine: React.FC = () => {
  const [slots, setSlots] = useState<number[]>([0, 0, 0, 0]);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const spin = () => {
    setSpinning(true);
    setMessage('');
    
    const spinDuration = 2000;
    const intervalDuration = 50;
    const intervals = spinDuration / intervalDuration;
    
    let currentInterval = 0;
    
    const spinInterval = setInterval(() => {
      setSlots(slots.map(() => Math.floor(Math.random() * 10)));
      currentInterval++;
      
      if (currentInterval >= intervals) {
        clearInterval(spinInterval);
        setSpinning(false);
        checkResult();
      }
    }, intervalDuration);
  };

  const checkResult = () => {
    const uniqueNumbers = new Set(slots);
    if (uniqueNumbers.size === 1) {
      setMessage('¡JACKPOT! ¡Todos los números coinciden!');
    } else if (uniqueNumbers.size === 2) {
      setMessage('¡Excelente! ¡Obtuviste un par!');
    } else {
      setMessage('¡Inténtalo de nuevo!');
    }
  };

  return (
    <div className="bg-black bg-opacity-70 p-8 rounded-lg neon-border">
      <h2 className="text-5xl font-bold mb-8 text-center elegant-text">Máquina de la Fortuna</h2>
      <div className="flex justify-center mb-8">
        {slots.map((slot, index) => (
          <div key={index} className="w-24 h-32 bg-gradient-to-b from-gold-200 to-gold-400 mx-2 flex items-center justify-center rounded-lg shadow-inner transform hover:scale-110 transition-transform duration-300">
            <span className="slot-number">{slot}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={spin}
          disabled={spinning}
          className="casino-button px-10 py-4 rounded-full text-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          {spinning ? 'Girando...' : '¡GIRAR!'}
        </button>
      </div>
      {message && (
        <p className="mt-6 text-3xl font-bold text-center elegant-text animate-pulse">{message}</p>
      )}
    </div>
  );
};

export default SlotMachine;