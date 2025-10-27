
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // Here, we'll rely on the environment providing the key.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';

const systemInstruction = `You are PERLAS, a helpful and compassionate AI assistant for Overseas Filipino Workers (OFWs). Your name stands for Philippine Emergency Rescue Lifeline Application System. Your goal is to provide clear, supportive, and accurate information regarding safety, finance, and well-being. Always prioritize the user's safety and provide actionable advice. Keep your tone professional yet empathetic. Do not provide medical or legal advice, but you can give general information and suggest consulting professionals. Format your responses with markdown for better readability.`;

export const getAssistantResponse = async (history: ChatMessage[], newUserMessage: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction,
      },
      // Note: The Gemini API expects a specific format. We'll simulate this.
      // In a real chat implementation, you would format the full history.
      // For this simple case, we'll just send the new message.
    });
    
    const response = await chat.sendMessage({ message: newUserMessage });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, but I'm having trouble connecting right now. Please check your connection or try again later.";
  }
};
