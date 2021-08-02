export interface GiphyData {
  analytics: GiphyDataAnalytics;
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: GiphyImages;
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
}


interface GiphyDataAnalytics {
  onclick: GiphyDataAnalyticsEvents;
  onload: GiphyDataAnalyticsEvents;
  onsent: GiphyDataAnalyticsEvents;
}

interface GiphyDataAnalyticsEvents {
  url: string;
}

interface GiphyImages {
  "480w_still": GiphyImagesData;
  downsized: GiphyImagesData;
  downsized_large: GiphyImagesData;
  downsized_medium: GiphyImagesData;
  downsized_small: GiphyImagesData;
  downsized_still: GiphyImagesData;
  fixed_height: GiphyImagesData;
  fixed_height_downsampled: GiphyImagesData;
  fixed_height_small: GiphyImagesData;
  fixed_height_small_still: GiphyImagesData;
  fixed_height_still: GiphyImagesData;
  fixed_width: GiphyImagesData;
  fixed_width_downsampled: GiphyImagesData;
  fixed_width_small: GiphyImagesData;
  fixed_width_small_still: GiphyImagesData;
  fixed_width_still: GiphyImagesData;
  looping: GiphyImagesData;
  original: GiphyImagesData;
  original_mp4: GiphyImagesData;
  original_still: GiphyImagesData;
  preview: GiphyImagesData;
  preview_gif: GiphyImagesData;
  preview_webp: GiphyImagesData;
};

interface GiphyImagesData {
  width: string;
  size: string;
  url: string;
  height: string;
}
