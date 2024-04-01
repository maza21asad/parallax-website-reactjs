import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import "./parallax1.css";
import Hill1 from "../../assets/Para1-Images/hill1.png";
import Hill2 from "../../assets/Para1-Images/hill2.png";
import Hill3 from "../../assets/Para1-Images/hill3.png";
import Hill4 from "../../assets/Para1-Images/hill4.png";
import Hill5 from "../../assets/Para1-Images/hill5.png";
import Leaf from "../../assets/Para1-Images/leaf.png";
import Plant from "../../assets/Para1-Images/plant.png";
import Tree from "../../assets/Para1-Images/tree.png";
import Para1Offset from "../Offsets/para1Offset";

function Parallax1() {
  return (
    <div id="parallax1" className="para1">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="hill1">
            <img src={Hill1} alt="hill1" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="hill2">
            <img src={Hill2} alt="hill2" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="title">Parallax Website</div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="hill3">
            <img src={Hill3} alt="hill3" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="hill4">
            <img src={Hill4} alt="hill4" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="tree">
            <img src={Tree} alt="tree" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" id="hill5">
            <img src={Hill5} alt="hill5" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.7}>
          <div className="animation_layer parallax" id="leaf">
            <img src={Leaf} alt="leaf" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="plant">
            <img src={Plant} alt="plant" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <Para1Offset />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Parallax1;
