

export default function StudentComponentNew( {studentObj}) {

    let {studentName:name, studentAge:age, address:{city}} = studentObj;

    return(
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}