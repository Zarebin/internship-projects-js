import React,{Component} from 'react';
import './styleShowContent.scss';

const ShowContent = () =>{

    return (
        <div className="container">
            <div className="info">
                  <div className="info__image">
                      <img className="info__img" src="https://shahreketabonline.com/images/ProductImages/9786008099222.jpg" />
                  </div>
                   <div className="info__title">
                       <div className="info__title--name">شازده کوچولو</div>
                       <div className="info__title--author">از آنتوان دو سنت-اگزوپری</div>
                   </div>
            </div>
            <div className="description">

                    شازده کوچولو یا شاهزاده کوچولو داستانی اثر آنتوان دو سنت اگزوپری استکه نخستین بار در سپتامبر سال ۱۹۴۳ در نیویورک منتشر شد. این کتاب به بیش از ۳۰۰ زبان و گویش ...

                <a className="description__link" href="src/components/ShowContent/ShowContent#">شهر کتاب...</a>

            </div>
            <div>
                <div className="subtitle">
                    <div className="subtitle__title">نویسنده</div>
                    <a className="subtitle__value" href="src/components/ShowContent/ShowContent#">آنتوان دو سنت-اگزوپری</a>
                </div>
                <div className="subtitle">
                    <div className="subtitle__title">دسته‌بندی</div>
                    <a className="subtitle__value" href="src/components/ShowContent/ShowContent#">ادبیات داستانی کوتاه</a>
                </div>
            </div>
        </div>)
}

export  default  ShowContent;
