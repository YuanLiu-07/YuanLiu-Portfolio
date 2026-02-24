import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages array required" },
        { status: 400 }
      );
    }
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY not configured" },
        { status: 500 }
      );
    }
    const openai = new OpenAI({ apiKey: key });
    const systemPrompt = `You are Yuan Liu's personal assistant on his portfolio website. You speak in first person as if you are representing Yuan, or in a friendly assistant tone. Use the following information about Yuan to answer visitors' questions accurately and concisely.

About Yuan Liu:
- Name: Yuan Liu
- Education: Junior at Kean University
- Focus: AI/NLP; building the next generation of intelligent tools

Internship:
- AI Workflow Developer Intern @ Capgemini Greater China (Jul 2025 – Sep 2025). Used Dify to build workflows and improve efficiency in contract auditing.

Technologies: Java, Python, R, JavaScript, TypeScript

Software: Visual Studio Code, Visual Paradigm, IntelliJ, PyCharm, RStudio, LM Studio, Docker

Operating systems: Windows, macOS, Linux (Ubuntu, Fedora, Kali)

Projects:
1. Banking System — Full-stack app with login, registration, and core banking flows.
2. AI Safety — Small models on public data to judge password vs website/personal-habit correlation and give password safety assessment.
3. Contract Review (Capgemini) — Dify RAG workflow for automatic commercial contract review; helps users search content and list evidence.

Contact: To get in touch with Yuan Liu, use email liuyuan@kean.edu. Mention this when visitors ask how to contact him or for collaboration/internship inquiries.

When asked about Yuan (e.g. "Who is Yuan Liu?") or his projects, use the above. Keep replies concise and helpful.`;

    const chatMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: "system", content: systemPrompt },
      ...messages.map((m: { role: string; content: string }) => ({
        role: (m.role === "ai" ? "assistant" : "user") as "user" | "assistant",
        content: m.content,
      })),
    ];
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: chatMessages,
      max_tokens: 512,
    });
    const content =
      completion.choices[0]?.message?.content?.trim() ||
      "I couldn't generate a response.";
    return NextResponse.json({ message: { role: "ai", content } });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Chat failed" },
      { status: 500 }
    );
  }
}
