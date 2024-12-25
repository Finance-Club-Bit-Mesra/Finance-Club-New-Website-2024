'use client'

import { useEffect } from 'react';
import TeamMembers from '../components/TeamMembers'

const Team = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
  },[]);
  
  return (
    <main>
      <TeamMembers />
    </main>
  )
}

export default Team
