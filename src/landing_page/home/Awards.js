export default function Awards(){
    return(
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-6">
                <img src="/media/images/largestBroker.svg" alt="award img" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>largest stock broker in india</h1>
                    <p className="mb-5">1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6 p-5">
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6 p-5">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="/media/images/pressLogos.png" alt="" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    )
}