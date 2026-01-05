
import { GoogleGenAI } from "@google/genai";

export async function getDashboardInsights(data: any) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-3-flash-preview";

  const prompt = `
    Analyze the following SaaS revenue spreadsheet data and provide 3 brief, actionable business insights.
    Data summary: ${JSON.stringify(data)}
    Return the response as a simple list.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Unable to generate insights at this time. Please try again later.";
  }
}
