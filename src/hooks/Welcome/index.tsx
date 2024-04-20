import React from "react";
import {Component} from "react";



// Komponent powitalny: Utwórz komponent klasowy Welcome wyświetlający wiadomość powitalną.
//  Wiadomość powinna być przekazana do komponentu jako prop message.




type Props = {
    welcomeText: string
}


class Welcome extends Component<Props>{

    
render() {
    return (
        <div>
            <h2>Powitanie: {this.props.welcomeText}</h2>
        </div>
    )
    
}
}
export default Welcome;