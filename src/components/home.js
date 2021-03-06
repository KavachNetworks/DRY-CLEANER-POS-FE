import React, { Component } from 'react';
import {Link, Router} from 'react-router-dom';
import CUSTEDIT from './customeredit';
class Home extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                    <nav class="navbar navbar-inverse">
                    <div class="container">
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-nav-demo" aria-expanded="false">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                         <a href="#" class="navbar-brand"><span class="glyphicon glyphicon-picture" aria-hidden="true"></span>DRY-CLEAN</a>
                         <h2 class="navbar-brand"><strong><em>HOME</em></strong></h2>
                      </div>
                      <div class="collapse navbar-collapse" id="bs-nav-demo">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/dashboard">DASH BOARD</Link></li>
                            <li><Link to="/ordertaken">ORDER TAKEN</Link></li>
                            <li><Link to="/customer">CUSTOMERS</Link></li>
                            <li><Link to="/employees">EMPLOYEES</Link></li>
                            <li><Link to="#">TRANSACTION</Link></li>
                            <li><Link to="#">REPORTS</Link></li>
                        </ul>
                      </div>
                   </div>
                </nav>
                
                <div class="row">
                    <div class="column">
                    <Link to="/customeredit" ><button class="btn  btn-primary">select Customer/Add new customer</button></Link>
                    </div>
                    
                    <br/>
                    <br />
                    <br />
                    <div class="column">
                        <Link class="btn btn-primary" to="/Setting">Setting</Link>
                    </div>
                   
                </div>
                
            </div>
         );
    }
}
 
export default Home;