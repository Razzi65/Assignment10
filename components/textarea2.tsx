import secondimg from "*.png"


type textareatype = {
    imgsrc:string,
    H3: any,
    para: any
}

const Textarea2 = (props:textareatype) => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row d-flex">

                <div className="col-md border-end border-dark">
                    <img className="img-fluid" src={props.imgsrc} alt="" />
                </div>

                <div className="col-md ms-5">
                    <h3> {props.H3} </h3>
                    <p className="pt-2">{props.para}</p>

                </div>

            </div> </div>
    )
}

export default Textarea2