import React from "react";
import "./Header.scss";

// aby przekazać propsy, musimy utworzyć typ propsów
type Props = {
  textHeader: string;
  children: string;

  // children: JSX.Element;
};

export const Header = ({ textHeader, children }: Props) => {
  // drugi sposób na odczytywanie pojedyńczych propsów
  // const {textHeader} = props;

  return <h1>{children}</h1>;
};

// roznica miedzy export vs export default
// export - import jest wymagany w klamerkach
// import {Header} from '...' - nazwa Header nie moze zostać zmieniona
// --
// export default - jest to export domyślny
// import Header from '...' - można zmienić nazwe komponentu
// import 123 from '...'

