import { Modal, ModalContent, ModalHeader, ModalTitle } from '@janhq/uikit'
import { atom, useAtomValue } from 'jotai'

export type LoadingInfo = {
  title: string
  message: string
}

export const loadingModalVisibilityAtom = atom<LoadingInfo | undefined>(
  undefined
)

const ResettingModal: React.FC = () => {
  const loadingInfo = useAtomValue(loadingModalVisibilityAtom)

  return (
    <Modal open={loadingInfo != null}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{loadingInfo?.title}</ModalTitle>
        </ModalHeader>
        <p className="text-muted-foreground">{loadingInfo?.message}</p>
      </ModalContent>
    </Modal>
  )
}

export default ResettingModal
