import Loader from "@/components/Loader";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

type DeleteModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
};

const DeleteModal = (props: DeleteModalProps) => {
    return (
        <Dialog
            open={props.isOpen}
            onOpenChange={() => {
                props.onClose();
            }}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Are you sure you want to delete this item ?
                    </DialogTitle>
                </DialogHeader>
                <div className="flex justify-end gap-x-4 mt-2">
                    <button
                        className="bg-[#F2F2F2] text-[#000000] hover:bg-[#E5E5E5] hover:text-[#000000] rounded-md w-20 h-8 z-[5]"
                        onClick={() => {
                            props.onClose();
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-[#F2F2F2] text-[#000000] hover:bg-[#E5E5E5] hover:text-[#000000] rounded-md w-20 h-8 z-[5]"
                        onClick={() => {
                            props.onDelete();
                        }}
                    >
                        Delete
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteModal;
