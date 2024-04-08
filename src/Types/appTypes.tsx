export enum AppUrls {
  IMAGES = `/images`,
  FAVORITES = `/favorites`,
}

export interface ImagesDataStructure {
  alt_description: string;
  likes: number;
  links: ImagesLinks;
  urls: UrlsStructure;
}

export interface ImagesLinks {
  download: string;
}

export interface UrlsStructure {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}
