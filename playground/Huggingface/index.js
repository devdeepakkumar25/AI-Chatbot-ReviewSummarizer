// const inferenceClient = new InferenceClient(HF_TOKEN);
// const response = await inferenceClient.chatCompletion({
//      model: "mistralai/Mistral-7B-Instruct-v0.3",  // ✅ HuggingFace Mistral model
//      messages: [
//          {
//              role: "system",
//              content: "You are a helpful AI assistant.",
//             },
//             {
//            role: "user",
//            content: "what is the capital of india",
//         },
//      ],
//      max_tokens: 200,
//      temperature: 0.7,
//   });

//   console.log(response);

import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(HF_TOKEN);

const chatCompletion = await client.chatCompletion({
  // provider: "novita",
  provider: "sambanova",
  model: "meta-llama/Llama-3.1-8B-Instruct",
  messages: [
    {
      role: "user",
      content:
        "The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.",

      // content: "What is the capital of India?",
    },
  ],
});

console.log(chatCompletion.choices[0].message);

// import { InferenceClient } from "@huggingface/inference";

// Load token from environment variable (.env file recommended)
// const client = new InferenceClient(process.env.HF_TOKEN);

async function run() {
  try {
    const chatCompletion = await client.chatCompletion({
      provider: "novita", // optional (you can remove this if not using a provider)
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "What is the capital of France?",
        },
      ],

      // 🧠 Optional parameters:
      max_tokens: 200, // limit the response length
      temperature: 0.7, // randomness (0 = factual, 1 = creative)
      top_p: 0.9, // nucleus sampling
      repetition_penalty: 1.1, // discourage repeating phrases
      stop: ["\n\n"], // optional stop sequence
    });

    console.log(chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// run();
