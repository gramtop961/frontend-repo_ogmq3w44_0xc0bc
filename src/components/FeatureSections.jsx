import { Layout, LineChart, GraduationCap, Video, Users, Workflow } from "lucide-react";

const features = [
  {
    id: "marketing",
    title: "Marketing Corner",
    color: "#cee4e4",
    items: [
      {
        icon: Layout,
        name: "Landing Page Builder",
        desc:
          "Drag-and-drop pages with text, images, video, buttons and forms. Templates included and fully responsive.",
      },
      {
        icon: Workflow,
        name: "Sales Funnel Builder",
        desc:
          "Design multi-step funnels with email capture and automated follow-ups. Analyze performance with built-in analytics.",
      },
      {
        icon: LineChart,
        name: "Real-time Analytics",
        desc: "Track conversions and optimize results with live insights.",
      },
    ],
  },
  {
    id: "knowledge",
    title: "Creator’s Knowledge Corner",
    color: "#e8eded",
    items: [
      {
        icon: GraduationCap,
        name: "Course Creation",
        desc:
          "Upload videos, audio, and files. Organize modules, set pricing tiers, and add quizzes and certificates.",
      },
      {
        icon: Video,
        name: "Viewing Experience",
        desc: "Clean learner UI with progress tracking and multimedia playback.",
      },
    ],
  },
  {
    id: "live",
    title: "Creator’s Live Corner",
    color: "#e5dabd",
    items: [
      {
        icon: Video,
        name: "Live Event Management",
        desc:
          "Host webinars and workshops with streaming, attendee management, and ticketing.",
      },
      {
        icon: Users,
        name: "Authentication & Analytics",
        desc: "Secure access, role-based permissions, and event insights.",
      },
    ],
  },
  {
    id: "community",
    title: "Creator’s Community Corner",
    color: "#e5c88a",
    items: [
      {
        icon: Users,
        name: "Community Building",
        desc:
          "Centralize discussions, polls, and interactive activities to foster engagement.",
      },
      {
        icon: Workflow,
        name: "Real-time Updates",
        desc: "Scalable backend powering permissions and live collaboration.",
      },
    ],
  },
];

export default function FeatureSections() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {features.map((group) => (
        <div key={group.id} id={group.id} className="rounded-2xl border overflow-hidden" style={{ borderColor: group.color }}>
          <div className="p-6 sm:p-8" style={{ backgroundColor: group.color }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2c3e3e]">{group.title}</h2>
            <p className="text-[#2c3e3e]/70 mt-1 text-sm">
              Everything you need to build, manage, and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 sm:p-8 bg-white">
            {group.items.map((item) => (
              <div key={item.name} className="p-5 rounded-xl border bg-white hover:shadow-sm transition" style={{ borderColor: group.color }}>
                <div className="h-10 w-10 rounded-md flex items-center justify-center mb-3" style={{ backgroundColor: group.color }}>
                  <item.icon className="h-5 w-5 text-[#2c3e3e]" />
                </div>
                <h3 className="font-semibold text-[#2c3e3e]">{item.name}</h3>
                <p className="text-sm text-[#2c3e3e]/70 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
