type Textarea5type = {
  text1:string,
  text2:string,
  text3:string,
  text4:string,
  text5?:string,
  text6?:string,
  text7?:string,

}


const Textarea5 = (prop:Textarea5type) => {
    return (
        <div className="container-fluid d-flex justify-content-center  mt-5" >

<ul className="nav flex-column ms-5 ps-5 w-50">
  <li className="nav-item border-bottom">
  
    <a className="nav-link active text-black" href="#"><h5 > {prop.text1}</h5></a>
    <p className="text-start ps-3"> {prop.text2}</p>
  </li>
  <li className="nav-item border-bottom">
    <a className="nav-link" href="#"><h5 className="text-black"> {prop.text3} </h5></a>
  </li>
  <li className="nav-item border-bottom">
    <a className="nav-link" href="#"><h5 className="text-black"> {prop.text4} </h5></a>
  </li>
  <li className="nav-item border-bottom">
    <a className="nav-link" href="#"><h5 className="text-black"> {prop.text5} </h5></a>
  </li>
  
  <li className="nav-item border-bottom">
    <a className="nav-link" href="#"><h5 className="text-black"> {prop.text6} </h5></a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#"><h5 className="text-black"> {prop.text7} </h5></a>
  </li>
  
</ul>

        </div> 
    )
    }

    export default Textarea5