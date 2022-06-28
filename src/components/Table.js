import React from "react";
import "./Form.css";
import { Edit,selectproduct,Removedetails,remove} from "../store/Reducers/formReducer";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function Table(){
  const details = useSelector(selectproduct);
  const dispatch = useDispatch();
  console.log(details);

  const removritemindex=useSelector(remove);
  console.log(removritemindex);
  const editBtn = (i) => {
    let a = i;
    dispatch(
      Edit(a)
    );
  };
  const Removebtn = (i) => {
    dispatch(
      Removedetails(i)
    )
}
return(
    <>
    <div className="table-style">
    <table class="table table-striped table-light">
  <thead>
    <tr>
    <th scope="col">Index</th>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category </th>
      <th scope="col"> Image</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      details.map((item) =>{
        return(
          <>
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.Id}</td>
            <td>{item.Name}</td>
            <td>{item.Price}</td>
            <td>{item.DropValue}</td>
            <td><img src={item.File} height="100"></img></td>
            <td>{
                   <Link to="/">
                  <button
                      className="btn btn-primary"
                      onClick={()=>editBtn(item.id)}
                    >
                      Edit
                    </button></Link>}</td>
                    <td>{
                   
                  <button
                      className="btn btn-primary"
                      onClick={()=>Removebtn(item.id)}
                    >
                     Delete
                    </button>}</td>
          </tr>
          </>
        )
      })
    }
  </tbody>
</table>
<div>
  <Link to="/">
    <button  type="button" className="btn btn-dark">Form</button>
  </Link>
</div>
<div>
</div>
</div>
    </>
);

}