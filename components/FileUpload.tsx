"use client";

import { UploadDropzone } from "@uploadthing/react";
import { OurFileRouter, ourFileRouter } from "@/app/api/uploadthing/core";

interface fileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: fileUploadProps) => (
  <UploadDropzone<OurFileRouter, any> // Provide the second type argument
    className="bg-slate-50 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
    endpoint={endpoint}
    onClientUploadComplete={(res) => {
      onChange(res?.[0].url);
    }}
    onUploadError={(error: Error) => {}}
    onUploadBegin={(name: string) => {}}
  />
);
