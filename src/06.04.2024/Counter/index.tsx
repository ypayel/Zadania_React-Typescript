
import React from "react";
import { Component } from "react";


type CounterState = {
    count: number;
}



class Counter extends Component <{}, CounterState> {
    timerID?: NodeJS.Timeout;
    constructor(props: any){
        super(props);
        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState(prev => ({
            count: prev.count + 1,
        }));
    };

    decrement = () => {
        this.setState(prev => ({
            count: prev.count - 1,
        }));
    };

// // 1 etap cyklu zycia - odpala się tylko raz na początku
// componentDidMount(): void {
//     console.log("pojawilem się na ekranie!");
//     // dobre miejsce do:
//     // pobierania danych z bazy
//     // ustawiania stanu początkowego na bazie danych z bazy
//     // odpalenie interval/timeout
//     this.timerID = setInterval(() => {
//       console.log("timout co 1 sekunda");
//     }, 1000);
//   }
//   // 2 etap cyklu zycia - odpala się za każda aktualizacją komponentu (w tym stanu)
//   componentDidUpdate(
//     prevProps: Readonly<{}>,
//     prevState: Readonly<CounterState>
//   ): void {
//     if (prevState.count !== this.state.count) {
//       document.title = `Aktualny Counter: ${this.state.count}`;
//       console.log("aktualizacja stanu count!");
//     }
//   }
//   // 3 etap cyklu zycia - odpala się tylko raz! bezposrednio przed odmontowaniem
//   componentWillUnmount(): void {
//     console.log("odmontowanie");
//     clearInterval(this.timerID);
//     // dobre miejsce do:
//     // zatrzymania timera
//     // zatrzymania pobierania danych
//   }





    
    render () {
        return (
            <div>
            <button onClick={this.increment}>+1</button>
            <button onClick={this.decrement}>-1</button>
            <h3>Aktualny count: {this.state.count}</h3>
            </div>
        )
            
        
    }

}





export default Counter;