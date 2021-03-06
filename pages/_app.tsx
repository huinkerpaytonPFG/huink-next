import "@pds/table/table.min.css";
import "@pds-react/core/dist/core.min.css";
import "@pds-react/grid/dist/grid.min.css";
import '@pds-react/button/dist/button.min.css';
import '@pds-react/card/dist/card.min.css';
import '@pds-react/input/dist/input.min.css';
import { AppProps } from "next/app";
import React, { FC } from "react";
// import { SWRConfig } from "swr";

const HuinkNext: FC<AppProps> = ({ Component, pageProps }) => (

    <div className="container">
      <main>
        <Component {...pageProps} />
      </main>
    </div>
);

export default HuinkNext