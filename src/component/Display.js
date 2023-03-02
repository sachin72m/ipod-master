import './component-style/display.css';
import Home from './Home';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MyMusic from './MyMusic';
import Artists from './Artists';

const Display =(props)=>{
    return(
        <div className="display">

            {/* display components acording controller------------------------------ */}
            {props.activePage==='Home'?<Home activeItem={props.activeItem}/> : null}
            {props.activePage==='Music'?<Music activeItem={props.activeItem}/> : null}
            {props.activePage==='Games'?<Games /> : null}
            {props.activePage==='Settings'?<Settings /> : null}
            {props.activePage==='MyMusic'?<MyMusic audio={props.audio} /> : null}
            {props.activePage==='Artists'?<Artists /> : null}
            {/* --------------------------------------------------------------------- */}

            
        </div>
    );
}
export default Display;