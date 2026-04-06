export default async function OverviewPage( { params }) {
  const { pathway } = await params;

  if (pathway === "computer-science") {
    return (
      <div className = "flex flex-col w-full">
        <div className = "flex flex-row w-full text-xl text-center">Overview</div>
          <div className = "text-base">The Computer Science pathway blends hands‑on problem‑solving with real coding experience. Through Project Lead The Way, Runestone, and Project STEM/AFE courses, students learn how software works, why it matters, and how to build meaningful projects of their own. Each course emphasizes creativity, collaboration, and the practical skills needed to succeed in college‑level CS or enter a growing tech field with confidence
          </div>
      </div>

    )
  }
}