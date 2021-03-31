import React from "react";
import SuccessModal from "./SuccessModal";

class DashboardPage extends React.Component {
  constructor() {
    super();

    this.state = {
      isSuccessModalShown: false,
      otherState1: "asdlkjasdf",
      otherState2: "blabla",
      modalHeader: "",
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleShowModalWithMessage = this.handleShowModalWithMessage.bind(
      this
    );
  }

  otherMethod1() {
    // do something serious...
  }

  handleShowModalWithMessage(message) {
    this.setState({
      modalHeader: message,
      isSuccessModalShown: true,
    });
  }

  closeModal() {
    this.setState({ isSuccessModalShown: false });
  }

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.handleShowModalWithMessage("Greetings!")}>
            Show SuccessModal with Greetings!
          </button>

          <button
            onClick={() => this.handleShowModalWithMessage("Congratulations!")}
          >
            Show SuccessModal with Congratulations!
          </button>

          <div>
            <div>Amazing component</div>
          </div>
        </div>

        <SuccessModal
          show={this.state.isSuccessModalShown}
          onHide={this.closeModal}
          onConfirm={this.closeModal}
          header={this.state.modalHeader}
        />
      </>
    );
  }
}

export default DashboardPage;
