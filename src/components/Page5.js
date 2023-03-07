import React from "react";
import news5 from "../images/news5.png"
import { Grid } from "@mui/material";
const Page5 = () => {
    return (
        <div className="news container-fluid">
            <h1 className="newsHead">Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h1>

            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <img className="newsIMG" src={news5} alt="pic" />
                </Grid>
                <Grid className="imgP" item xs={12} sm={12} md={4}>
                    <p>The investor drained $110 million in cryptocurrencies from the platform.
                            Avraham Eisenberg, the crypto investor whose “highly profitable trading strategy” drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said.</p>
                </Grid>
            </Grid>


           
            
            <p>The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.</p>
             <p>Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.</p>
              <p> A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg “willfully and knowingly” manipulated the sale of a commodity – namely futures contracts on Mango Markets.
                </p> 
             <p>  “Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.”
            </p>
        </div>
    )
}
export default Page5;