import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'; 

function Error(){
    const location = useLocation();

    const [Data, setData] = useState("404 Page Not Found!")

    useEffect(() => {
        const pathname = location.pathname;
        if(pathname === '/Payment-Page'){
            setData("Coming Soon....!!!")
        }
    }, [location]);
    
    
    return(
        <>
            <section className="home_banner" id="Error_sec">
                <div className="container">
                    <div className="error text-center">
                        <h2 className="heading_title mb-4">{Data}</h2>
                        <a href="/" className="sub_btn">Back To Home</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Error