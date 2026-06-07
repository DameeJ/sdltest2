import { useState } from "react";
import { Send } from "lucide-react";

export default function QuestionEngine() {

  const [messages, setMessages] =
    useState([
      {
        role: "assistant",
        content:
          "Welcome to SDL AI Quote Generator. What project would you like a quotation for?"
      }
    ]);

  const [input, setInput] =
    useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: input
      }
    ]);

    setInput("");
  };

  return (
    <div
      className="
      flex
      flex-col
      h-[75vh]
      "
    >
      {/* Conversation */}

      <div
        className="
        flex-1
        overflow-y-auto
        space-y-4
        p-4
        "
      >
        {messages.map(
          (message, index) => (
            <div
              key={index}
              className={`
              max-w-3xl
              p-4
              rounded-2xl

              ${
                message.role ===
                "assistant"
                  ? "bg-slate-800"
                  : "bg-orange-500 text-black ml-auto"
              }
              `}
            >
              {message.content}
            </div>
          )
        )}
      </div>

      {/* Input Area */}

      <div
        className="
        border-t
        border-slate-800
        p-4
        "
      >
        <div
          className="
          flex
          items-center
          gap-3
          bg-slate-900
          border
          border-slate-700
          rounded-3xl
          px-4
          py-3
          "
        >
          <textarea
            value={input}
            onChange={(e) =>
              setInput(
                e.target.value
              )
            }
            placeholder="Describe your project..."
            className="
            flex-1
            bg-transparent
            outline-none
            resize-none
            "
          />

          <button
            onClick={sendMessage}
            className="
            w-10
            h-10
            rounded-full
            bg-orange-500
            flex
            items-center
            justify-center
            "
          >
            <Send
              size={18}
              color="black"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
