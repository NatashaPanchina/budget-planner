import React from "react";
import IncomeRoutes from "../income/IncomeRoutes.js";
import HomeRoutes from "../home/HomeRoutes.js";
import HouseholdBillsRoutes from "../house/HouseholdBillsRoutes.js";
import FinanceRoutes from "../finance/FinanceRoutes.js";
import GroceriesRoutes from "../groceries/GroceriesRoutes.js";
import EntertainmentRoutes from "../entertainment/EntertainmentRoutes.js";
import TransportRoutes from "../transport/TransportRoutes.js";
import FamilyAndFriendsRoutes from "../family/FamilyAndFriendsRoutes.js";
import OtherRoutes from "../other/OtherRoutes.js";
import SummaryRoutes from "../summary/SummaryRoutes.js";


export default function Routes() {
    return (
        <div id="infoContainer">
            <SummaryRoutes/>
            <OtherRoutes/>
            <FamilyAndFriendsRoutes/>
            <TransportRoutes/>
            <EntertainmentRoutes/>
            <GroceriesRoutes/>
            <FinanceRoutes/>
            <HouseholdBillsRoutes/>
            <IncomeRoutes/>
            <HomeRoutes/>
        </div>
    )
}