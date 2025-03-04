import React from 'react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      <div className="space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              max-w-[80%] p-4 rounded-2xl shadow-sm
              ${message.type === 'user'
                ? 'bg-blue-600 text-white rounded-br-none'
                : message.isLoading 
                  ? 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 rounded-bl-none border border-gray-200/50'
                  : 'bg-gray-100 text-gray-900 rounded-bl-none border border-gray-200'
              }
            `}>
              {message.isLoading ? (
                <div className="flex items-center gap-3">
                  <span className="text-[15px] font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Yanıtınız hazırlanıyor
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              ) : (
                <div className="whitespace-pre-wrap text-[15px]">
                  {message.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
