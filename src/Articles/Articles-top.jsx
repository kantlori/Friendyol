import React from 'react';
import sahteVeri from '../FakeData/Article-top';
import ArticleTop from './ArticleTop';
import "./Articles-top.css"

function ArticlesTop() {

    return (
        <article className='component-item'>
            <div className="styles-module_sliderBase__swkx1">
                <ul>
                    {sahteVeri.map((item, index) => (
                        <ArticleTop key={index} item={item} />
                    ))}
                </ul>
            </div>
        </article>
    )

}

export default ArticlesTop