import { Component } from "react";

type State = {
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
};

export class Hours extends Component<{}, State> {
  timerID?: NodeJS.Timeout;

  constructor(props: any) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      isRunning: false,
    };
  }

  start = () => {
    this.timerID = setInterval(() => {
      if (this.state.seconds < 59) {
        this.setState((prev) => ({
          seconds: prev.seconds + 1,
        }));
      }
      if (this.state.seconds === 59) {
        this.setState((prev) => ({
          seconds: 0,
          minutes: prev.minutes + 1,
        }));
      }
      if (this.state.minutes === 60) {
        this.setState((prev) => ({
          minutes: 0,
          hours: prev.hours + 1,
        }));
      }
    }, 1);

    this.setState({
      isRunning: true,
    });
  };

  stop = () => {
    clearInterval(this.timerID);

    this.setState({
      isRunning: false,
    });
  };

  reset = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
  };

  componentDidMount(): void {
    // this.start();
  }

  componentWillUnmount(): void {
    this.stop();
    this.reset();
  }

  render() {
    return (
      <div>
        <h2>Zadanie - Timer</h2>
        <button disabled={this.state.isRunning} onClick={this.start}>
          start
        </button>
        <button disabled={!this.state.isRunning} onClick={this.stop}>
          stop
        </button>
        {/* Dopisac warunek sprawdzający czy sekundy, minuty, godziny sa wieksze od 0, jak 0 to disabled */}
        <button disabled={this.state.isRunning} onClick={this.reset}>
          reset
        </button>
        <p>Sekundy: {this.state.seconds}</p>
        <p>Minuty: {this.state.minutes}</p>
        <p>Godziny: {this.state.hours}</p>
      </div>
    );
  }
}

export default Hours