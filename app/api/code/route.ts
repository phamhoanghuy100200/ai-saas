import { NextResponse } from 'next/server';
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const instructionMessage: Groq.Chat.ChatCompletionMessage = {
    role: "assistant",
    content: "You are a code generator.  Use code comments for explanations"
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!groq.apiKey) {
            return new NextResponse("OpenAI API Key not configured", { status: 500 })
        }
        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 })
        }

        const completion = await groq.chat.completions.create({
            model: "llama3-8b-8192",
            messages: [instructionMessage, ...messages]
        });
        return NextResponse.json(completion.choices[0].message)
    } catch (error) {
        console.log("[CODE]", error);
        return new NextResponse("Internal error2", { status: 500 })
    }
}

