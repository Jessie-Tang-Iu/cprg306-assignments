import StudentComponent from "./student-component";

export default function PropsPage(){
    
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

    return(
        <main>
            <StudentComponent sName={studentOne.studentName} sAge={studentOne.studentAge} sCity={studentOne.address.city} />
        </main>
    );
}