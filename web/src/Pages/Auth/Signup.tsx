import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Check, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const passwordRules = [
  { label: "8+ chars", test: (value: string) => value.length >= 8 },
  { label: "Uppercase", test: (value: string) => /[A-Z]/.test(value) },
  { label: "Number", test: (value: string) => /[0-9]/.test(value) },
];

const inputClassName =
  "w-full rounded-lg bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordScore = useMemo(() => {
    const checks = passwordRules.filter((rule) => rule.test(password)).length;
    return checks + (/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 1 : 0);
  }, [password]);

  const strength =
    password.length === 0
      ? "Empty"
      : passwordScore <= 1
        ? "Weak"
        : passwordScore <= 3
          ? "Medium"
          : "Strong";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    const payload = {
      username: formData.get("username"),
      email: formData.get("email"),
      password,
      confirmPassword,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Registration failed.");
      }

      setMessage("Account created successfully. You can now log in.");
      event.currentTarget.reset();
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Registration failed.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-4 py-8 font-body-md text-on-surface sm:px-6 md:px-8 md:py-12">
      <section className="w-full max-w-lg rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 shadow-xl sm:p-8 md:p-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">
            Recalio AI
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-on-surface sm:text-3xl">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-on-surface-variant sm:text-base">
            Start turning your study materials into knowledge.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-on-surface">
              Username
            </span>
            <input
              required
              name="username"
              placeholder="alexmorgan"
              className={inputClassName}
            />
          </label>

          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-on-surface">Email</span>
            <input
              required
              name="email"
              type="email"
              placeholder="alex.morgan@university.edu"
              className={inputClassName}
            />
          </label>

          <PasswordField
            id="password"
            label="Password"
            name="password"
            value={password}
            visible={showPassword}
            placeholder="Create a secure password"
            onChange={setPassword}
            onToggle={() => setShowPassword((visible) => !visible)}
          />
          <PasswordField
            id="confirmPassword"
            label="Confirm password"
            name="confirmPassword"
            value={confirmPassword}
            visible={showConfirmPassword}
            placeholder="Repeat your password"
            onChange={setConfirmPassword}
            onToggle={() => setShowConfirmPassword((visible) => !visible)}
          />

          <div className="space-y-1.5 pt-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-on-surface-variant">Security strength</span>
              <span
                className={
                  strength === "Weak" ? "text-error" : "text-secondary"
                }
              >
                {strength}
              </span>
            </div>
            <div className="grid h-1.5 grid-cols-4 gap-1.5">
              {[0, 1, 2, 3].map((bar) => (
                <span
                  key={bar}
                  className={`rounded-full ${bar < passwordScore ? (passwordScore <= 1 ? "bg-error" : "bg-secondary-container") : "bg-surface-container-high"}`}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-xs">
              {passwordRules.map((rule) => {
                const valid = rule.test(password);
                return (
                  <span
                    key={rule.label}
                    className={`flex items-center gap-1 ${valid ? "text-secondary" : "text-on-surface-variant"}`}
                  >
                    <Check className="h-3.5 w-3.5" />
                    {rule.label}
                  </span>
                );
              })}
            </div>
          </div>

          <label className="flex items-start gap-3 pt-2 text-xs leading-normal text-on-surface-variant sm:text-sm">
            <input
              required
              type="checkbox"
              className="mt-0.5 h-4 w-4 cursor-pointer accent-secondary"
            />
            <span>
              I agree to the{" "}
              <Link
                to="#terms"
                className="font-semibold text-secondary hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and acknowledge the{" "}
              <Link
                to="#privacy"
                className="font-semibold text-secondary hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {message && (
            <p className="rounded-lg bg-surface-container-low px-3 py-2 text-sm text-on-surface-variant">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 font-semibold text-white shadow-md transition-all hover:bg-on-secondary-container active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>
              {isSubmitting ? "Creating account..." : "Create account"}
            </span>
            {!isSubmitting && <ArrowRight className="h-[18px] w-[18px]" />}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-on-surface-variant">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-secondary hover:underline"
          >
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
};

type PasswordFieldProps = {
  id: string;
  label: string;
  name: string;
  value: string;
  visible: boolean;
  placeholder: string;
  onChange: (value: string) => void;
  onToggle: () => void;
};

const PasswordField = ({
  id,
  label,
  name,
  value,
  visible,
  placeholder,
  onChange,
  onToggle,
}: PasswordFieldProps) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-sm font-medium text-on-surface">
      {label}
    </label>
    <div className="relative">
      <input
        id={id}
        required
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        className={`${inputClassName} pr-12`}
      />
      <button
        type="button"
        aria-label={`Toggle ${label.toLowerCase()} visibility`}
        onClick={onToggle}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 text-on-surface-variant hover:text-on-surface"
      >
        {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </div>
  </div>
);

export default Signup;
