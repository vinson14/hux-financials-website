import React from "react";

import LandingPage from "./micro-components/LandingPage";
import Header from "./micro-components/Header";

import { GoogleSpreadsheet } from "google-spreadsheet";

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet(
        process.env.REACT_APP_GOOGLE_SPREADSHEET_ID
    );
    const creds = {
        private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
        client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    };
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc);
}

accessSpreadsheet();

class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <Header position="fixed" bg="transparent" />
                <LandingPage />
            </div>
        );
    }
}

export default Home;
