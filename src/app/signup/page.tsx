"use client";

import { useState } from "react";

function LogoSVG({
  className = "h-10 w-auto mx-auto",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="120" height="32" rx="6" fill="transparent" />
      <text x="0" y="20" fill="#5b21b6" fontWeight={700} fontSize={14}>
        Safe
      </text>
      <text x="40" y="20" fill="#ec4899" fontWeight={700} fontSize={14}>
        Space
      </text>
    </svg>
  );
}

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentNumber: "",
    organization: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", form);
    // TODO: Wire up API call to register user
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">
        {/* Left panel with gradient and branding */}
        <div
          className="hidden md:flex items-center justify-center relative bg-linear-to-br from-purple-900 via-indigo-900 to-pink-700 p-12 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/signup_background.png')" }}
        >
          <div className="absolute inset-0 bg-black/40" aria-hidden />

          {/* Use next/image for optimization and blend logo with background */}
          <div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-120 h-120 z-0"
            aria-hidden
            style={{
              mixBlendMode: "saturation", // or "overlay", "soft-light", "luminosity" for different effects
              opacity: 1,
            }}
          >
            {/* If using next/image: */}
            {/* <Image src="/images/osc_logo.png" alt="" fill style={{ objectFit: "contain" }} /> */}
            <img
              src="/images/osc_logo.png"
              alt=""
              className="w-full h-full object-contain"
              style={{ opacity: 1 }}
            />
          </div>

          <div className="relative z-10 text-center text-white max-w-xs space-y-2">
            <div className="mx-auto w-20 h-18 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/images/STRAW_logo.png"
                alt="Brand"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mx-auto w-80 h-17 flex items-center justify-center overflow-hidden">
              {" "}
              <img
                src="/images/SafeSpace_signup_logo.png"
                alt="Second Brand"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <p className="mt-15 text-xs uppercase tracking-wider text-white font-bold italic">
                United Voices, Shaping Futures
              </p>
              <p className=" text-xs tracking-wider text-white/80">
                Tungo sa Makamasang Lipunan
              </p>
            </div>
          </div>
        </div>

        {/* Right panel: form card */}
        <div className="flex items-center justify-center p-8">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <div className="text-center">
              <img
                src="/images/SafeSpace_logo.png"
                alt="SafeSpace"
                className="h-12 w-auto mx-auto mb-4 object-contain"
              />
              <h1 className="text-2xl font-bold text-gray-800">
                Create account
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Use your PUP webmail to set up your account.
              </p>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-gray-600">
                Full Name<span className="ml-0.5 text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-600"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-gray-600">
                Webmail<span className="ml-0.5 text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@iskolarngbayan.pup.edu.ph"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-pink-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-600">
                  Student Number<span className="ml-0.5 text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="studentNumber"
                  placeholder="2XXX-XXXXX-XX-X"
                  value={form.studentNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600">
                  Academic Organization
                  <span className="ml-0.5 text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="organization"
                  placeholder="Academic Organization"
                  value={form.organization}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <div>
              {/* Password */}
              <div>
                <label className="block text-xs font-medium text-gray-600">
                  Password<span className="ml-0.5 text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mt-4">
                <label className="block text-xs font-medium text-gray-600">
                  Confirm Password<span className="ml-0.5 text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword ?? ""}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {form.confirmPassword &&
                  form.password &&
                  form.confirmPassword !== form.password && (
                    <p className="mt-2 text-xs text-red-600">
                      Passwords do not match.
                    </p>
                  )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-indigo-700 shadow-sm hover:opacity-95 transition"
            >
              Sign up
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-pink-600 hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
