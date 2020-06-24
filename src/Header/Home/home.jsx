import React, { Component } from 'react'
import {UserProfile} from './../../Molecules/card'
import axios from 'axios';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            userDetail:[]
        }
    }
    componentDidMount() {
        axios.get(`https://reqres.in/api/users?page=2`)
          .then(res => {
            const persons = res.data.data;
            this.setState({userDetail:persons});
            
          })
      }
      removeUsers = (data) =>{
            let users=this.state.userDetail.filter((value)=>data.id!==value.id)
            this.setState({userDetail:users})
      }
      editUsers=(index,fname,lname)=>{
            let user =this.state.userDetail;
            user[index].first_name=fname
            user[index].last_name=lname
            this.setState({userDetail:user})
      }
    render() {
        return (
            <div>
                {
                    this.state.userDetail.map((value, index)=>{
                        
                        return(
                            <UserProfile user={value} deleteUser={(data)=>{this.removeUsers(data)}} 
                            editUser={(index,fname,lname)=>{this.editUsers(index,fname,lname)}}
                             index={index} key={index}/>

                        )
                    })
                }
                
            </div>
        )
    }
}
