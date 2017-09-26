import React, { Component } from 'react';
import './Tags.scss';

class Tags extends Component {
    render() {
        const { type, tags } = this.props;
        const links = tags.map((tag) => <li key={tag.toString()}><a href={`/tag/${tag}`}>{tag}</a></li>);

        switch (type) {
            case 'sidebar':
                return (
                    <section className="tags-wrapper">
                        <h2>Tags</h2>
                        <ul className="tags">
                            {links}
                        </ul>
                    </section>
                );

            default:
                return <ul className="tags">{links}</ul>;
        }
    }
}

export default Tags;
