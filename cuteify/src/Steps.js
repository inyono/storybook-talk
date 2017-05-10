import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';

const StepNavigation = ({ goBackToStep, steps, currentStep }) => (
  <LinearProgress
    mode="determinate"
    max={steps.length}
    value={currentStep}
    style={{ margin: '20px 0' }}
  />
);

class Steps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      state: {}
    };
  }

  setStateState = newState => {
    this.setState(({ state }) => ({
      state: {
        ...state,
        ...newState
      }
    }));
  };

  goToStep = step => {
    this.setState({
      currentStep: step
    });
  };

  goBackToStep = step => {
    return () => {
      if (step < this.state.currentStep) {
        return this.goToStep(step);
      }
    };
  };

  render() {
    const { steps } = this.props;
    const { currentStep, state } = this.state;

    const C =
      steps[currentStep] ||
      (() => (
        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(state, 2)}</pre>
      ));

    const leftButton = currentStep > 0
      ? <FlatButton
          label="Previous"
          onTouchTap={() => this.goToStep(currentStep - 1)}
        />
      : <FlatButton label="Cancel" />;

    const rightButton = currentStep + 1 < steps.length
      ? <FlatButton
          label="Next"
          onTouchTap={() => this.goToStep(currentStep + 1)}
        />
      : <FlatButton
          label="Submit"
          onTouchTap={() => this.goToStep(currentStep + 1)}
        />;

    return (
      <div>
        <StepNavigation
          steps={steps}
          currentStep={currentStep}
          goBackToStep={this.goBackToStep}
        />
        <Card style={{ marginTop: 10 }}>
          <CardText>
            <C setState={this.setStateState} state={state} />
          </CardText>
          <CardActions>
            {currentStep < steps.length && leftButton}
            {currentStep < steps.length && rightButton}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Steps;
