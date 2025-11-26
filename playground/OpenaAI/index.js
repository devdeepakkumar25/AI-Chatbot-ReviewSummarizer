// import "dotenv/config";
import { OpenAI } from "openai/client.js";
import dotenv from "dotenv";
dotenv.config();

// console.log(process.env.OPENAI_API_KEY);

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const response = await client.responses.create({
  model: "gpt-4o-mini",
  // model: "gpt-5-nano",
  input: "write a stroy about a robot",
  temperature: 0.7,
  max_output_tokens: 50,
});

// console.log(response);

const stream = await client.responses.create({
  model: "gpt-4o-mini",
  input: "write a stroy about a robot",
  temperature: 0.7,
  max_output_tokens: 50,
  stream: true,
});

for await (const event of stream) {
  //   console.log(event);
  //   if (event.delta) console.log(event.delta);
  if (event.delta) process.stdout.write(event.delta);
}
