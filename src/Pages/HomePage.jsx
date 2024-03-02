import About from "../Components/About/About"
import Feedback from "../Components/Feedbacks/Feedbacks"
import GetApps from "../Components/GetApps/GetApps"
import Hero from "../Components/Hero/Hero"
import HomeService from "../Components/HomeService/HomeService"
import WeSupport from "../Components/WeSupports/WeSupport"


const HomePage = () => {
  return (
    <div>
        <Hero/>
       <About/>
          <HomeService/>
        <WeSupport/>
        <Feedback/>
        <GetApps/>
    </div>
  )
}

export default HomePage