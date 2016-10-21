/**
 * Created by m853684 on 10/19/16.
 */
var React=require('react');
var NotesList=require("./NotesList");
var AddNote=require("./AddNote");
var Notes=React.createClass({
    propTypes:{
        username:React.PropTypes.string.isRequired,
        notes:React.PropTypes.array.isRequired,
        addNote:React.PropTypes.func.isRequired
    },
    render:function(){
       console.log(this.props.notes)
      return(
          <div>
              <h3> Notes for {this.props.username}</h3>

              <div>
                  <AddNote username={this.props.username} addNote={this.props.addNote}/>
                  <NotesList notes={this.props.notes}/>
              </div>
          </div>
        )
    }
})

module.exports=Notes;