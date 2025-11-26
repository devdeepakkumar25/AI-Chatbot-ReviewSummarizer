// // // const {get_encoding} = require('tiktoken');
// // import { get_encoding } from "tiktoken";

// // const encoding = get_encoding("cl100k_base");
// // const tokens = encoding.encode(
// //   "Hello World! This is the first test of my code"
// // );

// // console.log(tokens);

// import { get_encoding } from "tiktoken";

// const encoding = get_encoding("cl100k_base");

// const tokens = encoding.encode(
//   "Hello world! This is the first test of tikeoken"
// );

// console.log(tokens);

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// const response = await client.responses.create({
//   model: "gpt-4o-mini",
//   input: "Write a story about a robot",
//   temperature: 0.7,
//   max_output_tokens: 50,
// });

// console.log(response)

const stream = await client.responses.create({
  model: "gpt-4o-mini",
  input: "Write a story about a robot",
  temperature: 0.7,
  max_output_tokens: 250,
  stream: true,
});

for await (const event of stream) {
  // if (event.delta) console.log(event.delta);
  if (event.delta) process.stdout.write(event.delta);
}
