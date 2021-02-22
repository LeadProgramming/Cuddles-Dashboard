import { useEffect } from 'react';
const useFilesToUrl = (files) => {
    let urls = '';
    //convert files to url
    urls = files?.map((i) => URL.createObjectURL(i));
    return urls;
};

export default useFilesToUrl;
