import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { FC, Fragment, ReactNode } from 'react';
import { FiX } from 'react-icons/fi';

type ImageProps =
  | {
      image: string;
      alt: string;
    }
  | {
      image?: undefined;
      alt?: undefined;
    };

type ModalProps = ImageProps & {
  open?: boolean;
  onClose: () => void;
  title: ReactNode;
  description: ReactNode;
};

export const Modal: FC<ModalProps> = ({
  title,
  description,
  image,
  alt,
  open = false,
  onClose,
}) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-[sans_serif]"
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="dark:text-zinc-300 text-zinc-700"
                    data-testid="close-modal"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                {image && alt && (
                  <div className="flex justify-center mb-6">
                    <Image src={image} alt={alt} width={150} height={130.58} />
                  </div>
                )}
                <Dialog.Title
                  as="h3"
                  className="text-2xl text-black dark:text-white font-bold text-center leading-6"
                >
                  {title}
                </Dialog.Title>
                <Dialog.Description className="text-sm dark:text-zinc-400 text-zinc-600 text-center mt-3 mb-6">
                  {description}
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
