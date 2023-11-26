import OpenAI from 'openai';
import { OPENAI_Key } from './constants';

const openai = new OpenAI({
  apiKey:OPENAI_Key ,dangerouslyAllowBrowser: true  // defaults to process.env["OPENAI_API_KEY"]
});
export default openai ;