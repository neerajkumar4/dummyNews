import React from "react";
import news4 from "../images/news4.png"
import { Grid } from "@mui/material";
const Page4 = () => {
    return (
        <div className="news container-fluid">
            <h1 className="newsHead"> Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022</h1>
            <Grid container>
                <Grid item xs={12} sm={12} md={8}>
                    <img className="newsIMG" src={news4} alt="pic" />
                </Grid>
                <Grid className="imgP" item xs={12} sm={12} md={4}>
                    <p>
                    2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.
                    </p>
                </Grid>
            </Grid>
            <p>
                Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hashrates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure.
                The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.
            </p>
            <h3>Bitcoin miners’ revenue dropped in 2022</h3>
            <p>Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income and profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021.
                Over the course of 2021, bitcoin miners made more than $15 billion in revenue, according to the data from the block. This was actually considered to be a 206% year-over-year increase.
            </p>
        </div>
    )
}
export default Page4;