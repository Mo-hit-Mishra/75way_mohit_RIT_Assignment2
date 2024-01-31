// user.model.ts
export interface User {
  id: number;
  profileImage: string;
  name: string;
  email: string;
  phone: string;
  documentImages: DocumentImage[];
  uploadedFiles?: File[]; // Add this property
}

export interface DocumentImage {
  name: string;
}