import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillList from './SkillList/SkillList'
import NewSkillForm from './NewSkillForm/NewSkillForm'



  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ];

  function App() {
  const [skillsState,setSkillsState] = useState(skills)
  console.log(skillsState, setSkillsState)

  function getSkill(skillsInput){
    console.log(skillsInput, '<-- app.js skillsInput')
    setSkillsState([skillsInput, ...skillsState])
  }



  return (
    <>
    <h1>React Dev Skills</h1>
    <div >
      
      <SkillList skillList={skills}  />
      <hr />
    </div>
    <div>
      <NewSkillForm getSkill={getSkill}/>
    </div>
    
   
  </>
  


);
}





export default App
