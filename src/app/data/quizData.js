export const quizData = {
  quizzes: [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      topic: "Programming",
      description: "Test your knowledge of JavaScript basics",
      questions: [
        {
          id: 1,
          question: "What is the output of typeof null?",
          options: ["object", "null", "undefined", "number"],
          correctAnswer: 0,
        },
        {
          id: 2,
          question: "Which method removes the last element from an array?",
          options: ["shift()", "unshift()", "pop()", "push()"],
          correctAnswer: 2,
        },
        {
          id: 3,
          question: "How do you declare a strict mode in JavaScript?",
          options: [
            "'strict mode';",
            "'use strict';",
            "'enable strict';",
            "'strict enable';",
          ],
          correctAnswer: 1,
        },
        {
          id: 4,
          question: "Which operator is used for strict equality comparison?",
          options: ["==", "===", "=", "!="],
          correctAnswer: 1,
        },
        {
          id: 5,
          question:
            "What is the correct way to check if 'foo' is an instance of 'Foo'?",
          options: [
            "foo instanceof Foo",
            "foo.instanceof(Foo)",
            "foo.instanceOf(Foo)",
            "Foo.instanceof(foo)",
          ],
          correctAnswer: 0,
        },
      ],
    },
    {
      id: 2,
      title: "React Essentials",
      topic: "Programming",
      description: "Test your understanding of React core concepts",
      questions: [
        {
          id: 1,
          question:
            "What hook should you use to perform side effects in a component?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          correctAnswer: 1,
        },
        {
          id: 2,
          question: "What is the correct way to update state in React?",
          options: [
            "state.value = newValue",
            "this.state = newValue",
            "setState(newValue)",
            "updateState(newValue)",
          ],
          correctAnswer: 2,
        },
        {
          id: 3,
          question:
            "Which method is called when a component is removed from the DOM?",
          options: [
            "componentWillUnmount",
            "componentDidUnmount",
            "componentRemove",
            "componentDelete",
          ],
          correctAnswer: 0,
        },
        {
          id: 4,
          question: "What is the purpose of keys in React lists?",
          options: [
            "To style list items",
            "To add click events",
            "To uniquely identify elements",
            "To set list item order",
          ],
          correctAnswer: 2,
        },
        {
          id: 5,
          question: "Which hook replaces componentDidMount lifecycle method?",
          options: [
            "useEffect(() => {}, [])",
            "useState()",
            "useLayoutEffect()",
            "useContext()",
          ],
          correctAnswer: 0,
        },
      ],
    },
    {
      id: 3,
      title: "HTML5 & CSS3",
      topic: "Programming",
      description: "Test your knowledge of modern HTML and CSS",
      questions: [
        {
          id: 1,
          question:
            "Which HTML5 element is used to specify a footer for a document or section?",
          options: ["<bottom>", "<footer>", "<end>", "<section>"],
          correctAnswer: 1,
        },
        {
          id: 2,
          question:
            "What is the correct CSS syntax for making all <p> elements bold?",
          options: [
            "p {font-weight: bold;}",
            "p {text-weight: bold;}",
            "<p style='font-weight: bold'>",
            "p {bold: true;}",
          ],
          correctAnswer: 0,
        },
        {
          id: 3,
          question: "Which CSS property is used to control the text size?",
          options: ["text-size", "font-style", "text-style", "font-size"],
          correctAnswer: 3,
        },
        {
          id: 4,
          question: "What is the purpose of the HTML5 <canvas> element?",
          options: [
            "To display database tables",
            "To create draggable elements",
            "To draw graphics via JavaScript",
            "To show transparent images",
          ],
          correctAnswer: 2,
        },
        {
          id: 5,
          question: "Which CSS property is used to make a flexible container?",
          options: ["flex", "display: flex", "flexible", "display: flexible"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: 4,
      title: "Science Quiz",
      topic: "Science",
      description: "Test your knowledge of basic science concepts.",
      questions: [
        {
          id: 1,
          question: "What is the boiling point of water at sea level?",
          options: ["90°C", "100°C", "110°C", "120°C"],
          answer: "1",
        },
        {
          id: 2,
          question: "What planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          answer: "1",
        },
        {
          id: 3,
          question: "What gas do plants primarily use for photosynthesis?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
          answer: "1",
        },
        {
          id: 4,
          question: "What is the chemical symbol for water?",
          options: ["HO", "H2O", "O2H", "H2O2"],
          answer: "1",
        },
        {
          id: 5,
          question: "What is the primary source of energy for Earth?",
          options: ["The Moon", "The Sun", "Volcanoes", "Fossil Fuels"],
          answer: "1",
        },
      ],
    },
    {
      id: 5,
      title: "Mathematics Quiz",
      topic: "Mathematics",
      description: "Challenge your math skills with this quiz.",
      questions: [
        {
          id: 1,
          question: "What is the square root of 64?",
          options: ["6", "7", "8", "9"],
          answer: "2",
        },
        {
          id: 2,
          question: "What is 15% of 200?",
          options: ["20", "25", "30", "35"],
          answer: "2",
        },
        {
          id: 3,
          question: "Solve: 12 × 12",
          options: ["124", "144", "132", "156"],
          answer: "1",
        },
        {
          id: 4,
          question: "What is the value of π (pi) approximately?",
          options: ["3.14", "3.41", "2.17", "3.24"],
          answer: "0",
        },
        {
          id: 5,
          question: "What is 9 cubed?",
          options: ["81", "243", "729", "27"],
          answer: "2",
        },
      ],
    },
  ],
};
