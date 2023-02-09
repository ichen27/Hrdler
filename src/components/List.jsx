import React, { useState } from 'react';
import './List.css'



export default function List() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  function handleChange(event) {
    setNewReminder(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setReminders([...reminders, newReminder]);
    setNewReminder('');
  }

  function handleRemove(index) {
    setReminders(reminders.filter((reminder, i) => i !== index));
  }

  return (
    <div className='reminderapp'>
      <h1>Goals</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newReminder}
          onChange={handleChange}
          className="reminderinput"
        />
        <button type="submit">Add </button>
      </form>
      <ul>
        {reminders.map((reminder, index) => (
          <div className='listitems'>
          <li key={index}>
            <button type="button" onClick={() => handleRemove(index)}>
        
              <span class="material-symbols-outlined">
                check_box_outline_blank</span><span className='bulletspace'>=</span>
            
            </button>
            {reminder}
            
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

