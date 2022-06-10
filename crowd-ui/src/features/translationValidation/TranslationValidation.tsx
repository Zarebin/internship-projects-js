import React from 'react';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import '../../App.css';
import './translationValidation.scss';

export default function TranslationValidation() {
  return (
    <div className="App Container-translation">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
