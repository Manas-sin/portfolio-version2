import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILLS, EDUCATION_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Manas Singh. Your goal is to answer questions about Manas's professional background based STRICTLY on his resume data provided below.

Resume Data:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Summary: ${PERSONAL_INFO.summary}
Skills: ${SKILLS.join(', ')}
Experience: ${JSON.stringify(EXPERIENCE_DATA)}
Education: ${JSON.stringify(EDUCATION_DATA)}
Contact: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.linkedin}

Guidelines:
1. Speak in the first person (as if you are Manas) or third person, but keep it professional and polite.
2. If asked about a skill not listed, say you don't have that specific experience listed but are open to learning.
3. Highlight specific metrics (e.g., "10K+ concurrent players", "20% cost reduction") when relevant.
4. Keep answers concise.
5. If the user asks to "hire you" or for contact info, provide the email.
`;

export const chatWithResume = async (userMessage: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  try {
    const model = ai.models.generateContent;
    
    // Construct the conversation history for context
    // We append the new message to the history logic in the UI state, 
    // but for a simple single-turn request or limited history, we can just send the prompt with context.
    // For better chat consistency, we use the system instruction.

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history, // Previous conversation
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble accessing my memory banks. Please check the API key or try again later.";
  }
};