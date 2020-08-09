import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Bar, Ulist, Lists, Items, Title } from './sidebar.styles'
import { connect } from 'react-redux'
import { logout } from '../../../actions/authActions'
import { FaHome, FaBriefcase, FaConciergeBell, FaFolder, FaUserAlt, FaHistory } from "react-icons/fa";
const Sidebar = (props) => {
    const format = { marginRight: "1rem" }
    return (
        <Container>
            <Bar>
                <Ulist>
                    <Lists>
                        <Items to='/admindashboard'>
                            <div>
                                <FaHome size="2.5rem" style={format} color="#40414d" />
                            </div>
                            <Title>
                                Dashboard
                                </Title>
                        </Items>
                        <Items to='/admincategories'>
                            <div>
                                <FaFolder size="2.5rem" style={format} color="#40414d" />
                            </div>
                            <Title>
                                Categories
                                </Title>
                        </Items>
                        <Items to='/adminusers'>
                            <div>
                                <FaUserAlt size="2.5rem" style={format} color="#40414d" />
                            </div>
                            <Title>
                                Users
                                </Title>
                        </Items>
                        <Items to='/adminitems' >
                            <div>
                                <FaConciergeBell size="2.5rem" style={format} color="#40414d" />
                            </div>
                            <Title>
                                Items
                                </Title>
                        </Items>
                        <Items to='/adminorders'>
                            <div>
                                <FaBriefcase size="2.5rem" style={format} color="#40414d" />
                            </div>
                            <Title>
                                Placed orders
                                </Title>
                        </Items>
                        <Items onClick={() => {
                            props.history.push('/')
                            props.logout()
                        }}>
                            <div>
                                <FaHistory size="2.5rem" style={format} color="#40414d" />
                            </div>
                            <Title>
                                Logout
                                </Title>
                        </Items>
                    </Lists>
                </Ulist>
            </Bar>
        </Container>
    )
}


export default withRouter(connect(null, { logout })(Sidebar))