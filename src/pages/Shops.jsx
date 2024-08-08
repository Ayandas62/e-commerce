import Hero from "../component/Hero/Hero";
import NewCollection from "../component/NewCollection/NewCollection";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import Offer from "../component/Offer/Offer";
import Popular from "../component/Popular/Popular";

const Shops = ()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    )
};

export default Shops