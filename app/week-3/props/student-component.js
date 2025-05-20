

export default function StudentComponent(props){

    return(
        <div className="big green-400 m-5 p-3 border-2 border-bblue-500 w-40 rounded">
            <h3>{props.sName}</h3>
            <p>Age: {props.sAge}</p>
            <p>City: {props.sCity}</p>
        </div>
    );
}