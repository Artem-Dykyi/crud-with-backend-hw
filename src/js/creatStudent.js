export const creatStudent = (students) => 
    students.map((student) => 
        `<tr>
            <td class="stud-id">${student.id}</td>
            <td class="stud-name">${student.name}</td>
            <td class="stud-age">${student.age}</td>
            <td class="stud-course">${student.course}</td>
            <td class="stud-skills">${student.skills}</td>
            <td class="stud-email">${student.email}</td>
            <td class="stud-is-enrolled">${student.isEnrolled}</td>
            <td class="">
                <button class="delete" id="delete" data-id="${student.id}" type="button">delete</button>
                <button class="update" id="update" data-id="${student.id}" type="button">update</button>
            </td>

        <tr>`
).join("")

