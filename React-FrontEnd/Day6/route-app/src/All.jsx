import React from 'react'
import Fullstack from './Fullstack'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'

function All() {
  return (
    <>
    <div className="all">
    <Fullstack/>
    <Datascience/>
    <Cybersecurity/>
    <Career/>
    </div>
    </>
  )
}

export default All