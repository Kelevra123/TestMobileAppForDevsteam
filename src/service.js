import React, {Component} from 'react';

export default class ImgService extends Component {
    _myKey = '&client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
    _base = `https://api.unsplash.com/photos?page=`;

    GetResource = async (url) => {
        const res = await fetch(`${this._base}${url}${this._myKey}`, {

        })
    
        if (!res.ok) {
        throw Error(`Could not fetch ${url}, status: ${res.status}`);    
    }
    
    return await res.json();
    }

    getImagesByPageNum = async (pageNum) => {
        const res = await this.GetResource(pageNum);
        return res.map(this._transformItem);
    }


    _transformItem = (item) => {
        return {
            title: item.alt_description,
            small: item.urls.thumb,
            full: item.urls.small,
            name: item.user.username,
            id: item.id
        }
    }
}