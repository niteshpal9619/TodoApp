import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [tasks, setTasks] = useState([]);
  const [monthOffset, setMonthOffset] = useState(0); // 0 = current month

  const addTask = (e) => {
    e.preventDefault();
    if (task && date) {
      setTasks([...tasks, { task, date }]);
      setTask('');
      setDate('');
    }
  };

  const goToNextMonth = () => {
    setMonthOffset(monthOffset + 1);
  };

  const goToPreviousMonth = () => {
    setMonthOffset(monthOffset - 1);
  };

  return (
    <div className="app">
      <h1>To-Do Calendar 📅</h1>

      <form onSubmit={addTask} className="form">
        
        <input 
          type="text" 
          placeholder="Task" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="controls">
        <button onClick={goToNextMonth}>Next</button>
        <button onClick={goToPreviousMonth}>Prev</button>
      </div>

      <div className="calendar">
        {generateCalendar(tasks, monthOffset)}
      </div>
    </div>
  );
}

// Modified to accept monthOffset
const generateCalendar = (tasks, monthOffset) => {
  const today = new Date();
  const currentMonth = today.getMonth() + monthOffset;
  const year = today.getFullYear() + Math.floor(currentMonth / 12);
  const month = (currentMonth % 12 + 12) % 12; // Always get positive month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let calendar = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayTasks = tasks.filter(t => t.date === dateStr);

    calendar.push(
      <div className="day" key={day}>
        <div className="date">{day}</div>
        <div className="tasks">
          {dayTasks.map((t, index) => (
            <div key={index} className="task">{t.task}</div>
          ))}
        </div>
      </div>
    );
  }
  return calendar;
};

export default App;
