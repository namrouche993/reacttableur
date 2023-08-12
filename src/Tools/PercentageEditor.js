import Handsontable from 'handsontable';

//import { BaseEditor } from 'handsontable';

//export class PercentageEditor extends BaseEditor {

  
export class PercentageEditor extends Handsontable.editors.TextEditor {
  
  open() {
    super.open();
    const value = this.getValue();
    if (!value.endsWith('%')) { // check if the value doesn't already end with a percent sign
      this.TEXTAREA.value += '%'; // add a "%" sign to the initial value
    }
  }

  setValue(value) {
      try {
        var percentValue = value.replace(/%/g, '') + '%' || ''; // remove existing "%" signs and add a new one
       } catch (error) {
        var percentValue = '';
      }
    //const percentValue = value.replace(/%/g, '') + '%'; // remove existing "%" signs and add a new one
    super.setValue(percentValue);
  }
  
  close() {
    super.close();
    const value = this.getValue();
    if (value.endsWith('%')) { // check if the value ends with a percent sign
      this.TEXTAREA.value = value.slice(0, -1); // remove the last character (the percent sign)
    }
  }

  focus() {
    super.focus();
    const length = this.TEXTAREA.value.length;
    this.TEXTAREA.setSelectionRange(0, length - 1); // set the cursor position at the end of the value
  }
}
