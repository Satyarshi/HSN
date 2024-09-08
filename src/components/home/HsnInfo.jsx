import React from "react";
import { Typography, Card, Image } from "antd";
const { Title, Paragraph } = Typography;
import HeroVideoDialog from "../common/HeroVideoDialog";

const HsnInfo = () => (
  <div id="hsninfo" className="hsnInfoBlock">
    <div className="container-fluid">
      <div className="textHolder">
        <Title level={2} style={{ marginBottom: "20px" }}>
          What is HSN Code?
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN stands for Harmonized System of Nomenclature, a globally
          recognized system for the systematic classification of goods. This
          6-digit uniform code, developed by the World Customs Organization
          (WCO) in 1988, categorizes over 5,000 products and is widely accepted
          across the world.
        </Paragraph>

        <HeroVideoDialog
          className="hidden dark:block rounded-video"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />

        <Title level={2} style={{ marginBottom: "20px" }}>
          How does HSN code work?
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The HSN system is organized into approximately 5,000 commodity groups,
          each identified by a six-digit code. This legal and logical structure
          ensures uniform classification worldwide, supported by clearly defined
          rules.
        </Paragraph>

        <Title level={2} style={{ marginBottom: "20px" }}>
          Importance of HSN
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          HSN's primary purpose is to standardize the classification of goods
          globally, promoting uniformity and facilitating international trade.
          The system is utilized by over 200 countries and covers more than 98%
          of merchandise in international trade.
        </Paragraph>
        <Title level={2} style={{ marginBottom: "20px" }}>
          Understanding HSN Code Structure
        </Title>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          The HSN structure includes:
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "20px" }}>
          <li>21 Sections</li>
          <li>99 Chapters</li>
          <li>1,244 Headings</li>
          <li>5,224 Subheadings</li>
        </ul>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Each section is divided into chapters, which are further broken down
          into headings and subheadings, describing goods in increasing detail.
        </Paragraph>

        <div className="hsnCodeExample">
          <img
            src="/assets/hsninfo.svg"
            alt="HSN Code Structure Example"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          Wooden chairs are classified under HSN 94.01.40:
        </Paragraph>
        <ul style={{ fontSize: "16px", color: "#9092A3", paddingLeft: "20px" }}>
          <li>
            94: Chapter for Furniture; Bedding, Mattresses, Mattress Supports,
            Cushions, and Similar Stuffed Furnishings.
          </li>
          <li>
            01: Heading for Seats (other than those of heading 94.02), whether
            or not convertible into beds, and parts thereof.
          </li>
          <li>40: Product code for wooden chairs.</li>
        </ul>
        <Paragraph style={{ fontSize: "16px", color: "#9092A3" }}>
          India further refines this classification with an additional two
          digits. For instance, wooden chairs designed for dining purposes are
          classified as 94.01.40.10.
        </Paragraph>
      </div>
    </div>
  </div>
);

export default HsnInfo;
