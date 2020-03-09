import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login"
// Messages //
import MessageList from "./messages/MessageList"
// Events //
import EventList from "./events/EventList"
import EventForm from "./events/EventForm"
import EventEditForm from "./events/EventEditForm"
//Article imports
import ArticlesList from "./articles/ArticlesList"
import ArticlesForm from "./articles/ArticlesForm"
import ArticleEditForm from "./articles/ArticlesEditForm"
import ArticleDetail from "./articles/ArticlesDetail"

const ApplicationView = (props) => {

    return (
        <>
        {/* <Route exact path="/" render={props => {
            return <Home />
        }}/> */}
        {/* <Route path="/welcome" render={props => {
            return <Welcome />
        }}/> */}
        <Route path="/login" render={props => {
            return <Login { ...props } />
        }}/>
        {/* <Route path="/logout" render={props => {
            return <Logout />
        }}/> */}
        <Route path="/messages" render={props => {
            return <MessageList { ...props }/>
        }}/>
        <Route exact path="/events" render={props => {
            return <EventList { ...props }/>
        }}/>
        <Route path="/events/new" render={props => {
            return <EventForm { ...props }/>
        }}/>
        <Route path="/events/:eventId(\d+)/edit"
            render={props => {
                return <EventEditForm { ...props } />
            }} />
        <Route exact path="/articles" render={props => {
            return <ArticlesList {...props}/>
        }}/>
        <Route path="/articles/new" render={props => {
            return <ArticlesForm {...props}/>
        }}/>
        <Route path="/articles/:articleId(\d+)/edit" render={props => {
            return <ArticleEditForm {...props} />
        }}/>
        <Route exact path="/articles/:articleId(\d+)" render={props => {
            return <ArticleDetail articleId={parseInt(props.match.params.articleId)} {...props} />
        }}/>
        {/* <Route path="/messages" render={props => {
            return <MessageList />
        }}/> */}
        {/* <Route path="/tasks" render={props => {
            return <TaskList />
        }}/> */}
        {/* <Route path="/friends" render={props => {
            return <FriendList />
        }}/> */}
        </>
    )
}

export default ApplicationView
