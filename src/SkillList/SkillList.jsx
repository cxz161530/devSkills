import SkillListItem from "../SkillListItem/SkillListItem"
export default function SkillList(props) {
    const skillLi = props.skillList.map((item,idx)=>{
        return (<SkillListItem name={item.name} level={item.level} 
            key={idx} />)
   
    })
    
    return (
        
        
        <ul>
          
            {skillLi}


        </ul>


    )

}