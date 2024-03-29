
let questions = [
  {
    id: 1,
    question: "A kilowatt hour is unit of?",
    answer: "Energy ",
    options: [
      "Energy ",
      "Power",
      "electric charge",
      "electric current"
    ]
  },
  {
    id: 2,
    question: "Multimeter can be used to measure",
    answer: "all of the above",
    options: [
      "current",
      "voltage",
      "resistor",
      "all of the above"
    ]
  },
  {
    id: 3,
    question: "Mesh analysis is based on",
    answer: "KVL",
    options: [
      "KCL",
      "KVL",
      "Both",
      "None of the above"
    ]
  },
  {
    id: 4,
    question: "The unit of conductivity is?",
    answer: "Siemens / m",
    options: [
      "mho",
      "Siemens-m",
      "Siemens / m",
      "mho-m"
    ]
    },
    {
    id: 5,
    question: "Pure DC voltage has ______ frequency.",
    answer: "0Hz",
    options: [
      "10Hz",
      "150Hz",
      "50Hz",
      "0Hz"
    ]
    }
];

let question_count = 0;
let points = 0;

window.onload = function() {
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
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
