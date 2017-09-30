import React from "react";
import { expect } from "chai";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Time from "../src/shared/time.jsx";

Enzyme.configure({ adapter: new Adapter() });
const { shallow } = Enzyme;

describe("Time component", function() {
  it("Should display an estimated time", function() {
    const now = Date.now();
    const next = now + 90000;
    const nextnext = now + 130000;
    
    let wrapper = shallow(<Time estimated={next} scheduled={now} />);
    expect(wrapper.find("span").first().html()).to.equal("<span>1mins</span>");

    wrapper = shallow(<Time estimated={null} scheduled={nextnext} />);
    expect(wrapper.find("span").first().html()).to.equal("<span>2mins</span>");
  });
});
