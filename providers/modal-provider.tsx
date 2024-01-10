"use client";
import PreviewModal from "@/components/modals/PreviewModal";
import { useEffect, useState } from "react";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  //effect description
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <PreviewModal />
    </>
  );
}
