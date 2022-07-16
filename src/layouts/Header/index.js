import './Header.css'

function Header() {
    return (
        <header className='wrapper'
        >
            <div className='inner'>
                <div className='logo'>
                    <img 
                        src = "http://corebanking.vietvictory.vn/images/logo.png"
                        alt = "VietVictory"
                        width= "190"
                        height = "50"
                    />
                </div>
                <div className='university_logo'>
                    <img 
                            src = "https://app.universityhub.com/assets/images/univ-hub-logo-only.png"
                            alt = "Hub_University"
                            width= "70"
                            height = "55"
                        />
                </div>
            </div>

        </header>
    )
}

export default Header;