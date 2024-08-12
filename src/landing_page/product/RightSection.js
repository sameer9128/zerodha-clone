export default function RightSection({
    imageUrl,
    productName,
    productDescription,
    
    learnMore,
}){
    return(
        <div className="conatiner p-5 ">
        <div className="row p-5">
           
            
            <div className="col p-5 mt-5">
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className="mt-3">
                    
                    <a href={learnMore} style={{marginLeft:"50px"}}>learn more</a>
                </div>
               
            </div>
            <div className="col p-5">
                <img src={imageUrl} alt="" />
            </div>
        </div>
    </div>
    )
}