/**
 * Created by m853684 on 10/19/16.
 */
var React=require('react');
var NotesList=require("./NotesList");
var Notes=React.createClass({
    propTypes:{
        username:React.PropTypes.string.isRequired,
        notes:React.PropTypes.array.isRequired
    },
    render:function(){
       console.log(this.props.notes)
      return(
          <div>
              <h3> Notes for {this.props.username}</h3>

              <div>
                  <NotesList notes={this.props.notes}/>
              </div>
          </div>
        )
    }
})

module.exports=Notes;