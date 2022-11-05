
import { 
  Edit,
  SimpleForm,
  
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditProduct(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <NumberInput source="price" variant="outlined"  />
<ReferenceInput label="order" source="orderId" reference="order">
        <AutocompleteInput variant="outlined" /* optionText="order"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}