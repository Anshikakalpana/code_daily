import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import React, { Component, useEffect } from 'react'
import Navbar from '../inside_components/navbar';
import Moment from 'moment';

export class Post extends Component {
  static propTypes = {}

  render() {
    const {id}= useParams();
    const [content , setContent] = useState("");
    const fetchContent= async()=>{
        const content = inside_content.find(item =>item._id===id)
        setContent(content);
   }
 useEffect(()=>{
    fetchContent()
 } ,[])

    return  content?(
        <div className='relative'>
            <Navbar/>
            
            <div className=''>
                <div className='title text-3xl text-indigo-100' >
                 <p>Posted On {Moment(data.createdAt)}</p>
                 <h1>{content.title}</h1>
                 
                </div>
            </div>

      
      </div>
    ):<div>Loading</div>
  }
}

export default Post