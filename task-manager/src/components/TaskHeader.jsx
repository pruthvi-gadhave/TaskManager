import React from 'react';
import "./TaskHeader.css"
import NewButton from './NewButton';

export default function TaskHeader() {
  return (
    <div className='d-flex justify-content-between pt-4'>
      <div className='fs-5 p-2 all-tasks'>
        All Tasks
      </div>
      <div className='task-home-manipulate'>
        <NewButton />
        <div>
          <div className="dropdown  pe-2">
            <button className="btn btn-sm p-0 " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <button type="button" className="btn btn-sm btn-secondary  btn-sm  rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </button>
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Edit</a>
              <a className="dropdown-item" href="#">Clone</a>
              <a className="dropdown-item" href="#">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
