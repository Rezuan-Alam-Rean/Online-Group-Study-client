import Banner from "../../components/Banner";
import Gallary from "../../components/Gallary";
import Question from "../../components/Question";
import Subject from "../../components/Subject";
import Contact from "./contact/Contact";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Gallary></Gallary>
            <Contact/>
            <Subject></Subject>


            <Question></Question>
            
        </div>
    );
};

export default Home;