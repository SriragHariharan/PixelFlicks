export const USER_DETAILS_LS = 'pixelflicksUSERDETAILS'

export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const TMDB_API_OPTIONS = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.REACT_APP_TMDB_AUTH_TOKEN
        }
};

export const TMDB_IMG_CDN = "https://image.tmdb.org/t/p/w500/"