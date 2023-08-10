import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return 
    React.createElement('div',{class:'columns'},React.createElement('ul',{class:'price'},
    React.createElement('li',{class:'header'},'Basic'),React.createElement('li',{class:'grey'},'$ 9.99 / year'),
    React.createElement('li',null,'10GB Storage'),React.createElement('li',null,'10 Emails'),
    React.createElement('li',null,'10 Domains'),React.createElement('li',null,'1GB Bandwidth'),
    React.createElement('li',{class:'grey'},React.createElement('a',{href:'#'},{class:'button'},'Sign Up'))))
      
    React.createElement('div',{class:'columns'},React.createElement('ul',{class:'price'},
    React.createElement('li',{class:'header'},'Pro'),React.createElement('li',{class:'grey'},'$ 24.99 / year'),
    React.createElement('li',null,'25GB Storage'),React.createElement('li',null,'25 Emails'),
    React.createElement('li',null,'25 Domains'),React.createElement('li',null,'2GB Bandwidth'),
    React.createElement('li',{class:'grey'},React.createElement('a',{href:'#'},{class:'button'},'Sign Up'))))


    React.createElement('div',{class:'columns'},React.createElement('ul',{class:'price'},
    React.createElement('li',{class:'header'},'Premium'),React.createElement('li',{class:'grey'},'$ 49.99 / year'),
    React.createElement('li',null,'50GB Storage'),React.createElement('li',null,'50 Emails'),
    React.createElement('li',null,'50 Domains'),React.createElement('li',null,'5GB Bandwidth'),
    React.createElement('li',{class:'grey'},React.createElement('a',{href:'#'},{class:'button'},'Sign Up'))))
}

export default App
