export interface ChanelsResponse {
    total: number;
    channelDetails: ChanelDetails[];
}

export interface ChanelDetails {
    name: string;
    introduce: string;
    picture: Picture;
    genres: Genre[]
}

export interface Picture {
    hcsSlaveAddrs: string[];
    extensionFields: any[];
    backgrounds: string[];
    channelPics: string[];
    channelBlackWhites: string[];
    others: any[]
}

export interface Genre {
    genreID: number;
    genreType: number;
    genreName: string;
}