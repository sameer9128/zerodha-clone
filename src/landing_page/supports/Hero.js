export default function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className="mt-5 mb-5 p-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track tickets</a>
            </div>
            <div className="row p-5 mt-5 mb-5">
                <div className="col-6 p-5 mt-5 mb-5">
                    <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" placeholder="Eg.how di i activate F&O" />
                    <br />
                   <a href=""> Track account</a> 
                    <a href="">opening Track segment </a>
                    <a href="">activation Intraday margins</a> 
                    <a href="">Kite user manual</a>
                    
                </div>
                <div className="col-6 p-5 mt-5 mb-5">
                    <h1>Featured</h1>
                    <ol type="number">
                        <li><a href="">Surveillance measure on scrips - July 2024</a><br /></li>
                        <li><a href="">Latest Intraday leverages and Square-off timings</a></li>

                    </ol>
                    
                    
                </div>
            </div>

        </section>
    )
}