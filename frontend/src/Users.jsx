import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users(){
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001")
        .then((result) => {
            setUsers(result.data)
            
        }).catch((err) => {
            console.log(err);
            
        });

    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((error) => console.log(error));
        
        
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-50">
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         users.map((user) => {
                          return  <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success">update</Link>
                                    <button className="btn btn-danger"
                                     onClick={(e) =>handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                         })
                       }
                    </tbody>
                </table>

            </div>

        </div>
    )
}
export default Users;