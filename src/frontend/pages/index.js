import { useNavigate } from "react-router-dom"
import Project from "../component/projects"
import video from "../videos/space.mov"

console.log(video)


const Landing = () => {
    const Navigate = useNavigate()

    return (
        <div>
            <div className="hero">
                <video 
                  className="backgroundVideo"
                  autoPlay
                  loop
                  muted
                  playsInline
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="phraseContainer">
                <h1>Nova <br></br></h1>
                <h2>Your  vision, 
                our inovation</h2>
                </div>
            </div>
            
            {/* projects */}
            <Project />
        </div>
    )
}

export default Landing