// App.js
import React from 'react';
import AffineEncryption from './components/AffineEncryption';
import AffineDecryption from './components/AffineDecryption';

function App() {
  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
          <div className="flex space-x-8">
              <AffineEncryption />
              <AffineDecryption />
          </div>
      </div>
  );
}

export default App;
