import Hero from '../components/Hero';
import Services from '../components/Services';
import OnlineConsultancy from '../components/OnlineConsultancy';
import Contact from '../components/Contact';
import IncentivesBanner from '../components/IncentivesBanner';
import About from '../components/About';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <IncentivesBanner />
            <OnlineConsultancy />
            <About />
            <Contact />
        </>
    );
};

export default Home;
