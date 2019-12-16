import React, { FC } from "react"

import { Modal } from "../UI"
import Form from "./Form"

interface Props {
  onClose: () => void
}

const CreateProfileModal: FC<Props> = ({ onClose }) => (
  <Modal
    close={onClose}
    title="signup.form.title"
    visible
  >
    <Form />
  </Modal>
)

export default CreateProfileModal
