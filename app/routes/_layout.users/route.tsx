import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import UserBanner from "@/components/user-banner";
import UserDetails from "@/components/user-details";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Users" }, { name: "description", content: "User page" }];
};

export default function Users() {
  return (
    <Container>
      <div className="rounded-xl bg-white p-8 shadow sm:rounded-lg">
        <UserBanner />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="col-span-2 rounded-xl bg-white p-8 shadow sm:rounded-lg">
          <div className="flex flex-row items-center gap-4">
            <label
              htmlFor="location"
              className="text-md block font-semibold leading-6 text-gray-900"
            >
              Skill Proficiency
            </label>
            <select
              id="location"
              name="location"
              className="block w-32 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue="Primary"
            >
              <option>All</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>Tertiary</option>
            </select>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Frontend</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>Angular</Badge>
                <Badge>React</Badge>
                <Badge>Vue</Badge>
                <Badge>Typescript</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Backend</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>.NET</Badge>
                <Badge>Entity Framework</Badge>
                <Badge>Python</Badge>
                <Badge>FastAPI</Badge>
                <Badge>Django</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Database</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>MySQL</Badge>
                <Badge>MSSQL</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MariaDB</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Devops</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>Docker</Badge>
                <Badge>Kubernetes</Badge>
                <Badge>Terraform</Badge>
                <Badge>Jenkins</Badge>
                <Badge>CircleCI</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Quality Assurance</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>Selenium</Badge>
                <Badge>Cypress</Badge>
                <Badge>Playwright</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Mobile</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>React Native</Badge>
                <Badge>Ionic</Badge>
                <Badge>Flutter</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Monitoring</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>Grafana</Badge>
                <Badge>Elastic</Badge>
                <Badge>Kibana</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Tools & Platforms</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>Git</Badge>
                <Badge>Github</Badge>
                <Badge>Jira</Badge>
                <Badge>Confluence</Badge>
                <Badge>Notion</Badge>
                <Badge>Microsoft Teams</Badge>
                <Badge>Azure Devops</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">
                Content Management System
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>Strapi</Badge>
                <Badge>Wordpress</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Data Visualization</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>D3.js</Badge>
                <Badge>Plotly</Badge>
                <Badge>Recharts</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Machine Learning</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge>scikit-learn</Badge>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <h2 className="text-sm font-semibold">Data Science</h2>
              <div className="mt-4 flex flex-wrap gap-3"></div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <UserDetails />
        </div>
      </div>
    </Container>
  );
}
