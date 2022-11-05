
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowProduct(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<NumberField source="price" />
<ReferenceField source="orderId" reference="order" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}