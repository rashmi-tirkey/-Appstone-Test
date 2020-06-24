import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';


export class UserProfile extends React.Component{

    constructor(props){
        super(props)
        this.state={
            edit:false,
            firstname:props.user.first_name,
            lastname:props.user.last_name
        }
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
    let name=this.props.user.first_name +" " + this.props.user.last_name
    return(
        <List className="">
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={this.props.user.avatar} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className=""
                                color="textPrimary"
                            >
                             {this.props.user.email}
                            </Typography>
                            <IconButton edge="end" aria-label="delete" onClick={()=>{this.props.deleteUser(this.props.user)}}>
                            <DeleteIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={()=>{this.setState({edit:true})}}>
                            <CreateIcon/>
                            </IconButton>
                            {this.state.edit && <div>
                                <input type="text" name="firstname" value={this.state.firstname} placeholder="Change Name" onChange={this.changeHandler}/>
                                <input type="text" name="lastname" value={this.state.lastname} placeholder="Change Name" onChange={this.changeHandler}/>
                                <button onClick={()=>this.setState({ edit:false,
                                    firstname:this.props.user.first_name,
                                    lastname:this.props.user.last_name})}>Cancel</button>
                                <button onClick={()=>
                                    {
                                        this.props.editUser(this.props.index, this.state.firstname, this.state.lastname )
                                        this.setState({edit:false})
                                    }}>OK</button>
                                </div>}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider/> 

        </List>
    )
    }
}
