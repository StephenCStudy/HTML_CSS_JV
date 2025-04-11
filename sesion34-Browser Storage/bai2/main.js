let courses = JSON.parse(sessionStorage.getItem('courses')) || [
    {
        id: 1,
        content: 'Learn Javascript Session 01',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Anh Bách',
    },
    {
        id: 2,
        content: 'Learn Javascript Session 2',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Lâm',
    },
    {
        id: 3,
        content: 'Learn CSS Session 1',
        dueDate: '2023-04-17',
        status: 'Pending',
        assignedTo: 'Hiếu Ci Ớt Ớt',
    },
];

function renderCourses() {
    const courseList = document.getElementById('table-body');
    if (!courseList) {
        console.error('Element with id "table-body" not found.');
        return;
    }

    courseList.innerHTML = ''; 
    courses.forEach((course) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.content}</td>
            <td>${course.dueDate}</td>
            <td>${course.status}</td>
            <td>${course.assignedTo}</td>
            <td><button onclick="editC(${course.id})" class ="btn btn-warning">Edit</button></td>
            <td><button onclick="deleteC(${course.id})" class ="btn btn-danger">Delete</button></td>
        `;
        courseList.appendChild(row);
    });
}

function editC(id) {
    const course = courses.find((course) => course.id === id);
    let confirmEdit = confirm("Are you sure you want to edit this course?");
    if (!confirmEdit) return; 
    course.content = prompt('Enter new content:', course.content);
    course.dueDate = prompt('Enter new due date:', course.dueDate);
    course.status = prompt('Enter new status:', course.status);
    course.assignedTo = prompt('Enter new assigned to:', course.assignedTo);

    
    renderCourses();
    sessionStorage.setItem('courses', JSON.stringify(courses));
}

function deleteC(id) {
    const index = courses.findIndex((course) => course.id === id);
    let confirmDelete = confirm("Are you sure you want to delete this course?");
    if (!confirmDelete) return; 

    courses.splice(index, 1); 
    renderCourses();
    sessionStorage.setItem('courses', JSON.stringify(courses));
}

document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
});

function addCourse() {
    const newCourse = {
        id: courses.length + 1,
        content: document.getElementById('content').value,
        dueDate: document.getElementById('dueDate').value,
        status: document.getElementById('select').value,
        assignedTo: document.getElementById('name').value,
    };

    courses.push(newCourse);
    alert('Course added successfully!');
    renderCourses();
    sessionStorage.setItem('courses', JSON.stringify(courses));
}

let btn = document.getElementById('btn');
btn.addEventListener('click', (e)=>{
    e.preventDefault(); 
    addCourse();
}); 