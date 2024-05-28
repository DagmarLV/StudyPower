import { openai } from "../app.js";

export const summarize = async (req, res) => {
    const to_summarize = req.body.file ?? req.body.text;
    const percent = req.body.percent;
    const prompt = `Summarize the following text: ${to_summarize} to ${percent}% of its original length, only response with the resumen, dont include the original text.`;
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-4o",
    });

    //console.log(completion.choices[0]);
    return res.json({ summary: completion.choices[0].message.content });
};
