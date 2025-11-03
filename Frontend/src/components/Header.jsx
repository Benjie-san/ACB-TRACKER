import React from 'react'
import { ReactComponent as AccessLogo } from '../assets/ACB-BLUE.svg';
function Header() {
    return (
        <div style={styles.container}>

            <h1>ACCESS</h1>
            <AccessLogo style={{ height: 50, width: 50 }} />
        </div>
    )
}
r
const styles = {
    container: {
        color: 'red',
        top: 0,
        border: "1px solid black",
        width: "100%",
    }
}

export default Header
