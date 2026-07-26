"use client";

import {
  CheckCircleIcon,
  InfoIcon,
  SpinnerIcon,
  WarningOctagonIcon,
  XIcon,
} from "@phosphor-icons/react/ssr";
import { toast } from "sonner";

interface CustomToastProps {
  toastId?: string | number;
  title: string;
  description?: string;
  type: "success" | "error" | "loading";
  showCloseButton?: boolean;
}

const CustomToast = ({
  toastId,
  title,
  description,
  type,
  showCloseButton = true,
}: CustomToastProps) => {
  const icons = {
    success: (
      <CheckCircleIcon
        weight="fill"
        className="size-5 text-(--color-toast-icon) md:size-6"
      />
    ),
    error: (
      <WarningOctagonIcon
        weight="fill"
        className="size-5 text-(--color-toast-icon) md:size-6"
      />
    ),
    loading: (
      <SpinnerIcon className="size-5 animate-spin text-(--color-toast-icon) md:size-6" />
    ),
    info: (
      <InfoIcon
        weight="fill"
        className="size-5 text-(--color-toast-icon) md:size-6"
      />
    ),
  };

  return (
    <div
      data-toast={type}
      className="relative flex w-full select-none items-start gap-x-2.5 rounded-lg border border-(--color-toast-border) bg-background p-4 font-martian shadow-lg"
    >
      <div className="mt-0.5 shrink-0">{icons[type]}</div>

      <div className="min-w-0 flex-1">
        <p className="font-medium text-body text-foreground text-sm">{title}</p>
        {description && (
          <p className="mt-1 text-muted-foreground text-xs">{description}</p>
        )}
      </div>

      {showCloseButton && (
        <button
          type="button"
          onClick={() => toast.dismiss(toastId)}
          className="shrink-0 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Dismiss notification"
        >
          <XIcon aria-hidden className="size-4" />
        </button>
      )}
    </div>
  );
};

type ToastOptions = {
  id?: string | number;
  duration?: number;
  position?:
    | "top-center"
    | "bottom-right"
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "top-left";
};

export const showCustomToast = {
  success: (title: string, description?: string, options?: ToastOptions) => {
    return toast.custom(
      (id) => (
        <CustomToast
          toastId={options?.id ?? id}
          title={title}
          description={description}
          type="success"
        />
      ),
      options,
    );
  },

  error: (title: string, description?: string, options?: ToastOptions) => {
    return toast.custom(
      (id) => (
        <CustomToast
          toastId={options?.id ?? id}
          title={title}
          description={description}
          type="error"
        />
      ),
      options,
    );
  },

  loading: (title: string, description?: string, options?: ToastOptions) => {
    return toast.custom(
      (id) => (
        <CustomToast
          toastId={options?.id ?? id}
          title={title}
          description={description}
          type="loading"
          showCloseButton={false}
        />
      ),
      options,
    );
  },
};
