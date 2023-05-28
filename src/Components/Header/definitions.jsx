import React, { useEffect, useState } from 'react';
import "./definitions.css";

export const Definitions = ({word, meaning, category,lightMode}) => {
    console.log(meaning[0]?.phonetics[0]?.audio)
  return (
    <div className='meanings'>
        {word ===""?(
        <span className='subTitle'>Search here by type something here</span>
        ):(
            <div>
                 {
            meaning[0] && word && category==='en' && (
                <audio style={{backgroundColor:lightMode?"#fff":"#282c34",color:lightMode? 'black':'white',width:'100%'}} src={meaning[0]?.phonetics[0]?.audio} controls>
                    Your Browser doesn't support audio
                </audio>
            )
        }
            {meaning.map((mean)=> 
              mean.meanings.map((def)=>def.definitions.map((define)=>(
              
              <div className='singleMean' style={{backgroundColor:lightMode?"#fff":"#282c34",color:lightMode? 'black':'white'}}>
                <b>Definition :</b> {define.definition}
                <br/>
                {define?.example && define?.example?.length != 0 && (
                    <span>
                        <b>Example :</b> {define.example}
                    </span>
                )}
                <br/>
                {define?.synonyms?.length != 0 && (
                    <span>
                      <b>Synonyms : </b>{define.synonyms.map((synonym)=>`${synonym},`)}
                    </span>
                )}
                {/* <hr style={{backgroundColor:'black',width:'100%'}}/> */}
              </div>
            
        ))))}</div>
        )
        }
    </div>
  )
}
