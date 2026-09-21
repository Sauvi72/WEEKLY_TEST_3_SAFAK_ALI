import { useState } from 'react'
import employee from './component/employee';
import './App.css'
import employees from './numbers/data';

function App() {
  const [employee,setEmployee] = useState(employees);


  let total = employees.length;
  let available=0;
  let busy=0;
  for(let i=0; i<total; i++){
    if(employees.available){
      available++;
    }else{
      busy++;
    }
  }
  return (
    <div className='staff'>
      <h1>THE EMPLOYEE DIRECTORY</h1>
      <p>Total employees :{total}</p>
      <p>Total available :{busy}</p>
      <p>Total busy :{available}</p>
        <div className="employee-list">
        {employees.map((employee) => (
          <employeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default App;
