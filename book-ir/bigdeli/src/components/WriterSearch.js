import React from "react";
import SearchArea from "./SearchArea";
import oneDay from "../assets/images/oneDay.jpg";
import tameGass from "../assets/images/tameGass.jpg";

function WriterSearch() {
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
        <div class="content-container-4 margin-b-15">زویا پیرزاد / کتاب ها</div>
        <div class="book-instance-container margin-b-10">
          <div class="content-container-4">
            <div class="content-container-3">
              <img class="book-image" src={oneDay} />
            </div>
            <div class="content-container-3">
              <h3 class="default-padding">یک روز مانده به عید پاک</h3>

              <h4 class="default-padding gray-text">1367</h4>
            </div>
          </div>
        </div>
        <div class="book-instance-container">
          <div class="content-container-4">
            <div class="content-container-3">
              <img class="book-image" src={tameGass} />
            </div>
            <div class="content-container-3">
              <h3 class="default-padding text-overflow-3dots">
                طعم گس خرمالو/ مجموعه سه کتاب به نام های
              </h3>

              <h4 class="default-padding gray-text">1360</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="result-instance">
        <div class="content-container-3">
          <h3> کتابراه</h3>
          <a href="#" class="gray-text">
            ketabrah.com
          </a>
          <div class="line"></div>
          <p class="description ">
            کتاب صوتی چراغ‌ها را من خاموش می‌کنم یکی از پرفروش‌ترین و مطرح‌ترین
            آثار ادبیات داستانی ایران، زویا پیرزاد را به ستاره‌ای در ادبیات
            دهه‌ی هشتاد تبدیل کرد و جایزه ادبی گلشیری را برایش به همراه آورد.
            این رمان به زندگی روزمره‌ی یک زن متأهل ارمنی می‌پردازد که عاشق
            همسایه‌ی مجرد خود می‌شود و این موضوع او را دچار درگیری‌های ذهنی
            بسیاری می‌کند. درباره‌ی کتاب صوتی چراغ‌ها را من خاموش می‌کنم: داستان
            این
          </p>
        </div>
      </div>
    </div>
  );
}

export default WriterSearch;
