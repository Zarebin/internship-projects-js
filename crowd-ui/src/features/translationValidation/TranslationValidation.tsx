import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import '../../App.css';
import './translationValidation.scss';

export default function TranslationValidation() {
  return (
    <div className="Container-translation">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
