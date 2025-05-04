export const updateStudents = async (studentId, studentUpdate)=>{
    try {
        const options = {
            method: "PATCH",
            body: JSON.stringify(studentUpdate)
    }
        return await fetch(`http://localhost:3000/students/${studentId}`, options).then((response) =>
        response.json());
    }catch (error) {
        console.error(error);
        } 
}