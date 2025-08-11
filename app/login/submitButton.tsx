"use client"
import React, { ButtonHTMLAttributes } from "react"
import { useFormStatus } from "react-dom"

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { pending: boolean }

export default function SubmitButton(props: SubmitButtonProps) {


    return (
        <button
            {...props}
            className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg ${props.className ?? ""
                }`}
            disabled={props.pending || props.disabled}
        >
            {props.pending ? "submit" : props.children ?? "Submit"}
        </button>
    )
}
