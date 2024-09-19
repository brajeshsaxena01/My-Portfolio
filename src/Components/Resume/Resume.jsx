/** @format */
import React from "react";
import styled from "styled-components";

export const Resume = () => {
  return (
    <>
      <Main id="resume">
        <h1 className="heading">
          {" "}
          <span>my</span> skills{" "}
        </h1>

        <Skills>
          <Card>
            <Image>
              <img src="/Images/html.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                HTML
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/css.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                CSS
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/js.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading">
                JAVASCRIPT
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/react.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                REACT
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/redux.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                REDUX
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/mongo.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                MONGODB
              </span>
            </Text>
          </Card>

          <Card>
            <Image>
              <img src="/Images/nodejs.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                Node.js
              </span>
            </Text>
          </Card>

          <Card>
            <Image>
              <img src="/Images/expressjs.webp" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                EXPRESS.JS
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </Image>
            <Text>
              <span id="span" className="heading ">
                Data Structure and Algorithm
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/redis.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                Redis
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/python.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                Python
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/flask.svg" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                Flask
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/aws.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                AWS
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/gcp.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                GCP
              </span>
            </Text>
          </Card>
        </Skills>
        <h1 className="heading">
          {" "}
          <span> </span> Tools{" "}
        </h1>

        <Skills>
          <Card>
            <Image>
              <img src="/Images/vs.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                VS CODE
              </span>
            </Text>
          </Card>
          <Card>
            <Image>
              <img src="/Images/postman.png" alt="" />
            </Image>
            <Text>
              <span id="span" className="heading ">
                POSTMAN
              </span>
            </Text>
          </Card>
        </Skills>
      </Main>
    </>
  );
};

const Main = styled.div`
  padding: 5rem 0px;
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 5rem 0;
  margin: 0 30px;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
  & img {
    width: 24%;
    height: 89%;
  }
`;

const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  position: relative;
  border: 1rem solid transparent;
  margin: 10px 10px;
  padding: 10px 0;
  border-radius: 4px;
  justify-content: space-around;

  &:hover {
    transform: scale(1.04);
  }
`;

const Text = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-align-items: none !important;
  display: -webkit-box !important;
  & #span {
    font-size: 17px !important;
  }

  @media (max-width: 600px) {
    #span {
      font-size: 13px !important;
    }
  }
`;
