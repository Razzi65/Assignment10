
import buyer from "*.png"

const Cards = () => {
    return (
        <div className="container mt-5 me-5 mb-5">
            <div className="row">
                <div className="col">
                    <img src="buyer.png" alt="" />
                    

                    <h3 className="mt-4"> Shipping for buyers </h3>

                    <p> All of our items are being shipped from several warehouses/stores in the USA and worldwide, and usually ships within 24 H to 5 business days depending on the seller’s shipping time.
                        
                    </p>
                    <button className="border-0 bg-transparent text-success">Read more > </button>
                </div>

                <div className="col">
                    <img src="seller.png" alt="" />
                    <h3 className="mt-4"> Shipping for sellers </h3>
                    <p> Once you have approved the purchase, you can request for your labels by email at: shipping@hypeindustry.com! Make sure to include:
                        Buyer’s details...</p>
                    <button className="border-0 bg-transparent text-success">Read more > </button>

                </div>
            </div>


        </div>
    )
}


export default Cards