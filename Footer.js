import React from 'react'

const Footer = ({length}) => {
    const Today=new Date();

  return (
    <footer>
            <p>Copyright &copy; {Today.getFullYear()} </p>
            <p>{length} list  {length=== 1 ? "item" : "items"}</p>
    </footer>
  )
}

export default Footer
