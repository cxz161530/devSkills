import "./SkillListItem.css";
export default function SkillListItem({name, level}) {
    return <li className="SkillListItem">
        {name}
        <span className = 'level'>
        Level{level}


        </span>
        
        </li>

}
