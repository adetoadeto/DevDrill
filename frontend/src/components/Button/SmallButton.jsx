import "./button.css";

function SmallButton ({children, isSelected="", ...props})  {
    return (
        <button className={`small-button ${isSelected ? "active" : ""}`} {...props}>{children}</button>
    )  
}

export default SmallButton;
