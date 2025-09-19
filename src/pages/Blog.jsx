import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { assets, blog_data, comments_data } from '../assets/assets';
import { div } from 'motion/react-m';
import Navbar from '../components/Navbar';
import moment from 'moment';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Blog = () => {
  const {id} = useParams();
  const [data,setData] = useState(null);
  const [comments,setComments] = useState([]);
  
  const [name,setName] = useState('');
  const [content,setContent] = useState('');

  const fetchBlogData = async()=>{
    const data = blog_data.find(item => item._id === id);
    setData(data);
  }

  const fetchComments = async()=>{
    setComments(comments_data)
  }

  const addComment = async(e)=>{
    e.preventDefault();
  }

  useEffect(()=>{
    fetchBlogData();
    fetchComments();
  },[])

  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="bg" className='absolute -top-50 -z-1 opacity-50'/>
      
      <Navbar/>

      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>Published on {moment(data.createdAt).format('MMMMDoYYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800 '>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-2 px-3 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Timber Jarrod</p>
      </div>
      
      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} alt="image" className='mb-5 rounded-3xl'/>
        <div className='rich-text max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html:data.description}} ></div>

        {/* Comments Section */}
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Comments ({comments.length})</p>
          <div className='flex flex-col gap-4'>
            {comments.map((item,index)=>(
              <div key={index} className='relative bg-primary/2 border border-primary/5 max-w-2xl p-4 rounded text-gray-600'>
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt="" className='w-6'/>
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{moment(item.createdAt).fromNow()}</div>
              </div>
            ))}
          </div>
        </div>

          {/* Add Comment Section */}
          <div className='max-w-3xl mx-auto'>
            <p className='font-semibold mb-4'>Add your comment</p>
            <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
              
              <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' required className='w-full p-2 border border-gray-300 rounded outline-none'/>
              
              <textarea onChange={(e)=>setContent(e.target.value)} value={content} className='w-full p-2 border border-gray-300 rounded outline-none h-48' placeholder='Comment' required></textarea>
              
              <button type='submit' className='bg-primary text-white rounded-[9px] p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>
            </form>
          </div>
            
            {/* Share Buttons */}
            <div className='my-14 max-w-3xl mx-auto'>
                <p className='font-semibold my-4'>Share this article on social media</p>
                <div className='flex'>
                  <img src={assets.facebook_icon} alt="icon" width={50}/>
                  <img src={assets.twitter_icon} alt="icon" width={50}/>
                  <img src={assets.googleplus_icon} alt="icon" width={50}/>
                </div>
            </div>
      </div>
      <Footer/>
    </div>
  )
  :
  (
    <div>
      <Loader/>
    </div>
  )
}

export default Blog
