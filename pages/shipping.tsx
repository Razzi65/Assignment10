import Textarea2 from "../components/textarea2"
import Textarea5 from "../components/textarea5"


const Shipping = () => {
    return (
        <div>
            <div className="container mt-5 ">
            <div className="row">
                <div className="col-md">
                 <div className="w-75 ms-4">   <h2> Shipping for buyers </h2>
                    <p> All of our items are being shipped from several warehouses/stores in the USA and worldwide, and usually ships within 24h to 5 business days depending on the seller’s shipping time.
                    <br/>   <br/> <b> We take care of all customs paperwork for you , so you can sleep well at night! </b> <br/> <br/>
                        
                        1. <b>Sellers: </b>  Just pack the shoes, tape the box(es)properly with lots of tape, request your labels via email, and relax! The rest will be taken care of ☺
                        <br/><br/>
                        2. <b>Buyers: </b> Don’t worry, we will make sure: a proper value, tariff code and description are entered and that no problems occur from the time packages leave the country and arrive in your country to clear customs!
                    </p> </div>
                </div>

            <div className="col-md">
                <img src={"Globe.png"} className="mt-3" alt="" />
            </div>

            </div>


        </div>
<br/>
            <div className="container ">
                <Textarea2 imgsrc="ship.png" H3="How much does shipping COST" para="The default shipping cost for sellers & buyers on the platform is $2.50/pair for domestic shipments within the USA, and $10-$12.50/pair for international express shipments. That will vary based on the seller & buyer location. Of course, shipping cost are pretty low, as we are dealing with bulk purchases, resulting in cost-effective shipping." />
            </div>

            <Textarea5 text1="Can I change my shipping address once my order has been placed?" text2="Hypeindustry is unable to change a shipping address once the order has been placed. So please make sure all personal and corporate information are correct on your user profile.Also the shipping address on file has to match your billing address!"
            text3="Why does my billing and shipping address have to MATCH?" text4="Can I edit my order once I placed It?" text5="Can I change the Shipping Address AFTER the order has been placed?"
            text6="How long does it take to ship?" />
            <br/> <br/>
        </div>



    )
}

export default Shipping