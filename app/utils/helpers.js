/**
 * Created by m853684 on 10/20/16.
 */
var axios=require('axios');

function getRepos(username){
    return axios.get('')
}

function getUserInfo(username){
    return axios.get('')
}



var helpers={
    getGithubInfo:function(username){
        return axios.all([getRepos(username),getUserInfo(username)])
            .then(function(arr){
            return {
                repos:arr[0].data,
                bio:arr[1].data
            }
            });
    }
};


module.exports=helpers;