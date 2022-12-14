import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Navigate, NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';

function Todomain() {

  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task 
  ///////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  // Delete task 
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  }
  const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return (
      <>

        {/* <Nav className="me-auto" style={{position: "absolute", top: -42,marginLeft:600}}>
        <Button type="primary" >
          <Nav.Link style={{ padding: 0 }} href="/works">Back</Nav.Link>
        </Button>
      </Nav> */}
        {/* Add Task */}
        <div className="row">
          <div className="col">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className="btn btn-lg"
              style={{ background: "#00c0d7" }}
            >Add Task</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
      <>

        {toDo && toDo
          .sort((a, b) => a.id > b.id ? 1 : -1)
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? 'done' : ''}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    {task.status ? null : (
                      <span title="Edit"
                        onClick={() => setUpdateData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false
                        })}
                      >
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="Delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            )
          })
        }
      </>
    )
  }
  const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return (
      <>
        {/* Update Task */}
        <div className="row">
          <div className="col">
            <input
              value={updateData && updateData.title}
              onChange={(e) => changeTask(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
            <button
              onClick={updateTask}
              className="btn btn-lg btn-success mr-20"
            >Update</button>
            <button
              onClick={cancelUpdate}
              className="btn btn-lg btn-warning"
            >Cancel</button>
          </div>
        </div>
        <br />
      </>
    )
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <nav className="me-auto">
            <Link style={{marginRight:20}} to="/">Home</Link>
            </nav>
            </Container>
            </Navbar>
      {/* <Nav className="me-auto" style={{position: "absolute", top: 12, marginLeft: 1140}}>
  <Button type="primary" >
<Nav.Link style={{padding:0}}href="/works">Back</Nav.Link>
  </Button>
</Nav> */}
      <img style={{ position: 'absolute', zIndex: -1, width: 1349 }} src={require("../images/todo1.jpg")} />
      <div className="container App">

        <br /><br />
        <h2>To Do List App</h2>
        <br /><br />

        {updateData && updateData ? (
          <UpdateForm
            updateData={updateData}
            changeTask={changeTask}
            updateTask={updateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        {/* Display ToDos */}
        {/* toDo is from state */}
        {toDo && toDo.length ? '' : 'No Tasks...'}

        <ToDo
          toDo={toDo}
          markDone={markDone}
          setUpdateData={setUpdateData}
          deleteTask={deleteTask}
        />

      </div>
    </>

  );
}

export default Todomain;