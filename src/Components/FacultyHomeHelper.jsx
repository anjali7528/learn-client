import React, {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'



const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/')
    }
    return (
        <div className="">
            {/* <Header /> */}
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#0F496E", color:"white"}}>
                        <h4 className="navbar-brand mt-1" href="" style={{color:"white"}}>Learn+</h4>
                        <button style={{backgroundColor:"white"}}className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon bg-light " style={{olor:"white"}}></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav" style={{color:"white"}}>
                            <ul className="navbar-nav">
                                <li className="nav-item active" >
                                    <button type="button" className="btn"><Link to="/home"  style={{color:"white"}}><li>{name.toUpperCase()}</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updateProfile" style={{color:"white"}}><li>UPDATE PROFILE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/attendenceFaculty" style={{color:"white"}}><li>MARK ATTENDANCE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/uploadMarks" style={{color:"white"}}><li>UPLOAD MARKS</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updatePassword" style={{color:"white"}}><li>UPDATE PASSWORD</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/createQuiz" style={{color:"white"}}><li>CREATE QUIZ</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/showQuiz" style={{color:"white"}}><li>SHOW QUIZ</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/viewResult" style={{color:"white"}}><li>QUIZ RESULT</li></Link></button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button style={{listStyle:"None", color:"white"}} onClick={logoutHandler} type="button" className="btn" ><li>LOGOUT</li></button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home
