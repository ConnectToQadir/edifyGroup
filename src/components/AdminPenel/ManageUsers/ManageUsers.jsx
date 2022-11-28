import { useEffect, useState } from 'react'
import './ManageUsers.css'
import axios from 'axios'

const ManageUsers = () => {

    // Fetch Counselors From DB
    const [counsolers, setCounsolers] = useState([])
    useEffect(() => {
        try {
            const fetchCounsolers = async () => {
                let response = await axios.get("https://edifygroup.herokuapp.com/api/auth/allUsers")
                setCounsolers(response.data.data)
            }
            fetchCounsolers()
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className='ManageUsers'>
            <div className="AllUser">
                <h1>All Users</h1>
                <table className="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Email</th>
                            <th scope="col">User Code</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            counsolers.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{i+1}</th>
                                        <td>{v.username}</td>
                                        <td>{v.desig}</td>
                                        <td>{v.email}</td>
                                        <td>{v.userCode}</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageUsers