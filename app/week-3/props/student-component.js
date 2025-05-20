

export default function StudentComponent(props){

    return(
        <div>
            <h3>{props.sName}</h3>
            <p>Age: {props.sAge}</p>
            <p>City: {props.sCity}</p>
        </div>
    );
}