import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super();
        this.state ={
            articles: [],
            loading: false,
            page:1
        }

    }
    async componentDidMount(){
      
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dac49715c6b24e0ab1fe9c7f953ae97a";
        this.setState({Loading: true });
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log (parsedData);
        this.setState({articles: parsedData.articles,
            Loading: false
        })
    }
    handleNextclick=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dac49715c6b24e0ab1fe9c7f953ae97a&page=${this.state.page+1}`;
        this.setState({Loading: true });
        let data= await fetch(url);
        let parsedData = await data.json()
        this.setState({page: this.state.page+1,
                         articles: parsedData.articles,
                         Loading: false
        })
    }
    handlePrevclick= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dac49715c6b24e0ab1fe9c7f953ae97a&page=${this.state.page-1}`;
        this.setState({Loading: true})
        let data= await fetch(url);
        let parsedData = await data.json()
        console.log (parsedData);
        this.setState({page: this.state.page-1,
            articles: parsedData.articles,
            Loading: false
        })
    }
  render() {
    return (
      <div className='container my-3'>
           <h1>Top Headlines</h1>
           {this.state.Loading && <Spinner/>}
          
           <div className="row">
               {!this.state.Loading && this.state.articles.map((element )=>{
                   return <div className="col-md-3" key={element.url}>
                    <NewsItem  title={element.title?element.title.slice(0, 45):" "} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>

               })}
               <div className="container d-flex justify-content-center">
               <button type="button" class="btn btn-dark my-3 mx-3 " onClick={this.handlePrevclick}>Previous</button>
               <button type="button" class="btn btn-dark my-3 mx-3"  onClick={this.handleNextclick}>Next</button>
               </div>
               
               
              
           </div>
          

      </div>
    )
  }
}

export default News