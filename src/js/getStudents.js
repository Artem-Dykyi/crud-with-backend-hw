export const getStudents = async () => {
    try{
        return await fetch("http://localhost:3000/students").then((response) => 
            response.json());
    } catch (error) {
        console.error(error);
        } 
}
    