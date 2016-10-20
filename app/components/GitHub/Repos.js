/**
 * Created by m853684 on 10/19/16.
 */
var React=require('react');
var Repos=React.createClass({
    render:function(){
       return  (<div> Repos
       <p>{this.props.repos}</p></div>)
    }
})

module.exports=Repos;