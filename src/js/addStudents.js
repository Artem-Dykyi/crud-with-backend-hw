export const addStudent = async (newStudent) => {
    try {
        const options = {
            method: "POST",
            body: JSON.stringify(newStudent)
    }
        return await fetch("http://localhost:3000/students", options).then((response) =>
        response.json(""));
    } catch (error) {
        console.error(error);
        } 
    
}