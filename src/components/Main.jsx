import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import wildRobot from "../images/wild-robot.png";

const Main = () => (
    <main>
      <section className="product-info">
        <h2>Hero Image </h2>
        <Tabs>
          <TabList>
            <Tab>Top Rated</Tab>
            <Tab>Popular</Tab>
            <Tab>Now Playing</Tab>
            <Tab>Upcoming</Tab>
          </TabList>
          <TabPanel>
            <h2 className="tab-panel-title">Top Rated</h2>
            <div className="tab-panel-content tab-panel-content-overview">
              <figure>
                <img src={wildRobot} alt="wild robot" />
              </figure>
              <p>
                Some text 
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="tab-panel-title">Popular</h2>
            <div className="tab-panel-content tab-panel-content-specs">
            <figure>
                <img src={wildRobot} alt="wild robot" />
              </figure>
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="tab-panel-title">Now Playing</h2>
            <div className="tab-panel-content tab-panel-content-reviews">
            <figure>
                <img src={wildRobot} alt="wild robot" />
              </figure>
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="tab-panel-title">Upcoming</h2>
            <div className="tab-panel-content tab-panel-content-reviews">
            <figure>
                <img src={wildRobot} alt="wild robot" />
              </figure>
            </div>
          </TabPanel>
        </Tabs>

      </section>
      <section className="credit-info">
        <h2>Content and Image Credits</h2>
        <p>
          The above content is for educational purposes only. The lens image and
          the text copy are from:{" "}
          <a href="https://www.bhphotovideo.com/c/product/1281427-REG/olympus_v314080bu000_m_zuiko_digital_ed_12_100mm.html">
            B&amp;H Photo Video's Olympus 12-100mm F4 Pro product page
          </a>
          .
        </p>
      </section>
    </main>
  );
  
  export default Main;