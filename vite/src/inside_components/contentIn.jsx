import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class ContentIn extends Component {
  render() {
    let { title, description, urlToImage, url } = this.props;
    return (
   
      <div className="flex justify-center text-center rounded-2xl border border-amber-50 bg-neutral-950 shadow-lg hover:shadow-amber-100 transition duration-300">
  <div className="w-full max-w-xs sm:max-w-sm p-4">
    {/* Image */}
    <img
      src={urlToImage}
      alt="Post thumbnail"
      className="w-full h-48 object-cover rounded-lg mb-4"
    />


    <h5 className="text-xl font-semibold text-amber-50 mb-2 line-clamp-2">{title}</h5>

    <p className="text-indigo-200 text-sm mb-4 line-clamp-3">{description}</p>


    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 border border-purple-500 text-amber-50 rounded-2xl hover:bg-purple-700 transition-all duration-300"
    >
      Read More
    </a>
  </div>
</div>

    );
  }
}

ContentIn.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
  url: PropTypes.string,
};

export default ContentIn;
