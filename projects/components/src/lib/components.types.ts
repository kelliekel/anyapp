import { InputComponent } from "./input/input.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { SelectComponent } from "./select/select.component";
import { SliderComponent } from "./slider/slider.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { CalendarComponent } from "./calendar/calendar.component";

// button types
export type ANYAPP_BUTTON_TYPE = 'default' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab';
export const ANYAPP_BUTTON_TYPE_VALUES: string[] = ['default', 'raised', 'stroked', 'flat', 'icon', 'fab'];
// field types
export type ANYAPP_FIELD_TYPE = 'input' | 'textarea' | 'checkbox' | 'select' | 'slider' | 'datepicker' | 'calendar';
export const ANYAPP_FIELD_TYPE_VALUES: string[] = ['input', 'textarea', 'checkbox', 'select', 'slider', 'datepicker', 'calendar'];
export const ANYAPP_FIELD_TYPE_MAPPINGS = {
    'input': InputComponent,
    'textarea': TextareaComponent,
    'checkbox': CheckboxComponent,
    'select': SelectComponent,
    'slider': SliderComponent,
    'datepicker': DatepickerComponent,
    'calendar': CalendarComponent
}

// general
export type ANYAPP_COLOR = 'primary' | 'accent' | 'warn' | 'basic' | undefined;
export const ANYAPP_COLOR_VALUES: string[] = ['primary', 'accent', 'warn', 'basic', 'undefined'];

export type ANYAPP_SIZES = 'xs' | 'small' | 'medium' | 'large' | 'xl' | undefined;
export const ANYAPP_SIZES_VALUES: string[] = ['xs', 'small', 'medium', 'large', 'xl', 'undefined'];