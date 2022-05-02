import React from 'react'
import Footer from '../components/footer/footer.component';
import Header from '../components/header/header.component';

const MasterLayout = ({children}) => {
    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    )
}

export default MasterLayout;