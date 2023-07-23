import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state ={
            articles: [],
            loading: false
        }

    }
    async componentDidMount(){
      
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dac49715c6b24e0ab1fe9c7f953ae97a";
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log (parsedData);
        this.setState({articles: parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
           <h2>Top Headlines</h2>
           <div className="row">
               {this.state.articles.map((element )=>{
                   return <div className="col-md-3" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0, 45):" "} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>

               })}
               
              
           </div>
          

      </div>
    )
  }
}

export default News