

export default function StudentComponent(props){

    if( props.sAge.isNan() ){
        let age = 0;
    } else {
        let age = props.sAge;
    }

    return(
        <div>
            <h3>{props.sName}</h3>
            <p>Age: {props.sAge}</p>
            <p>City: {props.sCity}</p>
        </div>
    );
}