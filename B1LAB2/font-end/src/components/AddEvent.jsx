// AddEvent.js
import React, { useState } from 'react';

const AddEvent = ({ addEvent }) => {
  const [event, setEvent] = useState({ title: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({ title: '', description: '', dueDate: '' });
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={event.title} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={event.description} onChange={handleChange} required />

        <label>Due Date:</label>
        <input type="date" name="dueDate" value={event.dueDate} onChange={handleChange} required />

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
