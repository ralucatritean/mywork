import "../css/components/Header.css"

interface HeaderProps {
    title: string,
    subTitle?: string
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
    return (
        <div className="header">
            < h1 > {title}</h1 >
            {subTitle && <p>{subTitle}</p>
            }
        </div >);
}

export default Header;