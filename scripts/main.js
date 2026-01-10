document.querySelector("footer p:last-child").textContent = 
    `Last Modification: ${document.lastModified}`;

const courses = [
    { name: "WDD 130", type: "WDD", credits: 2 },
    { name: "WDD 131", type: "WDD", credits: 2 },
    { name: "WDD 231", type: "WDD", credits: 2 },
    { name: "CSE 110", type: "CSE", credits: 3 },
    { name: "CSE 111", type: "CSE", credits: 3 }
];

const courseContainer = document.getElementById("course-container");
const totalCreditsDisplay = document.getElementById("total-credits");
const buttons = document.querySelectorAll(".filter-buttons button");

function displayCourses(filter = "All") {
    // Clear current display
    courseContainer.innerHTML = "";
    let totalCredits = 0;


    // Filter logic
    const filteredCourses = filter === "All" 
        ? courses 
        : courses.filter(course => course.type === filter);

    // Generate HTML and sum credits
    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.textContent = course.name;
        courseContainer.appendChild(card);
        
        totalCredits += course.credits;
    });

    // Update the credit footer
    totalCreditsDisplay.textContent = totalCredits;
}

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const category = e.target.textContent;
        displayCourses(category);
        
        // Optional: Style the active button
        buttons.forEach(btn => btn.style.background = "#bbb");
        e.target.style.background = "#999";
    });
});

// Initial call to show all courses on page load
displayCourses();

const course = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const menuButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('main-nav');

menuButton.addEventListener('click', () => {
    // Toggle a class that hides/shows the menu
    navMenu.classList.toggle('open');
    
    // Change the button text between 'X' and '☰' (hamburger)
    if (menuButton.textContent === 'X') {
        menuButton.textContent = '☰';
        navMenu.style.display = 'none';
    } else {
        menuButton.textContent = 'X';
        navMenu.style.display = 'block';
    }
});