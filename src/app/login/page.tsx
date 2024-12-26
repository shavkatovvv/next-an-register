"use client";
// import { loginUser } from "@/service/auth-mutation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const [loading, setLoading] = React.useTransition();
    const { handleSubmit, register, reset } = useForm<{
        email: string;
        password: string;
    }>();
    const router = useRouter();

    const submit = (data: { email: string; password: string }) => {
        setLoading(async () => {
            // await loginUser(data);
            reset();
            router.replace("/");
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Login to Your Account
                </h1>
                <form onSubmit={handleSubmit(submit)} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            {...register("email")}
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            type="email"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <input
                            {...register("password")}
                            id="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            type="password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition duration-300"
                    >
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="text-cyan-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
