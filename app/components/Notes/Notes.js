/**
 * Created by m853684 on 10/19/16.
 */
var React=require('react');
var Notes=React.createClass({
    render:function(){
      return(
          <div> Notes
      <p>{this.props.notes}</p>
          </div>
        )
    }
})

module.exports=Notes;