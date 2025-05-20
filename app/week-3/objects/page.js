


export default function ObjectPage(){

    let studentOne = {
        studentName: "Joe",
        studentAge: 24,
        hasGraduated: false,
        schedule: ["CPRG123","CPRG456","CPRG789","CPRG306"],
        address: {
            street: "123 Main St.",
            city: "Calgary",
            province: "AB"
        }
    }

    let {
        studentName: name, 
        studentAge: age,
        // schedule: [course1, course2, course3, course4]
        schedule: [,,,webDev2]
    } = studentOne;

    return(
        <main>
            <h1>Objects</h1>
            <h2>Dot Notation</h2>
            <p>Name: {studentOne.studentName}</p>
            <p>Age: {studentOne.studentAge}</p>
            <p>WebDev2: {studentOne.schedule[3]}</p>
            <p>City: {studentOne.address.city}</p>
            <br />
            <h2>Destructuring</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>WebDev2: {webDeb2}</p>
        </main>
    );
}