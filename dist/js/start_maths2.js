function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "https://virtishah247.github.io/Learning-Management-System/public/html/quiz1_maths2.html";
  }