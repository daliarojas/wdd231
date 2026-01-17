const courses = [
  { code: "WDD130", completed: true },
  { code: "WDD131", completed: true },
  { code: "WDD231", completed: false },
  { code: "CSE110", completed: true },
  { code: "CSE111", completed: false }
];

const courseList = document.getElementById("courseList");

function displayCourses(courseArray) {
  courseList.innerHTML = "";
  courseArray.forEach(course => {
    const div = document.createElement("div");
    div.className = `course ${course.completed ? "completed" : "not-completed"}`;
    div.textContent = course.code;
    courseList.appendChild(div);
  });
}

displayCourses(courses);

document.getElementById("allBtn").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wddBtn").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.startsWith("WDD")));
});

document.getElementById("cseBtn").addEventListener("click", () => {
  displayCourses(courses.filter(c => c.code.startsWith("CSE")));
});