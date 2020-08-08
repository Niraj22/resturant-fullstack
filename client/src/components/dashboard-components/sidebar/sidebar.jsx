import React, { Component } from 'react'
import { Container, Bar, Ulist, Lists, Items, Title } from './sidebar.styles'
import { FaHome, FaBriefcase, FaConciergeBell, FaUserCircle, FaFolder, FaUserAlt } from "react-icons/fa";
class Sidebar extends Component {
    format = { marginRight: "1rem" }
    render() {
        return (
            <Container>
                <Bar>
                    <Ulist>
                        <Lists>
                            <Items to='/admindashboard'>
                                <div>
                                    <FaHome size="2.5rem" style={this.format} color="#9493ac" />
                                </div>
                                <Title>
                                    Dashboard
                                </Title>
                            </Items>
                            <Items to='/admincategories'>
                                <div>
                                    <FaFolder size="2.5rem" style={this.format} color="#9493ac" />
                                </div>
                                <Title>
                                    Categories
                                </Title>
                            </Items>
                            <Items to='/adminitems' >
                                <div>
                                    <FaConciergeBell size="2.5rem" style={this.format} color="#9493ac" />
                                </div>
                                <Title>
                                    Items
                                </Title>
                            </Items>
                            <Items to='/adminusers'>
                                <div>
                                    <FaUserAlt size="2.5rem" style={this.format} color="#9493ac" />
                                </div>
                                <Title>
                                    Users
                                </Title>
                            </Items>
                            <Items to='/adminorders'>
                                <div>
                                    <FaBriefcase size="2.5rem" style={this.format} color="#9493ac" />
                                </div>
                                <Title>
                                    Placed orders
                                </Title>
                            </Items>
                        </Lists>
                    </Ulist>
                </Bar>
            </Container>
        )
    }
}

export default Sidebar