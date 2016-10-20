/**
 * Created by m853684 on 10/19/16.
 */
var React=require('react');
var UserProfile=React.createClass({
    propTypes:{
        username:React.PropTypes.string.isRequired,
        bio:React.PropTypes.object.isRequired
    },
    render:function(){
       return( <div> User Profile for
           <p>{this.props.username} </p>
           <p>{this.props.bio.name} </p>
       </div>)
    }
})

module.exports=UserProfile;