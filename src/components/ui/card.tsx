import * as React from "react"

import { cn } from "@/lib/utils"

interface CardProps extends React.ComponentProps<"div"> {
  bgColor?: string;
  textColor?: string;
}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonText?: string; 
}
interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
}

function Card({ className, bgColor, textColor, ...props }: CardProps) {
  return (
   
<div
      data-slot="card"
      className={cn("flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)}
      style={{ backgroundColor: bgColor, color: textColor }} 
      {...props}
    />
  )
}

function CardHeader({ className,  ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ title, icon, className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold flex items-center justify-between ", className)}
      {...props}
    >
      {title}
         {icon && <div className="bg-[#F7F4FF]  h-12 w-12 rounded-[12px] flex items-center justify-center">{icon}</div>}
    </div>
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
      
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, buttonText, children, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-6 text-base sm:text-lg md:text-xl text-muted-foreground font-bold leading-7",
        className
      )}
      {...props}
    >
      {children}

      {buttonText && (
        <span className="text-xs sm:text-sm text-muted-foreground border border-[#171C351A] px-2.5 py-1 rounded-[50px] font-normal leading-5 mt-1 inline-block">
          {buttonText}
        </span>
      )}
    </div>
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
