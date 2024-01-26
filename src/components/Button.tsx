type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
    full?: boolean;
}

const Button = ({ type, title, variant, full }: ButtonProps) => {
    return (
        <button
            className={`flexCenter gap-3 border ${variant} ${full && 'w-full'}`}
            type={type}
        >
            <label className="bold-8 whitespace-nowrap cursor-pointer">{title}</label>
        </button>
    )
}

export default Button