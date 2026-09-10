import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const inputClassName =
  "w-full rounded-lg bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary-container";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.get("email"), password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Login failed.");
      }

      setMessage("Login successful.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Login failed.");
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
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-on-surface-variant sm:text-base">
            Continue your learning journey.
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
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

          <div className="space-y-1.5">
            <label
              htmlFor="login-password"
              className="block text-sm font-medium text-on-surface"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="login-password"
                required
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`${inputClassName} pr-12`}
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword((visible) => !visible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer p-1 text-on-surface-variant hover:text-on-surface"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {message && (
            <p className="rounded-lg bg-surface-container-low px-3 py-2 text-sm text-on-surface-variant">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3.5 font-semibold text-white shadow-md transition-all hover:bg-on-secondary-container disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span>{isSubmitting ? "Signing in..." : "Sign in"}</span>
            {!isSubmitting && <ArrowRight className="h-[18px] w-[18px]" />}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-on-surface-variant">
          Need an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-secondary hover:underline"
          >
            Create one
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
