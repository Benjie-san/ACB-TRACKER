import React from 'react'
import AccessLogo from '../assets/ACB-BLUE.svg';
function Header() {
    return (
        <div style={styles.container}>

            <h1>ACCESS</h1>
            <img src={AccessLogo} alt="Access Customs Brokerage Logo" style={{ height: 50, width: 50 }} />
        </div>
    )
}

const styles = {
    container: {
        color: 'red',
        top: 0,
        border: "1px solid black",
        width: "100%",
    }
}

export default Header
