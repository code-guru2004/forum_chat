"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/v2/index.css";

function ChatForum({ slug, clerkUSer }) {

  const apiKey = "h8n6umc8an99";
  const userId = clerkUSer.id;
  const userName = clerkUSer.name;
  const userToken = clerkUSer.token;

  const user = {
    id: userId,
    name: userName,
    image: clerkUSer.image,
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

   const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: capitalizeFirstLetter(slug.replace(/-/g, " ")),
      members: [userId],
    });

    setChannel(channel);
    
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
  );

}

export default ChatForum;
 