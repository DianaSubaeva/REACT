import React from 'react';

export const LoadingPage: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      zIndex: 1000
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '80px',
          animation: 'bounce 2s ease-in-out infinite'
        }}>
          🏠
        </div>
        <p style={{
          color: 'white',
          fontSize: '18px',
          marginTop: '20px',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          Загружаем уютные предложения...
        </p>
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); }
          }
        `}</style>
      </div>
    </div>
  );
};