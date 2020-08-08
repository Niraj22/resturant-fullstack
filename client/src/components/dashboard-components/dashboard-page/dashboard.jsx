import React from 'react'
import { connect } from 'react-redux'
function AdminDashboard() {
    return (
        <div>
            <h1>Welcome to dashboard</h1>
        </div>
    )
}

export default connect()(AdminDashboard)