import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-4 py-12 sm:py-16">
      <main className="w-full max-w-4xl space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-text-main sm:text-4xl">
            UI Kit
          </h1>
          <p className="text-sm text-text-muted">
            Static showcase of buttons, form controls, and feedback patterns.
          </p>
        </header>

        <section className="space-y-4 rounded-md border border-border-light bg-white/60 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text-main">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
          </div>
        </section>

        <section className="space-y-4 rounded-md border border-border-light bg-white/60 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text-main">Form controls</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-main"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-text-main"
              >
                Role
              </label>
              <Select id="role" name="role" defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="visitor">Visitor</option>
              </Select>
              <p className="text-xs text-text-muted">
                Dropdown uses the same focus ring as inputs.
              </p>
            </div>
            <div className="flex items-center gap-3 sm:col-span-2">
              <Checkbox id="terms" name="terms" />
              <label htmlFor="terms" className="text-sm text-text-main">
                I agree to the housing terms
              </label>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-md border border-border-light bg-white/60 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text-main">Feedback</h2>
          <Alert variant="success">
            <span className="font-medium">Success.</span> Your preferences were
            saved without errors.
          </Alert>
        </section>
      </main>
    </div>
  );
}
