"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { use } from "react";

export default function ResultsPage({ params }) {
  const id = use(params).id;
  const [quiz, setQuiz] = useState(null);
  const [results, setResults] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  useEffect(() => {
    const quizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
    const selectedQuiz = quizzes.find((q) => q.id === parseInt(id));

    const savedResults = JSON.parse(
      localStorage.getItem("quizResults") || "[]"
    );
    const quizResults = savedResults.find((r) => r.quizId === parseInt(id));

    setQuiz(selectedQuiz);
    setResults(quizResults);
  }, [id]);

  if (!quiz || !results) return <div>Loading...</div>;

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === results.answers[index]) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = (score / quiz.questions.length) * 100;

  const toggleQuestion = (index) => {
    setExpandedQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 text-black">
      <div className="text-black dark:text-white p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
        <div className="text-xl">
          Title: <b>{quiz.title}</b>
          <br />
          Score:{" "}
          <b>
            {score}/{quiz.questions.length} ({percentage.toFixed(1)}
            %)
          </b>
        </div>
      </div>

      <div className="space-y-6">
        {quiz.questions.map((question, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm p-6"
          >
            <h3
              onClick={() => toggleQuestion(index)}
              className="font-semibold mb-4 cursor-pointer"
            >
              Question {index + 1}: {question.question}
              <span className="ml-2 text-blue-600">
                {expandedQuestion === index ? "▲" : "▼"}
              </span>
            </h3>
            {expandedQuestion === index && (
              <div className="space-y-2">
                <p>
                  Your answer:{" "}
                  <span
                    className={
                      results.answers[index] === question.correctAnswer
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {question.options[results.answers[index]]}
                  </span>
                </p>
                <p>
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold">Options:</h4>
                  <ul className="list-disc pl-6">
                    {question.options.map((option, i) => (
                      <li
                        key={i}
                        className={
                          i === question.correctAnswer
                            ? "text-green-600"
                            : i === results.answers[index]
                            ? "text-red-600"
                            : ""
                        }
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/">
          <button
            className="py-3 px-6 bg-blue-600 text-white rounded-lg 
            hover:bg-blue-700 transition-colors"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
