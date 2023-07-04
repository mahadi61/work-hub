const Button = ({ children, type, onClick, disabled, color, size, fullwidth }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={`${type === "submit" ? "submit" : "button"}`}
            className={
                `px-4 py-2 rounded-lg text-white bg-blue-500 font-medium 
                ${color === "red" && "bg-red-500"}
                ${size === "sm" && "px-2 py-1 text-sm"}
                ${fullwidth && "w-full"}
                ${disabled && "opacity-50"}
            `}>
            {children}
        </button>
    );
};

export default Button;