"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { CardContent, CardFooter, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export type Inputs = {
	name: string;
	email: string;
	textarea: string;
};

const ContactForm = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { isSubmitting, errors, dirtyFields, isValid },
	} = useForm<Inputs>({ mode: "all" });

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const response = await fetch(
				"https://formsubmit.co/ajax/elyuli.dev@gmail.com",
				{
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				}
			);

			if (!response.ok) {
				return toast("Error no envio 😢...", {
					description: "Tentar de novo",
				});
			}

			reset();
			return toast("Sucesso 🚀 !!!", {
				description: "Seus dados foram enviados",
			});
		} catch (error: any) {
			return toast(`😢 ${error?.message}`, {
				description: "Tentar de novo",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<CardHeader></CardHeader>
			<CardContent className='flex flex-col gap-4'>
				{/* Full Name */}
				<div>
					<Label htmlFor='name' className='text-sm font-medium leading-6'>
						Nome completo:
					</Label>
					<Input
						id='name'
						type='text'
						autoComplete='on'
						{...register("name", {
							required: "Nome é obrigatorio",
							pattern: /^[a-zA-Z\s\u00C0-\u00FF]{3,}$/,
						})}
						className={errors.name ? "ring-2 ring-red-600" : ""}
					/>
				</div>
				{/* Email */}
				<div>
					<Label htmlFor='email' className='text-sm font-medium leading-6'>
						Email:
					</Label>
					<Input
						id='email'
						type='email'
						autoComplete='on'
						{...register("email", {
							required: "Email é obrigatorio",
							pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
						})}
						className={errors.email ? "ring-2 ring-red-600" : ""}
					/>
				</div>
				{/* Subject */}
				<div>
					<Label htmlFor='textarea' className='text-sm font-medium leading-6'>
						Mensagem:
					</Label>
					<Textarea
						id='textarea'
						autoComplete='on'
						className={`resize-none ${
							errors.textarea ? "ring-2 ring-red-600" : ""
						}`}
						{...register("textarea", {
							required: "Mensagem é obrigatorio",
							pattern: /^(?!\s*$)[\s\S]{1,1000}$/,
						})}
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button disabled={!isValid || !dirtyFields || isSubmitting}>
					{isSubmitting ? (
						<svg
							className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
						>
							<circle
								className='opacity-25'
								cx='12'
								cy='12'
								r='10'
								stroke='currentColor'
								strokeWidth='4'
							></circle>
							<path
								className='opacity-75'
								fill='currentColor'
								d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
							></path>
						</svg>
					) : (
						"Enviar"
					)}
				</Button>
			</CardFooter>
		</form>
	);
};

export default ContactForm;
