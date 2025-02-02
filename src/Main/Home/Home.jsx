import Footer from "../Shared/Footer";
import Cover from "./Cover/Cover";
import Experience from "./Experience/Experience";
import Gallery from "./Gallery/Gallery";
import LatestPost from "./LatestPost/LatestPost";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <Experience></Experience>
            <Services></Services>
            <Gallery></Gallery>
            <LatestPost></LatestPost>
            <Footer></Footer>
        </div>
    );
};

export default Home;