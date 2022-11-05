
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowOrder(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="promocode" />
<ReferenceField source="userId" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}