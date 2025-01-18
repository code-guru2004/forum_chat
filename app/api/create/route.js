import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

// Define values.
const api_key = "h8n6umc8an99";
const api_secret =
  "fxjkd5c4k5fc5dqnr23q3t4q83pwz2gnrbgughbs2am34t53hvb54zm6exwnnp3h";
// const user_id = "user_2rkzjuQB9KJIyM96XYEK4IEM9tb";

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();
  //console.log(user?.data?.id);
  // Create User Token
  const token = serverClient.createToken(user?.data?.id);
  console.log(token);
  
  const client = await clerkClient();
  await serverClient.upsertUser({id:user.data?.id});

  await client.users.updateUserMetadata(user?.data?.id, {
    publicMetadata: {
      token:token
    },
  });

  //Give access to user
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const slugs = ["python-discuss-new", "javascript-discuss-new", "react-discuss-new", "nodejs-discuss-new", "sql-discuss-new","hetc","the-Boyz-01"] ;
  slugs.forEach(async (item)=>{
    const channel = serverClient.channel('messaging', item, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalizeFirstLetter(item.replace(/-/g, " ")),
      created_by_id: user.data?.id
    });
    await channel.create();
    channel.addMembers([user.data?.id])
  })
  return Response.json({ msg: "Hello" });
}
