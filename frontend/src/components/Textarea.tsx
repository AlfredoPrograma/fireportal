import { Textarea as ShadcnTextarea } from './ui/textarea'
import type { ComponentProps } from 'react'
import {
  type ControllerRenderProps,
  type FieldValues,
  type Path
} from 'react-hook-form'
import { FormControl, FormItem, FormLabel, FormMessage } from './ui/form'

type TextareaProps<F extends FieldValues, P extends Path<F>> = {
  label: string
  field: ControllerRenderProps<F, P>
} & ComponentProps<'textarea'>

export function Textarea<F extends FieldValues, P extends Path<F>>({
  field,
  label,
  ...props
}: TextareaProps<F, P>) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>

      <FormControl>
        <ShadcnTextarea
          className='resize-none'
          {...field}
          {...props}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}
