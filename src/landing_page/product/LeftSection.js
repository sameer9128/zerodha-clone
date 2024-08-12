export default function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,


}){
    return(
        <div className="conatiner p-5 ">
            <div className="row p-5">
                <div className="col p-5">
                    <img src={imageUrl} alt="" />
                </div>
                
                <div className="col p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="mt-3">
                        <a href={tryDemo}>try demo</a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>learn more</a>
                    </div>
                    <div className="mt-5">
                    <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" alt="" /></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="/media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}