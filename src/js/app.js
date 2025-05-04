import { getStudents } from "./getStudents";
import { addStudent } from "./addStudents";
import { deleteStudents } from "./deleteStudents";
import { creatStudent } from "./creatStudent";
import { updateStudents } from "./updateStudent";


document.querySelector("#get-students-btn").addEventListener("click", ()=> {
  getStudents().then((students) => {document.querySelector(".studentds-list").innerHTML = creatStudent(students)})
})

// getStudents().then((students) => {document.querySelector(".studentds-list").innerHTML = creatStudent(students)})

 
/////////////////////////////////////
document.addEventListener("click", (event)=>{
  if(event.target.classList.contains("update")){
    const studentId = event.target.dataset.id;
    const closeELe = event.target.closest("tr");

    document.querySelector("#edit-id").value = studentId
    document.querySelector("#edit-name").value = closeELe.querySelector(".stud-name").textContent;
    document.querySelector("#edit-age").value = closeELe.querySelector(".stud-age").textContent;
    document.querySelector("#edit-course").value = closeELe.querySelector(".stud-course").textContent;
    document.querySelector("#edit-skills").value = closeELe.querySelector(".stud-skills").textContent;
    document.querySelector("#edit-email").value = closeELe.querySelector(".stud-email").textContent;
    document.querySelector("#edit-isEnrolled").value = closeELe.querySelector(".stud-is-enrolled").textContent;

    document.querySelector("#edit-form").classList.remove("is-hidden")

    
  }
})



document.querySelector("#edit-student-form").addEventListener("submit", (event) => {
  event.preventDefault()

  const studentEditId = document.querySelector("#edit-id").value;
  const newUpdateStudent = {
    name: document.querySelector("#edit-name").value,
    age: document.querySelector("#edit-age").value,
    course: document.querySelector("#edit-course").value,
    skills: document.querySelector("#edit-skills").value,
    email: document.querySelector("#edit-email").value,
    isEnrolled: document.querySelector("#edit-isEnrolled").checked
  }

  updateStudents(studentEditId, newUpdateStudent)
  .then(() => getStudents())
  .then((students) => {
    document.querySelector(".studentds-list").innerHTML = creatStudent(students);
    document.querySelector("#edit-form").classList.add("is-hidden");
  });

})


//////////////////////////////////////////////////





document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const studentId = event.target.dataset.id;
    deleteStudents(studentId).then(() => {
      getStudents().then((students) => {document.querySelector(".studentds-list").innerHTML = creatStudent(students)});
    });
  }
});

document.querySelector("#add-student-form").addEventListener("submit", (event)=> {
  event.preventDefault()
  const studentName = event.currentTarget.querySelector("#name").value
  const studentAge = event.currentTarget.querySelector("#age").value
  const studentCourse = event.currentTarget.querySelector("#course").value
  const studentSkills = event.currentTarget.querySelector("#skills").value
  const studentEmail = event.currentTarget.querySelector("#email").value
  const studentIsEnrolled = event.currentTarget.querySelector("#isEnrolled").value

  const newPostStudent = {
    name: studentName,
    age: studentAge,
    course: studentCourse,
    skills: studentSkills,
    email: studentEmail,
    isEnrolled: studentIsEnrolled
  }
  addStudent(newPostStudent);
  getStudents().then((students) => {document.querySelector(".studentds-list").innerHTML = creatStudent(students)})

  event.currentTarget.querySelector("#name").value = ""
  event.currentTarget.querySelector("#age").value = ""
  event.currentTarget.querySelector("#course").value = ""
  event.currentTarget.querySelector("#skills").value = ""
  event.currentTarget.querySelector("#email").value = ""
  event.currentTarget.querySelector("#isEnrolled").value =""
})
