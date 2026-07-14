"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { setupSchema, SetupSchema } from "@/app/schemas/setup-schema";
import { createSetup } from "@/app/actions/auth/setup";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SetupForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SetupSchema>({
		resolver: zodResolver(setupSchema),
	});

	async function onSubmit(data: SetupSchema) {
  const formData = new FormData();

  formData.append("schoolName", data.schoolName);
  formData.append("schoolCode", data.schoolCode);
  formData.append("adminName", data.adminName);
  formData.append("username", data.username);
  formData.append("password", data.password);
  formData.append("confirmPassword", data.confirmPassword);

  await createSetup(formData);
}

	return (
		<Card className="w-full max-w-lg shadow-xl">
			<CardHeader>
				<CardTitle className="text-3xl font-bold">Welcome 👋</CardTitle>

				<p className="text-muted-foreground">Configure your school</p>
			</CardHeader>

			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
					<div>
						<Input placeholder="School Name" {...register("schoolName")} />
						<p className="text-sm text-red-500">{errors.schoolName?.message}</p>
					</div>

					<div>
						<Input placeholder="School Code" {...register("schoolCode")} />
						<p className="text-sm text-red-500">{errors.schoolCode?.message}</p>
					</div>

					<div>
						<Input placeholder="Admin Name" {...register("adminName")} />
						<p className="text-sm text-red-500">{errors.adminName?.message}</p>
					</div>

					<div>
						<Input placeholder="Username" {...register("username")} />
						<p className="text-sm text-red-500">{errors.username?.message}</p>
					</div>

					<div>
						<Input
							type="password"
							placeholder="Password"
							{...register("password")}
						/>
						<p className="text-sm text-red-500">{errors.password?.message}</p>
					</div>

					<div>
						<Input
							type="password"
							placeholder="Confirm Password"
							{...register("confirmPassword")}
						/>
						<p className="text-sm text-red-500">
							{errors.confirmPassword?.message}
						</p>
					</div>

					<Button type="submit" className="w-full" disabled={isSubmitting}>
						{isSubmitting ? "Creating..." : "Create School"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
