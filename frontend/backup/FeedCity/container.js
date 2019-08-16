import React, { Component } from "react";
import FeedCity from "./presenter";

class Container extends Component {
  state = {
    isClicked: false
  };
  componentDidMount() {
    const { getSector } = this.props;
    if (!this.props.sectorFeed) {
      getSector();
    }
  }
  render() {
    const { isClicked } = this.state;
    const { feedSector } = this.props;
    return (
      <FeedCity
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
