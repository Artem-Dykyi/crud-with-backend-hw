export const deleteStudents = async (studentDel)=>{
try {
    const options = {
        method: "DELETE",
        body: JSON.stringify(studentDel)
}
    return await fetch(`http://localhost:3000/students/${studentDel}`, options).then((response) =>
    response.json());
} catch (error) {
    console.error(error);
    } 
}