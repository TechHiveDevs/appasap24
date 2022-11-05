
import { 
  Create,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateOrder(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="promocode" variant="outlined"   />
<ReferenceInput label="user" source="userId" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
