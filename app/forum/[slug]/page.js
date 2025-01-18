
import ChatForum from '@/components/ChatForum';
import { currentUser } from '@clerk/nextjs/server';


export default async function Page({ params }) {

  const user = await currentUser();
  //console.log(user);
  
  const slug = (await params).slug

  return <ChatForum slug={slug} clerkUSer={{id:user.id , name:user.fullName , token: user.publicMetadata.token , image: user.imageUrl}}/>
}