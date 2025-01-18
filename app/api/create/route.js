import { StreamChat } from "stream-chat";

// Define values.
const api_key = "h8n6umc8an99";
const api_secret = 'fxjkd5c4k5fc5dqnr23q3t4q83pwz2gnrbgughbs2am34t53hvb54zm6exwnnp3h';
const user_id = "user_2rkzjuQB9KJIyM96XYEK4IEM9tb";

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  // Create User Token
  // const token = serverClient.createToken(user_id);
  //   console.log(token);
  console.log("fdgfg");
  
    // const body = await request.json();
    // console.log(body);
    
  return Response.json({msg:"Hello"})
}
