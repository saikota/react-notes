var React=require('react');
var Router=require('react-router');
var Repos=require('../components/GitHub/Repos');
var UserProfile=require('./GitHub/UserProfile');
var Notes=require('./Notes/Notes');

var ReactFireMixin=require('reactfire');
var FireBase=require('firebase');

var Profile=React.createClass({
    mixins:[ReactFireMixin],
    getInitialState:function(){
        return {
            bio:{ name:'sai kota'},
            notes:['a','b','c'],
            repos:[1,2,3]
        }
    },
    componentDidMount:function(){
        this.ref=new Firebase('https://egg-notes.firebaseio.com/');
        this.childRef=this.ref.child(this.props.params.username);
        this.bindAsArray(this.childRef,'notes');
    },
    componentWillUnmount:function(){
        this.unbind('notes');
    },
    handleAddNote:function(newNote){
        //update firebase
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
    },
    render:function(){

        return (
            <div className="row">
                <div className="col-md-4">
                  <UserProfile username={this.props.params.username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                <Repos username={this.props.params.username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
               <Notes
                   username={this.props.params.username}
                   notes={this.state.notes}
                   addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    }
});
module.exports=Profile;

