"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Logo from "@/components/ui/Logo"
import SubmitButton from "./submitButton"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

type FormData = {
  email: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>()
  const router = useRouter()
  const [loginError, setLoginError] = useState<string | null>(null)
  const [showPassword, setShowPassword] = useState(false)

  async function onSubmit(data: FormData) {
    setLoginError(null)
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/"
    })

    if (res?.error) {
      setLoginError("Email atau password salah")
    } else {
      router.push("/")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-gray-800">
      <Logo className="justify-center -ml-8" />

      <input
        type="email"
        placeholder="Email"
        className={`w-full px-4 py-2 border-2 rounded-lg text-sm ${errors.email ? "border-red-500" : "border-blue-600"
          }`}
        {...register("email", { required: "Email wajib diisi" })}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className={`w-full px-4 py-2 border-2 rounded-lg text-sm ${errors.password ? "border-red-500" : "border-blue-600"
            }`}
          {...register("password", { required: "Password wajib diisi" })}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
          tabIndex={-1}
          aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-3.5-9-7a7.477 7.477 0 012.55-5.6m3.07-1.2A9.958 9.958 0 0112 5c5 0 9 3.5 9 7 0 1.546-.67 2.987-1.793 4.073M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3l18 18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </div>
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      {loginError && <p className="text-red-500 text-sm">{loginError}</p>}

      <SubmitButton disabled={isSubmitting} />
    </form>
  )
}
