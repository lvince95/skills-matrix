import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { TeamLineChart } from "@/components/team-line-chart";
import { TeamMembers } from "@/components/team-members";
import TeamProfCards from "@/components/team-prof-cards";
import { TeamTable } from "@/components/team-table";
import { TeamTableDialog } from "@/components/team-table-dialog";

export default function Team() {
  return (
    <Container>
      <div className="grid grid-cols-3">
        <FadeIn className="col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            MY CC .NET, GIS
          </h2>
        </FadeIn>
      </div>
      <FadeIn className="mt-20 flex h-72">
        <TeamLineChart />
      </FadeIn>
      <FadeIn className="mt-10">
        <TeamProfCards />
      </FadeIn>
      <FadeIn className="mt-10">
        <h2 className="mb-6 text-base font-semibold">Members</h2>
        <TeamTable />
        <TeamTableDialog />
      </FadeIn>
      <FadeIn className="mt-10">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Team Members
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </FadeIn>
      <TeamMembers />
    </Container>
  );
}
