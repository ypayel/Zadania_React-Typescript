import { isVisible } from "@testing-library/user-event/dist/utils";
import { Component } from "react";

type HeadlineState = {
    isVisible: boolean,
}




// -Utwórz właściwość w stanie "isVisible", następnie
// -utwórz metodę która będzie ustawiać toggla czyli
// jeżeli jest true > zamienia na false i odwrotnie (użyj
// odpowiedniego operatora).
// -Kolejnym krokiem będzie utworzenie przycisku i
// dopisania do zdarzenia onClick tej metody
// -Możesz sprawdzić np. Za pomoca console.log czy
// metoda poprawnie się wykonuje
// -Uzależnij pokazywanie się komponentu od zmiennej
// isVisiblei odpowiedniego operatora



export class Headline extends Component <{}, HeadlineState>  {
    
    constructor (props: any) {
        super(props);
        this.state = {
            isVisible: true,
        };
    }
    
    
    
    toggleVisibility = () => {
        this.setState((prev) => ({
          isVisible: !prev.isVisible,
        }));
      };




    render() {
        return (
          <div>
            <button onClick={this.toggleVisibility}>
              {this.state.isVisible ? "Ukryj" : "Pokaz"}
            </button>
            
          </div>
        );
      }
    }

export default Headline