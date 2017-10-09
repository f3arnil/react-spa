import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'views/Nav';
import Sidebar from 'containers/Sidebar';
import './LayoutMain.scss';

class LayoutMain extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="app">
                <header className="app__header">
                    <div className="container">
                        <div className="row end-xs middle-xs">
                            <div className="col-xs-2">
                                <Link to="/">
                                    <img alt="Logo" height="110" src="/img/logo.jpg" />
                                </Link>
                            </div>
                            <div className="col-xs-10">
                                <Nav />
                            </div>
                        </div>
                    </div>
                </header>
                <main className="container app__content">
                    <div className="row">
                        <div className="col-xs-8 app__posts">
                            { children }
                        </div>
                        <div className="col-xs-offset-1 col-xs-3">
                            <Sidebar />
                        </div>
                    </div>
                </main>
                <footer className="app__footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 center-xs middle-xs">
                                <span>© 2017 All  rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default LayoutMain;
