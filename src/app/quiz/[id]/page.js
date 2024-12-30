"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function QuizPage({ params }) {
  const router = useRouter();
  const id = use(params).id;
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const quizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
    const selectedQuiz = quizzes.find((q) => q.id === parseInt(id));
    if (selectedQuiz) {
      setQuiz(selectedQuiz);
    }
  }, [id]);

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((curr) => curr + 1);
    } else {
      const results = {
        quizId: quiz.id,
        answers,
        timestamp: new Date().toISOString(),
      };
      const savedResults = JSON.parse(
        localStorage.getItem("quizResults") || "[]"
      );
      savedResults.push(results);
      localStorage.setItem("quizResults", JSON.stringify(savedResults));

      router.push(`/results/${quiz.id}`);
    }
  };

  if (!quiz) return <div>Loading...</div>;

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto p-8 text-black">
      <div className="w-full h-4 bg-gray-200 rounded-full mb-8">
        <div
          className="h-full bg-yellow-300 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">
            Question {currentQuestion + 1} / {quiz.questions.length}
          </h2>
          <p className="text-lg">{question.question}</p>
        </div>

        <div className="space-y-4 mb-6">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 text-left rounded-lg border transition-colors
                ${
                  answers[currentQuestion] === index
                    ? "bg-blue-100 border-blue-500 text-blue-700"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={answers[currentQuestion] === undefined}
          className="w-full py-3 px-4 bg-yellow-300 text-white rounded-lg
            hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed
            transition-colors"
        >
          {currentQuestion === quiz.questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
