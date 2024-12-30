"use client";
import { useEffect } from "react";
import QuizSelection from "./components/QuizSelection";
import { quizData } from "./data/quizData";

export default function Home() {
  useEffect(() => {
    const fetchAllQuizzes = async () => {
      localStorage.setItem("quizzes", JSON.stringify(quizData.quizzes));
    };
    fetchAllQuizzes();
  }, []);

  return (
    <main className="min-h-screen p-12 ">
      <QuizSelection />
    </main>
  );
}
