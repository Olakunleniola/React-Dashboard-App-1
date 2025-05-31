import "./main.scss"
import { Link } from "react-router-dom";
import {menu} from "../../data"

const Main = () => {
    return( 
    <div className="main">
        { menu && 
            menu.map((item) => (
            <div className="item" key={item.id}>
                <span className="title">{item.title.toUpperCase()}</span>
                {
                    item.listItems.map((listItem) => (
                        <Link to={listItem.url} className="listItem" key={listItem.id}>
                            <img src={listItem.icon} alt="home" />
                            <span className="listItemTitle">{listItem.title}</span>
                        </Link>
                    ))
                }
            </div> 
            ))    
        }
    </div>
    )
}

export default Main