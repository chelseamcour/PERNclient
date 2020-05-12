import React from 'react'; //importing React

const ApiResults = (props) => { //declaring child component function with props results & changePage
  return ( //returns value from function
    <div> {/*opening div tag*/}
      <div> {/*opening div tag*/}
        { props.results.map(result => { {/*for each result array element do the following:*/}
          return ( //returns value from function
            <div key={result._id}> {/*.map requires unique key for each result, using result id for key in this case*/}
            <h2>{result.headline.main}</h2> {/*make headline result an h2 element*/}
            {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''} {/*if multimedia result is greater than 1 then post image using image src and alt text, if not then no image to post*/}
            <p> {/*paragraph tag*/}
              {result.snippet} {/*snippet result to screen*/}
              <br /> {/*break*/}
              {result.keywords.length > 0 ? ' Keywords: ' : ''} {/*if keyword length is greater than 0 then put keyword text on screen*/}
            </p> {/*close p tag*/}
            <ul> {/*bulleted list(unordered)*/}
              {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)} {/*add each result array element as list item element*/}
            </ul> {/*close bulleted list(unordered)*/}
            <a href={result.web_url}><button>Read It</button></a> {/*button that links to article*/}
          </div>
          )
        })}
          <div>
            <button onClick={(e) => props.changePage(e, 'down')}>Previous 10</button> {/*button for changing page that uses changePage function passed from parent component*/}
            <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button> {/*button for changing page that uses changePage function passed from parent component*/}
          </div>
      </div>
    </div>
  );
};

export default ApiResults; //export child component