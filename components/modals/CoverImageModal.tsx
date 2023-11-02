"use client";

import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

const CoverImageModal = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const coverImage = useCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        Upload image here
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
