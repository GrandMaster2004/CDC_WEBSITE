import React, { useState } from 'react';
import "./Team.css";
import Team1 from "./Team1/Team1.jsx";
import Team2 from "./Team2/Team2.jsx";
import Team3 from "./Team3/Team3.jsx";
import Team4 from "./Team4/Team4.jsx";
import Team0 from "./Alumni/Alumni.jsx"
import FacultyAdvisor from './Faculty/FacultyAdvisor.jsx';


function Team() {
  const [selectedTeam, setSelectedTeam] = useState(0);

  const showTeam = (teamNumber) => {
    setSelectedTeam(teamNumber);
  };

  return (
    <div>
     <FacultyAdvisor/>
      <div style={{background:'bottom'}} className='team_btn'>
        <ul>
          <li><button onClick={() => showTeam(0)}>Alumni(18-22)</button></li>
          <li><button onClick={() => showTeam(1)}>Alumni(19-23)</button></li>
          <li><button onClick={() => showTeam(2)}>2020-24</button></li>
          <li><button onClick={() => showTeam(3)}>2021-25</button></li>
          <li><button onClick={() => showTeam(4)}>2022-26</button></li>
        </ul>
      </div>

      <div>
        {/* Render the selected team based on the state */}
        {selectedTeam === 0 && <Team0 />}
        {selectedTeam === 1 && <Team1 />}
        {selectedTeam === 2 && <Team2 /> }
        {selectedTeam === 3 && <Team3 /> }
        {selectedTeam === 4 && <Team4 /> }
      </div>
    </div>
  );
}

export default Team;
