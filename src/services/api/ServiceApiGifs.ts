import {GiphyData} from "../../interfaces/GiphyData";
import {GifsData} from "../../interfaces/GifData";

export const getGifs = async ( category: string ): Promise<GifsData[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=wYTwv66EMR774GzUb3zqUnzXQnPTr3MR`;
  const response = await fetch( url );
  const { data }: { data: GiphyData[] } = await response.json();
  return data.map( value => {
    return { id: value.id, title: value.title, url: value.images.downsized_medium.url };
  });
}