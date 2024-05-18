import React from 'react' ;
import './TasksTable.css';

export default function TasksTable() {
  return (
    <div>
        <table class="table tasks-table">
  <thead className='table-light'>
    <tr className='tasks-table-heading'>
      <th scope="col ">
      <input type='checkbox'/>
      </th>
      <th scope="col">
    
      TASK NUMBER
      </th>
      <th scope="col">TITLE</th>
      <th scope="col">ASSIGNED TO</th>
      <th scope="col">PRIORITY</th>
      <th scope="col">DUE DATE</th>
      <th scope="col">COMPLETION PERCENATAGE</th>
    </tr>
  </thead>
  <tbody>
     <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</table>
    </div>
  )
}
