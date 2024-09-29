import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGnenrator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState();

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput('')
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== '' ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generator
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor='#fff' />
      </div>
    </div>
  );
};

export default QRCodeGnenrator;
