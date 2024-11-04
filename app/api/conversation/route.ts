import { NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
// });

// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const { messages } = body;

//         if (!openai.apiKey) {
//             return new NextResponse("OpenAI API Key not configured", { status: 500 })
//         }
//         if (!messages) {
//             return new NextResponse("Messages are required", { status: 400 })
//         }

//         const response = await openai.chat.completions.create({
//             model: "gpt-3.5-turbo",
//             messages
//         });
//         return NextResponse.json(response.choices[0].message)
//     } catch (error) {
//         console.log("[CONVERSATION_ERROR]", error);
//         return new NextResponse("Internal error2", { status: 500 })
//     }
// }

import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

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
            messages
        });
        return NextResponse.json(completion.choices[0].message)
    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error);
        return new NextResponse("Internal error2", { status: 500 })
    }
}

