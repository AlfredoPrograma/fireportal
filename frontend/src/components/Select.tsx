import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { ControllerRenderProps, FieldValues, Path } from 'react-hook-form'
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form'

export type SelectOption = {
  value: string
  label: string
}

type SelectProps<F extends FieldValues, P extends Path<F>> = {
  label: string
  field: ControllerRenderProps<F, P>
  options: readonly SelectOption[]
}

export function Select<F extends FieldValues, P extends Path<F>>({
  field,
  label,
  options
}: SelectProps<F, P>) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>

      <ShadcnSelect
        onValueChange={field.onChange}
        defaultValue={field.value}
      >
        <FormControl>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Select incident type' />
          </SelectTrigger>
        </FormControl>

        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </ShadcnSelect>
      <FormMessage />
    </FormItem>
  )
}
