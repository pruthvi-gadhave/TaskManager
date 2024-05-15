import React from 'react';
import "./Sidebar.css"
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <>
            <div>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark" id='LeftSidebar' >
                    <a href="/" className="text-center link-light text-decoration-none" previewlistener="true">
                      
                        <span className="fs-4">Task Manager</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <NavLink   activeClassName="active"  to="/" href="#"  className="nav-link " aria-current="page">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="29" fill="currentColor" className="bi bi-card-checklist me-1" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0" />
                                </svg>
                                Task
                            </NavLink >
                        </li>
                        <li>
                            <NavLink  to="/timetracker" href="#" activeClassName="active" className="nav-link link-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="35" fill="currentColor" className="bi bi-stopwatch-fill me-1" viewBox="0 0 16 16">
                                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0" />
                                </svg>
                                Time Tracking
                            </NavLink >
                        </li>

                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>mdo</strong>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
