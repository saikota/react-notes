/**
 * Created by m853684 on 10/19/16.
 */
var React=require('react');
var UserProfile=React.createClass({
    render:function(){
       return( <div> User Profile for
           <p>{this.props.username} </p>
           <p>{this.props.bio.name} </p>
       </div>)
    }
})

module.exports=UserProfile;