import './Feedbacks.css'

import { FaStar } from "react-icons/fa";

const clientFeedbacks =[
    {
        image :"https://i.pinimg.com/564x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
        clientFeed :"Customer service for Roboscrop taxis is responsive and helpful"
    },
    {
        image :"https://i.pinimg.com/564x/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
        clientFeed :" Roboscrop taxi service is incredibly convenient and easy to use."
    },
    {
        image :"https://i.pinimg.com/564x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg",
        clientFeed :" The fare was reasonable and transparent."
    },
    {
        image :"https://i.pinimg.com/564x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
        clientFeed :" I felt safe throughout the journey"
    },
    {
        image :"https://i.pinimg.com/564x/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
        clientFeed :" Overall, a great experience with the taxi service"
    },
    {
        image :"https://i.pinimg.com/564x/2f/57/8d/2f578d07945132849b05fbdaf78cba38.jpg",
        clientFeed :" The taxi service's customer support was responsive and helpful."
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