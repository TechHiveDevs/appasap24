
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditOrder(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="promocode" variant="outlined"   />
<ReferenceInput label="user" source="userId" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}