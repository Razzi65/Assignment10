import Buttons from "../components/buttons"
import Textarea5 from "../components/textarea5"
import Textarea6 from "../components/textarea6"

const Buying = () => {
    return (
        <div>
            <Textarea6/>
            <Buttons/>
            <br/>
            <Textarea5 text1="Can I order other items that are not offered on the platform? Do you offer pre-order?" text2="NO not at all, only what is offered on the platform is available to purchase! We have new items on a daily basis, so check back often!No pre order, this is a live offer with product in stock !!!!"
            text3="Sizing" text4="Shipment Damage" text5="Minimum orders" text6="Taxes and Duties"/>
            <br/> <br/>
        </div>
    )
}

export default Buying