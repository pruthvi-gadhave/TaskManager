import React from 'react' ;
import "./NewButton.css";

export default function NewButton() {
  return (
    <>
        <div className="btn-group  h-75">
    <button type="button" className="btn rounded-left-lg btn-sm btn-secondary border-0 menu-link  text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg pb-1" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
        </svg> New
    </button>
    <button type="button" className="btn btn-sm border-0 rounded-right-lg margin-left  menu-link btn-secondary dropdown-toggle dropdown-toggle-split text-white" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="sr-only"></span>
    </button>
</div>
    </>
  )
}
