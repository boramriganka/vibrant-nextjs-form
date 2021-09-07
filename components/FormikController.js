import Input from './FormElements/Input';
import Select from './FormElements/Select'
import RadioButtons from './FormElements/RadioButtons'
import TextArea from './FormElements/TextArea'
import CheckBoxes from './FormElements/CheckBoxes'
function FormikController(props) {
    const { control, ...rest } = props
    switch (control) {
      case "input":
        return <Input {...rest} />
      case "textArea":
        return <TextArea {...rest} />
      case "select":
        return <Select {...rest} />
      case "radio":
        return <RadioButtons {...rest} />
      case "checkbox":
        return <CheckBoxes {...rest} />
      default:
        return null
    }
  }
  export default FormikController