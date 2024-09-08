import React from "react";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

const SacStructure = () => (
  <div id="sacCodeStructure" className="sacCodeStructureBlock">
    <div className="container-fluid">
      <div className="textHolder">
        <Title level={2} style={{ marginBottom: "20px", marginTop: "-20px" }}>
          Services Accounting Code (SAC) in GST
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Services, much like goods, require uniform classification for
          recognition, measurement, and taxation purposes. These classifications
          are known as Services Accounting Codes (SAC).
        </Paragraph>

        <div className="sacCodeExample">
          <img
            src="/assets/sac.svg"
            alt="SAC Code Structure Example"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Legal documentation and certification services related to patents,
          copyrights, and other intellectual property rights are classified
          under 998213.
        </Paragraph>
        <ul
          style={{
            fontSize: "16px",
            color: "#9092A3",
            paddingLeft: "20px",
            marginBottom: "34px",
          }}
        >
          <li>The first two digits (99) are common for all services.</li>
          <li>
            The next two digits (82) denote the major category of the service,
            in this case, legal services.
          </li>
          <li>
            The last two digits (13) specify the detailed nature of the service,
            such as legal documentation for patents.
          </li>
        </ul>

        <Title level={2} style={{ marginBottom: "20px" }}>
          HSN Worldwide
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The Harmonized System of Nomenclature (HSN) plays a crucial role in
          the global trade ecosystem by:
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "20px" }}>
          <li>Ensuring consistent classification of goods across borders.</li>
          <li>Providing a standardized foundation for customs tariffs.</li>
          <li>
            Facilitating the collection of international trade statistics.
          </li>
        </ul>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          While the HSN codes are globally standardized, some countries may
          implement slight modifications to account for specific national
          requirements.
        </Paragraph>

        <Title level={2} style={{ marginBottom: "20px" }}>
          HSN in India
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          As a member of the World Customs Organization (WCO) since 1971, India
          initially adopted the 6-digit HSN codes for Customs and Central Excise
          purposes. To achieve greater accuracy in classification, India later
          extended these codes to an 8-digit format, allowing for more detailed
          categorization of goods.
        </Paragraph>

        <Title level={2} style={{ marginBottom: "20px" }}>
          HSN Codes in GST
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN (Harmonized System of Nomenclature) codes are critical under the
          GST regime, used for the systematic classification of goods.
        </Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN Codes to be Declared (Up to March 31, 2021):
        </Paragraph>
        <ul
          style={{
            fontSize: "16px",
            color: "#9092A3",
            paddingLeft: "20px",
            marginBottom: "34px",
          }}
        >
          <li>Turnover up to ₹1.5 crore: No HSN digits required.</li>
          <li>
            Turnover between ₹1.5 crore and ₹5 crore: 2 HSN digits required.
          </li>
          <li>Turnover above ₹5 crore: 4 HSN digits required.</li>
        </ul>

        <Title level={2} style={{ marginBottom: "20px" }}>
          Declaration of HSN Codes for Goods and Services
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          From April 1, 2021, the declaration requirements for HSN codes under
          GST were updated (as per CGST Notification No. 78/2020 dated October
          15, 2020):
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3" }}>
          <li>
            Turnover up to ₹5 crore:
            <ul>
              <li>B2B tax invoices: 4 HSN digits mandatory.</li>
              <li>B2C tax invoices: 4 HSN digits optional.</li>
            </ul>
          </li>
          <li>
            Turnover above ₹5 crore: 6 HSN digits mandatory for all invoices.
          </li>
        </ul>

        <Card
          style={{
            backgroundColor: "rgba(239, 254, 255, 1)",
            borderRadius: "8px",
            padding: "15px",
            margin: "20px 0",
            border: "2px solid",
            borderColor: "rgba(34, 211, 238, 1)",
          }}
        >
          <Paragraph style={{ fontSize: "20px", margin: 0 }}>
            <strong style={{ color: "#222222" }}>Note:</strong>
            <span style={{ color: "#656565" }}>
              {" "}
              The annual aggregate turnover for the previous financial year is
              referenced for reporting invoices in FY 2021-22, which means the
              turnover of FY 2020-21 is considered.
            </span>
          </Paragraph>
        </Card>

        <Title level={2} style={{ marginBottom: "20px" }}>
          Importance of HSN Codes under GST
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN codes streamline GST by eliminating the need for detailed
          descriptions of goods on tax invoices. This makes the filing process
          more efficient, as GST returns are automated.
        </Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Taxpayers, including dealers and service providers, must provide
          HSN/SAC-wise summaries of their sales in GSTR-1, based on the turnover
          slabs mentioned above.
        </Paragraph>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          For exports and imports under GST, declaring all 8 digits of the HSN
          code is mandatory.
        </Paragraph>
      </div>
    </div>
  </div>
);

export default SacStructure;
