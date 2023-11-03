"use client";

import { Id } from "@/convex/_generated/dataModel";
import React from "react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPreviewPage = () => {
  return <div>DocumentIdPreviewPage</div>;
};

export default DocumentIdPreviewPage;
