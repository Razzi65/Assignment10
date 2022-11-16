
const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row pt-5 ms-5">
                <div className="col-md-2 text-light text-end">

                    <ul className="pt-4 ps-5 text-center">
                        <h5 > <b> HYPEINDUSTRY </b> </h5>
                        <br />
                        <p> <a href="http://localhost:3000/hypeindustry_concepts"> HypeIndustry Concept </a></p>
                        <p> Buying Guide</p>
                        <p> Selling Guide</p>


                    </ul>


                </div>
                <div className="col-md-2 text-light text-end">

                    <ul className="pt-4 ps-5 text-center">
                        <h5 > <b> HYPEOFFERS </b> </h5>
                        <br />
                        <p> Footwear</p>
                        <p> Apparel </p>
                        <p> Accessories</p>


                    </ul>


                </div>
                <div className="col-md-2 text-light text-end">

                    <ul className="pt-4 ps-5 text-center">
                        <h5 > <b> SHIPPING </b> </h5>
                        <br />
                        <p> Shipping For Buyers</p>
                        <p> Shipping For Sellers </p>


                    </ul>


                </div>
                <div className="col-md-6 text-light text-end">

                    <ul className="pt-4 ps-5 text-center">
                        <h5 > <b> CONTACT US </b> </h5>
                        <br />
                        <p className="text-success"> shipping@hypeindustry.com <br />
                            sales@hypindustry.com </p>


                    </ul>



                </div>

                <div className="mt-5"><hr className="mt-5 text-light"/>
                <p className="text-secondary text-center"> © 2022 HypeIndustry </p>
                </div>

            </div>


        </div>
    )
}

export default Footer