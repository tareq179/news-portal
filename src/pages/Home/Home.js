import Hero from '../../Components/Hero/Hero';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
    return (
        <>
             <Hero/>
             <div style={{display:"flex"}}>
                <Posts/>
                <Sidebar/>
             </div>
        </>
    )
}

export default Home
