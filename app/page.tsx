import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="pt-4">
      <Resume/>
      <Projects/>
    </main>
  );
}
