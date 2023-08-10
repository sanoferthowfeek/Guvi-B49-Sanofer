import React, { Component } from 'react'

export class price extends Component {
  render() {
    return React.createElement('div',{class:'columns'},React.createElement('ul',{class:'price'},
    React.createElement('li',{class:'header'},'Basic'),React.createElement('li',{class:'grey'},'$ 9.99 / year'),
    React.createElement('li',null,'10GB Storage'),React.createElement('li',null,'10 Emails'),
    React.createElement('li',null,'10 Domains'),React.createElement('li',null,'1GB Bandwidth'),
    React.createElement('li',{class:'grey'},React.createElement('a',{href:'#'},{class:'button'},'Sign Up'))));
  }
}

export default price