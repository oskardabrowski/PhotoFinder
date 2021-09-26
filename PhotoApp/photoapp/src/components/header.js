import FinderLogo from './icons/FinderLogo';
import SearchBtn from './icons/SearchBtn'

function Header() {
    return (
        <div className="header">
            <FinderLogo />
            <div className="header-searchbar">
                <input type="text" className="ImageNameInput" placeholder="Search Photo..."></input>
                <SearchBtn />
            </div>
        </div>
    )
}

export default Header;