
import './News.css'
import Image from './Image'
import React, { Component } from 'react'
import news from './news.jpg'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {


    constructor(props) {

        super(props);
        this.state = {
            artical: [],
            loading: false,
            page: 1,
            totalresult: 0,
            category: this.props.category,
            pagesize: 1


        }




    }
    fetchMoreData = async () => {


        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=5b07b40ae9204fb19664d205ad70de7c&page=${this.state.page}&pagesize=${this.state.pagesize}&category=${this.state.category}&language=en`
        let y = await fetch(url);


        let art = await y.json()
        this.setState({
            artical: this.state.artical.concat(art.articles),
            page:this.state.page
        })
       
        console.log(this.state.pagesize * this.state.page)
    };





    async componentDidMount() {
       let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=5b07b40ae9204fb19664d205ad70de7c&page=${this.state.page}&pagesize=${this.state.pagesize}&category=${this.state.category}&language=en`
        let y = await fetch(url);


        let art = await y.json()
        this.setState({
            artical: art.articles,
            totalresult: art.totalResults,
        page:this.state.page+1
            
        })
        console.log(art.totalResults)






    }

    render() {






        return (

            <>
              
                <center>





                    <h1>News Times-{(this.state.category === "general") ? "Top Headlines" : this.state.category}</h1>
                    <InfiniteScroll
                        dataLength={20}
                        next={this.fetchMoreData}
                        hasMore={((this.state.pagesize * this.state.page <= this.state.totalresult))}
                        loader={((this.state.pagesize * this.state.page <= this.state.totalresult )) ? <Image /> : ""}
                    >
                        <div id="main">


                            {(this.state.artical === null) ? "" : this.state.artical.map((e) => {

                                return (<div id="news" key={e.description}>
                                   
                                    <center>
                                    <div id="tag">
                                        {e.source.name
                                        }</div>
                                         <div id="dib">

                                        <img src={
                                            (e.urlToImage == null) ? news : e.urlToImage
                                        } alt="news" />
 
                                         </div>
                                        <h4>{e.title
                                        }<div id="new">{((new Date(e.publishedAt).getDate()===new Date().getDate())&&(new Date(e.publishedAt).getHours()===new Date().getHours()))?"new":""}</div></h4>
                                        <p>{e.description}
                                        </p>
                                       
                                        
                                        
                                        <div id="span">
                                            <div>Author:{(e.author===null)?"Unknown":e.author}</div>
                                            {new Date(e.publishedAt).toUTCString()}
                                        </div>
                                       


                                    </center>
                                    <a href={e.url}>Read more</a>
                                    <button>Save</button>

                                </div>)
                            })}

                        </div>
                    </InfiniteScroll>


                </center>
            </>
        )
    }
}
