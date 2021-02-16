import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"

const onClickHandler= e =>{
    navigate('/new');
}

const AllAuthors = props =>{

     const [authors, setAuthors] = useState([])

     useEffect( () => {
         axios.get("http://localhost:3000/api/getAllAuthors")
             .then(response => setAuthors((response.data)))
             .catch(error => console.log("There was an issue: ", error))
     },[])

     return(
         <div className="container">
             {
                 authors.length > 0 &&
                     authors.map((item, ind) => {
                         return <div key={ind}>{item.name}</div>
                     })
             }
             <input type={'button'} value={"Add New Author"} onClick={e => onClickHandler(e)}/>
         </div>
     )
 }
 export default AllAuthors;