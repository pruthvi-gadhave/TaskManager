import React from 'react'

export default function TaskForm() {
  return (
    <div className='task-modal'>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content ">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add Task</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
            <div className='row'>
            <div className='col col-4'>
                <label className='mb-0 pb-1'>Task Number </label>
                <input type='text' className='form-control form-control-sm'></input>
            </div>
            <div className='col col-4'>
                <label className='mb-0 pb-1'>Title </label>
                <input type='text' className='form-control form-control-sm'></input>
            </div>
            <div className='col col-4'>
                <label className='mb-0 pb-1'>Due Date</label>
                <input type='text' className='form-control form-control-sm'></input>
            </div>
            </div>
            <div className='row pt-2'>
            <div className='col col-4'>
                <label className='mb-0 pb-1'>Assigned To </label>
                <input type='text' className='form-control form-control-sm'></input>
            </div>
            <div className='col col-4'>
                <label className='mb-0 pb-1'>Priority </label>
                <input type='text' className='form-control form-control-sm'></input>
            </div>
            </div>
            <hr/>
            <div>
            <label className='mb-0 pb-1'>Description </label>
                <textarea rows="3" className='col-lg-8 form-control' maxLength={10000} placeholder='max. 10000 character'></textarea>
            </div>
        </form>
      </div>
      <div className="modal-footer justify-content-start">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Add</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
