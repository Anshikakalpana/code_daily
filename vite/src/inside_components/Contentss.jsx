import PropTypes from 'prop-types';

import React, { Component } from 'react'
import ContentIn from './contentIn'




export class Contentss extends Component {
 
  
  
  
 
     constructor(){
  super();
  this.state={
    articles:[],
   // loading: false,
    page:1
  }
  
   } 


   async componentDidMount(){
  // this.setState({loading: true});
   let url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=5380c676882e475aa6af20dc8691ba11
`;
   let parsedurl =  await fetch(url);
   let parsedData = await parsedurl.json();
  // this.setState({loading: false});
   this.setState({articles: parsedData.articles })


   }

   

 



  render() {
    return (
      


<div className='bg-neutral-950 py-10 px-4 sm:px-8'>
 
  <h1 className='text-center text-3xl sm:text-4xl font-bold text-purple-300 mb-8'>
    TOP Stories
  </h1>

  
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {this.state.articles.map((element) => {
      if (!element.title || !element.url || !element.description) return null;

      const imageUrl =
        element.urlToImage ??
        "https://img4.s3wfg.com/web/img/images_uploaded/c/8/musk_trump_mitin.jpg";

      return (
        <div key={element.title} className="bg-neutral-900 rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
          <ContentIn
            title={element.title}
            description={element.description}
            urlToImage={imageUrl}
            url={element.url}
          />
        </div>
      );
    })}
  </div>
</div>

        
    )
  }
}

export default Contentss