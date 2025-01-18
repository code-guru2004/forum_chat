import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const topics = [
  {
    id: 1,
    text: "Python",
    img: "/python.png",
    description: "Let's discuss about Python, a versatile and beginner-friendly language.",
    slug:"python-discuss",
  },
  {
    id: 2,
    text: "JavaScript",
    img: "/js.jpg",
    description: "Explore the world of JavaScript, the language of the web.",
    slug:"javascript-discuss",
  },
  {
    id: 3,
    text: "React",
    img: "/react.png",
    description: "Learn how to build dynamic and interactive user interfaces with React.",
    slug:"react-discuss",
  },
  {
    id: 4,
    text: "Node.js",
    img: "/node.jpg",
    description:"Build fast and scalable server-side applications with Node.js.",
    slug:"nodejs-discuss",
  },
  {
    id: 5,
    text: "SQL",
    img: "/sql.jpg",
    description: "Learn to work with relational databases using SQL.",
    slug:"sql-discuss",
  },
  
];

function Forums() {
  return (
    <div className="container mx-auto px-4 py-20 md:px-8">
    <h1 className="text-5xl font-semibold text-center mb-10">Discussion Forums</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {topics.length > 0 &&
        topics.map((topic) => (
          <div
            key={topic.id}
            className="shadow-lg  bg-slate-200 rounded-xl transition-all hover:bg-slate-300"
          >
            <Image
              src={topic.img}
              width={74}
              height={74}
              alt={topic.text}
              className="rounded-full mx-auto p-2 border-[1px]"
            />
            <h2 className="text-2xl text-center py-2">{topic.text}</h2>
            <p className="px-3 text-center text-slate-700 cursor-none">{topic.description}</p>
            <div className="flex justify-center py-2">
              <Button>
                <Link href={`/forum/${topic.slug}`}>Chat Now</Link>
              </Button>
            </div>
          </div>
        ))}
    </div>
  </div>
  );
}

export default Forums;
