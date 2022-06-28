import React from "react";
import "./Form.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectproduct,Edit,updatevalue,update,editForm} from "../store/Reducers/formReducer"
import { Link } from "react-router-dom";
import { userAdded } from "../store/Reducers/formReducer"
export default function Form() {
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [File, setFile] = useState("");
  const [DropValue, setDropValue] = useState("");
  const [User, setUser] = useState([]);
  const dispatch = useDispatch();
  const userDetails = useSelector(update);
  const editbtnForm = useSelector(editForm);
  const userAmount = useSelector((state) => state.form.value.length);
  console.log(userAmount + "= userAmount");
  console.log(editbtnForm + "= editBtnForm");

const uploadImage = async (e) =>{
  const file = e.target.files[0];
  const base64 = await convertBase64(file)
  console.log(base64)
  setFile(base64);
};

  const convertBase64 = (file) => {
    return new Promise((resolve,reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    
    fileReader.onload = () =>{
     resolve(fileReader.result);
    };

    fileReader.onerror = (error) =>{
      reject(error);
    };
    });
  }

  const submit = () => {
    
    if (editbtnForm!= 0) {
      dispatch(
        updatevalue({
          id: editbtnForm,
          Id,
          Name,
          Price,
          File,
          DropValue,
        })
      );
      if(editbtnForm!=0)
      {
        dispatch(
          Edit(0)
        );
      }
      
    } else {
      dispatch(
        userAdded({
          id: userAmount + 1,
          Id,
          Name,
          Price,
          File,
          DropValue,
        })
      );
      setName("");
      setPrice("");
      setFile("");
      setDropValue("");
      setId("");
    }
  };
  // const Userdata = {
  //   Id: Id,
  //   Name: Name,
  //   Price: Price,
  //   File: File,
  //   DropValue:DropValue
  // };
  // setUser([...User, Userdata]);
  // console.log(setUser);
  // console.log(Userdata);
  return (
    <>
      <div className="container body">
        <div className="login-box">
          <h2>FORM</h2>
          <form>
            <div className="user-box">
              <input
                type="text"
                name=""
                value={Id}
                required=""
                onChange={(e) => setId(e.target.value)}
              />
              <label>ID</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name=""
                value={Name}
                required=""
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input
                type="text"
                name=""
                value={Price}
                required=""
                onChange={(e) => setPrice(e.target.value)}
              />
              <label>Price</label>
            </div>
            <div className="user-box">
              <input
                type="file"
                name=""
                required=""
                className="form-control"
                onChange={(e) => uploadImage(e)}
              />
            </div>
            <select
              class="form-select bg-dark text-success fs-5"
              aria-label="Default select example"
              value={DropValue}
              onChange={(e) => setDropValue(e.target.value)}
            >
              <option selected>select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <Link to="Table">
            <a href="#" className="me-5" onClick={submit}>
              <span />
              <span />
              <span />
              <span />
              submit
            </a>
            </Link>
            <Link to="Table">
              <span />
              <span />
              <span />
              <span />
              Table
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}