import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
         <strong>learning  Platform</strong>
        </div>
        <div className="profile">
          <img src="./Images/profile.png" alt="Profile" />
          <span>John Doe</span>
        </div>
        <nav>
          <ul>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#leaderboard">Leaderboard</a></li>
            <li><a href="#help">Help/Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="categories"> 
          <h2>Categories</h2> 
          <select className="category-select"> 
            <option value="programming">Programming</option> 
            <option value="design">Design</option> 
            <option value="marketing">Marketing</option> 
            <option value="business">Business</option> 
          </select>
        </section>
      
      <section id="courses">
        <h2>Courses</h2>
        <div className="course-list">
          <div className="course">
            <img src="./images/course1.jpg" alt="Course 1" />
            <h3 >React JS Course</h3>
          </div>
          <div className="course1">
            <img src="./Images/course2.png" alt="Course 2" />
            <h3>Programming Course</h3>
          </div>
          
        </div>
      </section>
      
      <section id="leaderboard">
        <h2>Leaderboard</h2>
        <ol>
          <li>John Doe</li>
          <li>Jane Smith</li>
          <li>Michael Johnson</li>
       
        </ol>
      </section>
      
      <footer>
        <p>Copyright © 2024 Learning Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;