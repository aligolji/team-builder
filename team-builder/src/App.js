import React, { useState } from 'react';
import './App.css';
// import Form from './Form'


console.log('test')

function App() {

  const [teamMembersList, setTeamMembersList] = useState([
    {
      id: 1,
      name: 'Name',
      role: 'Value 1',
      email: 'Value 2',
    }
  ]);

  return (
    <div className="App">
      <h1>Team Members</h1>
      {
        teamMembersList.map(teamMember => (
            <div className='teamMember' key={teamMember.id}>
              <span>{teamMember.name}</span><br />
              <span>{teamMember.key1}</span><br />
              <span>{teamMember.key2}</span>

              {/* <TeamMember key={teamMember.id} teamMember={teamMember} /> */}
            </div>
          )
        )
      }
    </div>
  );
}

export default App;
