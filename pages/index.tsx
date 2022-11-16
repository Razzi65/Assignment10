import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/navbar'
import Textareas from '../components/textareas'
import Textarea2 from '../components/textarea2'
import Textarea3 from '../components/textarea3'
import Textarea4 from '../components/textarea4'
import Textarea5 from '../components/textarea5'
import Textarea6 from '../components/textarea6'
import Buttons from '../components/buttons'
import Cards from '../components/cards'
import Footer from '../components/footer'



export default function Home() {
  return (
    <div>
    
      
      <Textareas/>

      <Textarea2 imgsrc='secondimg.png' H3={"Why HypeIndustry and what is it"} para={"Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel & Accessory industry! Basically a new marketplace that allows you to buy in bulk (only) footwear, apparel etc..."}/>

      <Textarea3/>

      <Textarea4 text1='Selling on HypeIndustry' text2='BECOME A SELLER' text3='CREATE A LISTING' text4='SELLER FEE' text5='CONDITION OF ITEMS'/>

      <Textarea5 text1='How do I sell on HypeIndustry?' text2='To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all the required information. We’ll notify you as soon as your request has been approved.'
      text3='I requested to become a SELLER, how long will it take to get approved?' text4='How do I delete my Account?' text5='Can I share my seller privileges with others?'
      text6='Can I create several Seller Accounts?' text7='How do I become a seller if I have a store outside the USA?'/>
      <br/><br/>
      <Textarea6/>

      <Buttons/>
      <br/> <br/>

      <Cards/>

    
      
    </div>
  )
}
