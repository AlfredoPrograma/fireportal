import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { CreateIncidentForm } from './CreateIncidentForm'

type CreateIncidentModalProps = {
  trigger: React.ReactNode
}

export function CreateIncidentDialog({ trigger }: CreateIncidentModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new incident</DialogTitle>
        </DialogHeader>

        <CreateIncidentForm />
      </DialogContent>
    </Dialog>
  )
}
