import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAOiuYE.img?h=480&w=799&m=6&q=60&o=f&l=f" alt="" className="heroImg" />
            {/* <div className="heroTitle">
                <span className="heroTitleSm">React & Node</span>
                <span className="heroTitleLg">Blog</span>
            </div> */}
            <div className="heroInfo">
                <p className="infoTitle">At least four killed in Taliban crackdown on protests, says UN</p>
            </div>
        </div>
    )
}

export default Hero
