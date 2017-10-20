import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import MainLayout from 'views/LayoutMain';
import asyncComponent from './containers/asyncComponent';

const Home = asyncComponent(() => import('views/Home')
    .then(module => module.default), { name: 'Home' });
const Posts = asyncComponent(() => import('containers/Posts')
    .then(module => module.default), { name: 'Posts' });
const Post = asyncComponent(() => import('containers/Post')
    .then(module => module.default), { name: 'Post' });
const User = asyncComponent(() => import('containers/User')
    .then(module => module.default), { name: 'User' });
const Profile = asyncComponent(() => import('containers/Profile')
    .then(module => module.default), { name: 'Profile' });
const SignUp = asyncComponent(() => import('views/SignUp')
    .then(module => module.default), { name: 'Posts' });
const About = asyncComponent(() => import('views/About')
    .then(module => module.default), { name: 'About' });

export default (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/posts" key="all" component={Posts} />
                <Route path="/page/:id" key="pages" component={Posts} />
                <Route path="/post/:id" component={Post} />
                <Route path="/signup" component={SignUp} />
                <Route path="/profile/" component={Profile} />
                <Route path="/user/:id" component={User} />
                <Route path="/tag/:tag" key="filtered" component={Posts} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);
