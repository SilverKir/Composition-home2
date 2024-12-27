interface HeaderNewsProps {
    children?: React.ReactNode;
}

/**
 *  панель переключения новостей HeaderNews
 * @param props кнопки переключения новостей
 * @returns панель переключения новостей 
 * 
 */

export const headerNews: React.FC<HeaderNewsProps> = (props) => {
    const { children } = props;
    return (
        <div className="header-news">
            {children}
        </div>
    )
}