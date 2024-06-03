import { useMemo, useState } from "react";
import { AboutImages } from "../../Data/Data";
import { renderImages } from "../../utils/utils";
import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, IconButton } from "@mui/material";

const ImageSection = () => {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const memorizedImages = useMemo(() => {
    return renderImages(AboutImages, handleOpen, setPath);
  }, [handleOpen, setPath]);
  return (
    <>
      <div className="flex flex-col justify-center items-stretch md:flex-row px-2 mt-10 gap-5">
        {memorizedImages}
      </div>
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            zIndex: 9999,
            borderRadius: "1rem",
          },
        }}
        maxWidth="md"
        open={open}
        onClose={handleClose}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <Close />
        </IconButton>

        <DialogContent sx={{ padding: 0 }} className="rounded-xl">
          <img
            alt="image"
            className="h-[48rem] w-full rounded-sm object-contain"
            src={path}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageSection;
