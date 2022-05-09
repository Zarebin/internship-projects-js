import React,{Component} from 'react';
import '../../components/contaner.scss';
import ShowContent from './ShowContent/ShowContent';
import Feedback from './Feedback/Feedback';
import RelatedSearch from './RelatedSearch/RelatedSearch';
import SearchBox from '../SearchBox/SearchBox'


export class Home1 extends React.Component{
    render() {
        return (
            <div className="flex-container">
                <div className="search-box ">
                    <SearchBox/>
                </div>

                <div className="main-home">
                    <ShowContent/>
                    <hr className="line"/>
                    <Feedback/>
                    <hr className="line"/>
                    <RelatedSearch/>
                </div>

            </div>
        );
    }
}
