import React, { Component } from "react";
import SectorComponent from "./presenter";

class Container extends Component {
  state = {
    isClicked: false
  };

  render() {
    const { isClicked } = this.state;
    const { feedSector } = this.props;
    return (
      <SectorComponent
        clicked={isClicked}
        click={this._clicked}
        sector={feedSector}
        {...this.props}
      />
    );
  }
  _clicked = () => {
    this.setState({ isClicked: true });
  };
}

// const Container = props => <FeedCity {...props} />;

export default Container;
