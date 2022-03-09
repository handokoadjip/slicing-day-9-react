import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import { Navbar, SectionHeader, SectionContent, Footer } from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Delightful | Lombok";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionContent />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
