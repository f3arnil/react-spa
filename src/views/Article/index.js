import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Tags from 'views/Tags';

class Article extends Component {
    render() {
        const { id, img, date, title, author, author_id, tags, content } = this.props.post;

        return (
            <article key={id}>
                <header>
                    <h1 className="article-title"><Link to={"/post/" + id}>{title}</Link></h1>
                    <img alt={title} src={img} className="article-image"/>
                </header>
                <div className="article-content">
                    <p>{content}</p>
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
    }
}

export default Article;
