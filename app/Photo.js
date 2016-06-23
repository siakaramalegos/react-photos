import React from 'react';
import JQuery from "jquery";
import "./vendor/time_ago.js";

class Photo extends React.Component {
  render () {
    const photo = this.props.photo;
    const createdTimeAgo = JQuery.timeago(parseInt(photo.created_time * 1000));

    var tags = "",
        caption;

    if (photo.tags.length > 0){
      tags = "#" + photo.tags.join(' #')
    }

    return (
      <div className="well photo">
        <header>
          <a href={"https://www.instagram.com/" + photo.user.username}>
            <strong>{photo.user.username}</strong>
          </a>
          <br />
          {tags}
        </header>
        <a href={photo.link}>
          <img src={photo.images.low_resolution.url} className="img-responsive" />
        </a>
        <footer>
          <section>
            {createdTimeAgo}<br />
            <span className="text-muted">Filter: {photo.filter}</span>
          </section>
          <section>
            <i className="fa fa-heart" aria-hidden="true"></i> {photo.likes.count}
          </section>
          <section>
            <i className="fa fa-comment" aria-hidden="true"></i> {photo.comments.count}
          </section>
        </footer>
      </div>
    );
  }
}

export default Photo;
