import React from "react";
import SearchArea from "./SearchArea";
import OtherBooks from "./OtherBooks";
import bookImage from "../assets/images/Littleprince.jpg";
import bookImage1 from "../assets/images/Littleprince1.jpg";

import likeImage from "../assets/images/like.png";
import dislikeImage from "../assets/images/dislike.png";

function MainBookResults() {
  return (
    <div class="container">
      <SearchArea />
      <div class="top-menu-container">
        <a class="active-item" href="#">
          همه
        </a>
        <a class="top-menu-item" href="#">
          تصاویر
        </a>
        <a class="top-menu-item" href="#">
          رسانه
        </a>
        <a class="top-menu-item" href="#">
          آوا
        </a>
        <a class="top-menu-item" href="#">
          بازار
        </a>
        <a class="top-menu-item" href="#">
          سریال
        </a>
      </div>
      <div class="result-instance">
        <div class="content-container-2">
          <div class="content-container-3">
            <div class="content-container-4">
              <div class="content-container-3">
                <img src={bookImage} width="64px" />
              </div>
              <div class="content-container-3">
                <h3 class="default-padding">شازده کوچولو</h3>
                <h3 class="default-padding">از آنتوان دوسنت-اگزوپری</h3>
              </div>
            </div>
            <p class="bookDescription">
              شازده کوچولو اثری خیال انگیز و زیباست که در خلال آن عواطف بشری به
              ساده‌ترین شکل، تجزیه و تحلیل شده است و عناصری که بر اثر غوطه‌ور
              شدن در ...
              <a href="#" className="link">
                شهرکتاب
              </a>
            </p>
            <div class="content-container-4">
              <div class="content-container-3">
                <div>نویسنده</div>
                <div>دسته بندی</div>
              </div>
              <div class="content-container-3">
                <a href="#" class="link link1 ">
                  آنتوان دوسنت-اگزوپری
                </a>
                <a href="#" class="link link1">
                  ادبیات داستانی کوتاه
                </a>
              </div>
            </div>
          </div>
          <div class="line"></div>
          <div class="content-container-5">
            <div class="content-container-5">
              <img src={likeImage} width="30px" />
              <img src={dislikeImage} width="30px" />
            </div>
            <div class="content-container-5">آیا نتایج مورد نظر صحیح بود؟</div>
          </div>
          <div class="line"></div>
          <div class="content-container-4">
            دیگران این موارد را جستجو کرده اند
          </div>
        </div>
        <div class="other-books-container">
          <OtherBooks
            {...{
              image: bookImage1,
              bookName: "شاهین مالت",
              bookWriter: "آنتوان دوسنت اگزوپری",
            }}
          />
          <OtherBooks
            {...{
              image: bookImage1,
              bookName: "آنجا که خانه ام نیست",
              bookWriter: "آنتوان دوسنت اگزوپری",
            }}
          />
          <OtherBooks
            {...{
              image: bookImage1,
              bookName: "دوریت کوچک",
              bookWriter: "آنتوان دوسنت اگزوپری",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MainBookResults;
