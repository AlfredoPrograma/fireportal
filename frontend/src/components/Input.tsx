import type { ComponentProps } from 'react'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from '@/components/ui/form'
import { Input as ShadcnInput } from '@/components/ui/input'
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form'

type InputProps<F extends FieldValues, P extends Path<F>> = {
  label: string
  field: ControllerRenderProps<F, P>
  helpText?: string
} & ComponentProps<'input'>

export function Input<S extends FieldValues, F extends Path<S>>({
  label,
  field,
  helpText,
  ...props
}: InputProps<S, F>) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <ShadcnInput
          {...field}
          {...props}
        />
      </FormControl>

      {helpText && <FormDescription>{helpText}</FormDescription>}

      <FormMessage />
    </FormItem>
  )
}
