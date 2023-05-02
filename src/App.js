import {Scroll,ScrollControls,Float,Environment,Sparkles, PositionalAudio} from "@react-three/drei";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Butterfly } from "./models/Butterfly";
import {Bouquet} from "./models/Bouquet"
import {EffectComposer, Bloom, DepthOfField, Vignette} from "@react-three/postprocessing";
import soundOne from './sounds/soundOne.mp3'
import soundTwo from './sounds/soundTwo.mp3'
import soundThree from './sounds/soundThree.mp3'

function App() {
  return (
    <>
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={5}
          height={480}
        />
        <Bloom
          intensity={2}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          height={1000}
        />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      <color attach="background" args={["#000"]} />
      <ambientLight intensity={1} />
      <spotLight
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset="warehouse" />
      <ScrollControls pages={5} damping={0.25}>
        <Scroll>
          {/* contain 3d elements */}
          <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
        <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
        <group position={[0, 0, 0]}>
          <PositionalAudio autoplay loop url={soundOne} distance={0.8} />
        </group>    
        <group position={[0, -10, 0]}>
          <PositionalAudio autoplay loop url={soundTwo} distance={0.5} />
        </group>  
        <group position={[0, -20, 0]}>
          <PositionalAudio autoplay loop url={soundThree} distance={0.8} />
        </group>   
          <Float //top butterflies
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Butterfly scale={0.05} position={[-10, -2.5, -6]} />
            <Butterfly scale={0.05} position={[10, -4, -10]} />
          </Float>

          <Float //middle butterfly
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Butterfly scale={0.05} position={[0, -12.5, 0]} />
          </Float>

          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Bouquet scale={5} position={[0, -30, -10]}/>
          </Float>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          {/* contains html inc bootstrap */}
          <Container style={{ position: "relative" }}>
            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Life isn't easy</h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>You are not alone</h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "200vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Take care of yourself</h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "300vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Reach out for help</h1>
                </div>
              </Col>
            </Row>

            <Row
              className="text-center align-items-center justify-content-center"
              style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                padding: "0px 30px",
                top: "400vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>
                  Small steps make a big difference. <br />
                  Here are some resources.
                  </h1>
                  <a href='https://charliewaller.org/resources/'><Button variant="outline-light" size="lg">
                    Check it out
                  </Button></a>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
