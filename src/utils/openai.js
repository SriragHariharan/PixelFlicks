import OpenAI from 'openai';

const openAI_config = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_SECRET_KEY,
  dangerouslyAllowBrowser: true,
});

export default openAI_config;