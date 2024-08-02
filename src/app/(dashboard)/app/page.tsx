import { WelcomeMessage } from './_components/welcome-message';

export default function DashboardHome() {
  return (
    <div className="flex flex-1">
      <div className="flex-1">
        <WelcomeMessage />
        <div>More content</div>
      </div>
      <div className="min-w-[280px] rounded-lg border p-4">Right side</div>
    </div>
  );
}
