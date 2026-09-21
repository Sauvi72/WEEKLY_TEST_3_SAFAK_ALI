function employee(props){
    let status;
    if(props.employee.available){
        status="Available";
    }else{
        status="Busy";
    }
    return (
    <div className="EMPLOYEE">
        <h1>{props.employees.name}</h1>
        <h1>{props.employee.department}</h1>
        <h1>{props.employee.designation}</h1>
        <h1>{props.employee.exprecience}</h1>
        <h1>{props.employee.available}</h1>
        <h2>{props.status}</h2>

        <button onClick={()=> props.employee.available}>
            {props.employee.available ? "Available" : "Busy"};
        </button>
    </div>
    );
}
export default employee;