import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Tags from 'views/Tags';
import './Articles.scss';

class Articles extends Component {
    render() {
        const { posts, tag } = this.props;
        const symbolsAmount = 300;

        const searchTitle = tag ? <p>Search results by tag: {tag} </p> : null;

        return (
            <div>
                {searchTitle}
                {posts.map((
                    { id, img, date, title, author, author_id, tags, content }
                ) => {
                    const contentShort = `${content.substr(0, symbolsAmount)}...`;

                    return (
                        <article key={id.toString()}>
                            <header>
                                <h1 className="article-title"><Link to={`/post/${id}`}>{title}</Link></h1>
                                <img alt={title} src={img} className="article-image" />
                            </header>
                            <div className="article-content">
                                <p>{contentShort}</p>
                            </div>
                            <footer>
                                <div className="article-info">
                                    <Link to=""><Moment format="DD MMM YYYY" unix>{date}</Moment></Link>
                                    <Link to={`/user/${author_id}`}> by {author}</Link>
                                    <span className="article-dot" />
                                    <Tags tags={tags} />
                                </div>
                            </footer>
                        </article>
                    );
                })}
            </div>
        );
    }
}

export default Articles;
