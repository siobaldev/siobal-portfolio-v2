"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "@/actions/send-email";
import { getErrorMessage } from "@/lib/get-error-message";
import { cn } from "@/lib/utils";
import { type ContactSchema, contactSchema } from "@/schemas/contact-schema";
import { showCustomToast } from "./custom-toast";

const inputClasses =
  "rounded-md bg-header-bg px-4 py-3 placeholder-muted-foreground placeholder:text-foreground/40 outline-none ring-[1px] ring-border-muted focus:ring-2 focus:ring-border";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({ resolver: zodResolver(contactSchema) });

  const [isPending, startTransition] = useTransition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  const onSubmit = async (data: ContactSchema) => {
    const loadingId = showCustomToast.loading(
      "Sending your message...",
      undefined,
      {
        position: isMobile ? "top-center" : "bottom-right",
      },
    );

    startTransition(async () => {
      try {
        const result = await sendContactEmail(data);

        if (result?.error) {
          showCustomToast.error(getErrorMessage(result.error), undefined, {
            id: loadingId,
            duration: Infinity,
          });
          return;
        }

        showCustomToast.success(
          "Message sent successfully!",
          "I'll get back to you as soon as possible.",
          { id: loadingId, duration: Infinity },
        );

        reset({ name: "", email: "", message: "" });
      } catch (err) {
        console.error(err);
        showCustomToast.error(
          "Something went wrong. Please try again.",
          undefined,
          { id: loadingId, duration: Infinity },
        );
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      <div className="space-y-6 md:flex md:items-center md:gap-x-4 md:space-y-0 lg:block lg:space-y-6">
        <div className="flex flex-col gap-y-2 md:flex-1">
          <label htmlFor="senderName" className="text-foreground">
            Name/Company
          </label>
          <input
            {...register("name")}
            id="senderName"
            type="text"
            placeholder="Minard Siobal"
            className={cn(
              inputClasses,
              errors.name && "ring-2 ring-red-500 focus:ring-red-500",
            )}
            maxLength={500}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-xs tracking-wider">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2 md:flex-1">
          <label htmlFor="senderEmail" className="text-foreground">
            Email
          </label>
          <input
            {...register("email")}
            id="senderEmail"
            type="email"
            placeholder="sblmnrd@gmail.com"
            className={cn(
              inputClasses,
              errors.email && "ring-2 ring-red-500 focus:ring-red-500",
            )}
            maxLength={500}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-xs tracking-wider">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-y-2">
        <label htmlFor="senderMessage" className="text-foreground">
          Message
        </label>
        <textarea
          {...register("message")}
          id="senderMessage"
          rows={4}
          placeholder="Hello, I'd like to request a quote for a custom website design..."
          onInput={(e) => {
            const target = e.currentTarget;
            target.style.height = "auto";
            target.style.height = `${target.scrollHeight}px`;
          }}
          className={cn(
            inputClasses,
            "min-h-32 resize-none overflow-hidden",
            errors.message && "ring-2 ring-red-500 focus:ring-red-500",
          )}
          maxLength={5000}
        />
        {errors.message && (
          <p className="mt-1 text-[10px] text-red-500 tracking-wider">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="group mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-md border border-border-muted bg-header-bg px-4 py-3 text-center font-bold text-xs uppercase tracking-widest shadow-[0_0px_0_0_#FF3B1F] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_3px_0_0_#FF3B1F] active:shadow-[0_2px_0_0_#FFC83D]"
      >
        {isPending ? "SENDING..." : "SEND MESSAGE"}
        <PaperPlaneTiltIcon
          weight="bold"
          className="size-4 fill-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
        />
      </button>
    </form>
  );
}
