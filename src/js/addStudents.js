export const addStudent = (newStudent) => {
    const options = {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
    }
}
    return fetch("http://localhost:3000/students", options).then((response) =>
    response.json("")
  );
}