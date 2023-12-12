// AffineDecryption.js
import React, { useState } from 'react';

function AffineDecryption() {
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [decryptedMessage, setDecryptedMessage] = useState('');

    const isLetter = (char) => {
        return /[a-zA-Z]/.test(char);
    };

    const charToNumber = (char) => {
        return char.toUpperCase().charCodeAt(0) - 65; // A=0, B=1, ..., Z=25
    };

    const numberToChar = (num) => {
        return String.fromCharCode(num + 65); // 0=A, 1=B, ..., 25=Z
    };

    const modInverse = (a, m) => {
        for (let x = 1; x < m; x++) {
            if ((a * x) % m === 1) return x;
        }
        return 1;
    };

    const affineDecrypt = (text, a, b) => {
        const m = 26;
        let decryptedText = '';

        const aInverse = modInverse(a, m);

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (isLetter(char)) {
                const charNum = charToNumber(char);
                let decryptedCharNum = aInverse * (charNum - b);
                while (decryptedCharNum < 0) {
                    decryptedCharNum += m;
                }
                decryptedCharNum %= m;
                decryptedText += numberToChar(decryptedCharNum);
            } else {
                decryptedText += char; // Tidak mendekripsi karakter selain huruf
            }
        }

        return decryptedText;
    };

    const handleDecrypt = () => {
        const decryptedText = affineDecrypt(encryptedMessage, parseInt(a), parseInt(b));
        setDecryptedMessage(decryptedText);
    };

    return (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl mb-4">Affine Decryption</h2>
                <input type="text" value={encryptedMessage} onChange={(e) => setEncryptedMessage(e.target.value)} placeholder="Enter encrypted message" className="border border-gray-400 rounded-md py-2 px-3 mb-2 w-full" />
                <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Enter 'a' value" className="border border-gray-400 rounded-md py-2 px-3 mb-2 w-full" />
                <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter 'b' value" className="border border-gray-400 rounded-md py-2 px-3 mb-2 w-full" />
                <button onClick={handleDecrypt} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Decrypt</button>
                <p className="mt-4">Decrypted Message: {decryptedMessage}</p>
            </div>
        </div>
    );
}

export default AffineDecryption;
