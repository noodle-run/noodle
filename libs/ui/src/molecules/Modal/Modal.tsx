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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-zinc-100 p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-900">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-zinc-700 dark:text-zinc-300"
                    data-testid="close-modal"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                {image && alt && (
                  <div className="mb-6 flex justify-center">
                    <Image src={image} alt={alt} width={150} height={130.58} />
                  </div>
                )}
                <Dialog.Title
                  as="h3"
                  className="text-center text-2xl font-bold leading-6 text-black dark:text-white"
                >
                  {title}
                </Dialog.Title>
                <Dialog.Description className="mt-3 mb-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
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
