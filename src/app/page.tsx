import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardPlus } from "lucide-react";
import { useBoards } from "@/lib/hooks/useBoards";

export default function Home() {
  const { createBoard } = useBoards();
  const handleCreateBoard = async () => {
    await createBoard();
  };
  return (
    <div className="">
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Trello Clone</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Organize your projects, collaborate with your team, and get things
          done. Just like Trello, but built by you.
        </p>
        <div className="flex gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3">
            <ClipboardPlus className="h-5 w-5" />
            Create a board
          </Button>
        </div>
      </main>
    </div>
  );
}
