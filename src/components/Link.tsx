
/**
 * Link component props
 */

export interface LinkProps {
    icon: string;
    href?: string;
    className?: string;
    linkText?: string;
}

/**
 * ссылка Link
 * @param props ссылка на иконку, текст , ссылка
 * @returns link with icon and text
 */

export const simpleLink: React.FC<LinkProps> = (props) => {
    const { icon, href = "#", linkText, className } = props;
    return (
        <>
            <div className={`link-${className}`}>
                <img src={icon} />
                <a href={href} >
                    {linkText}
                </a>
            </div>
        </>
    )
}