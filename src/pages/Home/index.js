import React from "react";

const Home = () => {
  return (
    <section>
      <div className="tasksDefaultLayout">
        <div className="card">
          <section className="currentTasks">
            <div className="sectionLabel">
              <span>Active tasks</span>
            </div>
            <ul className="currentTasks_taskList taskList">
              <li className="currentTasks_taskList__task task active">
                Task 1
              </li>
              <li className="currentTasks_taskList__task task">Task 2</li>
              <li className="currentTasks_taskList__task task">Task 3</li>
            </ul>
            <div className="currentTasks_actions">
              <button className="tasks_action new">New</button>
              <button disabled className="tasks_action edit">
                Edit
              </button>
              <button disabled className="tasks_action delete">
                Delete
              </button>
              <button disabled className="tasks_action complete">
                Complete
              </button>
            </div>
          </section>
          <section className="finishedTasks ">
            <div className="sectionLabel">
              <span>Completed tasks</span>
            </div>
            <ul className="taskList">
              <li className="task">Task 4</li>
              <li className="task">Task 5</li>
              <li className="task">Task 6</li>
            </ul>
            <div className="finishedTasks_actions">
              <button id="reopen" className="tasks_action reopen">
                Reopen
              </button>
            </div>
          </section>
          <dialog id="qwe">
            <div>wer</div>
          </dialog>
        </div>
        <div className="card">
          <section className="taskDetails">
            <div className="taskDetails_summary">
              <div className="row">
                <div className="sectionLabel">Task Summary</div>
              </div>
              <div className="row">
                <div className="taskDetails_summary_label">Task Name:</div>
                <div className="taskDetails_summary_title">
                  OpenSSH, OpenSSL and LibCurl validations (SFTP)
                </div>
              </div>
              <hr />
              <div className="row taskDetails_summary_deadlineSection">
                <div className="taskDetails_summary_deadlineSection">
                  <div className="taskDetails_summary_label">Assigned:</div>
                  <div className="taskDetails_summary_labelDate">
                    20/09/2022
                  </div>
                </div>
                <div className="taskDetails_summary_deadlineSection">
                  <div className="taskDetails_summary_label">Deadline:</div>
                  <div className="taskDetails_summary_labelDate">
                    20/09/2022
                  </div>
                </div>
              </div>
            </div>
            <div className="taskDetails_assigments">
              <div className="taskDetails_assigments_assigmentlist">
                <ul className="assigmentlist">
                  <li className="assigment">20/09/2022</li>
                  <li className="assigment">19/09/2022</li>
                  <li className="assigment">18/09/2022</li>
                </ul>
              </div>
              <div className="taskDetails_assigments_actions">
                <div className="taskDetails_assigments_details">
                  <button
                    disabled
                    className="taskDetails_assigments_action details"
                  >
                    Details
                  </button>
                </div>

                <button className="taskDetails_assigments_action matrix">
                  Matrix
                </button>
                <button className="taskDetails_assigments_action case_counter">
                  TC Count
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="card">
          <div className="sectionLabel">
            <span>Assigment</span>
          </div>
          <div className="datepicker_section">
            <div className="datepicker_label">Date:</div>
            <input
              type="text"
              className="datepicker_input"
              defaultValue={today()}
            />
          </div>
          <div className="assigneeSection">
            <div className="assigneeSection_label">Assignee:</div>
            <div className="assigneeList">
              <ul className="taskList">
                <li className="task">Konstantin Cherkasskikh</li>
                <li className="task">Roman Ossipov</li>
                <li className="task">Andrei Gavrilov</li>
              </ul>
            </div>
            <div className="assignTasks_actions">
              <button className="tasks_action reopen">Assign</button>
            </div>
          </div>
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </section>
  );
};
/*
const qwe = document.getElementById("qwe");
const asd = document.getElementById("reopen");

asd.addEventListener("click", qwe.showModal());*/

const today = () => {
  let today = new Date().toISOString().slice(0, 10);
  return today;
};

export default Home;
