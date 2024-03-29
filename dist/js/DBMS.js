
let questions = [
    {
      id: 1,
      question: "____________ means to hide certain details of how data is stored and maintain.",
      answer: "Data Abstraction",
      options: [
        "Data Isolation",
        "Data Integrity",
        "Data Abstraction",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "Double diamond symbol is used for?",
      answer: "Entity Relationship type",
      options: [
        "Attribute",
        "Entity Relationship type",
        "Tuple",
        "Weak Entity Relationship type"
      ]
    },
    {
      id: 3,
      question: "We can use the following three rules to find logically implied functional dependencies. This collection of rules is called",
      answer: "Armstrong's axioms",
      options: [
        "Armstrong's axioms",
        "Cardinality",
        "Closure",
        "Attribute"
      ]
    },
    {
      id: 4,
      question: " Which of the listed transaction property states that only valid data will be written to the database?",
      answer: "Consistency",
      options: [
        "Durability",
        "Consistency",
        "Isolation",
        "All of the above"
      ]
    },
    {
      id: 5,
      question: " A search key containing more than one attribute is referred to as a _________ search key.",
      answer: "Composite",
      options: [
        "Simple",
        "Compound",
        "Secondary",
        "Composite"
      ]
    }
  
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function () {
    show(question_count);
  
  };
  
  function next() {
  
  
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "https://virtishah247.github.io/learning-management-system/public/html/end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function () {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  