import { ActiveFilters } from "@/components/active-filters";
import { Badge } from "@/components/badge";
import { Checkbox, CheckboxField } from "@/components/checkbox";
import { Container } from "@/components/container";
import { Field, Fieldset, Label, Legend } from "@/components/fieldset";
import { Input } from "@/components/input";
import { Listbox, ListboxLabel, ListboxOption } from "@/components/listbox";
import { SkillsTable } from "@/components/skills-table";
import { SkillsetFilter } from "@/components/skillset-filter";
import { Text } from "@/components/text";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Skills" }, { name: "description", content: "Skills page" }];
};

export default function Skills() {
  return (
    <Container className="rounded-xl bg-white py-4">
      <div className="flex flex-row gap-8">
        <Fieldset>
          <Legend className="sm:text-xl">People</Legend>
          <div className="mt-4 flex flex-row items-center gap-4">
            <Field className="w-64">
              <Input name="full_name" placeholder="Search" />
            </Field>
            <div className="group ml-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              All Teams
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </div>
            <div className="group mr-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              All Regions
              <ChevronDownIcon
                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </div>
            <CheckboxField>
              <Checkbox name="allow_embedding" checked color="blue" />
              <Label className="-ml-2">Primary Skillset</Label>
            </CheckboxField>
            <CheckboxField>
              <Checkbox name="allow_embedding" color="blue" />
              <Label className="-ml-2">Secondary Skillset</Label>
            </CheckboxField>
            <CheckboxField>
              <Checkbox name="allow_embedding" color="blue" />
              <Label className="-ml-2">Tertiary Skillset</Label>
            </CheckboxField>
          </div>
        </Fieldset>
      </div>

      <ActiveFilters />
      <SkillsTable />
    </Container>
  );
}
