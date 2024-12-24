'use client'

import { useEffect } from 'react';
import Navbar from '../components/Navbar'
import TeamMembers from '../components/TeamMembers'

const Team = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
  },[]);

  return (
    <main>
      <Navbar />
      <TeamMembers />
    </main>
  )
}

export default Team
