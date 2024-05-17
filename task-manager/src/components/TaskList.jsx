import React from 'react'
import Header from './Header'
import TaskHeader from './TaskHeader'
import FiltersSection from './FiltersSection'
import TasksTable from './TasksTable'
export default function TaskList() {
  return (
    <div>
      <Header/>
      <TaskHeader/>
      <FiltersSection/>
      <TasksTable/>
    </div>
  )
}
