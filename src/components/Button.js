import "./Button.css";

const Button = ({ symbol, color, backgroundColor, handleClick }) => {
    return <div
        onClick={() => handleClick(symbol)}
        className="btn"
        style={{ color, backgroundColor }}>
        {symbol}
    </div>
};

export default Button;