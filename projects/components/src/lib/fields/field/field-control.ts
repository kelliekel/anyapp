import { ANYAPP_FIELD_TYPE } from "../../components.types";

export class AnyAppControl {
  name: string;
  value: any;
  fieldType: ANYAPP_FIELD_TYPE;
  childs: AnyAppControl[];  
  properties: any;

  constructor(name: string, value: any, fieldType: ANYAPP_FIELD_TYPE, childs: AnyAppControl[] = null, properties: any = null) {
      this.name = name;
      this.value = value;
      this.fieldType = fieldType;
      this.childs = childs;
      this.properties = properties;
  }
}

export class AnyAppControlProperties {
  
}

// export class TypeSpecificProperties {
//   maxLength;
//   placeholder;
//   type;
//   multiple;
//   min;
//   max;
//   step;
//   minlength;
//   maxlength;
//   items;
//   locale;
// }

// export interface IAnyAppControl {
//   name: string;
//   value: any;
//   childs: IAnyAppControl[];
//   fieldType: ANYAPP_FIELD_TYPE;
//   properties: any;

//   getTypeSpecificProperties(): any;
//   //applyPropertiesToInstance(instance: any): void;
// }