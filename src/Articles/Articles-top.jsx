import React from 'react';
import sahteVeri from '../FakeData/Article-top';
import ArticleTop from './ArticleTop';

function ArticlesTop() {

    return (
        <article className='component-item'>
            <div className="styles-module_sliderBase__swkx1 carousel">
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