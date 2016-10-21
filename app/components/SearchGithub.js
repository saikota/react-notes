/**
 * Created by m853684 on 10/20/16.
 */
var React=require('react');
var Router=require('react-router');

var SearchGithub=React.createClass({
    mixins:[Router.History],
    getRef:function(ref){
        this.userNameRef=ref
    },
    handleSubmit:function(){
        var userName=this.userNameRef.value;
        this.userNameRef.value="";
        this.history.pushState(null,"profile/"+userName);
    },
    render:function(){
        return (
            <div className="col-sm-12">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group col-sm-7">
                <input type="text" className="form-control" ref={this.getRef}/>
                </div>
                <div className="form-group col-sm-5">
                    <button type="submit" className="btn btn-block btn-primary"> Search Github</button>

                </div>
            </form>
            </div>
        )
    }
});

module.exports = SearchGithub;