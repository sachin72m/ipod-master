import "./component-style/games.css";

function Games() {
    return (
        <div className="game-display">

            {/* title bar div -------------------*/}
            <div className="title-bar">
                <p className='titleBar-p'>iPod</p>
            </div>
            {/* --------------------------------- */}

            <div className="game-image">
                <img src="https://media2.giphy.com/media/uYe2emzPgDfj2/giphy.webp?cid=ecf05e47fa455dac230de80fff0206077175b008801bc689&rid=giphy.webp" alt='' />
            </div>

        </div>
    );
}

export default Games;

