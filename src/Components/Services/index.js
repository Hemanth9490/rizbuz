import EachService from "./EachService/index";
import { Component } from "react";
const servicesList = [
  {
    serviceName: "Credit",
    serviceImage: "./images/services_images/credit.png",
    seriviceDescription:
      "The purpose of credit management is to provide a process for extending credit and collecting accounts receivable consistent with your company’s commercial and financial objectives. We hereby establish customers credit limits and credit checking policies.",
  },
  {
    serviceName: "Litigation & Arbitration Process",
    serviceImage: "./images/services_images/discussion.png",
    seriviceDescription:
      "The kind of dispute whichever is submitted by the team or the customer by agreement of the parties, and take appropriate measures to recover the due amount from the clients through Legal counsel & Arbitration recourse.",
  },
  {
    serviceName: "Cash Application Process",
    serviceImage: "./images/services_images/cash.png",
    seriviceDescription:
      "Cash Application Process:  The aim of the Cash Application Process to manage the complete end-to-end process of apply the invoice to customer account and responsible of complete MIS reporting stuff which is required for the Internal and Management Team.",
  },
  {
    serviceName: "Know Your Customer [KYC]",
    serviceImage: "./images/services_images/kyc.png",
    seriviceDescription:
      "Evault & Validates the existence of client and location.Validates the authenticity of documents Validates that all data  info provided to the team, is in, and matches to the records Sends field agents to clients’ premises when data document cannot be authenticated or by requestor",
  },
  {
    serviceName: "Collections",
    serviceImage: "./images/services_images/collection-3.png",
    seriviceDescription:
      "Successful collections are dependent on your ability to reach your customer with a message that gets their attention and results in prompt payment of past due invoices and so reaching customers is essential for achieving collection goals and increasing cash flow.",
  },
];

class Services extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center">Our Services</h1>
        <div className="row justify-content-center mt-3">
          {servicesList.map((eachService) => (
            <EachService eachService={eachService} />
          ))}
        </div>
      </div>
    );
  }
}

export default Services;
