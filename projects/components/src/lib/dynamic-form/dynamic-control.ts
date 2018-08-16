import { ANYAPP_FIELD_TYPE } from "../components.types";

export class AnyAppDynamicControl {
    formControls: AnyAppDynamicControl[];
    name: string;
    fieldType: ANYAPP_FIELD_TYPE;
    value: any;
    required: boolean;
    hint: string;
    placeholder: string;
    label: string;
  
    constructor(name: string, fieldType: ANYAPP_FIELD_TYPE, value: any, required: boolean, hint: string, placeholder: string, label: string) {
      this.name = name;
      this.fieldType = fieldType;
      this.value = value;
      this.required = required;
      this.hint = hint;
      this.placeholder = placeholder;
      this.label = label;
    }
}

// export class AnyAppDynamicInput extends AnyAppDynamicControl {
//     constructor(placeholder: string, label: string) {
//         super();
//     }
// }