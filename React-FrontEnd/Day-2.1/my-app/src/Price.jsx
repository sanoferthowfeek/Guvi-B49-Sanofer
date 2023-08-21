import React, { Component } from 'react'

export class Price extends Component {
  render() {
    return  React.createElement('div',{className:"columns"},React.createElement('ul',{className:"price"},
    React.createElement('li',{className:"header"},"Basic"),React.createElement('li',{className:"grey"},"$ 9.99 / year"),
    React.createElement('li',null,"10GB Storage"),React.createElement('li',null,"10 Emails"),
    React.createElement('li',null,"10 Domains"),React.createElement('li',null,"1GB Bandwidth"),
    React.createElement('li',{className:"grey"},React.createElement('a',{href:"#",className:"button"},"Sign Up"))),
    React.createElement('ul',{className:"price"},
    React.createElement('li',{className:"header"},"Pro"),React.createElement('li',{className:"grey"},"$ 29.99 / year"),
    React.createElement('li',null,"25GB Storage"),React.createElement('li',null,"25 Emails"),
    React.createElement('li',null,"25 Domains"),React.createElement('li',null,"2GB Bandwidth"),
    React.createElement('li',{className:"grey"},React.createElement('a',{href:"#",className:"button"},"Sign Up"))),
    React.createElement('ul',{className:"price"},
    React.createElement('li',{className:"header"},"Premium"),React.createElement('li',{className:"grey"},"$ 49.99 / year"),
    React.createElement('li',null,"50GB Storage"),React.createElement('li',null,"50 Emails"),
    React.createElement('li',null,"50 Domains"),React.createElement('li',null,"5GB Bandwidth"),
    React.createElement('li',{className:"grey"},React.createElement('a',{href:"#",className:"button"},"Sign Up"))),)
    
    
  }
}

export default Price