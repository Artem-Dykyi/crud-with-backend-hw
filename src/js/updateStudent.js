export const updateStudents = (studentId, studentUpdate)=>{
    const options = {
        method: "PATCH",
        body: JSON.stringify(studentUpdate),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
    }
}
    return fetch(`http://localhost:3000/students/${studentId}`, options).then((response) =>
    response.json()
  );
}