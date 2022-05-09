import React,{Component} from 'react';
import '../contaner.scss';
import SearchBox from'../SearchBox/SearchBox'
import ShowAuthorBook from "./ShowAuthorBook/ShowAuthorBook";
import AboutAuthor from "./AboutAuthor/AboutAuthor";


export class Home2 extends React.Component{
    render() {
        return (
            <div className="flex-container">
                <div className="search-box ">
                    <SearchBox/>
                </div>
                <div className='showAuthorBook'>
                    <ShowAuthorBook/>
                </div>
                <div className='aboutAuthor'>
                    <AboutAuthor/>
                </div>

            </div>
        );
    }
}
