export default function Team(){
    return(
        <div className="container">
            <div className="row p-5 mt-5">
                <h1 className="text-center">People</h1>
            </div>
            <div className="row text-center mt-5">
                <div className="col p-5">
                    <img src="/media/images/nithinKamath.jpg" alt="images" style={{borderRadius:"100%",width:"50%"}}/>
                    <h1 mt-5>Nithin Kamath</h1>
                    <h6>founder,CEO</h6>
                </div>
                <div className="col text-muted fs-5 p-5" >
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                     <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                     <p>Playing basketball is his zen.</p>

                     <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
    )
}