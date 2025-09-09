import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormField } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/Input'
import { Select } from '../Select'
import { Button } from '../ui/button'
import { Textarea } from '../Textarea'
import { acceptedImageTypes, imageToBase64, MAX_IMAGE_SIZE } from '@/lib/images'
import { useCreateIncident } from '@/hooks/incidents'

const INCIDENT_TYPES_OPTIONS = [
  { value: 'WILDFIRE', label: 'Wildfire' },
  { value: 'STRUCTURE_FIRE', label: 'Structure Fire' },
  { value: 'OTHER', label: 'Other' }
] as const

const imageSchema = z
  .instanceof(File)
  .refine((file) => acceptedImageTypes.includes(file.type), {
    message: 'Only PNG, JPEG, and JPG files are accepted'
  })
  .refine((file) => file.size <= MAX_IMAGE_SIZE, {
    message: 'Max file size is 5MB'
  })

const createIncidentSchema = z.object({
  title: z.string().nonempty('Title is required'),
  incidentType: z.enum(['WILDFIRE', 'STRUCTURE_FIRE', 'OTHER']),
  description: z.string().optional(),
  location: z.string().optional(),
  image: imageSchema.nullable().optional()
})

type CreateIncidentFormData = z.infer<typeof createIncidentSchema>

export function CreateIncidentForm() {
  const { mutate, isPending } = useCreateIncident()

  const form = useForm<CreateIncidentFormData>({
    defaultValues: {
      title: '',
      incidentType: undefined,
      description: '',
      location: '',
      image: undefined
    },
    resolver: zodResolver(createIncidentSchema)
  })

  const onSubmit = async (data: CreateIncidentFormData) => {
    const image = data.image ? await imageToBase64(data.image) : undefined
    mutate({ ...data, image })
    form.reset()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <Input
              field={field}
              label='Title'
              placeholder='Incident title'
            />
          )}
        />

        <FormField
          control={form.control}
          name='incidentType'
          render={({ field }) => (
            <Select
              field={field}
              label='Incident Type'
              options={INCIDENT_TYPES_OPTIONS}
            />
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <Textarea
              field={field}
              label='Description'
              placeholder='Incident description'
            />
          )}
        />

        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <Input
              field={field}
              label='Location'
              placeholder='Incident location'
            />
          )}
        />

        <FormField
          control={form.control}
          name='image'
          render={({ field }) => {
            return (
              <Input
                value={undefined} // Prevents controlled to uncontrolled warning
                field={field}
                accept={acceptedImageTypes.join(',')}
                label='Image'
                type='file'
                helpText='Max file size is 5MB. Accepted formats: PNG, JPEG, JPG.'
                onChange={(e) => {
                  const file = e.target.files?.[0] || null
                  field.onChange(file)
                }}
              />
            )
          }}
        />

        <Button
          disabled={isPending}
          className='w-full mt-6'
          type='submit'
        >
          Create
        </Button>
      </form>
    </Form>
  )
}
