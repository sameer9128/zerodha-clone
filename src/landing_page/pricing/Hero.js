export default function Hero(){
    return(
        <div className="container mt-5 ">
            <div className="row text-center p-5 border-bottm">
                <h1>Pricing</h1>
                <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className="row border-top text-center">
                <div className="col-4 mt-3 p-5">
                    <img src="/media/images/pricing0.svg" alt="" />
                    <h1>Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mt-3 p-5">
                    <img src="/media/images/pricingEquity.svg" alt="" />
                    <h1>Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 mt-3 p-5">
                    <img src="/media/images/pricingMF.svg" alt="" />
                    <h1>Free direct MF</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}