
/**
 * Link component props
 */

export interface LinkProps {
    href?: string;
    className?: string;
    linkText?: string;
}


export const SimpleLink: React.FC<LinkProps> = (props) => {
    const { href = "#", linkText, className } = props;
    return (
        <a href={href} className={`link ${className}`}>
            {linkText}
        </a>
    )
}