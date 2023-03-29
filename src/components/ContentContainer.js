import React, {useState} from 'react'
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NavTabs from './NavTabs'
import Portfolio from './pages/Portfolio'
import Footer from './Footer'

export default function ContentContainer(){
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () =>{
        if (currentPage === 'About') {
            return <About />
        } 
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    const styles = {
        color: "rgb(183, 189, 166)",
        paddingBottom: "80px"
    }
    return (
        <>
        <div style={styles}>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
        <div>
        <Footer />
        </div>
        </>
        
    )
}