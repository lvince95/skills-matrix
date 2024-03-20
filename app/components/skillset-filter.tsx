import { Field, Label } from "@/components/fieldset";
import { Select } from "@/components/select";

export function SkillsetFilter() {
  return (
    <Field className="flex items-baseline justify-center gap-6">
      <Label>Skillset</Label>
      <Select name="status" defaultValue="primary">
        <option value="active">All</option>
        <option value="primary">Primary</option>
        <option value="delayed">Secondary</option>
        <option value="canceled">Tertiary</option>
      </Select>
    </Field>
  );
}
