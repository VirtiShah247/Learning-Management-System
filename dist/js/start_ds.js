function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "https://virtishah247.github.io/learning-management-system/public/html/quiz1_ds.html";
  }