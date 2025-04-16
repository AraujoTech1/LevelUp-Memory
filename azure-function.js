module.exports = async function (context, req) {
    const { systemPrompt, userPrompt } = req.body;
    const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
    
    const client = new OpenAIClient(
      "https://<seu-resource>.openai.azure.com/",
      new AzureKeyCredential("<sua-chave>")
    );
  
    const response = await client.getChatCompletions("<seu-deployment>", [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt }
    ]);
  
    context.res = {
      body: {
        feedback: response.choices[0].message.content
      }
    };
  }
  