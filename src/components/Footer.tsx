import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p className="font-mono-tag">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <p className="font-mono-tag">{profile.location}</p>
      </div>
    </footer>
  );
}
