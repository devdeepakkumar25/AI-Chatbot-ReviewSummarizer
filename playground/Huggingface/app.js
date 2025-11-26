import { InferenceClient } from "@huggingface/inference";
import dotenv from "dotenv";
dotenv.config();
const client = new InferenceClient(process.env.HF_TOKEN);

const chatCompletion = await client.chatCompletion({
  provider: "sambanova",
  model: "meta-llama/Llama-3.1-8B-Instruct",
  messages: [
    {
      role: "user",
      content: "What is the capital of India?",
    },
  ],
});

console.log(chatCompletion.choices[0].message);
