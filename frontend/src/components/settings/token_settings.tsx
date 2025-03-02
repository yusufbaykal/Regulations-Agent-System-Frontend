import React, { useState } from 'react';
import { FaSave, FaTimes, FaKey, FaInfoCircle } from 'react-icons/fa';

interface TokenSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  currentToken: string;
  onSaveToken: (token: string) => void;
}

const TokenSettings: React.FC<TokenSettingsProps> = ({
  isOpen,
  onClose,
  currentToken,
  onSaveToken
}) => {
  const [token, setToken] = useState(currentToken || '');
  const [showInfo, setShowInfo] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveToken(token);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl" 
           onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <FaKey className="mr-2 text-blue-600" />
            Hugging Face API Token
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
          >
            <FaTimes size={20} />
          </button>
        </div>
        
        <div className="mb-4">
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center mb-2"
          >
            <FaInfoCircle className="mr-1" /> 
            Token hakkında bilgi
          </button>
          
          {showInfo && (
            <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-800 mb-3">
              <p className="mb-2">Kendi Hugging Face API token'ınızı kullanarak:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>İstekleriniz asenkron olarak işlenebilir</li>
                <li>Kendi API kotanızı kullanabilirsiniz</li>
                <li>Daha hızlı yanıt alabilirsiniz</li>
              </ul>
              <p className="mt-2">
                Token girmezseniz, sistem varsayılan token'ı kullanacaktır.
              </p>
              <a 
                href="https://huggingface.co/settings/tokens" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-2 text-blue-600 hover:underline"
              >
                Hugging Face'den token almak için tıklayın
              </a>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-1">
              API Token
            </label>
            <input
              type="password"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="hf_..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                setToken('');
                onSaveToken('');
                onClose();
              }}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Token'ı Temizle
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
            >
              <FaSave className="mr-1" /> Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TokenSettings; 