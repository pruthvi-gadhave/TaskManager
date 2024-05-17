import React from 'react';
import "./FilterSection.css";
export default function FiltersSection() {
    return (
        <div className='d-flex border-top'>

            <div className=" py-2 ps-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                </svg>
                <span className="filter-heading border-end pr-2 border-right">
                    <span className='pe-2'> FILTERS:</span>
                </span>
            </div>
            <div className='d-flex'>
                <select className="d-inline-block  border-0 ml-4 table-font-size ps-4" name="Status" id="selectStatus" >
                    <option disabled>Select Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Yet To Start">Yet To Start</option>
                    <option value="In Progress">In Progress</option>
                </select>
                <select className="d-inline-block  border-0 ml-4 table-font-size ps-4" name="priority" id="selectPriority">
                    <option disabled>Select Priority</option>
                    <option value="Very Low">Very Low</option>
                    <option value="High">High</option>
                </select>
            </div>
            
        </div> 
   
    )
}
