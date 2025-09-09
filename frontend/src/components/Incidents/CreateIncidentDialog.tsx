import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { CreateIncidentForm } from './CreateIncidentForm'
import type { ReactNode } from 'react'

type CreateIncidentModalProps = {
  trigger: ReactNode
}

export function CreateIncidentDialog({ trigger }: CreateIncidentModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-xl font-bold'>
            Create new incident
          </DialogTitle>
        </DialogHeader>

        <CreateIncidentForm />
      </DialogContent>
    </Dialog>
  )
}
