import { Paper, Grid } from "@mui/material";
import React from "react"
import { Link } from "react-router-dom";
import news1 from "../images/news1.png"
import news2 from "../images/news2.png"
import news3 from "../images/news3.png"
import news4 from "../images/news4.png"
import news5 from "../images/news5.png"
const Home = () => {
    return (
        <div className="container">
            <Grid container spacing={5}>
                <Grid item md={4} sm={6} xs={12}>
                    <Paper elevation={10} style={{height:"340px"}}>
                        <img style={{ width: "100%", height: "230px" }} src={news1} alt="pic" />
                        <h3 style={{ textDecoration: "none" }}>PayPal enables transfer of digital currencies to external wallets</h3>
                        <Link style={{ textDecoration: "none"}} to="/page1" >Read more...</Link>
                    </Paper>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Paper elevation={10} style={{height:"340px"}}>
                        <img style={{ width: "100%", height: "230px" }} src={news2} alt="pic" />
                        <h3 style={{ textDecoration: "none" }}>Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget</h3>
                        <Link style={{ textDecoration: "none" }} to="/page2" >Read more...</Link>
                    </Paper>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Paper elevation={10} style={{height:"340px"}}>
                        <img style={{ width: "100%", height: "230px" }} src={news3} alt="pic" />
                        <h3 style={{ textDecoration: "none" }}>Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC</h3>
                        <Link style={{ textDecoration: "none" }} to="/page3" >Read more...</Link>
                    </Paper>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Paper elevation={10} style={{height:"340px"}}>
                        <img style={{ width: "100%", height: "230px" }} src={news4} alt="pic" />
                        <h3 style={{ textDecoration: "none" }}> Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022</h3>
                        <Link style={{ textDecoration: "none" }} to="/page4" >Read more...</Link>
                    </Paper>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <Paper elevation={10} style={{height:"340px"}}>
                        <img style={{ width: "100%", height: "230px" }} src={news5} alt="pic" />
                        <h3 style={{ textDecoration: "none" }}>Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h3>
                        <Link style={{ textDecoration: "none" }} to="/page5" >Read more...</Link>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home;