import "./navbar.scss"

const Navbar = () => {
    return <div className="navbar">
        <div className="logo">
            <img src="/logo.svg" alt="logo" />
            <span>LakunleAdmin</span>
        </div>
        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="icon" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notifications">
                <img src="/notifications.svg" alt="" />
                <span>1</span>
            </div>
            <div className="user">
                <img src="/web.png" alt="user" />
                <span>John Doe</span>
            </div>
            <img src="/settings.svg" alt="" />
        </div>
        
    </div>
}

export default Navbar