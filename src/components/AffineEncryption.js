// AffineEncryption.js
import React, { useState } from 'react';

function AffineEncryption() {
    const [message, setMessage] = useState('');
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [encryptedMessage, setEncryptedMessage] = useState('');

    const isLetter = (char) => {
        return /[a-zA-Z]/.test(char);
    };

    const charToNumber = (char) => {
        return char.toUpperCase().charCodeAt(0) - 65; // A=0, B=1, ..., Z=25
    };

    const numberToChar = (num) => {
        return String.fromCharCode(num + 65); // 0=A, 1=B, ..., 25=Z
    };

    const affineEncrypt = (text, a, b) => {
        const m = 26; // Jumlah huruf dalam alfabet
        let encryptedText = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (isLetter(char)) {
                const charNum = charToNumber(char);
                const encryptedCharNum = (a * charNum + b) % m;
                encryptedText += numberToChar(encryptedCharNum);
            } else {
                encryptedText += char; // Tidak mengenkripsi karakter selain huruf
            }
        }

        return encryptedText;
    };

    const handleEncrypt = () => {
        const encryptedText = affineEncrypt(message, parseInt(a), parseInt(b));
        setEncryptedMessage(encryptedText);
    };

    return (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl mb-4">Affine Encryption</h2>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter message" className="border border-gray-400 rounded-md py-2 px-3 mb-2 w-full" />
                <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Enter 'a' value" className="border border-gray-400 rounded-md py-2 px-3 mb-2 w-full" />
                <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Enter 'b' value" className="border border-gray-400 rounded-md py-2 px-3 mb-2 w-full" />
                <button onClick={handleEncrypt} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Encrypt</button>
                <p className="mt-4">Encrypted Message: {encryptedMessage}</p>
            </div>
        </div>
    );
}

export default AffineEncryption;
