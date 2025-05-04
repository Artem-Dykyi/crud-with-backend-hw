export const deleteStudents = (studentDel)=>{
    const options = {
        method: "DELETE",
        body: JSON.stringify(studentDel),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
    }
}
    return fetch(`http://localhost:3000/students/${studentDel}`, options).then((response) =>
    response.json()
  );
}