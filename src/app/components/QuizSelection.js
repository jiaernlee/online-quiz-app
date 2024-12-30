"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function QuizSelection() {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [topicFilter, setTopicFilter] = useState("");

  useEffect(() => {
    const allquiz = JSON.parse(localStorage.getItem("quizzes") || "[]");
    setQuizzes(allquiz);
    setFilteredQuizzes(allquiz);
  }, []);

  const handleFilterChange = (event) => {
    const selectedTopic = event.target.value;
    setTopicFilter(selectedTopic);

    if (selectedTopic === "") {
      setFilteredQuizzes(quizzes);
    } else {
      const filtered = quizzes.filter((quiz) =>
        quiz.topic.toLowerCase().includes(selectedTopic.toLowerCase())
      );
      setFilteredQuizzes(filtered);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Browse Quizzes</h1>

      <div className="mb-6">
        <input
          id="topic-filter"
          type="text"
          value={topicFilter}
          onChange={handleFilterChange}
          placeholder="Enter a topic... eg. science, maths"
          className="w-full p-2 border border-gray-300 rounded-lg text-black"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => (
            <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
              <div className="rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-transform duration-300 ease-in-out p-6 bg-white hover:scale-105">
                <h3 className="text-lg text-black font-semibold mb-2">
                  {quiz.title}
                </h3>
                <p className="text-sm text-gray-600">{quiz.description}</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No quizzes available for this topic</p>
        )}
      </div>
    </div>
  );
}
