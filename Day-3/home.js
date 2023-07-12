import React from 'react';
import './home.css';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to lemeredian hotel !</h1>
      <p>Find your perfect furry companion today.</p>

      <h2>Featured rooms</h2>
      <div className="featured-hotelS">
        {/* Display featured rooms */}
        <div className="room_type">
          <h3>ram</h3>
          <p>Name: ram</p>
          <p>members count: 2</p>
        </div>
        <div className="vishnu">      
          <h3>raju</h3>
          <p>name: raju</p>
          <p>members count: 4</p>
        </div>
        <div className="sujith">
          <h3></h3>
          <p>Name: harrish</p>
          <p>members count: 4</p>
        </div>
        <div className="ram">
          <h3></h3>
          <p>Name: pradeep</p>
          <p>members: 5</p>
        </div>
        <div className="gokul">
          <h3></h3>
          <p>members:4 </p>
          <p>: </p>
        </div>
      </div>

      <button>View All Pets</button>
    </div>
  );
}

export default Home;
