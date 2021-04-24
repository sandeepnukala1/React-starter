function Player(props) {
    return (
        <div className={props.whichPlayer}>
            <h2>Player {props.whichPlayer}</h2>
            <h3>Wins: {props.score}</h3>

        </div>
    )
}

export default Player;