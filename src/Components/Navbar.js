
import React, { Component } from 'react'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/News.js">Flash News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/News.js">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/News.js">About Us</a></li>
         <li className="nav-item"><a className="nav-link" href="/News.js">business</a></li>
         <li className="nav-item"><a className="nav-link" href="/News.js">entertainment</a></li>
         <li className="nav-item"><a className="nav-link" href="/News.js">general</a></li>
         <li className="nav-item"><a className="nav-link" href="/News.js">health</a></li>
         <li className="nav-item"><a className="nav-link" href="/News.js">science</a></li>
         <li className="nav-item"><a className="nav-link" href="/News.js">sports</a></li>
         <li className="nav-item"><a className="nav-link" href="/News.js">technology</a></li>
        
        
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar