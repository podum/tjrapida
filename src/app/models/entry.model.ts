// File: src/app/models/entry.model.ts

export interface Entry {
    type: string;            // Specifies the type of entry
    created: string;         // Creation timestamp or date
    modified?: string;       // Modification timestamp or date (optional)
    keywords: string;
    blurb: string;           // Short description or summary
    slug: string;            // URL-friendly identifier
    thumbnail: string;       // URL or data URI of the thumbnail image
    content: any;
}
  