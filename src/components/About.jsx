import React from "react";
import {Icon} from "@iconify/react";
import springIcon from "@iconify/icons-logos/spring-icon";
import reactIcon from "@iconify/icons-logos/react";
import javaIcon from "@iconify/icons-logos/java";
import about from "../data/about";

export default function About() {
  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{color: "black"}}>
          <span>{about.basicInfo.sectionName.about}</span>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 mb-5 center">
            <div className="polaroid">
                <span style={{cursor: "auto"}}>
                  <img
                    height="200px"
                    src={'images/profile.jpg'}
                    alt="Avatar placeholder"
                  />
                  <Icon
                    icon={javaIcon}
                    style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                  />
                  <Icon
                    icon={springIcon}
                    style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                  />
                </span>
            </div>
          </div>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br/>
                  <span className="wave">{about.basicInfo.descriptionHeader} :) </span>
                  <br/>
                  <br/>
                  {about.basicInfo.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
