interface HeaderNewsProps {
    title: string;
    children?: React.ReactNode;
}

export const HeaderNews: React.FC<HeaderNewsProps> = (props) => {
    const { title, children } = props;
    return (
        <div className="header-news">
            <h1>{title}</h1>
            {children}
        </div>
    )
}