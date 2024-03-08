import { useState } from 'react'
import './NewSkillForm.css'
export default function NewSkillForm({getSkill}) {
  
  const [skillsState,setSkillsState] = useState({
    name: "",
    level: 3
  })
  
  function handleAddSkill(e){
    const newFormData = {...skillsState,[e.target.name]: e.target.value}
    
    setSkillsState(newFormData);
  }

  function handleSubmit(e){
    e.preventDefault();// stop browser get request
    getSkill(skillsState);
  }


  return (
        <form className="NewSkillForm" onSubmit = {handleSubmit} >
            <label>Skill</label><input name="name" onChange={handleAddSkill}/>
            
            <label>Level</label>
              <select name="level" onChange={handleAddSkill}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            <button> ADD SKILL</button>


        </form>
        

    )

}
