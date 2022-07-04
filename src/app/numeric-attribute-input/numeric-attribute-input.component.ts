import { ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: "app-custom-input",
    templateUrl: "./numeric-attribute-input.component.html",
    styleUrls: ["./numeric-attribute-input.component.scss"],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: NumericAttributeInputComponent,
        },
    ],
})
export class NumericAttributeInputComponent
    implements  ControlValueAccessor
{
    onChange: any = () => {}
    onTouch: any = () => {}

    valTo= "";
    valFrom= "";
  
    set valueTo(val: string | undefined){
      if( val !== undefined){
      this.valTo = val;
      this.onChange(`${this.valFrom}to${this.valTo}`)    
      this.onTouch(val)

      }
    }

    get valueTo(){
      return this.valTo;
    }
    
    set valueFrom(val: string | undefined){
        if( val !== undefined){
        this.valFrom = val
        this.onChange(`${this.valFrom}to${this.valTo}`)    
        this.onTouch(val);
        }
    }

    get valueFrom(){
      return this.valFrom;
    }
  
    writeValue(value: string){
      console.log('writeValue');
      if(value !== null){
        const values = value.split('to');
        this.valueFrom = values[0].toString();
        this.valueTo = values[1].toString();
      }
    }
  
    registerOnChange(fn: any){
      this.onChange = fn
    }
  
    registerOnTouched(fn: any){
      this.onTouch = fn
    }
}
