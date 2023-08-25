"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className="flex gap-3 text-slate-600 text-sm mb-4"
                >
                  {message.role === "user" && (
                    <Avatar>
                      <AvatarFallback>DA</AvatarFallback>
                      <AvatarImage src="https://lh3.googleusercontent.com/a/AAcHTtd7MLmgt1daUD3Q8wwBLzU_yMBP3L7747mEWPllRP9hzUr9=s317-c-no" />
                    </Avatar>
                  )}

                  {message.role === "assistant" && (
                    <Avatar>
                      <AvatarFallback>IA</AvatarFallback>
                    
                    </Avatar>
                  )}

                  <p className="mt-2">{message.content}</p>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="How can I help you ?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
