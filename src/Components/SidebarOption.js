import React from "react"
import "../Styles/SidebarOption.css"

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebar-option ${selected && "sidebar-option-selected"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOption
