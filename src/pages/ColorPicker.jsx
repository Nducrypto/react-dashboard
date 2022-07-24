import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../Components";

const ColorPicker = () => {
  //DIS WILL EVENT ENABLE U TO TK D VALUE (color) U WANT ND CHANG D COLR OF D RECTANGLE/PENCIL

  const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };

  return (
    <div className="m-12 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>

            <ColorPickerComponent
              id="inline-pallete"
              mode="Pallete"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
