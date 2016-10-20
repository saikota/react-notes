/**
 * Created by m853684 on 10/19/16.
 */
var React=require('react');
var ReactDom=require('react-dom');
var Router=require('react-router').Router;
var routes=require('./config/routes');

ReactDom.render(
    <Router>{routes}</Router>,
    document.getElementById('app')
)