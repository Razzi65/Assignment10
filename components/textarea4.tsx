
type Textarea4Type = {
    text1:string,
    text2:string,
    text3:string,
    text4:string,
    text5:string

}


const Textarea4 = (prop:Textarea4Type) => {
    return (


        <div className="container mt-5">

            <h1 className="text-center pt-5"> {prop.text1} </h1>

            <div className="mt-5 ms-5 ps-5 d-flex  justify-content-center ">
                <div className="container d-flex  justify-content-center">
                    <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item">
                            <a className="nav-link active bg-success text-light" href="#">{prop.text2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">{prop.text3}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">{prop.text4}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">{prop.text5}</a>
                        </li>
                    </ul>
                </div>

            </div> </div>
    )
}

export default Textarea4