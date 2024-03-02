import './Feedbacks.css'

import { FaStar } from "react-icons/fa";

const clientFeedbacks =[
    {
        image :"https://i.pinimg.com/564x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
        clientFeed :" Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        image :"https://i.pinimg.com/564x/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
        clientFeed :" Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        image :"https://i.pinimg.com/564x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg",
        clientFeed :" Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        image :"https://i.pinimg.com/564x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
        clientFeed :" Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        image :"https://i.pinimg.com/564x/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
        clientFeed :" Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        image :"https://i.pinimg.com/564x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg",
        clientFeed :" Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
   
]

const Feedback = () => {




  return (
    <div className='feedback-main-container'>

        <div className='feedback-header'>
            <p>TESTIMONIALS</p>
            <h1>What  People Says....</h1>
            <hr/>

        </div>
        

   <div className='marq-container'>
    <marquee>
        <div className='feedback-container'>

  {
    clientFeedbacks.map((each,i)=>{
        return(
            <div key={i} className="feedback-card-container">
                <div className='feedback-img'>
                <img src={each.image} alt=""/>
                    </div>
                
                <div>
                    <p>`{each.clientFeed} `</p>
                    <div className='feedback-icon-container'>
                        <FaStar className='feedback-icon'/>
                        <FaStar className='feedback-icon'/>
                        <FaStar className='feedback-icon'/>
                        <FaStar className='feedback-icon'/>
                        <FaStar className='feedback-icon'/>
                        </div>

                    </div>
                </div>
        )
    })
  }
</div>
</marquee>    
 
   </div>
        
      

    </div>
  )
}

export default Feedback