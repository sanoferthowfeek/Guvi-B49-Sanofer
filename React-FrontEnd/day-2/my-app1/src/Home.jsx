import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return React.createElement('div',{className:"wrapper"},
    React.createElement('div',{className:"table basic"},React.createElement('div',{className:"price-section"},
    React.createElement('div',{className:"price-area"},React.createElement('div',{className:"inner-area"},
    React.createElement('span',{className:"text"},null),React.createElement('span',{className:"price"},"19"))),
    React.createElement('div',{className:"package-name"}),React.createElement('div',{className:"features"},
    React.createElement('li',React.createElement('span',{className:"list-name"},"One Selected Template"),
    React.createElement('span',{className:"icon check"},React.createElement('i',{className:"fas fa-check-circle"}))),
    React.createElement('li',React.createElement('span',{className:"list-name"},"100% Responsive Design"),
    React.createElement('span',{className:"icon check"},React.createElement('i',{className:"fas fa-check-circle"}))),
    React.createElement('li',React.createElement('span',{className:"list-name"},"Credit Remove Permission"),
    React.createElement('span',{className:"icon cross"},React.createElement('i',{className:"far fa-times-circle"}))),
    React.createElement('li',React.createElement('span',{className:"list-name"},"Lifetime Template Updates"),
    React.createElement('span',{className:"icon cross"},React.createElement('i',{className:"far fa-times-circle"}))),
    React.createElement('div',{className:"btn"},React.createElement('button',null,"Purchase"))))))
  }
}
  

export default Home