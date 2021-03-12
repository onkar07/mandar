import React, { Component } from 'react'
// import { TextInput } from 'react-native-gesture-handler'
import './css/adminpanel.css'
import plussign from './img/plus.png';
import minusSign from './img/delete.png'; 
class adminpanel extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3 col-sm-3 col-md-3 col-xs-3 col-lg-3 sidebar">
                        <div class="">
                            <ul>
                                <li class="text-left">Manage Employee</li>
                                <li class="text-left">Manage Trainer</li>
                                <li class="text-left">Manage Member</li>
                                <li class="text-left">Manage Fitness Class</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-9 col-sm-9 col-md-9 col-xs-9 col-lg-9 remainsSidebar">
                        <form>
                        <div class="row">
                            <div class="col-6 col-sm-6 col-md-6 col-xs-6 col-lg-6 leftcard">
                            
                                <div class="card card1">
                                {/* eslint-disable-next-line */}
                                <a href="#"> <img href="#" class="card-img-top" src={plussign} alt="Card image cap" /> </a>
                                        <div class="card-body">
                                        <a href="#">   <h5 class="card-title">ADD MEMBER</h5> </a>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="col-6 col-sm-6 col-md-6 col-xs-6 col-lg-6 rightcard">
                                <div class="card card2">
                                {/* eslint-disable-next-line */}
                                <a href="#"> <img href="#" class="card-img-top" src={minusSign} alt="Card image cap" /> </a>
                                        <div class="card-body">
                                        <a href="#"> <h5 href="#" class="card-title">REMOVE MEMBER</h5> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default adminpanel
