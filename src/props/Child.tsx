interface ChildProps {
    color: string;
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};
//Below a function component ("FC") which has ChildProps (above)
//up to you what style to use.
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me</button>
        </div>
    );
};