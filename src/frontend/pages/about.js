import { useNavigate } from "react-router-dom";

const About = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <p>About page</p>
      <p onClick={() => Navigate("/")}>Navigate to main page</p>
    </div>
  );
};

export default About;
