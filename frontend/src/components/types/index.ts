export type AgentType = 'multi' | 'web' | 'db';

export interface Message {
  type: 'user' | 'bot';
  content: string;
}

export interface Chat {
  id: string;
  name: string;
  messages: Message[];
  agentType: AgentType;
  userToken?: string;
}

export interface ExampleQuestions {
  [university: string]: string[];
}
