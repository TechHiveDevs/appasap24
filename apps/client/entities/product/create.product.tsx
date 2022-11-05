
import { 
  Create,
  SimpleForm,
  
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateProduct(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <NumberInput source="price" variant="outlined"  />
<ReferenceInput label="order" source="orderId" reference="order">
        <AutocompleteInput variant="outlined" /* optionText="order"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
