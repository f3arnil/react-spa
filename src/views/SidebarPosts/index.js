import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SidebarPosts.scss';

class SidebarPosts extends Component {
    render() {
        const populars = this.props.populars;

        return (
            <section className="popular-wrapper">
                <h2>Popular posts</h2>
                {
                    populars.map(({ id, title, img }
                    ) => {
                        return (
                            <section key={id} className="popular">
                                <h3><Link className="popular-title" to={`/post/${id}`}> {title}</Link></h3>
                                <img alt={title} src={img} className="popular-image" />
                            </section>
                        );
                    })
                }
            </section>
        );
    }
}

export default SidebarPosts;