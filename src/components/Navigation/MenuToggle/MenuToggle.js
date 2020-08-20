import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
  const cls = [
    classes.MenuToggle,
    'far',
  ]

  if(props.isOpen) { 
    cls.push('fa-times-circle')
    cls.push(classes.open)
  } else {
    cls.push('fa-chart-bar')
  }
  
  return (
    <i 
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle