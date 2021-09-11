import './TopBar.scss'

const TopBar = () => {
    return (
        <div className="topBar">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <li className="topListItem">
                        LOGIN
                    </li>
                    <li className="topListItem">
                        REGISTER
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopBar
