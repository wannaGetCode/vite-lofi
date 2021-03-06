import { useContext, Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { AppContext } from '../../context'
import ShareModal from './ShareModal'
import UpgradeModal from './UpgradeModal'
import SettingModal from './SettingModal'
import ContactModal from './ContactModal'
import TutorialModal from './TutorialModal'
import AboutModal from './AboutModal'
import SessionModal from './SessionModal'
import TaskModal from './TaskModal'
import NotesModal from './NotesModal'
import EndSession from './EndSession'
import HistoryModal from './HistoryModal'
import ProfileModal from './ProfileModal'
import LoginModal from './LoginModal'

function Modal() {
	const { modalType } = useContext(AppContext)

	const modals = {
		share: ShareModal,
		upgrade: UpgradeModal,
		settings: SettingModal,
		contact: ContactModal,
		tutorial: TutorialModal,
		info: AboutModal,
		session: SessionModal,
		tasks: TaskModal,
		notes: NotesModal,
		history: HistoryModal,
		profile: ProfileModal,
		login: LoginModal,
		'end-session': EndSession,
	}

	const Modal = modalType ? modals[modalType] : () => <></>

	return (
		<Transition show={!!modalType} as={Fragment}>
			<Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="min-h-screen w-screen flex justify-center items-center text-white z-40">
					<Modal />
				</div>
			</Transition.Child>
		</Transition>
	)
}
export default Modal
