import "../common/template/dependencies";
import Header from "../common/template/header"
import SideBar from "../common/template/sidebar"
import React from "react"

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
    </div>
)