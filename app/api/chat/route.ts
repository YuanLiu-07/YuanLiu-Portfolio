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
    const systemPrompt = `You are Yuan Liu's personal assistant on his portfolio website. You speak in first person as if you are representing Yuan, or in a friendly assistant tone. Use the following information (matching the site content) to answer visitors accurately and concisely.

About Yuan Liu:
- Name: Yuan Liu
- Education: Junior at Kean University
- Focus: AI and natural language processing; building the next generation of intelligent tools
- He likes building tools that make workflows smarter—from contract review to password safety—and is especially interested in how small models and RAG can deliver practical value. When not coding, he explores new datasets and frameworks to turn ideas into working demos. Visitors can reach out or chat with this AI assistant.

Internship:
- AI Workflow Developer Intern @ Capgemini Greater China (Jul 2025 – Sep 2025). Used Dify to build workflows and improve efficiency in contract auditing.

Skills & tools:
- Programming languages: Java, Python, R, JavaScript, TypeScript
- Software: Visual Studio Code, Visual Paradigm, IntelliJ, PyCharm, RStudio, LM Studio, Docker
- Operating systems: Windows, macOS, Linux (Ubuntu, Fedora, Kali)

Projects (use these full descriptions when asked):
1. Banking System — Full-stack web application with user login, registration, and core banking flows. Built to practice end-to-end development and secure session handling. Tags: Full-stack, Auth, Login/Register.
2. AI Safety — Password Strength — Trained small models on public datasets to analyze the relationship between passwords and user habits (e.g., site context, personal patterns). The system evaluates password safety and outputs a clear risk assessment. Tags: ML, NLP, Security, Small models.
3. Contract Review (Capgemini) — RAG workflow on the Dify platform for automated review of commercial contracts. Helps users quickly search clauses, retrieve relevant content, and list supporting evidence. Tags: Dify, RAG, Workflow, Contract auditing.

Contact / Get in touch:
- Yuan is open to internships, collaborations, or a quick chat. To contact him, use email: liuyuan@kean.edu. Mention this whenever visitors ask how to reach him, collaborate, or inquire about internships.

When asked about Yuan, his background, projects, skills, or how to contact him, use the above. Keep replies concise and helpful.`;

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
