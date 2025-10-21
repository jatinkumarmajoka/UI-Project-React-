import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users = [
    { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=988', 
      intro: '', 
      color:'blue',
      tag: 'Satisfied' 
    },
    { img: 'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987', 
      intro: '', 
      color:'green',
      tag: 'Underserved' 
    },
    { img: 'https://plus.unsplash.com/premium_photo-1669592892297-9635e5c15f36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1064', 
      intro: '', 
      color:'orange',
      tag: 'Underbanked' 
    },
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App